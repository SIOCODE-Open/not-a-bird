import { IChainDeployment, GAME_UNIFIERS } from '@not-a-bird/model';
import {
    registerLazyGame
} from './use-game';
import {
    createPolkadotJSGame
} from './create-game';

const UNIFIERS_CHAIN_DEPLOYMENT: IChainDeployment = {
    rpcUrl: "ws://127.0.0.1:9944",
    gameContract: {
        address: "5GVMYKgS2bggtZZdveKgSmwC1ycVHVzbaoYsGXHmpHkvLmoF"
    },
    elementContracts: {
        0: {
                address: "5E2SgKuR7b7ar6yWKcxhqQfjRp4QdTdhyEfWhnost1R1Bnp5"
            },
1: {
                address: "5FCYbU7D7w2PZGxU62RTQt3C7iRoVzLJKyvzi62j7PdGUedk"
            },
2: {
                address: "5EDj7RFtZTaeMBVvz8FVyW95aqhmeVGJBejJfCQsah2Xc6sC"
            },
3: {
                address: "5GGo4XHSM6XABCqxK9Hstgnwdtss6NQnRDZEHfE2Nu4jvDwY"
            },
4: {
                address: "5HhJbtRniQh4CnuZvPAaMuQao1h25a1zwtRrMTYikYaAGPuK"
            },
5: {
                address: "5DPG1b9AYigDxVDW1SkbAjDkoZCGFMHoXryz5LPq5MkDvbjr"
            },
6: {
                address: "5F8o1Mnu54Jbv2MCdssrbdFQXw7Chs7dG7xZ5Q7Hp6pvj5Gq"
            },
7: {
                address: "5F1BZpVP1VShA2jP7wV5E3QL4QyxvCuhYpwA48BLyW5LMka2"
            },
8: {
                address: "5GmMA1Edto8CEiaR4Xp3wErjgJY7E54uuQrPvRrKxqVYMQAu"
            },
9: {
                address: "5FShbyADdV3RoZieFxFbbT7TKGfoHXrwqc63WVLvuoeZxVff"
            },
10: {
                address: "5F9Z3KGof4y2bUpt2CrDhwBrAUsT5uNynBpZ4FibdiCEU8by"
            },
11: {
                address: "5GhYtxDRdaf1RtmqZnSktyzbVfaqyExRnfKPXCVcEyciqbJW"
            },
12: {
                address: "5GMJVDZtVfD4ndWx2ihecm3dfgSopJRfzgQ5FkTwWQ6XF8oT"
            },
13: {
                address: "5Ea61fGsdYr2Htx76xCpXAoyoC69LvA2ssQyc28njDJyRnM9"
            },
14: {
                address: "5DdpKH6V1FL4JJjU25PcbG3wm6PLD3f44PYEUkPo7VbfzCqa"
            },
15: {
                address: "5Fd6yw6QPCqHxJyRNaBxqxPwzc7HUb2SKAbNhniGgFRy9ws4"
            },
16: {
                address: "5FCn8fgQTAyDAKtrqck8ZfmQjKtzzLrMWV8j3hHpZMwFiCsE"
            },
17: {
                address: "5ExYUijHUDVi5TNBuoaiHSSbaKcxQweUB7rVScouRrQ6LQAS"
            },
18: {
                address: "5Ec48WTQcLEuo3KM2taWWfw9Eprw4yky943zkqFE3DZr1iMu"
            },
19: {
                address: "5EqpprwCEZ6NSZryPxVHgR73S4XLTfD4sdYo2dayH597PqCD"
            },
20: {
                address: "5CYgwNscNTNbrvYLKZuAYQLEJhv2vWTgfUvRRms7DQqxbjYi"
            },
21: {
                address: "5Ek8whFRTEPpmf13yGey873L2zd4UqCNJJrDznzsnAB9Biuu"
            },
22: {
                address: "5DycxPryEFeRyQEgLxCMHjAK2dnHfrQbXf4RCU452bMDHDCD"
            },
23: {
                address: "5EdciJA2Br8KR9rB1yTN7QN3vHG4eL8SJHr35yi99Fm5wbc7"
            },
24: {
                address: "5CZyjce7wSxY6WjkuWzfr8KzXGaETDgL4UbWHvNPTjF2rCBE"
            }
    },
    content: GAME_UNIFIERS
}

registerLazyGame(
    'unifiers.polkadotjs.dev',
    {
        name: 'Unifiers',
        description: 'A game created with the help of the Unifiers group',
        chainInfo: 'Deployed to dev',
    },
    async () => {
        // FIXME
        const suri = "//Alice";
        return createPolkadotJSGame(
            UNIFIERS_CHAIN_DEPLOYMENT,
            GAME_UNIFIERS,
            suri
        );
    }
);