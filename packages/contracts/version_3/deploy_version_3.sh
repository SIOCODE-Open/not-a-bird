#!/bin/bash

echo "Please select an option:"
echo "1. Spin up chain in background and not see logs"
echo "2. Spind up chain by yourself and see logs"
read choice

if [ $choice -eq 1 ]; then
	echo "This is one"

	echo -e "\033[1;34m **Restart substrate-contracts-node** \033[0m"
	PID=$(ps aux | grep substrate-contracts-node | grep -v grep | awk '{print $2}')
	kill -9 $PID
	sleep 2
	substrate-contracts-node --dev -l 0 &
	sleep 2

	echo -e "\033[1;34m **Build element_a** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_a/ && cargo contract build 2>&1 | tail -n 6
	echo -e "\033[1;34m **Upload element_a** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_a/ && cargo contract upload --suri //Alice --skip-confirm --execute >~/not-a-bird/packages/contracts/version_3/tmp.log
	echo "Element A" >~/not-a-bird/packages/contracts/version_3/tmp2.log
	cat ~/not-a-bird/packages/contracts/version_3/tmp.log | grep "\<Code\ hash\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/contracts/version_3/tmp2.log
	ELEMENT_A_CODE_HASH=$(cat ~/not-a-bird/packages/contracts/version_3/tmp2.log | grep "\<Code\ hash\>" | awk '{print $3}')
	echo "$ELEMENT_A_CODE_HASH"

	sleep 2

	echo -e "\033[1;34m **Build element_store** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract build 2>&1 | tail -n 6
	echo -e "\033[1;34m **Instantiate element_store** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract instantiate --suri //Alice --skip-confirm --execute --args 0 $ELEMENT_A_CODE_HASH >~/not-a-bird/packages/contracts/version_3/tmp.log
	echo "Element Store" >>~/not-a-bird/packages/contracts/version_3/tmp2.log
	cat ~/not-a-bird/packages/contracts/version_3/tmp.log | grep "\<Code\ hash\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/contracts/version_3/tmp2.log
	cat ~/not-a-bird/packages/contracts/version_3/tmp.log | grep "\<Contract\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/contracts/version_3/tmp2.log
	ELEMENTSTORE_CONTRACT=$(cat ~/not-a-bird/packages/contracts/version_3/tmp2.log | grep "\<Contract\>" | awk '{print $2}')
	echo "$ELEMENTSTORE_CONTRACT"

	sleep 2

	# echo -e "\033[1;34m **Call inc(1)** \033[0m"
	# cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message inc_delegate --suri //Alice --skip-confirm --execute | head -n 3
	# echo -e "\033[1;34m **Get counter** \033[0m"
	# cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message get_counter --suri //Alice --skip-confirm | head -n 1

	echo -e "\033[1;34m **Call mint(1)** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message mint_delegate --suri //Alice --skip-confirm --execute | head -n 3
	echo -e "\033[1;34m **Get value of Alice** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message get_value_mint --args 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY --suri //Alice --skip-confirm | head -n 1
	echo -e "\033[1;34m **Call mint(1)** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message mint_delegate --suri //Alice --skip-confirm --execute | head -n 3
	echo -e "\033[1;34m **Get value of Alice** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message get_value_mint --args 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY --suri //Alice --skip-confirm | head -n 1
	# echo -e "\033[1;34m **Mint value** \033[0m"
	# cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message get_counter --suri //Alice --skip-confirm | head -n 1

	sleep 2

	echo -e "\033[1;34m **Build element_b** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_b/ && cargo contract build 2>&1 | tail -n 6
	echo -e "\033[1;34m **Upload element_b** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_b/ && cargo contract upload --suri //Alice --skip-confirm --execute >~/not-a-bird/packages/contracts/version_3/tmp.log
	echo "Element A" >~/not-a-bird/packages/contracts/version_3/tmp2.log
	cat ~/not-a-bird/packages/contracts/version_3/tmp.log | grep "\<Code\ hash\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/contracts/version_3/tmp2.log
	ELEMENT_B_CODE_HASH=$(cat ~/not-a-bird/packages/contracts/version_3/tmp2.log | grep "\<Code\ hash\>" | awk '{print $3}')

	echo -e "\033[1;34m **Call update_delegate_to(elementB)** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message update_delegate_to --args $ELEMENT_B_CODE_HASH --suri //Alice --skip-confirm --execute
# echo -e "\033[1;34m **Call inc(10)** \033[0m"
# cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message inc_delegate --suri //Alice --skip-confirm --execute | head -n 3
# echo -e "\033[1;34m **Get counter** \033[0m"
# cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message get_counter --suri //Alice --skip-confirm | head -n 1

elif [ $choice -eq 2 ]; then
	echo "This is two"
	# echo -e "\033[1;34m **Restart substrate-contracts-node** \033[0m"
	# PID=$(ps aux | grep substrate-contracts-node | grep -v grep | awk '{print $2}')
	# kill -9 $PID
	# sleep 2
	# substrate-contracts-node --dev -l 0 &
	# sleep 2

	echo -e "\033[1;34m **Build element_a** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_a/ && cargo contract build 2>&1 | tail -n 6
	echo -e "\033[1;34m **Upload element_a** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_a/ && cargo contract upload --suri //Alice --skip-confirm --execute >~/not-a-bird/packages/contracts/version_3/tmp.log
	echo "Element A" >~/not-a-bird/packages/contracts/version_3/tmp2.log
	cat ~/not-a-bird/packages/contracts/version_3/tmp.log | grep "\<Code\ hash\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/contracts/version_3/tmp2.log
	ELEMENT_A_CODE_HASH=$(cat ~/not-a-bird/packages/contracts/version_3/tmp2.log | grep "\<Code\ hash\>" | awk '{print $3}')
	echo "$ELEMENT_A_CODE_HASH"

	sleep 2

	echo -e "\033[1;34m **Build element_store** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract build 2>&1 | tail -n 6
	echo -e "\033[1;34m **Instantiate element_store** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract instantiate --suri //Alice --skip-confirm --execute --args 0 $ELEMENT_A_CODE_HASH >~/not-a-bird/packages/contracts/version_3/tmp.log
	echo "Element Store" >>~/not-a-bird/packages/contracts/version_3/tmp2.log
	cat ~/not-a-bird/packages/contracts/version_3/tmp.log | grep "\<Code\ hash\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/contracts/version_3/tmp2.log
	cat ~/not-a-bird/packages/contracts/version_3/tmp.log | grep "\<Contract\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/contracts/version_3/tmp2.log
	ELEMENTSTORE_CONTRACT=$(cat ~/not-a-bird/packages/contracts/version_3/tmp2.log | grep "\<Contract\>" | awk '{print $2}')
	echo "$ELEMENTSTORE_CONTRACT"

	sleep 2

	# echo -e "\033[1;34m **Call inc(1)** \033[0m"
	# cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message inc_delegate --suri //Alice --skip-confirm --execute | head -n 3
	# echo -e "\033[1;34m **Get counter** \033[0m"
	# cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message get_counter --suri //Alice --skip-confirm | head -n 1

	echo -e "\033[1;34m **Call mint(1)** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message mint_delegate --suri //Alice --skip-confirm --execute | head -n 3
	echo -e "\033[1;34m **Get value of Alice** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message get_value_mint --args 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY --suri //Alice --skip-confirm | head -n 1
	echo -e "\033[1;34m **Call mint(1)** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message mint_delegate --suri //Alice --skip-confirm --execute | head -n 3
	echo -e "\033[1;34m **Get value of Alice** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message get_value_mint --args 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY --suri //Alice --skip-confirm | head -n 1
	# echo -e "\033[1;34m **Mint value** \033[0m"
	# cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message get_counter --suri //Alice --skip-confirm | head -n 1

	sleep 2

	echo -e "\033[1;34m **Build element_b** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_b/ && cargo contract build 2>&1 | tail -n 6
	echo -e "\033[1;34m **Upload element_b** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_b/ && cargo contract upload --suri //Alice --skip-confirm --execute >~/not-a-bird/packages/contracts/version_3/tmp.log
	echo "Element A" >~/not-a-bird/packages/contracts/version_3/tmp2.log
	cat ~/not-a-bird/packages/contracts/version_3/tmp.log | grep "\<Code\ hash\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/contracts/version_3/tmp2.log
	ELEMENT_B_CODE_HASH=$(cat ~/not-a-bird/packages/contracts/version_3/tmp2.log | grep "\<Code\ hash\>" | awk '{print $3}')

	echo -e "\033[1;34m **Call update_delegate_to(elementB)** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message update_delegate_to --args $ELEMENT_B_CODE_HASH --suri //Alice --skip-confirm --execute
# echo -e "\033[1;34m **Call inc(10)** \033[0m"
# cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message inc_delegate --suri //Alice --skip-confirm --execute | head -n 3
# echo -e "\033[1;34m **Get counter** \033[0m"
# cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message get_counter --suri //Alice --skip-confirm | head -n 1
else
	echo "Invalid choice. Please select 1 or 2."
fi
