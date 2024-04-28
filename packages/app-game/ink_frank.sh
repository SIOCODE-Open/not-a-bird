#!/bin/bash

echo -e "\033[1;34m **Restart substrate-contracts-node** \033[0m"
PID=$(ps aux | grep substrate-contracts-node | grep -v grep | awk '{print $2}')
kill -9 $PID
substrate-contracts-node --dev -l 0 &

echo -e "\033[1;34m **Build metal** \033[0m"
cd ~/not-a-bird/packages/contracts/metal/ && cargo contract build 2>&1 | tail -n 6
echo -e "\033[1;34m **Build stone** \033[0m"
cd ~/not-a-bird/packages/contracts/stone/ && cargo contract build 2>&1 | tail -n 6
echo -e "\033[1;34m **Build gem** \033[0m"
cd ~/not-a-bird/packages/contracts/gem/ && cargo contract build 2>&1 | tail -n 6
echo -e "\033[1;34m **Build gem_creator** \033[0m"
cd ~/not-a-bird/packages/contracts/ && cargo contract build 2>&1 | tail -n 6

echo -e "\033[1;34m **Copying abis to ./public** \033[0m"
cd ~/not-a-bird/packages/app-game/
rm ~/not-a-bird/packages/app-game/public/*.json
cp ~/not-a-bird/packages/contracts/target/ink/gem_creator.json ~/not-a-bird/packages/app-game/public/
cp ~/not-a-bird/packages/contracts/metal/target/ink/rock.json ~/not-a-bird/packages/app-game/public/
cp ~/not-a-bird/packages/contracts/stone/target/ink/stone.json ~/not-a-bird/packages/app-game/public/
cp ~/not-a-bird/packages/contracts/gem/target/ink/gem.json ~/not-a-bird/packages/app-game/public/

echo -e "\033[1;34m **Deploy rock contract** \033[0m"
cd ~/not-a-bird/packages/contracts/metal/ && cargo contract instantiate --suri //Alice --skip-confirm --execute >~/not-a-bird/packages/app-game/tmp.log
echo "Metal" >~/not-a-bird/packages/app-game/tmp2.log
cat ~/not-a-bird/packages/app-game/tmp.log | grep "\<Code\ hash\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/app-game/tmp2.log
cat ~/not-a-bird/packages/app-game/tmp.log | grep "\<Contract\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/app-game/tmp2.log
metal_code_hash=$(cat ~/not-a-bird/packages/app-game/tmp2.log | grep "\<Code\ hash\>" | awk '{print $3}' | awk 'NR==1')

echo -e "\033[1;34m **Deploy stone contract** \033[0m"
cd ~/not-a-bird/packages/contracts/stone/ && cargo contract instantiate --suri //Alice --skip-confirm --execute >~/not-a-bird/packages/app-game/tmp.log
echo "Stone" >>~/not-a-bird/packages/app-game/tmp2.log
cat ~/not-a-bird/packages/app-game/tmp.log | grep "\<Code\ hash\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/app-game/tmp2.log
cat ~/not-a-bird/packages/app-game/tmp.log | grep "\<Contract\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/app-game/tmp2.log
stone_code_hash=$(cat ~/not-a-bird/packages/app-game/tmp2.log | grep "\<Code\ hash\>" | awk '{print $3}' | awk 'NR==2')

echo -e "\033[1;34m **Deploy gem contract** \033[0m"
cd ~/not-a-bird/packages/contracts/gem/ && cargo contract instantiate --suri //Alice --skip-confirm --execute >~/not-a-bird/packages/app-game/tmp.log
echo "Gem" >>~/not-a-bird/packages/app-game/tmp2.log
cat ~/not-a-bird/packages/app-game/tmp.log | grep "\<Code\ hash\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/app-game/tmp2.log
cat ~/not-a-bird/packages/app-game/tmp.log | grep "\<Contract\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/app-game/tmp2.log
gem_code_hash=$(cat ~/not-a-bird/packages/app-game/tmp2.log | grep "\<Code\ hash\>" | awk '{print $3}' | awk 'NR==3')

echo -e "\033[1;34m **Deploy gem_creator contracts** \033[0m"
cd ~/not-a-bird/packages/contracts/ && cargo contract instantiate --suri //Alice --skip-confirm --execute --args $metal_code_hash $stone_code_hash $gem_code_hash >~/not-a-bird/packages/app-game/tmp.log
echo "Gem Creator" >>~/not-a-bird/packages/app-game/tmp2.log
cat ~/not-a-bird/packages/app-game/tmp.log | grep "\<Code\ hash\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/app-game/tmp2.log
cat ~/not-a-bird/packages/app-game/tmp.log | grep "\<Contract\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/app-game/tmp2.log
gem_creator_code_hash=$(cat ~/not-a-bird/packages/app-game/tmp2.log | grep "\<Code\ hash\>" | awk '{print $3}' | awk 'NR==3')

echo -e "\033[1;34m **Do cleanup** \033[0m"
rm ~/not-a-bird/packages/app-game/tmp.log
mv ~/not-a-bird/packages/app-game/tmp2.log ~/not-a-bird/packages/app-game/contracts_info.log

echo -e "\033[1;34m **cat contracts\_info\.log** \033[0m"
echo -e "-----------------------------------------------"
echo -e "-----------CONTRACTS_INFO.log------------------"
echo -e "-----------------------------------------------"
cat ~/not-a-bird/packages/app-game/contracts_info.log
echo -e "-----------------------------------------------"
