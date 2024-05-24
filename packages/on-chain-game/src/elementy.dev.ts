import { IChainDeployment, GAME_ELEMENTY } from '@not-a-bird/model';
import {
    registerLazyGame
} from './use-game';
import {
    createPolkadotJSGame
} from './create-game';
import { loadGameChainWallet, createRandomGameChainWallet } from '@not-a-bird/game-chain-wallet';

const ELEMENTY_CHAIN_DEPLOYMENT: IChainDeployment = {
    rpcUrl: "ws://127.0.0.1:9944",
    gameContract: {
        address: "5FeDKe2LSx3LS9xBWMTzZybZRJk3fW2K5uU47nd2Kx7d3Apz"
    },
    elementContracts: {
        25: {
                address: "5CchsqUqY5cpue9TtamD2bwPUSFBLNNUtdTP4vUvfccK9qbT"
            },
26: {
                address: "5EwReDW5GEG2SoyE7Kypxzaoeh13isinuy1riG7wKzC9tcPA"
            },
27: {
                address: "5D7Gu3sWEDgWZg5dZXRV7458Pe26fYyHAzPaeyRKPZkSPh5g"
            },
28: {
                address: "5HpBXNo3QMv9tWXELJFdaoyaMP9qYiHzaTbJkVAu3bA4udJd"
            },
29: {
                address: "5EhHNzuL69VeoLqzvZ6WaQymVxXRuTKaKYYJzZ2W4C554HoZ"
            },
30: {
                address: "5CYAYXFHyWRAxknogiTeDBNFaNLVDv3TnsUCpijjVRHVMyvF"
            },
31: {
                address: "5D9DHbLoU2bRBTipd6DCsnBisqwqQiBZQkLmuKCQi8VEPee8"
            },
32: {
                address: "5DJEZxcG1iKhzV2bXHgpJAtD2FGWyjxgGSAiQBWqYSo5gipB"
            },
33: {
                address: "5EqEXTuuumnJxnjBZZMCBNKJ35n64g5V4cvVJDkVnjtVqxHp"
            },
34: {
                address: "5HJ4HdQW2QXVPAp8PeFHVAzREAHRCaAYbYFWQH8CgycXbwBJ"
            },
35: {
                address: "5GPdzNx6wT9CS7P69H6vPhBYRftFS5RmjpGca79udes1xSwU"
            },
36: {
                address: "5EsE67oFjDUufjzkfW3mCHJcShdC4g9T66V4KBfBk5zmnQ2n"
            },
37: {
                address: "5HFk7agjqKiUzBcieDQiFDfnq6NrdQjGKwAR6t4bTZGTzZPD"
            },
38: {
                address: "5E7hvizFoLcTQZyEmS74cWCBPSYrgxcdC72Z8TazYNL6ybXF"
            },
39: {
                address: "5ED3Qh6nZgiE3MBiKqq2ZRqpSmnu9SFVg2aFN2ko6b4vvFyn"
            },
40: {
                address: "5HJ1cUJ3Keui9kchTz8mDV1u4ZRRRoAxuU2zGo2hpnGZ7Fn1"
            },
41: {
                address: "5HXYQpeLjnKpRwScy9CYGBou2uuHsnr3MXjgaQipvbancWZs"
            },
42: {
                address: "5E1fMTWKeNqKT86XzdSXz2nAcJbFPCex8hFDZyUYvvxCrYss"
            },
43: {
                address: "5HLreZ4kyQVkZtbhuqrNp71LucAKFJk5NVRcGgKY8TgKs8c2"
            },
44: {
                address: "5GodBwCdDQcD8x8n6ZufjSJVXbAF8Rg9GucyoR4pMY5nn8NB"
            },
45: {
                address: "5DdzbvZ5TSBwQZmf2woVkqEj5zVcyvQxMeGz9TSRNefXPHC7"
            },
46: {
                address: "5GQnnaPD77iLqkcimD2Ls2wGAHdx8FZdBB4tMihsvLfTM9FD"
            },
47: {
                address: "5EB8imFw2S1BxCqTDhD9ePBfJ3yNx5snnFLSeKAg3LDDiKdc"
            },
48: {
                address: "5Hkhzg9i3KMETS7oLjYqJHgw9TM1c4a5JebEkeJwmCWWXmqR"
            },
49: {
                address: "5CSmpAG11JU8SXxT1zu9CNi6bKHBJhbKRBM1ixRUp4S3f9Jh"
            },
50: {
                address: "5ELkjsd5rDouLFdRqkFzHgLbwBM2LmjUnmRbihY968uEeMYe"
            },
51: {
                address: "5HnmEDAHeQyKT3JCzcTW8LYStb5LKswJzTUL7AVyNCyh8QNT"
            },
52: {
                address: "5FZDpLDoWX2nrCVvnVYU6QCSPwhECE3KxkEoERJpnz3uHbMM"
            },
53: {
                address: "5CWNE2aqTpwF9XovJvgbEsExLQ5bsYiaeLrXZQ68SjxMqfXr"
            },
54: {
                address: "5EaKg8k57FE8LcPAyUuQtpP6ooLc6D5XRHseKPi3j42grg6Z"
            },
55: {
                address: "5FhqLYun1NXKoGxZD3gKt65ipqtktU8jEr1NC9FUCkneGuwT"
            },
56: {
                address: "5GG4mL8Fi2hWgben7YFabDXFGprT23qFrwbymBMWJWKtHfeX"
            },
57: {
                address: "5CuARRtrsoBZTs1a8TSDiKBDvDNz3ANPYMC9LuA5skKkMB4i"
            },
58: {
                address: "5F4KjqPaftrz2xDvEtLRdfgo3fQWoPiJYYEVxnHNwqhcMuaj"
            },
59: {
                address: "5CB3RyrJeZTdfrtxiA7vTvfsx43PLSaVBpWLBfLbZZ94Gx7y"
            },
60: {
                address: "5HFUbF7NPChdVamN4eDCm66pizrDDu91cm642KWQ9GnmmEXU"
            },
61: {
                address: "5EmkM5VchGW4wvihpagJ6GL9GQyWQyjF1S5bM4bgcFzuEzzU"
            },
62: {
                address: "5GQWtBGrcGk9KKpTdPxDFdfoiW2xydCNPzfNX38eggvQsvbP"
            },
63: {
                address: "5EZwL5BBRgZEXr9u2BHQhScRjzq5nKbauiqUD89RKAvDtJM2"
            },
64: {
                address: "5GBr3JXZ2UgXuvWVTy8qAT7WejRhfeaiNUkpN3hjNRo7JAXu"
            },
65: {
                address: "5GSjCbA2JsMcwGRsHVG87BAuZs2TThriz5KqMewaJGb47c4G"
            },
66: {
                address: "5HMqjGDetNqoPS4czTNXRhChUjv4vqG8YCD8ThNZqKLNBmC6"
            },
67: {
                address: "5Coq2ATKBZeLsJotj6RTY4VkVUBt32bsXpVa1uRUMxVb1QT5"
            },
68: {
                address: "5CKnap8Pu7MVb5YtTbHYgAXuZv43sr8LA9ELyc7C5qkyE8td"
            },
69: {
                address: "5Cht2CAwL4mgbk6EMkdSQYG9L1U7r7fXwcgk9YnxZ5XBB45h"
            },
70: {
                address: "5F46qKfoYsML9kzLBm5dGJMo6KBeBSrajN8tmkYSZ6MjVNxn"
            },
71: {
                address: "5D8MkVzXhFGPRFaVhrBkP6q4qj8KvyiYpbK7qzKtTUEC32YV"
            },
72: {
                address: "5EqzJYh5U8REe3SfMXCnksoXVwG4YDeewyoYUaVuzWbuqMMo"
            },
73: {
                address: "5G6Z9Yeu7KXW8dXSRjWmJounSBjBwCSEfqHCtbN63Ab5SRnY"
            },
74: {
                address: "5G1T1yBHan2t97Phob9h832orJKTo3qDe5aZ4GhEKmscob8f"
            },
75: {
                address: "5FpmMAFLy35GwZc71Zzr9KGSmYqwPNrn6VrQ694QdpnmJzKh"
            },
76: {
                address: "5EKhgcZsHiy1pWWsu4JYYxzMwTf19BWL2MzUvyV1gyTiLBtw"
            },
77: {
                address: "5Gvgt6uxSjPhQiuhEnn8ZACXzvwahve21xUu3xUYCSPpNS8z"
            },
78: {
                address: "5ENv74xmWZQno1k4jrQ9JCvzQKu4riddA6BENKKNKw91aRyW"
            },
79: {
                address: "5CfZ2GhyAn5saoHikrp1ZxANWFLUHBY6NMBzfMiYUjcjd1DU"
            },
80: {
                address: "5EC7gMYqAF2DMmbUbpzALoemPb3szbu8JfhSA4LGpv2N7Mv6"
            },
81: {
                address: "5DfoGer1kWqeLuukYJtagBTMfXrFCLWy9C6KPVAWBhk7ZUbJ"
            },
82: {
                address: "5FXpry9vadyoadwsRWA66eiWv2cn3oxqWdPzN3MNJv6vTGKs"
            },
83: {
                address: "5GQ6LAS1buC2vLxobGNVwzpm3FQC8dKQTT5XZoH5oRk8qcn7"
            },
84: {
                address: "5H65832iEjdwQBPrRyqqMxnQzX69v7QU44aDZsMMgTvYa3Lg"
            },
85: {
                address: "5CUfyW7ZyojbroEVv1Ny86voiZiCMTogxsZC3Us1omdFrVpS"
            },
86: {
                address: "5C54ZgiwuUw6KGrEkvZZEHncvq8RZJ3jknf8sNLBQ7T5Ntpm"
            },
87: {
                address: "5CT4DRK41SM6EiEqurRvAHWARg7jEDYRUnjzQJetxD3q9E3P"
            },
88: {
                address: "5H8pwwfPGYVouyBHfqSvr42vfNxTzXVw1nLbkuzqzYskhEj3"
            },
89: {
                address: "5EKfXvnohcJcNP1Vk5tS312KJb1rJqV8Mjm4w3RXz4WhRLN7"
            },
90: {
                address: "5HnpCfW3sthTfEWeW8QtrfTTqEE2pYfthcmYaR2uxtXm3sBh"
            },
91: {
                address: "5F1xkMvHFfno5caRmvGRWgwTfpU49BVX6aoi2mz7HmDLk9Gq"
            },
92: {
                address: "5F1hwd45Er6Viyx4hkAf2bgvqWJRcNSW52g6rG4Uj6N5B4Yt"
            },
93: {
                address: "5Fyd2fR3jx4ejCZHzA3UEAJtYkUocyJ2nVje2pijW7RPvGG8"
            },
94: {
                address: "5HCn6TJEpkSr84Hfj5HD4joM9yrCQqy8brZhrALDgF4srQiE"
            },
95: {
                address: "5Czgh5nUK6H8xi3ek1K7ojpEWyH6C8bkZBboXrGPZBFnW1Vf"
            },
96: {
                address: "5Da3xtGgxLerwchFMp9MjGfqVfsdHSKP91sMuxJxkfE4BQFC"
            },
97: {
                address: "5HVtZqjQKH2peoa7inJeEvEEyN3AUfDgShYZkRHu9cW9Sh3s"
            },
98: {
                address: "5D179CxBVmjPVtMwQKGXU6nKewEXdhVEpFkrJ4Sv57mNWG3q"
            },
99: {
                address: "5FUeeHY2WPGp3qMsaMso2fbWSiVB8suPe1SVqJXH8KHZW1oj"
            },
100: {
                address: "5DNemDSRBcF74A7AFAHHKkV4iTS7iQHKqYb8bJTrnG7k5s5m"
            },
101: {
                address: "5G6gk6JxGyrqT99XhmAA7fZKcWuPA5QH7robeAFPFqKTkHAd"
            },
102: {
                address: "5EtR4qHtJcDw34fSeHGAotsVn5ZhQzgXjLhXSqVTnE1Z3hf5"
            },
103: {
                address: "5FdaFk5X4kKKLrV1MZQ6pvDcitrPpHaYoXwRY5WS6vEyLGRB"
            },
104: {
                address: "5CWJn5WRSuAGQg6uW8jnbkuGGwK1UyJrJBRgP5wgqBShoZFf"
            },
105: {
                address: "5Dtcp71UJ2LMcAQnqEt2jLZkG7efuNYJTbcn81ESqQcKpPJE"
            },
106: {
                address: "5EqecBPVgUUFjtiZQFnsSJMREdz91vzk6dtyWfJSt9MbGpgJ"
            },
107: {
                address: "5CCSqFt8z6eYnxNdDt5mDyNhZhpkjqf2cxio8iuzfEB2ZRH7"
            },
108: {
                address: "5GL6PUEtrthS3Gq3er31Eg4gBALDzmbQHXHynwsi371hzDfT"
            },
109: {
                address: "5G8YiFgLdBzL6c7Zf1fdSyJapv1GGvHBRQnH23fMhNcbYEdJ"
            },
110: {
                address: "5DeTTTzKTZsG9h9ZZsuUeFGYvFnK8CSp19PMZrsjwuSULzyb"
            },
111: {
                address: "5Cgo3G8GDvbw9Enmr9r9Jo82xXqnT3k2TQahBkmTmXPbqpeD"
            },
112: {
                address: "5DdKqKuZJ4iEa6Q8R6sVuLK4PDp8KvAwT65GknmR61jYPb4Z"
            },
113: {
                address: "5DvH5GBk4zxTC8KKAu2SxhhAPghLKL2QcdfGypxDSCGw8ZnH"
            },
114: {
                address: "5C6h5Sb1eNNw9gwkhCRX87YyYmHHBLRyHpefNM9A22egrmxB"
            },
115: {
                address: "5CneLJ9z1KoSr7Kq8REzNZZd2HmpCFmWLDoTmzWKr1kHVHiC"
            },
116: {
                address: "5DtfC2s3oDqHL5yzUrwVfHZSLKKjqmSZY7TfPFB8B38wxje3"
            },
117: {
                address: "5FwFSeDrYz6aGNKdrkfW1uHVKZq9PQ9bCAH78uQgEnHYX1xx"
            },
118: {
                address: "5Hb5EdX44vxD2GLZzfrPupgnWhkP34AhZvioZD1sysCjDUZ3"
            },
119: {
                address: "5EXapkchg7aEetok6pJF9TZQX1g773Mt4JppdkFCpSJT199M"
            },
120: {
                address: "5FthgvgpSA8C2abgCzytCM9ZghV6jq67R99AGqd3GtMhGouU"
            },
121: {
                address: "5HYDau5V7krvxEi7gABCEPLdR9JpgTT8qhPFbWZHCKzSTZLH"
            },
122: {
                address: "5E9xeckLBKNe75ythWvpNXW3YpSAt2v5TDgieCehJU3Boakt"
            },
123: {
                address: "5GtKGpSaFXSV9pr9THQrX1ECA9LtMtSyfVb6yQnAXJajXSZw"
            },
124: {
                address: "5CDWR8So5XybJTGeuy3eJFNxm8pRfw3vL6zXBACfU9h6Rvmb"
            },
125: {
                address: "5CfufN1PZYMnrmFkEZ3UK93B7QE47CN5hvvmMsUh3gvb7weQ"
            },
126: {
                address: "5GV79bMZv4mf4pHkMkgoF3whoWucLpn43k7owoofWqFTNQwU"
            },
127: {
                address: "5CBeAD5DvGU2LcoMu9AfmSc7Vr9CEWy4GSDYaeniWk3ejAbH"
            },
128: {
                address: "5FU5P1VRVbYDGvymYaZpmCPnDwBUcseJy9eQccyeupQW8GGH"
            },
129: {
                address: "5EiT5JiDVB3SjFqHVpGJtf1nBswkeNADDuA25uxnE9VTySpp"
            },
130: {
                address: "5FsEp6BoAM2orSCUpBtz2Zy3vYc5Y2AECNZUm6Li8qy417cX"
            },
131: {
                address: "5HAcRGMM4ZaimWge7mfmDxMibDXWphQLGtZiYJcPhmSj4XYa"
            },
132: {
                address: "5FacyyuYQA97BV2H8upiWpcG9zCMEXT2N1Sy1EJhjy2Cchst"
            },
133: {
                address: "5CDKEtHji8g4MHnBR8mYU1LNwVhsajw9P8NbruURqc9TwJGX"
            },
134: {
                address: "5De4CxuJmZuhMiywp96rETxVgRXPLK7aS441XVcDPrqNv71A"
            },
135: {
                address: "5EwrhvbZyRZ2KwXYETh8MfU9RZXbH7HdWVo3EopN94NkzXsA"
            },
136: {
                address: "5EGGE65hLuHjidktCu1bZWtxuR8oUD1puqBsPr26uYHZ7yhN"
            },
137: {
                address: "5EuEpqDRFUHQf6pPK4g3KdQCCM8h5Jx7FfwZLqviCkrjFnrN"
            },
138: {
                address: "5CpafrFrReLert2f8UtzVEDUVTepE5THKguQLLMiYUXCvq5Q"
            },
139: {
                address: "5EZktGyVvHTxNkmHc4x1fRfT2NNLPXqeierhdy6mSWWaEWfW"
            },
140: {
                address: "5DejBUxnqbKxrXscqncCc4zZ4npRihqU5M9WzgqZgFCX15fF"
            },
141: {
                address: "5Cr3uvpqoLPauFC75ExGJERyzwKUw9y67Gj1vEVYrkbyvn4C"
            },
142: {
                address: "5DKfbCm278K7ihrEwBUamHfyJDiLDxvt8QuiTAsoZcq1c9bu"
            },
143: {
                address: "5GaY7Zs2MKw6C3UkdkavjHMEdRVodMLu4vohjHBfLJ1WS7ov"
            },
144: {
                address: "5EZJcQaiGUSzSxTVnBwTkcqvbpmhKeuFjR7m9k7StJL6tvvo"
            },
145: {
                address: "5HAcfKrVKBpBM6M9Ca9zvuBYdAr23HkUcaD7LeGarAZiUFyr"
            },
146: {
                address: "5Gz12ALTW37WYUKxSvMCieKBP6UE67dokuGQ4Gj3L74eCzMU"
            },
147: {
                address: "5GzB7eibupYAf95AXji3AyNPx5N19KSPW9gaqCG8tLwsdnnR"
            },
148: {
                address: "5C6dkLDEN8ZQyHFpqQM2zCvFwPR8RzfwnoJfp6T4GXTDYYDU"
            },
149: {
                address: "5Co8wPH1ytkaPSHK53M2znW9U8WW1c1PrWrAc2aLpfM6dt3x"
            },
150: {
                address: "5ENF3iKsPf7TguoxJrLa9oTni3kJrkXAv8veoh2syGzYFeDc"
            },
151: {
                address: "5C9qS9YnKzA6KXg2B6rXbThErppLCyEVXjH7BSLsEJ4VEDcS"
            },
152: {
                address: "5E82j73nNXMTfXU9SCsjQ6Ppwv7ZxWoNmSMuwni7ne47yDPp"
            },
153: {
                address: "5Gi75KquZkvSaKmHV17A1Tj6Xq4s8SzXU4JqwRFN4WT993Dd"
            },
154: {
                address: "5C52HrpixNqhaHnhqin6LYquNC6zkSS2WtqURQSjvYobHGd5"
            },
155: {
                address: "5CdTtXmMLSCtPDTFMuebbwWupKtKCg1reTLXLzn52jTyVV7P"
            },
156: {
                address: "5EbbT73BK2MzVHVG5mjZRZ1v5dnHKDa1ePoT763LYFmyBmD6"
            },
157: {
                address: "5HipHQgQWcfGWPjhYwwAvDUWwKFa7SPWvy1NEgTXh213WDMD"
            },
158: {
                address: "5HEfQmpNHCEPNtBZhGHU7c82LwFAcwQAqQmLdGrSkeyj4vkr"
            },
159: {
                address: "5GLWDmehtAQziuChA9YkCksjVficVXrcp5i7K9PFHNaeVxuU"
            },
160: {
                address: "5EVx3rXSxY1nDRmHDUgKWkBWBpD8rThreoBXBSqJnSNUdpsT"
            },
161: {
                address: "5GfHyVSdNtpRdJ4CGLFCaip679Lx6GmtMt6TVTi5StyEVFbz"
            },
162: {
                address: "5Cpn2TRuj6uG2eU7aBWXYzjgV6uWVtUjSN7tFw33UEoyCAXz"
            },
163: {
                address: "5Eoc7yY36tLKrb3LbWU1SF5N4d53LSRnbXRD6R4qB8Bootpd"
            },
164: {
                address: "5G6m9bSEQJ3cQbiwmVpMCRos18fxvCqZi7qYLMxDagzW29P8"
            },
165: {
                address: "5DyLW28an1PfY78xkWgsMGN2YDdSPvCFgg7NzhpYS7fn5uJx"
            },
166: {
                address: "5EH3DmBE4e4nD8Fu69s7NjqJ3dytxweHhBdfGqncpGKB1gy1"
            },
167: {
                address: "5GR9Zf1qRx6wZQ1oC1Hcd14CeJTdZ3uJ2ujwjdjrmoVGKX7A"
            },
168: {
                address: "5CfWsXBAs7KRLWS9J8Ak5w6zvNf2qcBCAuLAUQXi2X5ECuwx"
            },
169: {
                address: "5DzoJ6vqYjczPwLwgkdBTBaKvqxnci3d5jAF7j6bv1iEKe13"
            },
170: {
                address: "5EUkj5zgD5kg3UGgC47LxeJSrsgUH8PKXJJAiVi89xtT6LhZ"
            },
171: {
                address: "5EL7zHtaWwNdVumUmtYB73YJfiMWDjKf4hR5D66hVi9tqUbg"
            }
    },
    content: GAME_ELEMENTY
}

registerLazyGame(
    'elementy.polkadotjs.dev',
    {
        name: 'Elementy',
        description: 'A game in which you combine elements to create new ones.',
        chainInfo: 'Deployed to dev',
    },
    async () => {
        let chainWallet = await loadGameChainWallet();
        if(!chainWallet) {
            chainWallet = await createRandomGameChainWallet();
        }
        const suri = chainWallet.suri;
        return createPolkadotJSGame(
            ELEMENTY_CHAIN_DEPLOYMENT,
            GAME_ELEMENTY,
            suri
        );
    }
);