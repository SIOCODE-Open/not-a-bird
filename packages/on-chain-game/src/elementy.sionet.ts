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
        address: "5D4MQNca9X3b2cXSEVnR4rZFgw1cNEJVXRx9v5GzQDNerGPN"
    },
    elementContracts: {
        25: {
                address: "5GwgV7JKPZdn8QC2tBzdRpwtrbwwWL3YyGvwL95uXmtMRMAg"
            },
26: {
                address: "5Fy2pk1JLVT1zw2bxkyJ68hNdnofbC6m6ncUnbP7r1t4wvK8"
            },
27: {
                address: "5HXcMde8z1P3h2kgbCyCsS2XVVAwztAa14tudHsxXE4nd7hB"
            },
28: {
                address: "5DQ46AGpdCGVAC2dh1vtnsm3gpUNhDjTkY25DRz62SJRWPYm"
            },
29: {
                address: "5EQPpiAXptGb1Agoq9WcjqCM6Hn12LGjfJEasYRwpx9kaA3d"
            },
30: {
                address: "5CaMFqLVy8k92sZsZTcHf6nqwntyQTopLtps7Yxm3ufxLVen"
            },
31: {
                address: "5FuN6YsHVzYtZqXyPwmTYttzKzQLifFKhkmPKXMtxJbAECee"
            },
32: {
                address: "5EpZ8GMD8qccgLwYyTSYVtma8NNxNKLJVGG7VkWMrmT9Tzk3"
            },
33: {
                address: "5HUyeUg4XgSGKgLJxio4octGhcza1d994Z1iXpGtme6bNENb"
            },
34: {
                address: "5GGAKLRSxk6utP64gMrBMBKRvaNTxBymf7Q8mdfbeCU1TLfN"
            },
35: {
                address: "5FyKXAEPUadUr1qJbzSdkUCAXBxwJXxfd5qdKb8dWedCyKPh"
            },
36: {
                address: "5EUJP6zRvnGy5QwuCtT6ruVKGYB9WoEmZVxTKePMiY5drdcS"
            },
37: {
                address: "5EjEQFsG3ovaBRqUTz5LHr3RJ6c291PAQYMQLZbkoNuUH9V1"
            },
38: {
                address: "5FD5VJxCf9UBB7XEdmhGvuQDyjPt8UcEhaFr4YJcHF4RoDRt"
            },
39: {
                address: "5GZ4fHiP9erqD2fpBsTb5bas1CRAB4vqijTSVf6967oE7yGR"
            },
40: {
                address: "5ET1a3NxPCaSF7J3oQHoQzafo5HTX8jEcXSQT7tUCb8xsa8d"
            },
41: {
                address: "5DPf2TWQVM7Hkze3wUb1EWpYRHX29U34TwGKwXSJ2z2EvRoU"
            },
42: {
                address: "5EGAnoexkbt6Yw2XYocY3AgYTyKHpgGb6cxCw6zEZ2au5Q52"
            },
43: {
                address: "5HJ21eViXEAwANysh4eRvn7y1KjAEwPvSg24eSTREHA6YMg3"
            },
44: {
                address: "5HLz8B2tp21dAo697X8KxmzgQ29KmyG2TuRJYFVMCP1ZnfSY"
            },
45: {
                address: "5DqKfL4kri8MYNfL6Cu3rhCviDoEkPQmuDCGjBHxKwjtdt71"
            },
46: {
                address: "5ELXtPXaiTmz7bC7CKsinovxVqVVnds8tYLu9JRivcKKpTEp"
            },
47: {
                address: "5DwDsZVpCbgArCwmYkBy3HQctrjyUcmWGH7FUph6UsSBuCLX"
            },
48: {
                address: "5Dh1As12diagxdQfbj9jVnvjBStPRwjyf6ouDstYDWNHAia6"
            },
49: {
                address: "5EACFSqUyyptEdmzdTHi6Jk4N1jR6RJiMhZWhbHC3fQ3cA8Z"
            },
50: {
                address: "5FBQXo4F4Dyigd78x3XbLbNnptHd2chHQCcZmQjWc7T46Dyc"
            },
51: {
                address: "5CKHq4RttqqJqQtWRUTZ3d9bQLsUt6eKkvxvRX9mAvvbzHem"
            },
52: {
                address: "5GZFBUN5TLFAHTWMNTaHKW5i4H8BaKzAuger2cu8v12iUxf2"
            },
53: {
                address: "5HgawMkiJWR2vbhGgiwdeE8EMzA5FRJBLxqWG5Drva9myuyw"
            },
54: {
                address: "5GMd9RZ5muM4x7Rq8nBaFtkreV335vgWPgQ223qj1ZKAGMkg"
            },
55: {
                address: "5EWhoLXNWNf11K84pXvPE74MEHPRipqfV6WxM6UA4mrNAxUe"
            },
56: {
                address: "5FFRPD74pEcUUCbKku5hUqVUxUkACEPgU59nhzk6zX9zTtGv"
            },
57: {
                address: "5HTK2xoxSku6KHApLj7FK2sQiC3HVHWvRd4agNiaVbfx6QiK"
            },
58: {
                address: "5CvjXU4w99ux2FV6xPczaRJjs9L5sbPH1C25c6mHKmvr1SG8"
            },
59: {
                address: "5G2KnHHKbRLYCo1eRA4jnMrnvvgut6PvE4mgkeEidBf3Hn3G"
            },
60: {
                address: "5DVek2Ww8AGNb7bkgvbpxMejFKuvu71QSaX3BYHH5bjH7At3"
            },
61: {
                address: "5GCtT2dz7DYVjHFPaSLha7duSFvcrWWzPNSxfMsaikfrHExA"
            },
62: {
                address: "5F4btPu1qqPwfXPKHoeAF3jtP9sCE5yvrAAL6vTfthxeiWPj"
            },
63: {
                address: "5HaaSz4opqQbCQhebfctS41eW2x2CErKfbUfVjr8Ya2uXMg9"
            },
64: {
                address: "5GrYxShn2kkVBT2ufCRgCWxgQqvbTHKsDndo58DvFUJUq7Bu"
            },
65: {
                address: "5F5rhRBFhPF2HxnA8sR2mVfuDgLxCWHtu2Kxxn5aGFNLXFbi"
            },
66: {
                address: "5HKwHYmEHFhZwkZ4PC3jFKqL9kaR1wwuTasG3pVh7p94JV5G"
            },
67: {
                address: "5CEKHbYH6ZPyEwGdqUhSvRJA2hwtvwqUFYbd3GCP2H2uphGJ"
            },
68: {
                address: "5Ec7FjY4o3Z5HQQzEdX5xG3oEa3WrMk5kvFAoQyRgTDSL2vm"
            },
69: {
                address: "5E3ASrBqTCcFMVPiGvTWfhQT8NfmDaxZQXuSdzReQcwj8jJ6"
            },
70: {
                address: "5ENfKCdQi5Kqn6qYPDKHnMLxKzfxcx9bd5hRTdzSnhwyU8E5"
            },
71: {
                address: "5HjAozqsoZmS3aWxD7GDsW7dVMF3DtgmQANQNgGHhMznF57r"
            },
72: {
                address: "5DzFqTntqHGeENNeAhqCKLqy5AiAT9vSoYf51isLCTjZue4q"
            },
73: {
                address: "5Gs49UJwHHnRUjAPVRphDQccNEQtGAkyu3h1xYqRUtLJKBj4"
            },
74: {
                address: "5C8NAnGAJ7Fk4bMh7QHTywNyHkQbViHfAFDN8NjJGcsB55qy"
            },
75: {
                address: "5CaLNrHSxWRrRAZRxSzpQm9aeKVpdZuhaHq3hM5V83wQn7zz"
            },
76: {
                address: "5H3jhDhpVJJiPC6ktPRK6Ab8ELmj1Rfn45qqGtKLRKATVMf7"
            },
77: {
                address: "5HGgW3M4YBwvEaVDetcyTV4one7jBuBEP7uKaWRKdeC6H7SE"
            },
78: {
                address: "5GyC5sZXg2mkmwAcwLTEgSZ5uwjuWg488JoYyNpLZTADJs11"
            },
79: {
                address: "5GApYWt5uBbGY91kw8siVCAzvQsJda8BTQBHHYBraY41dfa7"
            },
80: {
                address: "5EsXSYSLdMtuiVpBWS15b9HKX2bQ3chiqq53YWTmCvajanuC"
            },
81: {
                address: "5FcqVxdeqoeGDAZQAm3aTGWMtDDWw6FiX3kUk92wAEqgWFN9"
            },
82: {
                address: "5Fks9HVVTLsrWLPZACjihdKbmkwbVpY11CF7w9AKJp3Zx6pp"
            },
83: {
                address: "5FNTT5EdiPjSuBYvUtVydX6ajxwfKzt7Gd4BeEC5qPwfrkNs"
            },
84: {
                address: "5Dn6DhmXQoTwsYEiKMZfZfgDPtNAg4KxucQ3oTfVSgYisaFc"
            },
85: {
                address: "5HqQdHu1rBhhfF2rEY8zeUML5vSPpjo1Gt4KxAKtNQMkenHd"
            },
86: {
                address: "5CRVrMaCK23dodZovNoZatKptjt99fNTAcg5x11r33rP8zdV"
            },
87: {
                address: "5HMwiC54nPdbkjFRow4Z9Jfte9czi1VgjRM4Lk9jyu46YjxV"
            },
88: {
                address: "5CWVK88DnyFK7qBmJCzG6Fa8GozwEVM7cemmFC6DPGgXx7Fg"
            },
89: {
                address: "5EeHn5VjdqN3P4iU19WD1fLyKgPRyWd8LLj38t9VAJ9yrcYb"
            },
90: {
                address: "5DqE1tDjsCPrWNe6rjA2h9FvkAjCYa6xmz3PEM1t1qgLXJ6h"
            },
91: {
                address: "5CCfcZ5Hf1V16hph7NdHjWWyA8wMvoj9djB78Nz19G8A4EDM"
            },
92: {
                address: "5EoYAeR7qU4EprFR9kQFi5hqreATJoEiBswVfAyzhBQL2Lhz"
            },
93: {
                address: "5Hmp5Mp9TDCtSEg6gckinu1cPCDsBKqg4Sb86Y3mMEPDrzXk"
            },
94: {
                address: "5CWZA4FpQt5NUFMa2Fs24kTLjEtXmw6EezcG6CUV2DigRemp"
            },
95: {
                address: "5CNYsKNSFUe3ZKpJHCTdNh4qLPipWnW1LMUPajWYdNq1swQ6"
            },
96: {
                address: "5FVG2PTTwm7y4Gcrk5oFdmdSt6o2Vtn8q2UeAmh3h8DxAg3G"
            },
97: {
                address: "5CHwTS5eygXEXh5M8geECkMwHog76NkdALF8AcHa764ybgwE"
            },
98: {
                address: "5GBq9TRqnZdyUDPKgKv1fyj3Uj8KeJJNM23LytC8kz3cknZS"
            },
99: {
                address: "5C8p732R7wj7f1JQ7vBuEKDTeSAVzeKoj5mhxTM3FBMeqwti"
            },
100: {
                address: "5Ezo58wz1rSKaj2jyA7tU27fGpywQbWuRfvrtvtHF4vN32ov"
            },
101: {
                address: "5ER8nJsWnTynkR4CoC63in57aLDC9n4B9LVfyYLDEAruKJco"
            },
102: {
                address: "5ELnquAnreT1PSNU7n7yBsKa1oLVaAdARGeJWwKau4dVWVoJ"
            },
103: {
                address: "5HMqsHVkhjtmziToLEyiXHC583zvHL3aGjgdgnQ5FU2xEDzR"
            },
104: {
                address: "5E2eW8dd7r2KmSqFYE9FkUN9rACF3mh3r39thJ7KCGYcYNd6"
            },
105: {
                address: "5Ftn4UQGqHyQadrufR15qsp2BNc7RDjL7m86NnMJ3nX2HEdh"
            },
106: {
                address: "5HrHKQtU7GeUShpZngY9S1LmEJzE3b1Agpex6TJucF4AYxY4"
            },
107: {
                address: "5G8zuzT6QT4ymvrDkBNccVxdH2MxCeEPQNuoWUDvdijLP1ow"
            },
108: {
                address: "5H5wt7d7BzXSCk9vhf4dY8UMtokqmMmKckG3rjh5daXcsEos"
            },
109: {
                address: "5HnCPgFNNLkf2UkhN64nqvJgjhx3Yuy4b2kNAZvLJQEYgPsD"
            },
110: {
                address: "5EphyQuW5xSBdhjD2ZEDe3vDnjzfyAvDGAV7ymPBeTtWLw23"
            },
111: {
                address: "5Dg4uGXyGdvEHBGuv2q6Sgv8JwJ1UtHh3Y2fjuHXkMpYbDn6"
            },
112: {
                address: "5FJh8jdTgUMuwtuJWQJDXsfvy1kERcErTccwt6KiujdLr6w4"
            },
113: {
                address: "5D5MXekpLykxM3wC2r3KF7HMDth9gLzZGnbWy7DwNJuVBX2F"
            },
114: {
                address: "5GJonLvnwib4oh1KG6jDGAFEL5vkZ9eQmWH93S4YyHPQrjPD"
            },
115: {
                address: "5GzbNPK8XqvrkTT6xXV157B6eyS6T4EyijvKeemA2WNYNJLg"
            },
116: {
                address: "5DdqVanRfWQcrcehWoYjNXiCLXKjm4yT7t2mWdgDyxpMncxo"
            },
117: {
                address: "5G4MT96JPbYhSyZCEfsd4jx4D3TfxkTrpSaxJiuPcQKr3t56"
            },
118: {
                address: "5C5f6Fpd4duKsKZ49eAqH19qVSxKNmze594hTgPNn4r8uEE8"
            },
119: {
                address: "5EfLKJEv9rTeCcuaTzcFfKoZ4Ufo7GfUfnQB8LXqskDXGQZz"
            },
120: {
                address: "5E3ZRZAYQotFuJtthVzkLBKyxCt4cJFj7nq1KZ3FLs6mH1Dk"
            },
121: {
                address: "5FxxW8mh62wvFziqyQ3YZ4xZECg4h4ZvgGkBtXZBf88u2Qq6"
            },
122: {
                address: "5DZ5wmKe378LZWnUSoJTa6nFcyVFZCA1ANd1RtR4oAGH9BLE"
            },
123: {
                address: "5FJxjYCEYnFHYjg3oiMCA4UXooRcnKJLcVkZtJ7dJ3FuA1JB"
            },
124: {
                address: "5Fw1yVKKT3ok9zZGo6GgdQjJkCMTQ5p6R9prJmzNmwNGXejB"
            },
125: {
                address: "5EjemezGHQLrSFq911ikix7LQhk3MeucTCB5NZH2PWEi94wx"
            },
126: {
                address: "5F4HviSUg9b2qYpbwDucCoEHTKHGR6ewP7d7aXzutwHW9LGm"
            },
127: {
                address: "5DAKqTVVdKUyQozncL6aHYDA1tYyh7FRfNP16raptzpV4eZK"
            },
128: {
                address: "5CynRfdtmPJ3N6GiSUUEG2vMSYGUDYpZcEF8BrveLsv55gKx"
            },
129: {
                address: "5HkB5rLc7JDB6EvApiTb14nuKwFCNUf4zEFmYxVr8aTfjf2z"
            },
130: {
                address: "5EtzaH43X4zbi4cjtWeQUL96GqQPzojXJ5qU6Rw8CdQzQJgY"
            },
131: {
                address: "5Cb3kQG3DW3LG8WXuvuxDK1us2g3yPgWs2N2m4NPRKQXJxBx"
            },
132: {
                address: "5EMVvBovntvN2fiockPiUEpteLszNdF9hNMcfVHW5XdRFzmG"
            },
133: {
                address: "5DeDQjMGKBSE9cfYZQTvU5YJRhSfYhT6LPMst6Yp5tMWccw4"
            },
134: {
                address: "5EpVRB2xZBUyC8Mq4gG4sEz4emKUjaGYHqdPWbTjXeuyDVf1"
            },
135: {
                address: "5DFw5z84rQMtRVhhfRGPAnKsoXXDCTS1ynPpmyHWZPgSXCi7"
            },
136: {
                address: "5CQbcVRWmycUfJzY8YDEEBhLkje2xJyYMUPPjrNwtrGzCkqo"
            },
137: {
                address: "5EvfRWGdMsV8RZatJTyP3T9FvEYXwXRee7iehNKc3KfYuAvv"
            },
138: {
                address: "5HdvCd4UXUxqsxt5f5tfXF2yXMo1FWQbNt8kwZzC8bfzUa6D"
            },
139: {
                address: "5FKWaXtTSqARXhU9zZtjwfRNMPPLRrFBYSpCbNYJHfeSwet2"
            },
140: {
                address: "5GcMKxCW9vfAUDUAE5LaSCYGWvF78XkAFxjmzyZquzdQsdRK"
            },
141: {
                address: "5H6enwUb2RW7FPoJFPqDEdjJu4DNYKhzp8h4buczLeNEkEhq"
            },
142: {
                address: "5FzDjW9bxodEHsLzCRyU7QFYh7EHf4LwSZNEUHRfahSAAyxU"
            },
143: {
                address: "5CZzQcqDgJJN5M7xycyA1yFk943rEsExaREDDUU28NoUxKrP"
            },
144: {
                address: "5GPbbnGMPS7JXt7DDbv4y72HutLaxwa1cxoTyjmvDsUAnLdA"
            },
145: {
                address: "5EuZaxZcDjXaPFEdKHiFrjxj8sXq9z7Tv6hsd8y4Z3VJV67k"
            },
146: {
                address: "5CcghN16tMqj5rJ7EjMh1Tkp7VkdyPGYwo2FoE69quL289vS"
            },
147: {
                address: "5HpQGPrvxfi6G5jXeS7KTKo2VMMUUcEpEvpKi6yLoDqrCzFG"
            },
148: {
                address: "5Fi7nKgeg3KLtkddW1rAD3opfjwqrbfXZH8HG2QpCcMbKSVi"
            },
149: {
                address: "5HBpiqAKT945Bmuhdz7983J8qtiFKggFHxFdzExouX5RJv9g"
            },
150: {
                address: "5Fj1C1ZeFBvvZtnvmtAtJdGcGkVx58nqivWwZBkrzikabxTV"
            },
151: {
                address: "5E7A8yaNJGX5eGMgCH58m9FCiWkQNewa9UZff5B2HdmPGJyU"
            },
152: {
                address: "5G2EfTB2tkPaTcERFyjBrsdxc9C8mKn5JeP974sXMqaCkKGz"
            },
153: {
                address: "5GXcStixPQkmRRxQx753UvsVinMEsP4rgwNe6iVdFybbJmBs"
            },
154: {
                address: "5CSe6cmaURcXTh5yTtqx36Wx9ooBF91JS34Arup4yG3dJfW1"
            },
155: {
                address: "5CZSSzhhc33mtsVKo9m3HzHQ6Pfy9ZuMzsZAwZ26ofXbiKNs"
            },
156: {
                address: "5CNNjT47kQbY6A5UxHoVH1GGELxXxBkuShWuzunvMWsKUvgv"
            },
157: {
                address: "5Cn28F1YRDN4htftJRTZvhAViNFQ4Ksc7hGbawyRbaeBKAhU"
            },
158: {
                address: "5D51vdjGjeSYZG6EzCYaKHpYxbuLcbqxXMohp8HvhioXxccq"
            },
159: {
                address: "5D7Z69Gu37xp63NB3euCiS6T1p69mDF7NFL33vrDM3z2GgGu"
            },
160: {
                address: "5C655uNR2WDeuxPmeVtmD7yuZePAxfiqQ3EVxpnS2GduPgVf"
            },
161: {
                address: "5HBAxpWhUTVXJcgd4wYLLBpEFunWDDd9AnNkJ2hVrRk6ywqY"
            },
162: {
                address: "5EBRXw32v51oiLUpsdxRqrY3HCGNkhTWmFAfRVwwHghx4AHs"
            },
163: {
                address: "5CmDa6brcZtrE17t8MGC97StWmyYPab39P915uNtrzD3mnUK"
            },
164: {
                address: "5FzqaBdfmasgZKkKZJH479yYdomN8urqYJKitFcdHKJkiSzV"
            },
165: {
                address: "5GHezeoDbwK8aoPUJkDW6HE1hki7dgqSnrWUdRSujbADeKMD"
            },
166: {
                address: "5E1Ddhgcd681dZg7BNoiq9BBhDe6vM35vtgT2JGRwk7Lehk6"
            },
167: {
                address: "5CHWBdrACRZho16eHQ7VPMtCht1B4Dy76gU6FNU1VEwwfiEL"
            },
168: {
                address: "5Dz4M3cRgn64U34jVmNi4EUiX33nSp97amJXNpR1juLrKDnL"
            },
169: {
                address: "5Fkr8GdbxWoi6iL26Rh6MHuhZMvp2cie2V3ewg9srTfSxaYL"
            },
170: {
                address: "5HY7YcGqJevygVoS5sqvvX1sZPzXwtti2eviFqKXH8yNS91i"
            },
171: {
                address: "5FGpzncan9Dqa2y9nF1PDpDPt4K2aupDBrFKJNAhthbvDSgn"
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