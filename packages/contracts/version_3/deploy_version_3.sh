#!/bin/bash

main() {
	echo -e "\e[31m **Please select an option:** \e[0m"
	echo -e "\e[31m **1. Spin up chain in background and not see logs** \e[0m"
	echo -e "\e[31m **2. Spin up chain by yourself and see debug print's** \e[0m"
	read choice
	if [ $choice -eq 1 ]; then
		spin_up_substrate_node
		process
	elif [ $choice -eq 2 ]; then
		process
	else
		echo "Invalid choice. Please select 1 or 2."
	fi
}

spin_up_substrate_node() {
	echo -e "\033[1;34m **Restart substrate-contracts-node** \033[0m"
	PID=$(ps aux | grep substrate-contracts-node | grep -v grep | awk '{print $2}')
	kill -9 $PID
	sleep 2
	substrate-contracts-node --dev -l 0 &
	sleep 2
}

process() {
	echo -e "\033[1;34m **Build element_a** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_a/ && cargo contract build 2>&1 | tail -n 6
	echo -e "\033[1;34m **Upload element_a** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_a/ && cargo contract upload --suri //Alice --skip-confirm --execute >~/not-a-bird/packages/contracts/version_3/tmp.log
	echo "Element A" >~/not-a-bird/packages/contracts/version_3/contracts_info.log
	cat ~/not-a-bird/packages/contracts/version_3/tmp.log | grep "\<Code\ hash\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/contracts/version_3/contracts_info.log
	ELEMENT_A_CODE_HASH=$(cat ~/not-a-bird/packages/contracts/version_3/contracts_info.log | grep "\<Code\ hash\>" | awk '{print $3}')
	echo "$ELEMENT_A_CODE_HASH"

	echo -e "\033[1;34m **Build element_store** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract build 2>&1 | tail -n 6
	echo -e "\033[1;34m **Instantiate element_store** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract instantiate --suri //Alice --skip-confirm --execute --args 0 $ELEMENT_A_CODE_HASH >~/not-a-bird/packages/contracts/version_3/tmp.log
	echo "Element Store" >>~/not-a-bird/packages/contracts/version_3/contracts_info.log
	cat ~/not-a-bird/packages/contracts/version_3/tmp.log | grep "\<Code\ hash\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/contracts/version_3/contracts_info.log
	cat ~/not-a-bird/packages/contracts/version_3/tmp.log | grep "\<Contract\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/contracts/version_3/contracts_info.log
	ELEMENTSTORE_CONTRACT=$(cat ~/not-a-bird/packages/contracts/version_3/contracts_info.log | grep "\<Contract\>" | awk '{print $2}')
	echo "$ELEMENTSTORE_CONTRACT"

	echo -e "\033[1;34m **Call mint(0) with ElementA** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message mint_delegate --suri //Alice --skip-confirm --execute --args 0 | head -n 3
	echo -e "\033[1;34m **Call mint(1) with ElementA** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message mint_delegate --suri //Alice --skip-confirm --execute --args 1 | head -n 3
	echo -e "\033[1;34m **Call mint(5) with ElementA** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message mint_delegate --suri //Alice --skip-confirm --execute --args 5 | head -n 3

	echo -e "\033[1;34m **Build element_b** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_b/ && cargo contract build 2>&1 | tail -n 6
	echo -e "\033[1;34m **Upload element_b** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_b/ && cargo contract upload --suri //Alice --skip-confirm --execute >~/not-a-bird/packages/contracts/version_3/tmp.log
	echo "Element B" >>~/not-a-bird/packages/contracts/version_3/contracts_info.log
	cat ~/not-a-bird/packages/contracts/version_3/tmp.log | grep "\<Code\ hash\>" | awk '{$1=$1};1' >>~/not-a-bird/packages/contracts/version_3/contracts_info.log
	ELEMENT_B_CODE_HASH=$(cat ~/not-a-bird/packages/contracts/version_3/contracts_info.log | grep "\<Code\ hash\>" | awk 'NR==3 { print $3 }')
	echo "$ELEMENT_B_CODE_HASH"
	#
	echo -e "\033[1;34m **Call update_delegate_to(elementB)** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message update_delegate_to --args $ELEMENT_B_CODE_HASH --suri //Alice --skip-confirm --execute
	echo -e "\033[1;34m **Call mint(0) with ElementB** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message mint_delegate --suri //Alice --skip-confirm --execute --args 0 | head -n 3
	echo -e "\033[1;34m **Call burn(1) with ElementB** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message burn_delegate --suri //Alice --skip-confirm --execute --args 1 | head -n 3
	echo -e "\033[1;34m **Call burn(5) with ElementB** \033[0m"
	cd ~/not-a-bird/packages/contracts/version_3/element_store/ && cargo contract call --contract $ELEMENTSTORE_CONTRACT --message burn_delegate --suri //Alice --skip-confirm --execute --args 5 | head -n 3
}

main
