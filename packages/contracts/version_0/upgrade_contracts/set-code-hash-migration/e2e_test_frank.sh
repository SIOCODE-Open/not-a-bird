#!/bin/bash

echo -e "\033[1;34m **Restart substrate-contracts-node** \033[0m"
PID=$(ps aux | grep substrate-contracts-node | grep -v grep | awk '{print $2}')
kill -9 $PID
sleep 2
substrate-contracts-node --dev -l 0 &
sleep 2

echo -e "\033[1;34m **Build incrementer** \033[0m"
cd ~/not-a-bird/packages/contracts/upgrade_contracts/set-code-hash-migration/ && cargo contract build 2>&1 | tail -n 6

echo -e "\033[1;34m **Instantiate incrementer** \033[0m"
cd ~/not-a-bird/packages/contracts/upgrade_contracts/set-code-hash-migration/ && cargo contract instantiate --suri //Alice --skip-confirm --execute >~/not-a-bird/packages/contracts/tmp.log
echo "Incrementer" >~/not-a-bird/packages/contracts/tmp2.log
cat ~/not-a-bird/packages/contracts/tmp.log | grep "\<Code\ hash\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/contracts/tmp2.log
cat ~/not-a-bird/packages/contracts/tmp.log | grep "\<Contract\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/contracts/tmp2.log
cat ~/not-a-bird/packages/contracts/tmp2.log
CONTRACT_INCREMENTER=$(cat ~/not-a-bird/packages/contracts/tmp2.log | grep "\<Contract\>" | awk '{print $2}' | awk 'NR==1')

echo -e "\033[1;34m **Call inc on incrementer** \033[0m"
cd ~/not-a-bird/packages/contracts/upgrade_contracts/set-code-hash-migration/ && cargo contract call --contract $CONTRACT_INCREMENTER --message inc --suri //Alice --skip-confirm --execute 2>&1 | head -n 2

echo -e "\033[1;34m **Build updated-incrementer** \033[0m"
cd ~/not-a-bird/packages/contracts/upgrade_contracts/set-code-hash-migration/updated-incrementer/ && cargo contract build 2>&1 | tail -n 6
echo -e "\033[1;34m **Upload updated-incrementer** \033[0m"
cd ~/not-a-bird/packages/contracts/upgrade_contracts/set-code-hash-migration/updated-incrementer/ && cargo contract upload --suri //Alice --skip-confirm --execute >~/not-a-bird/packages/contracts/tmp.log
echo "updated-incrementer" >>~/not-a-bird/packages/contracts/tmp2.log
cat ~/not-a-bird/packages/contracts/tmp.log | grep "\<Code\ hash\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/contracts/tmp2.log
CODEHASH_UPDATED_INCREMENTER=$(cat ~/not-a-bird/packages/contracts/tmp2.log | grep "\<Code\ hash\>" | awk '{print $3}' | awk 'NR==1')

echo -e "\033[1;34m **Build migration** \033[0m"
cd ~/not-a-bird/packages/contracts/upgrade_contracts/set-code-hash-migration/migration/ && cargo contract build 2>&1 | tail -n 6
echo -e "\033[1;34m **Upload migration** \033[0m"
cd ~/not-a-bird/packages/contracts/upgrade_contracts/set-code-hash-migration/migration/ && cargo contract upload --suri //Alice --skip-confirm --execute >~/not-a-bird/packages/contracts/tmp.log
echo "migration" >>~/not-a-bird/packages/contracts/tmp2.log
cat ~/not-a-bird/packages/contracts/tmp.log | grep "\<Code\ hash\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/contracts/tmp2.log
CODEHASH_MIGRATION=$(cat ~/not-a-bird/packages/contracts/tmp2.log | grep "\<Code\ hash\>" | awk '{print $3}' | awk 'NR==1')

echo -e "\033[1;34m **Set CodeHash in Incrementer** \033[0m"
cd ~/not-a-bird/packages/contracts/upgrade_contracts/set-code-hash-migration/ && cargo contract call --contract $CONTRACT_INCREMENTER --message set_code --suri //Alice --skip-confirm --execute --args $CODEHASH_MIGRATION
