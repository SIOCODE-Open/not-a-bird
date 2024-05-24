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
        address: "5GdMpd1aqAPqFxQVFB6CmZVKbickL39aU4tgLT7SU2GLuQEU"
    },
    elementContracts: {
        25: {
                address: "5CNoNGu7n86SNfyiX4vWauWaYhv841q9eQ6Ud3j8hBFrwvmh"
            },
26: {
                address: "5FZ41WfLLDXi5iBXFA6hsWnXGn1a3UbDug7LmMYR3EBGh4Yr"
            },
27: {
                address: "5D4tKFe9GvNimZFqKGbimXQfkv33ihLzgj3D9Q49Rq48vJWn"
            },
28: {
                address: "5G6oMxXi54TXbWaDKUG1i4y4MwxkYRfZn38GBNZpsEnRFPn7"
            },
29: {
                address: "5GXuf4bgATHk5TXgjWPR1rU6DyGVDRMmjoxKC1QJ5WGrXXcj"
            },
30: {
                address: "5Fgmka2FJmaK2ZcoLWUzhFxTvDnaP7sxjUd1nCCeyz45kTjX"
            },
31: {
                address: "5He3vU1VznmcGKMWwN4G5FfmWDXSK76NVY1nVMPTdvwfg7B5"
            },
32: {
                address: "5FwdBCFH8cg7YPuS3ZRgnSWQRs81hkThJr7DhaUdKtMWS8QZ"
            },
33: {
                address: "5Ea3jGaze6j6zrhL9ucFDWFxie4J7eiiEtbnm2wTseaw4EqA"
            },
34: {
                address: "5FLqjnHkwcistp8mnLHK9dtjwRg2NwPEwnUuRTEYvZJ4nxxE"
            },
35: {
                address: "5CT5N35NdGRHcz9Bnm8mabzHB6Z2edqkVw57b9MNVTKcxJ66"
            },
36: {
                address: "5GTnwNuE6eXWgzQRiw2GmQAtqFjPNh9k4t4UUbvppSQ7uRCr"
            },
37: {
                address: "5C93LJwoj7Y6DxZX152FnJK8vhJAjWTgJG5DdQ3Pz776cC9p"
            },
38: {
                address: "5GaytrSSTFtCqD7w6UgUio9A2ubBAG4LoKLG8jhxdFM1H6X3"
            },
39: {
                address: "5HbZYuEFKwaQEPFmgwx8ZFB8schzA227t7QDtwD16R2G7QUo"
            },
40: {
                address: "5CGgcDYcm5oHpfX3N3ctUACJtfdH5J1HXU1opwpJbnN1Wp5L"
            },
41: {
                address: "5HWJbE7ucCkKsd1Ba8o8toSeYBui1peEp7NWU1NPQFWkSMPF"
            },
42: {
                address: "5EzMutMyz4drg4DpwJsZqtdGwG26eiLwt6YK8f9ty24Mc1Sr"
            },
43: {
                address: "5CiHx4PogxLs9kC6vu9ThgYEdrRmmMbi2GwzwmDaTPDpypZr"
            },
44: {
                address: "5GHyWmWSCoQkM8wiLDTp4iTKsPBPFdLGuBmycJL5U5ufnW71"
            },
45: {
                address: "5CKifhMh5jZABHskf31YZuFW8bgEBZa1dWBwwKqjoYvi2Nkw"
            },
46: {
                address: "5GVCVdws5otNdPqwhvTZ2aTnRx6VrDVuf1ScNzVtZWJHksPh"
            },
47: {
                address: "5GiFQr4pgWAacQAQQLWTx6LcLNyws1LNtAb8yPs2hv6EQ6jy"
            },
48: {
                address: "5CQRaJ6eS9G22Z6wgyCWX4YSHtTfhmZYo57eG8GLXdssEySj"
            },
49: {
                address: "5HZ8adpFsfEGE92r6DFc3HfyGFMWCzVaiEQX784gFUu9ti6S"
            },
50: {
                address: "5GAh8D1Lx8g84H6pfZnvxFFva3gNGRgsDEbFPYos9M46YB4j"
            },
51: {
                address: "5GQt5jpnYqXADSpnyuBCZwJceGMK9cpuQW1MBV6JrBnGiVR5"
            },
52: {
                address: "5EMB1NjES6CY9qog61s2jBZhRbC3bNXzHvAf2jYtG1qYKyV4"
            },
53: {
                address: "5GDuoUPW8TnkFmx37uVJa3UC3VSwv39T2PuRW7xArtXz6fn5"
            },
54: {
                address: "5GwVAi6DWtMcHM4XeAhRtnqwzTHPp2prBqqSA8LjE9k6yvKP"
            },
55: {
                address: "5CfuWJ5HnBDHpmyHH7sXpjrXsRTrPAbLPBSpAW1GAzov5UMg"
            },
56: {
                address: "5CdwKGYkuD7Zb1HWpAnDjZgaJQQAnEK7t4sL8gWrJrFQ7oCd"
            },
57: {
                address: "5EcJjLqhkpTBuzU7sCwaxAkqahDRG8TSuzCMz5H46k8kJmMc"
            },
58: {
                address: "5EJZBPPq5h9yHKskz57D176Z9fhmRYw4pbRVr5r8pqxywbvJ"
            },
59: {
                address: "5GpucJnbvopeH42tkuwUWJfu2YHBfPRNQuLJ8fSHwZda8CEV"
            },
60: {
                address: "5E2ckZhBJCeo9ptkehr1a8TKLgMYneftuKpdFULW6oyhMWeL"
            },
61: {
                address: "5G5fpzLJp1NL5fAFJy5id1xG4iw5dKC3jQzMtq4wDxw6TryD"
            },
62: {
                address: "5FLs4o7AuLa6XJzHViUk7K6wFvjY2QyjoXHkwnDtie8EcfQy"
            },
63: {
                address: "5D29yEVoZsExhQJFj32EEhW1P181zNr7Le6FfYgAavcSjMyH"
            },
64: {
                address: "5GZWxxjQyKZdm3hAK3QV2MGzubrMwCfwTjXY257GjNfwTeHW"
            },
65: {
                address: "5GM4ptBAnBkaU5KTNGKCwkvWBXt2nmiM1iGZErWwChEGeSGG"
            },
66: {
                address: "5C9C9b7HPTgZN9zBzrRxg63e1Fjvr7esZgDQRWg7z2zdKDZY"
            },
67: {
                address: "5GKqjzwcv45krcDCncudT3CqacH2W2BM1tuzehQr1Qm3xxg2"
            },
68: {
                address: "5HHoD1aFiQp6rS5HwJXhBCj4DEcL4SjGCP75Dpir8TLZjm3B"
            },
69: {
                address: "5HArqYgbQSa2o75cw93LuTxENrPDjVbtY7Z37PBqDizZG2xW"
            },
70: {
                address: "5D66KAooFi6EwTo7Y16Bnce3Sak8pfKW9H7uU5WvKzjZTfqR"
            },
71: {
                address: "5FVtBEp5TQFQ4HvVyWTnrML3XVu7sBS1HugikY9wHaXN1Qe8"
            },
72: {
                address: "5DejYVbTkXgBkMLZw6t2wHEQPGM5FFfHKTNvH1QjUVxfYnxa"
            },
73: {
                address: "5H8mRJF5LznzoiD1s4FEKwJYxFBc28z1b5RmYk9SKeCD9aGF"
            },
74: {
                address: "5Fky3FfQTuTD1X6tixpuVWSEvKnsQpua9bH1NTfUuSnxwc8J"
            },
75: {
                address: "5Cq3gKHQDZ1A8pjjjajipyhaH8B3GZjsbLX8XE2gX7GsrzrK"
            },
76: {
                address: "5Dzz5mHsPZZH7whJgoMd89gvvgCY8iNV83LsqHXZFrfsTWSQ"
            },
77: {
                address: "5DN8k6zjMmnmGp2jQqQq6aoUL3Y35PPiKQEbpGA3QhTBTEjH"
            },
78: {
                address: "5HRMicWEmGh7yto91HXfizyBboGBxLU89JJvQAvtn8xBLSio"
            },
79: {
                address: "5DpaJhpWVAV6BFKrCESw3V7Ft76RrXQ5b66fS1cSJz8UFeZX"
            },
80: {
                address: "5CM36JTNeRTFem5FquktRdHt2bDnA4kaxgBrqybLomxhEps4"
            },
81: {
                address: "5DdaGCM411qUTKbZZrxJnC1pUft2ebdcuuXJyqJUQ3iT5kok"
            },
82: {
                address: "5DB2LZip2dLTFo9VY7wkHC2c9GNz4SGkjVRTqFtahQ5Xg2of"
            },
83: {
                address: "5CqqjPDCRYEvY8PKSMHaBM9nEs6TsUGS2GWj9rsrwzrgTrvy"
            },
84: {
                address: "5HapXBz2eKKWdSjNvuRuaoh9737TzgSdx8BVqF6pm9dnpR9q"
            },
85: {
                address: "5CiCyQh4UFsGRaXuNhbw6HTNfkhQcAHBCbTvmSs2uCPsKpn6"
            },
86: {
                address: "5FvC65NUr8HjQDtc4DRLkouNodJ9NY8aEY8KppVSzjfrFtXG"
            },
87: {
                address: "5DfueswW2sS8Ks9YBYE4pfcvq5SyNeCFri7kgRuKXmnx26Na"
            },
88: {
                address: "5HfeTbGyLdrAZr7551GSN4WxHYisVJ4ZTaF6e54R7Aap5bze"
            },
89: {
                address: "5D7Nyw4Ep3rXFYLQ2wEL5gxv5zGJpYY3NJQFHsYnvCiUzQ2G"
            },
90: {
                address: "5HbatmxA7tw4FnybSaNtnERaVnr6m2xTdRG9Up5uBmN7PAYp"
            },
91: {
                address: "5F5mJVs9S2HWggVb22oLNHGfpj6887FU6vRZ4DLiqcA45CgK"
            },
92: {
                address: "5Ea22Gy3kx1ngtzT9Sr8zRJwdtaokbYepJEkBNH1amgjNDMm"
            },
93: {
                address: "5FgejvFdBytwCEZX5q2d5RrQYsjwiDxndtRmGDx2byjcD53x"
            },
94: {
                address: "5CbPxM4yRMJKLq8w5DGqLWTvKqJsPfkv1MR6PyANYibiWRm3"
            },
95: {
                address: "5GyP9j19P52e1TFQpfrbhNMw1EY8aR8wiAnuUtPTxQnfFZEb"
            },
96: {
                address: "5HbkkTou119nJ2U1jESWCjfb2TGczGMGRdxzozDDaTcjC3L9"
            },
97: {
                address: "5CqGVbEC9jLSTvqH1p4Qe9aPvEjy3whyXCqE1n7tVmv5aqkE"
            },
98: {
                address: "5CZcgjQfgcFUyvsKzV6GjWjRgpE6BgXHPz6xb3oBTX8pSzQY"
            },
99: {
                address: "5Gbp356fCRRhSiQSCtDFkAk5ACjUQh11PVbx6y4SyT83eg6G"
            },
100: {
                address: "5EgwoMRbJGcDapvvbrnXmsYAaaZTbbbaMS9rHkfXS1oPu8jM"
            },
101: {
                address: "5F39MxVqer5R5r1WggDMEUpKw5LUhpHgQn4yQmg8uzUGCrgn"
            },
102: {
                address: "5G9LmWrwN6dFvWD5hKu83TMchKCWAJ9ANdZbdKgJXovHmwFY"
            },
103: {
                address: "5Eqd99AyZBHyhGwJ6STmhej4Hx1GV1Mreyfeqjke55Y4QrRN"
            },
104: {
                address: "5FA6ugvKBBBWFE8JSbzJ9Se2wf999zNtNVbrptx7ddqExJTN"
            },
105: {
                address: "5EcSzyPUwLkwSvhYroGcU9vadwLVsaZxNYokLVLy7Xkz1oG7"
            },
106: {
                address: "5FLrQdZVPAoMFWB3XLqz2zuLPFJMkyt8iCoD4Jori49weiJm"
            },
107: {
                address: "5H3SCAzYq6AqFwpTFuLH4eZY19kN3q9tK9VS43dXyxjPJBkW"
            },
108: {
                address: "5EJ2n8ChgMRFwW6HVdwPRbaZHvHp3fQgZgoD3SzHY9z7MwgX"
            },
109: {
                address: "5GzPDZypzMLKhFN6f9zHSrAbWoxJx7NPH5xJDxJSuuRzuqoW"
            },
110: {
                address: "5DMMdKebfJ8nKHReTVnPJv1ga9YfXRz3873KezNcsJVZetDk"
            },
111: {
                address: "5EnxQRagSDaqdpVdLDhQSDnyxaKgQsnbVRXAuabDx6Q7qSho"
            },
112: {
                address: "5G7CB6LtCJNYREeRUQR9vDbtmn58AFexcqjW3LsxDD5FcBag"
            },
113: {
                address: "5EFy7jz6ko2SgpHMs5WDDS2Pi7xz81745psL5kuVF9USGSMD"
            },
114: {
                address: "5GXATzYSM44VgFFNFA1meeBudZUQgwyHcNPVQmNMR6sAWbMk"
            },
115: {
                address: "5HEXo4PZVcFyZbCNyAEJH24EWtKshT7HT3PfAu7yVYz3SgHo"
            },
116: {
                address: "5GtG4N3imSrkAXRCZFRmL7GFYzMhDCbgv25foMGnf1zTonMs"
            },
117: {
                address: "5FMY2FtPR31rdJRLCeZP7kZ149UqSozkAPx5ewrszvGVJNmF"
            },
118: {
                address: "5ESuEWVbrZtwT9Gs9CPMieMgnfsP961ZTs9fvA2VSnwQ4Tcc"
            },
119: {
                address: "5HcoZJxJNnzxdSF4L6zwCF1en8MdxU5C9thGhjyt14x3faKt"
            },
120: {
                address: "5GgsHiq8475T35XhWrLLWvG56bQhSkcuoLzEsiscnG9ygUD5"
            },
121: {
                address: "5FErrruFNwpKCL2ZQpf66VsMDnkkKo7zE1mEiSwmFoibg9Af"
            },
122: {
                address: "5D6ZvxVRH425hSezGTPfGfK1gQKaGM2Qx3LRp86wdacJxkDg"
            },
123: {
                address: "5CSZn7CVjW1s6xkRwrt9vXJRrHVWVKMW3r2AmRTLh42EMWqQ"
            },
124: {
                address: "5EcNeMSK81n6PigJSgdbFZHAZiqYbKvVgFwA2duA1FBu1tJ5"
            },
125: {
                address: "5GdsJL91y3JF2vi9v5RSEJykuB3cnXceuY4iaDh8S1djNEQb"
            },
126: {
                address: "5EXMZmUGqsqk8Y3XMgGQUpZnuqZmNA4SVKBfvGw5R34EHbe4"
            },
127: {
                address: "5D3Rsx7R95vQYkkHVxM5RpuxA4WQSJp6kcNiEpx66dVnKQ81"
            },
128: {
                address: "5En8fK2fgHBJUbfxvqZ9Dq9GcD2nKVGoMJcyQoFWYG1H1Gku"
            },
129: {
                address: "5HkUQmt8rFwy7G2tAkPaviJFgmu9LSbXdyMCFqEsym8VfKzh"
            },
130: {
                address: "5DtdgmisRnEXn7xUXEzRbd6Nn4nJPfPmo1ygzPmHSY7CCEKv"
            },
131: {
                address: "5FhT8NjMJcM7oPuavi9nWYfCmJGKXK4XFBGgoXVVWsrQ1oZ8"
            },
132: {
                address: "5HA3CBg6cfWNaL3KBPCNNcEryK5sh6whZdGh8Nf41UvuhJb1"
            },
133: {
                address: "5FPk2fdooYmicGxUXQqeAQ6ib2VCFP2cyssgqCsG849zitRz"
            },
134: {
                address: "5DNV62qyK3pmm8UHdDmHq5r3NJ6z6zjPMDMn48QXYw26fMiZ"
            },
135: {
                address: "5HYKo9Rv7ca5cjHVAvAVnj4CAGYBdhseWMQxdAAjYueFiw35"
            },
136: {
                address: "5FtdVRdLPfnu6hqnFsPkjeQZ7dipehAoTHkzGaYKECfXd93d"
            },
137: {
                address: "5C5r54nrYnwBmQrL6Dyd4n4q5pMpgWGxKhnVvCPspU1gok66"
            },
138: {
                address: "5ChrSb5wuAQyAhmCVkqqeE6cZ9HBxN7nsZhCVCGJ6pbx6N4A"
            },
139: {
                address: "5GCGAHB2i2ByN11ugy28wih1w2tfLfeUhQyoF9UQ2Yo6REhs"
            },
140: {
                address: "5Dqe7LwBrk9SRax8yTgsTEmfFpyPYdxvMA9LywMMEMTreQXH"
            },
141: {
                address: "5FCtJtyFor6KP1D7kP2Yj89LZibBV11FQVtb8vffPCSq3wKc"
            },
142: {
                address: "5DcCKpwafguwePAwDtCDh9PGWDp6cRJTppBcg1qHF3yWx8FY"
            },
143: {
                address: "5E4vrqkB21qEsDSaNXTiAZQnJdd9Zv4VwUbzg74udbk6BAmQ"
            },
144: {
                address: "5FdQuPmd2efZF2D6JWY5nnbhjAkBTQY5qHw7JXSr8FLna6Aq"
            },
145: {
                address: "5HTg5tnp7d89Kc2TAvoWppCDhqHRoLX6gSL6XdCrtezxKZEE"
            },
146: {
                address: "5G1sFgExsjhpi2LRuecDvsafP7HuY6VQx5djMGvgfTnL6A3U"
            },
147: {
                address: "5CgkYKoYdbZ28GXAbyHsNQKxhys9b8SdPA861GPyjbZcZhCX"
            },
148: {
                address: "5GzAkmvLyBSSJjiQKAA6iEM7gE3SwtZV3tzfHSU1yBTMwLuB"
            },
149: {
                address: "5GpgzfqVatKNquZBxEy4YStnekUchc2oPdFepRy2jsQAhMNn"
            },
150: {
                address: "5FfHDy7KdkQMJYtMe7jqd1HCxZ5s1SFvXURMF4QLsLJkijS5"
            },
151: {
                address: "5F4xTbZHtuqrK4Mc1XYzJepUtcRwvGT94zq2wrZFZVED9QJH"
            },
152: {
                address: "5CJos5JsP5PaSPvRKzuVQZNQbaeqPVXyPF5AbDbjixXS5MMR"
            },
153: {
                address: "5FATeDDZTTeQb4YGVhPQordhkZrPcy7jGdRv9rcFy9GQUkRc"
            },
154: {
                address: "5GRQMkS5SFydy8tZarp5yr8wK7YBWXAGnBoMapJUk6vWgU7r"
            },
155: {
                address: "5GD4Z15R3gWYzvChZJ19wsNbw2bSEVBZmkwRY6vUHo6pWXAu"
            },
156: {
                address: "5CBsSkbagZou3MM6uyJcjUTvbjQZ4pU4yU6L7TCxjWZUE9d3"
            },
157: {
                address: "5GnB4dx2VMroZ2pz8ZMtgWPa93LJ9wLv357KZbGyM1UwHnsE"
            },
158: {
                address: "5GeeLSPMZ3YXmAmwx8Xi91vwMVLKagPUnjU5TCJ6QHKf4qW6"
            },
159: {
                address: "5FLTatKtQfueNa67DWbsRS66PvQa7YVdKJEjiq8MpVB618hk"
            },
160: {
                address: "5CvEFcWJx3DPpzFjxvxsEZd519C4XjsjT9HEWmivn18hhwbR"
            },
161: {
                address: "5EVo1PubRKW8VMP7vba5gSBfCUUJ2aRZwKrut2JXgDPKpcnk"
            },
162: {
                address: "5GpY2qTmiT9DprDQ3zNcR1WhPQ6fHFBfeybMTGNqhfqf2awu"
            },
163: {
                address: "5FBEYsknbrdwYetTSjmnBcUVFnUPPVdSwaezf6Q3noEHKrZZ"
            },
164: {
                address: "5FKVMgXeDW1SSGe1JF4YmUYs25KLNtUVFWH1MzKPXhaTTEdC"
            },
165: {
                address: "5DUKK4SDyHFPE59RWvVSaCYc9Rp43FnfUP1e2tKMJ9NiXmw6"
            },
166: {
                address: "5CmwhtSbaxmifd3yzurD4AioeWtaJoHX579E3YJv9qxbnYbP"
            },
167: {
                address: "5DwZDwL32UzKxEHQyFDjgDTBspgBcMohTVdpnjAARxUgTmJ3"
            },
168: {
                address: "5FQBEfoFyAMihnVMZeFUAzEaack6iTUt5JFzhtzzeceEscYy"
            },
169: {
                address: "5EzwBtSktomGmSEha4babjDWeEyVxpat68XXM35jfQJLqH9n"
            },
170: {
                address: "5GRUxttSWW8Gt79Eooe9gXEermgtrfNog27Mj4xAAnSkjtFk"
            },
171: {
                address: "5GyDA62JiRx977m9os8YNnqYGp1xAWS5aktEttyQgof55qet"
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