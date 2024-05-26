import { IChainDeployment, GAME_ELEMENTY } from '@not-a-bird/model';
import {
    registerLazyGame
} from './use-game';
import {
    createPolkadotJSGame
} from './create-game';
import { loadGameChainWallet, createRandomGameChainWallet } from '@not-a-bird/game-chain-wallet';

const ELEMENTY_CHAIN_DEPLOYMENT: IChainDeployment = {
    rpcUrl: "wss://sionet.siocode.hu",
    gameContract: {
        address: "5FkeN9jbDfX9rZRrthxecE6D24jAq1uBmtaQhfGmUrZK28mY"
    },
    elementContracts: {
        25: {
                address: "5GXwcUKQCSNQe9dcXFGsvrYNcnyWu5tej88NXpZNwPBmFKLu"
            },
26: {
                address: "5FUtMD41zjJ2JJz3KSrWV5RPmUe7YdXAaWZ51BkyxSRVW8he"
            },
27: {
                address: "5FcarhRtttgaDqaFdTmHdMrGyTD7hAVuiChnhNc4xwXGcRG5"
            },
28: {
                address: "5HeCaFW1tz7GVhLBFF7AMRn31PV9UZq2aHdNsza1Ax1DEnkP"
            },
29: {
                address: "5GGyTaPf8tL8ACNMDWCY28KJHKbUmwYb3mBaruykx71tqY34"
            },
30: {
                address: "5CvLucMasCKfXvd6E1GCAz15udyTfYaMBnpkWUaPzy6kB4a3"
            },
31: {
                address: "5CZEgHv14ggGZT7QDDxn1bLS9nPWsALoHhF9garKn7qtfNiE"
            },
32: {
                address: "5GidCNatfSnBNoWK9mCwCtZsnRypejLbPeB5eXW1M4o5p3dP"
            },
33: {
                address: "5DvSPmqp4ttuc1wt5rt1CPfNHrSgRc71pdRZePWMHtsjpV65"
            },
34: {
                address: "5Fo7aoJud2siBbpfTH6vrEoxuHjunizJyaqW31JwDRkFgusL"
            },
35: {
                address: "5HCudzj2mamfQFXaxfvLMkjSjAcuDvQUKDvyQAQcyE8rGuXC"
            },
36: {
                address: "5GoR76dzMawzAbxuaDi3dNJhG9EHWrbgUB7E5eopPabgjGFp"
            },
37: {
                address: "5CQEQGMSnx7ptDoe8nDKGXZjU5MnbASxC2dBxvrTGw43V7KY"
            },
38: {
                address: "5DaZmGJV8MUeLGkPFPqS4PoSi3mAbVxb3s6hr47JQwBdgvES"
            },
39: {
                address: "5Go9fJxqzrbexUKxuk298vMbihqhpEzqQM6WALWtoqgdPy7w"
            },
40: {
                address: "5CqjuSSWyfMF3drakPEW7b2v4rvoL7xhXZak3a9h2Z8JoFah"
            },
41: {
                address: "5EP1dkB7x6cT7JjK2EhCqbfLVnAB8nx3rRerGJdubMc1D4hn"
            },
42: {
                address: "5Ca1fvCY8DVfPPhi3ptMJhycXVgZz8sa3VjdJqseZRbdzHkr"
            },
43: {
                address: "5Csws4uprTGvuUAbznetCzoDPHtQcCsQTPMsRhKKL5GZf2HY"
            },
44: {
                address: "5Dd1y5bcnQfCoen3Zi3cNkcfxJJCQzpVtWTokF1sdR5S2N7y"
            },
45: {
                address: "5GUTgc8tde9jkBJi2TCCTsFxxgAWD9HS2A7gWnnmDveFmd2m"
            },
46: {
                address: "5Gu3odUBUX2RTMKwcJxZRtMPxvRn2EzwjU8nGpq4m6WpJfw6"
            },
47: {
                address: "5CBkvQsWKDsASQe2CChtWUQinGjBPMfoodpCKSSNJFxkTWkE"
            },
48: {
                address: "5Fpf5wiXrPe2ec7R4qsV9E3bULUuSzhYCrpBe5H3JGRi63w2"
            },
49: {
                address: "5F4qjibF8dNS9Do25S5FWqNAL4jkMZ6DrfnvGkV6MsAspwhj"
            },
50: {
                address: "5GBnr89AS1kFRkBPBwREb58gueYfGXRNTJLWekaUZ7raeaMv"
            },
51: {
                address: "5H6kecZgbrgz6NmAWWLPhzvryPDuNcYc24oEcNeX2ddmXfJY"
            },
52: {
                address: "5FVn8rGtjZx1u6b3fhfCT2uxnzFrd92abHzaBp1ELjJhCWLf"
            },
53: {
                address: "5D2M14ybbscnBWt1ygXUQqBgDnWva67n7pN94yDLGR4QM3Wg"
            },
54: {
                address: "5GDJGk5aaK2t4VmmgNJtcZ2zGCp1HdRHd64PTgyBJMnFcx1H"
            },
55: {
                address: "5GJr5PacJzxTUPao7TAazCRiUgWchUSe6NFX5qxojcATFq8N"
            },
56: {
                address: "5EuEZCnBSZP5AoknHVFMC6LHPeuQQpstJN46ycTkfDQeTXSK"
            },
57: {
                address: "5Eyb8tjXR6evALGBQVL32g97xS8EGQ3yHDbuGxUn2YCe2gne"
            },
58: {
                address: "5E3ovRzNPCrZs5VeJ5XRpbfjVN5vZkyZ8kwsyd8DRtE8FXEk"
            },
59: {
                address: "5HC4JB9uvmnGhbJSPzugFSgF3YeTzXRbeCB9He2MHePwKbvj"
            },
60: {
                address: "5DPzg4yBtcHrUwDzDVE9NeTxeAKB5pU8E6thYC7z3KrY1E2c"
            },
61: {
                address: "5HkjpMPByFR9TXbFJMSZf6TVarHKfi3CDdiaXVQCJfSsy27b"
            },
62: {
                address: "5HgWLoDRU7sPCf5xwsKadYFvRSxA5bgikFGmfaDTvF2JwmmN"
            },
63: {
                address: "5CKV4undzHHTuwWRPvf4mYgbJRhimvhRvuqgNdnRWFhCs8R2"
            },
64: {
                address: "5CL7f2cmbAW4YQSekRuV5wM3RNRGxM5zSoF4nfWSaTRzLfT8"
            },
65: {
                address: "5Gqa5uMsP8RPgn2c6tqC1zZ8WEYjkKdB7pmcZ3aqEv8S5rXW"
            },
66: {
                address: "5FFrJ2TcTPN1ocNxBTDRK6vKbokSirhjbYw65sK1qJy4H1gV"
            },
67: {
                address: "5FmRRpNnve7p3qoAWE6SEamaStQy2CgNW5rBTJ9VgYvkQAAZ"
            },
68: {
                address: "5Ed1oUu8MW1fzaXymMXJoiGF4zMzUbPaEeNDY4Qi5r43Qb6y"
            },
69: {
                address: "5FnqSrCMYEAi3LoGeZLum9w9dTYUmD3p6kWUn2EKE3hT9MM4"
            },
70: {
                address: "5G5gRUncAxqQnnKkPdCLtoxQH99SpuYx6C6f8VNQDN3N7Qyw"
            },
71: {
                address: "5FfqMm2wz1iQTseLswFHHiLhvhaaLHnV2UPpt4UGhUCKCNor"
            },
72: {
                address: "5GxPp8EugK44gJyJonPxUH3k8dJqK7VcEviVaHMHEA64J9hF"
            },
73: {
                address: "5Dut3PtKBXqCPjq9TNT2bgZj8juMrFsd5LTx7h44q4GqL7pi"
            },
74: {
                address: "5EnGSVyRQqDpf5P7j5qrGLdiTJh2KRRuKdNJwwYabqAfC1Pw"
            },
75: {
                address: "5FSpFCpYM1QLKBFn37MA1CPVPeaushx9F8rJC333RxayV2Bi"
            },
76: {
                address: "5DLVxiiMDYjdK3EzazQJrrsCDXjhpipRGDzNfgUZv8dGJDH9"
            },
77: {
                address: "5FNWFcQuv2QNYf6LDab5xsaQ4pEz3tbbFcE7BUeHR6DZjN4U"
            },
78: {
                address: "5DH8av1cFnmSQ5ssDQ78dGhY6urMVwmuj4UgwKoCvVRcZ9C6"
            },
79: {
                address: "5ETESgbMQXzqLTchkz1fHGU58oGCdqszNCMkSvBX56qpLz2H"
            },
80: {
                address: "5DJtXkrgck9WUUypXaUFtyjLYb9zWtHrjcvCFHwhuFWiA4sT"
            },
81: {
                address: "5HJS7Z3U4Uz4hnJuoLk3Hg9sWLgFeFzdakkHMg8TA5DeFn9P"
            },
82: {
                address: "5E19UNU6rMJPH8sTNQeVksW6T9qCYFthKNgsxhoyUjSc19sH"
            },
83: {
                address: "5E4xu1HHWgQ5XvpSjEoZNtEeFdqwsPH87MhSBP9gyRpuRmca"
            },
84: {
                address: "5E5Nitn18wkk8sfLQqtBehkUVjAFVN27pGsybPDv2CAaCjTc"
            },
85: {
                address: "5GquvDaDfm9eYkD1gZvGs9f3LQsay2quqTRSnPk8FBkqHd2X"
            },
86: {
                address: "5CZ6x19uEXbC2YF45XCZ36nue38b6ehvD8cq3Y4WFk2KqYNn"
            },
87: {
                address: "5HFZNjevepLrvWgsq4t3MKTRJth1JNfdSsg7TRqYVsSyGaje"
            },
88: {
                address: "5CHwggM2FiYf68ix3DomzfXnDgn1jQSiW8V2b3TPkG9eLttB"
            },
89: {
                address: "5FWmbrm1Y7TkEYRFe3oxwr94p7yFwAGD5qrqYK4E3TwRLJeG"
            },
90: {
                address: "5GFbS7eNy5MHr4HizjNFMsoq6Wysu776SNtzAHien3DhLd2b"
            },
91: {
                address: "5HhUrwEPyGUsLn47veFiAU4n4CUGVvxvCkntfSwaNSJyCZoB"
            },
92: {
                address: "5FMzqE8fscrFkk9hybevVmADCwzivwGnvYegZSwAZB4Lcv6V"
            },
93: {
                address: "5CYZvFd3iV6XtFHTBxvk3a9qqew7vfHHyMbroNagmmAhd1Ue"
            },
94: {
                address: "5DJDtspSmLvLbrtd42yiH9QfF6UGxfCV9AiUUEr4UzXMW6iT"
            },
95: {
                address: "5ErKkiEwrbE3aRMiGy6mugzv1gRvaJBzQSz1UtAzR92p8Dt4"
            },
96: {
                address: "5EDD4TMSSc9hrSEfx5PeEFeXLkHGR2fGzLWwvZtUNSCb51cX"
            },
97: {
                address: "5FixZvMKM51fVbLcYgL7EpNb2vB3tbLuLnSq4fEirpdAm4Ev"
            },
98: {
                address: "5D2u2Y9BB7zYGFccppvryoryFQMygXai9vakDVFmXeYGJ8hK"
            },
99: {
                address: "5FonpQum2Y8n27dEPWJq6WeFuc3ysUpFfNocfNPk469kGRf8"
            },
100: {
                address: "5FSHdQFQ81tqXZn1NCwP9QucTzfQexUAaEHCUxkrjsByBhQn"
            },
101: {
                address: "5CjMLyjh95xC1pJVMkJt1yuBtmsPq5pNv6gC9RduA7J3LQb2"
            },
102: {
                address: "5EK6xt8YzRvYyADapMJD4GZxSsRSwTzDCKBu8boaS6Lrz36q"
            },
103: {
                address: "5CksPXfRoSnCfbUjdzM5P1RkZyBFgPmp4KE4W177ZFM9URDR"
            },
104: {
                address: "5FUkV4YAs8qgP2EAjyQCynRGTq3ef5gdzSYr7F29C4J1Jkv4"
            },
105: {
                address: "5FFvYm6qyMJV1u3USRHQ6zHMDUCbrydPQDWv9E9NbsDueP7G"
            },
106: {
                address: "5Gn7MQCus8TxgdEFZzp6RKK2gBZuM28nh59Rovs859d4tajD"
            },
107: {
                address: "5HohLMHoE2CJoSUtWJDCBb633NEkeVpm3S4f6kciE4skfQd6"
            },
108: {
                address: "5EiaYwSybHfzKVS4tRxGf1brxJ4ofoySyZMR7CfwWhzfNUCw"
            },
109: {
                address: "5GCoXnr7dn5jTG52zvYRJ5be6827qtim6JeC8fJAzeCEjcg3"
            },
110: {
                address: "5EFUsujLZxhj5ErFSPPXQCfg3k83BUM4wFxpv4pcbMLXvuT4"
            },
111: {
                address: "5ExFvkfUzmgh8t2U1h9Log63oUwMDU3RHiqgY9ZNq3cgY8L9"
            },
112: {
                address: "5G4VGmLuPmeqDh63qyH3YZutjyZkyfzYbRXKxLWLLMq7Mdvo"
            },
113: {
                address: "5EgGxCfpCgiVi4YdZkBYHVcXei3AXU1pUqPmK7RXhMaLAUuY"
            },
114: {
                address: "5DbbSwGevedAPqsnAb9fGa4gPjPBUTWPvFMMLTg7xpC9da4u"
            },
115: {
                address: "5GVvxGu2eD6p6BYqW6qc5qaHmoBxJy1ZXdKMAaFjVSeRDtGm"
            },
116: {
                address: "5Hkd1TA6qudqRm1US6pp8cgGdpMDJCYrWaFKPrCX8GiDeEsj"
            },
117: {
                address: "5DrFrZa3ejcSdB9aw3UFrgsMTvji8sbLfS1aUp67XNoydXoX"
            },
118: {
                address: "5FSGSaWjqjPNgf3FfTApYnRjLEMMpAmBiVC7kUeXf6yqn9nc"
            },
119: {
                address: "5GtrEmUC9MKAtEfFBjHrVsEUDsfHeU9XjwF41kpyqJgKSZrP"
            },
120: {
                address: "5Ey4rD5mbUQxq4yqLxpwFiPYufCw8gR6jDryGvFq4gnrkaYt"
            },
121: {
                address: "5CRDUAin3jiC41C5z4qdSNxGx6i4NPXj8K1jF2mZExCakGKt"
            },
122: {
                address: "5FFfAxYB3wPhnVurQGcmc1gducMqeA4eGjKtvTr4bci86Ud3"
            },
123: {
                address: "5GmLCvqiQXNySh2SbnxFh4aFg9eyoCRruNUKfjZov8GbLdRW"
            },
124: {
                address: "5EcfrgeyAiKw9rgkvDN8DSDzWdSU4Es3gsm24F4s3iWH7uVG"
            },
125: {
                address: "5CoFiUQdcoRCwfgLKfAjNz3LtYeYUC6PHiWRT7u2JTRHtvtD"
            },
126: {
                address: "5GDR1U5nEAa7G1wsoGny977i4GUyuE3WR1Y5vmYuSyZSa4L5"
            },
127: {
                address: "5FoKTAWQakb9zVf3TEhkdxGxqBEo9X4Cxq9qoLP6gMd7w6RG"
            },
128: {
                address: "5GBJYYLnLucZFYmKY1TUBKDDKnGWSNezb3za4e2w66GHGkHe"
            },
129: {
                address: "5DMrgToFGBqAWXrmQ49zeDRZYxqLnFQi2GFe7YdtxfcP4yM9"
            },
130: {
                address: "5GXo5TNFYwwfUomrdbmZhAvGFBWX9DfemjU1d2ZnxjsHd8pk"
            },
131: {
                address: "5Hbz7x8meACMZppV4FcGBKAX4LSzVbTUc681JKdHrUc2XG3d"
            },
132: {
                address: "5EaByBPCj5TbFnobWMuCwy4UH3DjweX2T9m8zN1pgoEH2AKS"
            },
133: {
                address: "5DnhmuGKoxzjPJC1BgSnFSZYTAUCZcGutNFS7g7i8Bpd5cRS"
            },
134: {
                address: "5GE38FXU8YuJ7sjWgnjZUtids68x7Eh6b6zA8VJfWv2pAMVd"
            },
135: {
                address: "5FkFDrkJCGpdD8AVSLPYMXAGVX6XMjZnjAMAyamL1rg2p9Wb"
            },
136: {
                address: "5HjepUgRvCpXY6F9MjrH9uQBwCijTn4c7KsreS2c5dxaavjZ"
            },
137: {
                address: "5EPHWoAjPejhqW3bbDpCg4Dr23JVk7ix1qLqUxNsTK89z7c5"
            },
138: {
                address: "5Hg3qzesTtwiTWyPuRzXEBKKj9z8pi2AQ5VgssfYjNjCsPFS"
            },
139: {
                address: "5Gw1k7EWLaE11DHyPmM7pmWF6QBUZThJYcM6hbjkvimDhHi3"
            },
140: {
                address: "5FQdhSQmkajXVHKd65bdaVsPaoEsdvUcXdBrDm29DdYM5NLW"
            },
141: {
                address: "5FCDrM3rHF24hsd94LuUssivxuPfNPGuM4SYEP9R7ZKMX2bc"
            },
142: {
                address: "5GKNiRCYqbt1uscytuoKpa7iz2K8XYBxGBpvemWdUmaxriPa"
            },
143: {
                address: "5GovMRTA1QcRjH7FecZScyWsez6C7Cmgff5c5Rn5gQsgsM9W"
            },
144: {
                address: "5EYuhEBMUMaqUHnqRSG5gFCCSoXCBfmjAfkihpjCjWeGcDDq"
            },
145: {
                address: "5HL8upZXiqQAHAxGRgAs5exhrmvEfv8V8QtshjsFvo8LSXXx"
            },
146: {
                address: "5FWycoQ9GsQtTb49cLBVXpZY8kytVNbGFpf8xi695jtGasdK"
            },
147: {
                address: "5D6mFgy3CpTSGBBZxnE8SiZBsm9bwPoLE5grXkTLy6UyfG4q"
            },
148: {
                address: "5GYhZ54a6De5SW8hQYK8115QJuqLKP574nhvZdQgej3RrcEi"
            },
149: {
                address: "5EexvYniymbfsHjWqLjF4G9sEiBd1jb6n3ZvbSfSufvsULUJ"
            },
150: {
                address: "5DcNxKmkEktzSTQqzRJyZPGNGBTZeX7b7ySdq7T7vMUShVXV"
            },
151: {
                address: "5G94i95j3npHWEx1kYVALQaggpSTgbKrvyQnEe6EoQjVKDsL"
            },
152: {
                address: "5E6sAUQsPb3zZHcxP5r7jqtDrYTVezWbDTTDm5vtLSr4ob6s"
            },
153: {
                address: "5HaCnfRRo7KyJ2ZFKwk7JWC4dbAozSvh3WPdeDcMZSzdatt7"
            },
154: {
                address: "5F1stGUhi1vXHWkqkVmH92hAFiMEBBM8hBhEXk8ukcJHjzyM"
            },
155: {
                address: "5GxkgHoPJedp9wXthmtNPY9TUbdAN7bkwwtJh2nZmqa81wTf"
            },
156: {
                address: "5FjhEGp4ae8Vk3WRHhfgDEguC5T3fe6sV3sn3DNiDupqYRn1"
            },
157: {
                address: "5Cb1w1TksMzovKRPtCJ7iXrKpQy6vnjaFoCGKnVCfceeP714"
            },
158: {
                address: "5EVHjABTRzh7MYZiKmvSQRbd2aw8L8TFHV3oswgXQB5KQ6Ub"
            },
159: {
                address: "5DirC8B43ndCUsSs6m6xgW1ZkqvvoaXW5FTqrsfFzE228qhg"
            },
160: {
                address: "5EHsybNCD2ukSsjpobZTYMLBZF8eepxdsDk2RWYiFqavKf5h"
            },
161: {
                address: "5CVj8YU4NNWpGvp3WLUdNxKNiMJKFQSuXmNtSziQwFTWfyvD"
            },
162: {
                address: "5CXhpB3axAkbJ3ktuyjGtY4GFHa2kBzL2FpnhAteoAv3mhXQ"
            },
163: {
                address: "5DkE2tLdJTNARjuUD73nregEhT7XAzXML5fJ4rTTbSQuZ2ij"
            },
164: {
                address: "5Ftt8qE6yXg56m4R8tw1JBZuQcBiiDZRgJghBuXt7P41KG4o"
            },
165: {
                address: "5EGZrBvrVkjuHw5BpkhNaXbqqnbyBD6zcUzKP5Tkx417uULF"
            },
166: {
                address: "5FhxHwRRxjhK2NXgTjEsY9ZA9DBVo8U6YnEokxDaf8jhioV6"
            },
167: {
                address: "5FmDSb6teLJgkMGoPefE8VhbL1TY1w2UXMnuWtJtkfBbR63m"
            },
168: {
                address: "5DAEPoJL1sToVFaiFMdsTVjxzCzzsFA7UcZXzmZEBKYgpFeq"
            },
169: {
                address: "5GpKCe4ppYr6FHVPDLTJydMd4cmPNmW31dgKZugjeMC8km56"
            },
170: {
                address: "5C6YLK7jDkSupo2TMgshELEk1GUnK2yGybBPk9qZvQxF4ArK"
            },
171: {
                address: "5GY2jLbD6veptbV5mEtUXnFkTmv6djWMtckbkrBj3Aa277Ls"
            }
    },
    content: GAME_ELEMENTY
}

const GAME_CHAIN_NATIVE_TOKEN_META = {
    name: 'SIOCOIN',
    symbol: 'SIO',
    decimals: 12
};

registerLazyGame(
    'elementy.polkadotjs.sionet',
    {
        name: 'Elementy',
        description: 'A game in which you combine elements to create new ones.',
        chainInfo: 'Deployed to sionet',
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
            suri,
            GAME_CHAIN_NATIVE_TOKEN_META
        );
    }
);