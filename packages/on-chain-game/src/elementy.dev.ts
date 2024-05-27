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
        address: "5H35vGfC7qbCsroQ8mBMUpcADKf1b8hNiR57cgQEBA9Dg25K"
    },
    elementContracts: {
        25: {
                address: "5Di667XQAwSbyJmMZoFamBHkT9rngdSb58kivJRLp9ChBBvz"
            },
26: {
                address: "5HEAQqeGFQJuymuMcj3ShcUUCUQokagLYVb6BVqL6FByKrvT"
            },
27: {
                address: "5CH8bU7Fte25WxbeiruqyJtSJigX6L3BykXu8r4RJshaBebV"
            },
28: {
                address: "5GEofc83tiuN4FB2NP34UCUSksSBSVxyNPMPLnGpVrPRXgzq"
            },
29: {
                address: "5Gt6yvpi2rbzYocSFEby3agpDxGevH6B7Gw1PovdmqRirVAP"
            },
30: {
                address: "5CsNhACdEHaNLvY4HfTN1kCkw89gTzp25KpXWiGHjeM2shLT"
            },
31: {
                address: "5EKis7Hp3JeyEujxjWPXpcx2XcPmqrkw24bwVhF59YeveM4t"
            },
32: {
                address: "5Dyt7NsyXLfMh25g7Etym8HVdwdMGg87c6hhZYyTjRrYRqhB"
            },
33: {
                address: "5FwffEKSVxq9ABLEk6k9B7ZHEvvFxH6DjCWzPS89dYpkyfCZ"
            },
34: {
                address: "5CotvVAGN7kNtF9eAQHxJyTUu2k1MXfxLSsVxDuJD4ZgfMvd"
            },
35: {
                address: "5DFqBGCYxkWM7fdH1oiCnEzRUBTF2AGMTiWbMWSqhQBe8KGV"
            },
36: {
                address: "5CbjZpdmSYxdE8n8oqfiQ1uETxJFChzPzLuPVd9AQHV4UHBH"
            },
37: {
                address: "5DARAB5EsMGzSg3trFTZZbCmbAYxpBx6a6QMHa2oBydoxgLr"
            },
38: {
                address: "5DFnAJaq64WFvFyy4G9hpDykZHeh6P2mXYWqgu5JHLVJ2oDv"
            },
39: {
                address: "5GxkyRUU9zM5JSRD5th5QzqdqWF6A7HZTQGsgZs2xgsFJMKQ"
            },
40: {
                address: "5EKzEETUAien3MHwmP7jDNbXvAfcWyqEm9c7q74uzAMWStS7"
            },
41: {
                address: "5FNomJ3UtcJ1y2qg7nX8GnbxRdcwPJFHUmFcpB6e9cQiaMDS"
            },
42: {
                address: "5E2NnGP8ZtFHZPL16gKonqLaYmG23g8PQyBUnWibWUk1dtAp"
            },
43: {
                address: "5Ci2nkRqXkWiF3cxtSJwu5PjPtZY3gd9JQxkcTKgLFRm8MiB"
            },
44: {
                address: "5Ch15iEW3pePSPF1vLuGbTDPe11YdST2FARrPYeUT9wJ5vM7"
            },
45: {
                address: "5FeiSBfXfn5iVtdArF9X2yD22mjhqzy8vXtbNMJKnW4CAiX3"
            },
46: {
                address: "5CxMpSVuC7J7ysg5UHNgpCNjtXNBDhZtNZcYs9CMjHEycs6o"
            },
47: {
                address: "5G4NXVdsZttM4HHaUbPBHv3GVhZHCtwywf5F1mfuS55BWuek"
            },
48: {
                address: "5CkJWkTHLuL9oQWLEDsLR21Re4oT1vmJo6c1krsdhQ3TMZSZ"
            },
49: {
                address: "5ChNWcxLeePSk7XXRaJYTvGyB3GUWwnWeW35xAatwBESqCCy"
            },
50: {
                address: "5Ghce1j9RXubBG1X1qhnU7X53gbfXo7Ef4zfBL8EdTfnYhVn"
            },
51: {
                address: "5GAJwirWopJhUp1T9G6s9se81ZuuGEL38VH8YVTjqY86KgmL"
            },
52: {
                address: "5CUh3X8gFeGfYqsmp3XVGrwMiQRn2LH2cykUKUBcdtHvEyHZ"
            },
53: {
                address: "5GKYskqv9jHrgD8ByeXM1LyFUK4nqZc5icQ3XhZzJgqhoeWy"
            },
54: {
                address: "5CDiw2YZkTNbXpSTe8qpX4Vq7BfeeLNNZM5c9xjzhyLurReZ"
            },
55: {
                address: "5DEyGJByLvW5PeBAtGQLcYtcx1KgDzCu3ohTc2XzVFQU95DQ"
            },
56: {
                address: "5GqtWqKXm8P5bMUsRXaAgZw9kNVj3RobK2TzvK5k9KRgickP"
            },
57: {
                address: "5DgW1TEk3LXhQrG44oGkjroZr9QHKvNzyNzi1NgQ1o84EfX4"
            },
58: {
                address: "5EoRskSQ7qaa6FDutZ7RLjzHXPcjBH5AvGKbahndErytVMK5"
            },
59: {
                address: "5E5Kn2UPdLADtsrLgUJXWuynzzagFSUfqSB85UXQcVBS6GcN"
            },
60: {
                address: "5DHGAAEjhwB7kudxo4ebU6ZFMx7h1rK72rpZq7dzshJJMybE"
            },
61: {
                address: "5F6LtKsZ4yyEe8BLMLLeqpc2vu6jPKTK79xEzwsMStMUS7Sr"
            },
62: {
                address: "5HFTYwfAczihdgsKcMfQot65PKzy2kXGEviYvPF5ZpDcS13u"
            },
63: {
                address: "5FqwqiJkNok2rq24mFayJq22jKuvT6Kmm4UADwcqcpTvJ8Bd"
            },
64: {
                address: "5FC22FEvaTQwZuBd4Q1oXgfnucRhu2hyMGTpaxvfLUFcNtfi"
            },
65: {
                address: "5CiZCy6o5daYH3WQg2p8zZNM6zFSb9iLbK4e9QpEEUX1TmMX"
            },
66: {
                address: "5FjLZ1UEQxBo41SburcHicUq654ZJnBpyQieyyDpezE6WPDi"
            },
67: {
                address: "5GCsnsBAfErnbBkwSZ5Zdbpuq1tnRTt2Qu6s3vemXMuCai67"
            },
68: {
                address: "5EUHGrhFfHRd2G7sd3JxjAKoFWJL3ctux5RHQqPhnXb5y56u"
            },
69: {
                address: "5CSc1onH7xrYjdMi2SCNjodk2qvg5wFgfdRniJe2Y8Axbeqw"
            },
70: {
                address: "5E3NdkPShU6vby8o64QXivfNAJNPnddCXQhpxH3QYgS1ZYNE"
            },
71: {
                address: "5HCjb6R4NsbrrVckWw9PNXSUZ55q2AJ5vE2iZetXKqjNhAPP"
            },
72: {
                address: "5FyaueXNgV5Wj7QPdjLnZUZpwz3xqBETamgVc7n9oKaHWPMV"
            },
73: {
                address: "5EqHqSA566hLWRKfw4yjFXuD7Zys1Cd78RXaXMAgtQo7HM3g"
            },
74: {
                address: "5ETWqwgR2mE98hXx6piUH8qAPYve26JJHsDuVDRZg181hpwd"
            },
75: {
                address: "5GzfijFsqdEuLfpMbaYxvYcydWiqd6ZFcx8jgD3JQATYSYQx"
            },
76: {
                address: "5GGATiue8Qq6QZU97jQT8VSJu9hUCekbohyKu1S3ocvZzPXA"
            },
77: {
                address: "5E4TzkQc1XHD2couY9Jb27JJM5w6Wm7ZejAiVybCxZ7fdpSF"
            },
78: {
                address: "5D1YTtipS8D5JjeXeaauqJRnnsQrk81mTRHQUWpErNcXRjxv"
            },
79: {
                address: "5FZMG2kqFS9aRj38TdigjooW1dUY84db7iqXdAgDc1tBWofV"
            },
80: {
                address: "5He7pwTyMc3CxQMg2PGRrTqa1SDFc2vJNwsUhkL3gzgS3Bzx"
            },
81: {
                address: "5EXgVYgejP3uhxpwyQ1s7o3aFgtzhdZp1rqeqMNs1F125ADb"
            },
82: {
                address: "5CiGsmmyTB3pAzg5zbfio7nabBP8GSbx1UwzCz65PKZQAk9i"
            },
83: {
                address: "5DLkHs7FcbTHj8QL9o91TiCz2c9w3ziAqprnywRxzwAZaFF9"
            },
84: {
                address: "5GS5jKU36EdVN1Y6jfL1Vw1oPLV9iE94LcDAR9WzqgVdTuDK"
            },
85: {
                address: "5FDwPZhzsbBgbzAmGSdsfMQZEpTkwK5x1SKEoMsjQS1A3usx"
            },
86: {
                address: "5EPdd1hywQ7EFBS9CMmLQgxjPJRYVGEapte9N3tT7F8nu7H6"
            },
87: {
                address: "5GdEUsK6dFmx5xCwU6fVWLU91fRpcRFf21upK9xJ6wo4tuwU"
            },
88: {
                address: "5CWRakeV4Lue9aXtKaqSRtaHXtC1N49ZBpNRmqXHUptEAmfW"
            },
89: {
                address: "5E1wSvYDxCQ1PW9fe3ECk8dqJwb5G9mmZWoR9JhircTKt14H"
            },
90: {
                address: "5Ge5J8UtZ4kjqKrcYBBubqsvkshjnhPWCBcFDn19GNgtq8Xp"
            },
91: {
                address: "5HKopVYz3hPaCfCEnN8NK38mu7dkVsBxFHASgTJGe9L2YukR"
            },
92: {
                address: "5CNQfWrqUAbvfXaNFLYusGzjntzyaBtBYyrLAch5AdhuyWjh"
            },
93: {
                address: "5CXxFC5H69FtvP41C4nkRRcNyHxuEfeHHsf5pA9oW7qZqtac"
            },
94: {
                address: "5DcTMymy4Btb73dwz5y5uRJQWSfUvhd6aX9VrBN5QkVYYYEQ"
            },
95: {
                address: "5GHSmY73DCDPwGCWYaVYLGvu9SXCdNN2hz9dmza8FpLARknj"
            },
96: {
                address: "5EjZsNVitM9BN5ARZuXzTWNQ4EHvsJMG2ysgSwpcXGf9UXJX"
            },
97: {
                address: "5H45mncgQWksgXyds1GzKMxempNryTc7saJA5CSEVf45Lw6T"
            },
98: {
                address: "5HeXBwYz5kwntijbvRUUbV5aeP2ssfuaNJtjQUD2Uau8YwGe"
            },
99: {
                address: "5CgHnFQRAJMWyrLYCbUw14VPQ7u56msGUaWxB3sMJi8honfe"
            },
100: {
                address: "5FdnTs3Ct87knYPokcYD5dSScs2bs78aHqzE2qVveQELXcxK"
            },
101: {
                address: "5Cw4Tbs65pBCi3WDWf3Umox7a8d1dk7jrhCuXPj9KKgnCvH5"
            },
102: {
                address: "5HU2LZDaftoQLvy4kQoyNUBw2h7q3bpXfh8P2Q7LzNaYXp6j"
            },
103: {
                address: "5DjXuFEgCR4UgW6vWJyJiEBmRiB5LHmS1iDoGqn8pbEXa8Px"
            },
104: {
                address: "5E8isqTqfwGNYJE2FeqM4CboK9nvbpoMLzJiSnxn4TxueA6c"
            },
105: {
                address: "5GoASaUt3G5Z1NtsBy9M7r9QC8MfPMrgvxCqZJa67BxYfcYn"
            },
106: {
                address: "5DqpNTWrgVd1Z6cMvimwiXZN4fxZuPnZnVYiSc3i2qAbL7Ji"
            },
107: {
                address: "5FPPKMPSMUEBYocrSyyTrkwueD1FCmc6YGoiEa4PQab3wQsp"
            },
108: {
                address: "5HRbHJxwgauV5eVsAkbf8AerMUeZi9F9cpmJKnewiXLjVr4W"
            },
109: {
                address: "5DivaPRxwitB5EfxrpVM5aawb3RjAVLBHqZXRFXrJ1hvthLi"
            },
110: {
                address: "5DiYeQsjpkkiW73Zqim8nojbABQu4EzkBnrVJVGAYz41VWxd"
            },
111: {
                address: "5HQBJFNyCXUJVPNmbVrCD9GxvUiYkYmi4qgiNztnHfVyE6dY"
            },
112: {
                address: "5F4DLZg3E4bG99AnovpKEpm2k3X1UnaKMurPA66LJeNhyGGC"
            },
113: {
                address: "5CJXQxdkPR4UCbraLR7ySrAsPFDDa3MTz2WZt6avZdLUVAsA"
            },
114: {
                address: "5GPTQkrPqdt2v6ThGu4CDXP8JTMZicWb36mwz3wqHkDznspG"
            },
115: {
                address: "5Cq49LR48gbpoPLLTHgv8cWzwDz5tuw3jroJHgeUj3heFUN7"
            },
116: {
                address: "5Cs6aYEis5zxsCWeDQjXLn5B4sQURFeMYPF8nMGBHNJE5tXn"
            },
117: {
                address: "5HXAgppv8GA9tNYLiLNxCC6L92bBhvxBRc3vyDXSjcHGsy77"
            },
118: {
                address: "5CrgtUu5DvWbHv6E8m5TrP22LYgCUNPu3QxpgXQ4AdbMC4R7"
            },
119: {
                address: "5EmmUEEzSUSbQKSb4UsgyMAtBggZbQYRawNGmDurj6Bkjze5"
            },
120: {
                address: "5EWwMMds3rVWdQUfCm4UXK2UAT5Va6xHyDQpxjE6FA8gaXFn"
            },
121: {
                address: "5CR1ShbjZGAY5YdCFFH4ijoYS827Lun73VeqEVZKfqXGXpRq"
            },
122: {
                address: "5CokNTnADet8fJwbjMevRMu7XykF7BQzkjJ1EXNHo4QfiUg6"
            },
123: {
                address: "5GihLiAe7CZ4p2Tq7Wvxxfq4TnoAaPuyXkSG3uwYcx6DjVFX"
            },
124: {
                address: "5HkBh85uu7DkieujzHCJ9uzSNiUsqdYFEt3ks2mnpBYkwf5e"
            },
125: {
                address: "5DTfFbwDyCubR6b5oMJpk1ibXTngp28NySdaBw26VKZzd4QM"
            },
126: {
                address: "5G5Rgr9261uvh2JxugHAo6S8JLw1B4hMrm7z6muX1v9usGAS"
            },
127: {
                address: "5CkzirZ69shNc6FNiu732StmXBbPcKwYjH8QEqMQ4hkwE7Kt"
            },
128: {
                address: "5DqATjjccTg8X1Yq7h36aJJENLBpdYHtoCHNsSJaakbH6BGa"
            },
129: {
                address: "5HEPjcDzo1TvyG2GKRxbd3z7uFhK63hXgto22t1mwPg6Vwow"
            },
130: {
                address: "5GzxuyNhSwhY6sqwgHcE9y1gtgsMmxtCD5RpyEFwGd8fc796"
            },
131: {
                address: "5HB7CMznvW8ZBvaCsFdh74RW1dJcgeaUcJzvt1gDTL6bZgiA"
            },
132: {
                address: "5CbB638DgADZV3kqb9Hr4uPztXLWaALkKYdVKSdoUmALBfut"
            },
133: {
                address: "5F4m1uX2ykTRQ4723M7sS7sabcxCLd126NyTAkq4wgpcFsrH"
            },
134: {
                address: "5Hi7iN6NiXo2RPmZrs4ZSbjJKz7CueBLzwce8cPGJ39Mqm7A"
            },
135: {
                address: "5Es9KqzsY9CmCzs3GBJerY1soaGoTEVBqF7B8qeJYjMqq73v"
            },
136: {
                address: "5Cv2MC2L3Pvfd3zcEypdcHyPKGeATs2xinwmQUUX2oi7eev8"
            },
137: {
                address: "5HbvCDqFXTdFHfpxFGx98QK8s2uzSkvQwxt3hJv5dVzAe1su"
            },
138: {
                address: "5E2QZyuGdJ7RnDKe2SoBk4bsJzBuLbPibsxUrAkSBFRc8WJW"
            },
139: {
                address: "5D2bibgWdCSas8ogWuXFShaiBQXZy2VQYD6UDuJHou89emWU"
            },
140: {
                address: "5CXHptvR5dCXiDS2oA9e3uidmeUhfb8nZDQ4NpbWRaoYF5E1"
            },
141: {
                address: "5F44LoxMG9DvbSXvK5xDNzA3GM4nyNn4X3a3zut49zkdMA5q"
            },
142: {
                address: "5FnzYjHZo4dzU3Z7oQQoLC3QNfh4VjTcUbhonebdHaNtkWDG"
            },
143: {
                address: "5FEbnaWfJcURHaFwbBHLoFib9uUD2Ycixu5MjqcgWJamM5ZV"
            },
144: {
                address: "5CT1bTe2WudQ5u2TUPCSDMdsHSsLSuUnYvP3QvSPssJ5DgeZ"
            },
145: {
                address: "5C8uKd98eRV69eGVb94vhrRCgVEoNF5HWoiw3G8XKJDLUGTD"
            },
146: {
                address: "5C7rMtrH8yB1a2GgZnor5AfZFTzNhsdqFVjfEJidtWBznph4"
            },
147: {
                address: "5Cqt6y3c7uaEPmhB6unynrN2tobaw26QH8TmUQwRwkZnSWdL"
            },
148: {
                address: "5E6JJbUFVMKecafCxEndNawE7PmSPTpwPWd86ikT3CcaAqqu"
            },
149: {
                address: "5CLwZ3v9EtcgS25kbcN4TAcfgEFQh8EcqAKcYrH1TSNXjQMC"
            },
150: {
                address: "5GwAD1ScVw4DnZwL2CMkZU3iGCroJdAShjBCxiozCepRkjB5"
            },
151: {
                address: "5CH1eZz7EgwTbZuGdD49YcfiGinr2xE6tB16wxd4juDfXL4e"
            },
152: {
                address: "5F92E19FqPLSdVW46Ec1bXJ7HQ2AeNsnuTmX7ehZArc5eLZ9"
            },
153: {
                address: "5DCTr7taeWHcyHyY654mhQe697UnmWTVByeV7Ctx3DEUCLSS"
            },
154: {
                address: "5GyvtVopqdN3rnt9ya6N1G5ChWZWUfcds2wr26CiVS23upEB"
            },
155: {
                address: "5GJrqQFbCqjNVTnmp2GzA5hbSi1rEyHq2FZFRE5LrzvBA4ML"
            },
156: {
                address: "5H4KoseN2Eb9oqsWBezx8JriGVyWhkr1ceYsHRy2UT7tvcSu"
            },
157: {
                address: "5FxWLaPeJ8Twir7rK3d1Ljo4n5cnzqV8YmvFPjLY7GYXxnLc"
            },
158: {
                address: "5HcmpyusMWgLBpaEBZFKWSu4qyd5WbVcYo9xTZLvg3J7qvun"
            },
159: {
                address: "5HS7WWJf9DCeRBmLTeS21a2mjaNLbUn1RqYURbaDCQwRFSEQ"
            },
160: {
                address: "5DPf1s4pjYk7jpooLKjsSN3zetPw3FNAArYaDbY6rZjvt9Bn"
            },
161: {
                address: "5ETEuHJXBiaf2dSxM1Bf22J8NYmJUYK93s43KHGPCDUMpSHY"
            },
162: {
                address: "5EMB8yTA5mf2JZnwfVv8bpeZvQ4ty4BD3DD9hhQxydSrVmbk"
            },
163: {
                address: "5HbejqpRqYnQFZHPCeayNGz4TKRbbGX4jRPv8sSNwRYaz8co"
            },
164: {
                address: "5HYkivvab96gQhWA7HakmFCD3wdRHRmYNrBHB5npdJMYebBo"
            },
165: {
                address: "5DGGK9u7dfHui1jsTDHP8SynJe2Jt4XD2XoDHDkabYSec8XP"
            },
166: {
                address: "5FZjuSnMRh6mZNxTSvBn2LsS8niG8FDyYojDxjdXkRoJP1wk"
            },
167: {
                address: "5GqSwaAzgbqFhM2YAQdjcoFG79Wa1MVoL11r9tJ2Khdz8XLd"
            },
168: {
                address: "5Du6QzGwYveC8NnDPexNq1ovtJCkPefCPqi1jVXuCS9kz8sE"
            },
169: {
                address: "5DfvKAYTGwkeXZamnkJRahffxKeT7f6TeU7EqQuxpySjue8B"
            },
170: {
                address: "5GzuePMd6DwqSRe9nDUwi4Hxu2GMGzbdXpdF6yKRGNwqYmvV"
            },
171: {
                address: "5CFbxArdkvS5oZqeJFaCykhPTqxbvuChmkdjHs4m7Mqf7oYb"
            }
    },
    content: GAME_ELEMENTY
}

const GAME_CHAIN_NATIVE_TOKEN_META = {
    name: 'Unit',
    symbol: 'UNIT',
    decimals: 12
};

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
            suri,
            GAME_CHAIN_NATIVE_TOKEN_META
        );
    }
);