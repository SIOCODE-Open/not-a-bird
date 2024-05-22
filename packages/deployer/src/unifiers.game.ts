import UNIFIERS_CONTRACT from "../../../contracts.v1/artifacts/unifiers.contract.json";
import ELEMENT_MONKEY_CONTRACT from "../../../contracts.v1/artifacts/monkey.contract.json";
import ELEMENT_GIRAFFE_CONTRACT from "../../../contracts.v1/artifacts/giraffe.contract.json";
import ELEMENT_BEE_CONTRACT from "../../../contracts.v1/artifacts/bee.contract.json";
import ELEMENT_COIN_CONTRACT from "../../../contracts.v1/artifacts/coin.contract.json";
import ELEMENT_SWARM_CONTRACT from "../../../contracts.v1/artifacts/swarm.contract.json";
import ELEMENT_HYDRA_CONTRACT from "../../../contracts.v1/artifacts/hydra.contract.json";
import ELEMENT_MONKEY_BRANCH_CONTRACT from "../../../contracts.v1/artifacts/monkey_branch.contract.json";
import ELEMENT_BRIDGE_CONTRACT from "../../../contracts.v1/artifacts/bridge.contract.json";
import ELEMENT_GOLDEN_GATE_CONTRACT from "../../../contracts.v1/artifacts/golden_gate.contract.json";
import ELEMENT_GOLD_CONTRACT from "../../../contracts.v1/artifacts/gold.contract.json";
import ELEMENT_SILVER_CONTRACT from "../../../contracts.v1/artifacts/silver.contract.json";
import ELEMENT_RHODIUM_CONTRACT from "../../../contracts.v1/artifacts/rhodium.contract.json";
import ELEMENT_HIVE_CONTRACT from "../../../contracts.v1/artifacts/hive.contract.json";
import ELEMENT_TRANSACTION_CONTRACT from "../../../contracts.v1/artifacts/transaction.contract.json";
import ELEMENT_BLOCK_CONTRACT from "../../../contracts.v1/artifacts/block.contract.json";
import ELEMENT_BLOCKCHAIN_CONTRACT from "../../../contracts.v1/artifacts/blockchain.contract.json";
import ELEMENT_POLKADOT_CONTRACT from "../../../contracts.v1/artifacts/polkadot.contract.json";
import ELEMENT_PEER_REVIEW_CONTRACT from "../../../contracts.v1/artifacts/peer_review.contract.json";
import ELEMENT_CARDANO_CONTRACT from "../../../contracts.v1/artifacts/cardano.contract.json";
import ELEMENT_BEAR_CONTRACT from "../../../contracts.v1/artifacts/bear.contract.json";
import ELEMENT_BEER_CONTRACT from "../../../contracts.v1/artifacts/beer.contract.json";
import ELEMENT_LOCK_CONTRACT from "../../../contracts.v1/artifacts/lock.contract.json";
import ELEMENT_MARMALADE_CONTRACT from "../../../contracts.v1/artifacts/marmalade.contract.json";
import ELEMENT_SUPER_MARMALADE_CONTRACT from "../../../contracts.v1/artifacts/super_marmalade.contract.json";
import ELEMENT_HYPER_MARMALADE_CONTRACT from "../../../contracts.v1/artifacts/hyper_marmalade.contract.json";
import { IDeployableGame } from "./IDeployableGame";

const UNIFIERS_ELEMENT_CONTRACTS: Record<number, any> = {
    [0]: ELEMENT_MONKEY_CONTRACT,
    [1]: ELEMENT_GIRAFFE_CONTRACT,
    [2]: ELEMENT_BEE_CONTRACT,
    [3]: ELEMENT_COIN_CONTRACT,
    [4]: ELEMENT_SWARM_CONTRACT,
    [5]: ELEMENT_HYDRA_CONTRACT,
    [6]: ELEMENT_MONKEY_BRANCH_CONTRACT,
    [7]: ELEMENT_BRIDGE_CONTRACT,
    [8]: ELEMENT_GOLDEN_GATE_CONTRACT,
    [9]: ELEMENT_GOLD_CONTRACT,
    [10]: ELEMENT_SILVER_CONTRACT,
    [11]: ELEMENT_RHODIUM_CONTRACT,
    [12]: ELEMENT_HIVE_CONTRACT,
    [13]: ELEMENT_TRANSACTION_CONTRACT,
    [14]: ELEMENT_BLOCK_CONTRACT,
    [15]: ELEMENT_BLOCKCHAIN_CONTRACT,
    [16]: ELEMENT_POLKADOT_CONTRACT,
    [17]: ELEMENT_PEER_REVIEW_CONTRACT,
    [18]: ELEMENT_CARDANO_CONTRACT,
    [19]: ELEMENT_BEAR_CONTRACT,
    [20]: ELEMENT_BEER_CONTRACT,
    [21]: ELEMENT_LOCK_CONTRACT,
    [22]: ELEMENT_MARMALADE_CONTRACT,
    [23]: ELEMENT_SUPER_MARMALADE_CONTRACT,
    [24]: ELEMENT_HYPER_MARMALADE_CONTRACT,
};

export const DEPLOYABLE_UNIFIERS: IDeployableGame = {
    name: "Unifiers",
    description: "A game created with the help of the Unifiers group",
    gameContract: UNIFIERS_CONTRACT,
    elementContracts: UNIFIERS_ELEMENT_CONTRACTS,
};