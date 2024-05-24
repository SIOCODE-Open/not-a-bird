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
        address: "5GJbUp1C6sqjFQPbkh3sctBwVbn9bRAii6upYfQXr6y9hHQH"
    },
    elementContracts: {
        25: {
                address: "5CakmE14cSda4KUTsaxgDH3124TBnRiNgdQbZr5AXMJLDUCM"
            },
26: {
                address: "5DRsJ673x7Y1hUkwmHS5W2spcfqrkkjWnjiWNf5XCjjj4j2g"
            },
27: {
                address: "5FwV37uA3eG3SVvakZqyYxSkAvj3LBLubAxq859UYuwLpyvc"
            },
28: {
                address: "5DcwgZEhdQ35xWV7FmvZvxm6Zq6GyyZoCrWDFrVosmYaKEVM"
            },
29: {
                address: "5Cw2P87wby86EoQFthkKnkL35PpeAoreUWCacrbPrWd2XPWt"
            },
30: {
                address: "5H9wjpmMLJfhaSedDn9DYRhQABqpDBYBFnSwLNmwzYQczzcL"
            },
31: {
                address: "5GrLGqob2GtxGei9CQF4VgdmAtdwsyU9QBVpuuoyK92Ap5LU"
            },
32: {
                address: "5EqUXpgf3scCFYSsB7eqsTZa3QY2ZpgiZtWViyLMejEBm3ko"
            },
33: {
                address: "5CCwVQypGDiF5aVyEk7exkuuiPPChuAk7YkTX831KhMEE345"
            },
34: {
                address: "5Gb9cNdd6VWXqxhfqbzZCPDDeJBg71zRb71Jk7Uai7u2pgd7"
            },
35: {
                address: "5HJpgQXH6UBokPETPp4uNC92f8LiZY9FAJPCKxxe2qes9kYW"
            },
36: {
                address: "5CGNGZTTXU9qtRdwXWaSRLUdmsnLR95zPMjb4NVtGrH14Y3U"
            },
37: {
                address: "5DUJ8xJAfawYfkTzWJLLZThsjcwaxyAErvzzNGZAAcb94Agx"
            },
38: {
                address: "5FvRV8qk88PJp98WtwqjA9znuA2yXQcRaqYa3Du6JyL5PC9q"
            },
39: {
                address: "5DobYzW6XSiqi3MXbgJGMMVMRcBKwCJk2DjNmJvPxuvdQgQe"
            },
40: {
                address: "5EdqExCkgSNQErZPHbi8gbquyMvzpXCvnyadEt7GjtgqTJ23"
            },
41: {
                address: "5DshZrL7PpJNXyXQ4tNv6Rx97M4uqrp2aW5E37K6AoQciQrz"
            },
42: {
                address: "5C8AYahSWPkKCnjSTdToAqjXGMpbiHJvofq4qZ1Xdfzz9zbH"
            },
43: {
                address: "5CpWpwqcKThuDiQb7T22oKAE1nCuMAqeTVbiS91r9JFYrTBn"
            },
44: {
                address: "5EmYp95eAT3veHZPTU1mLtEe6g52cxpaoBN6oCixq24JSZ2y"
            },
45: {
                address: "5CndT3uAEL4jB4wKDwD4ZHo8Jx5cPSHbke99S11RetzTpfyj"
            },
46: {
                address: "5FT5yrgUoxWjqGWSVbMAe462AEh8Xg4q8p38ue7NjbBwSt5a"
            },
47: {
                address: "5E1426nXqmMwVJxuCKY5jcUeh7fBUEsYDsX1PFAxGqDHhXmN"
            },
48: {
                address: "5HiqTt7vChn4uNQjAXMZDEoguNAtnPsD2aVgtC1XUxt3Kr9Z"
            },
49: {
                address: "5G3RRxJzAg41xKzR5i1FrG2GE8Y7i1kCyj47zcHsinKfvtE2"
            },
50: {
                address: "5EvMLFWwXxG6b7HF2A7Wq7A2tJSSdKZFeV4zJZEQmUh4MQVc"
            },
51: {
                address: "5GxgLFSUp7bv338bBMYTXRHfPAC3BYFDNuKvh6us3atpeFa8"
            },
52: {
                address: "5Gss5xsrocJTezz5bRb8PsyebhK2x6gn7962JdSCD3FNLRyC"
            },
53: {
                address: "5GfAkFY5gsSLaSZzvaAbqYEYATPTAcJWeMeHREXbTSXAgfzf"
            },
54: {
                address: "5CCG5eZrUUVMcTqaRKHAJAvWiUX1N7ZcqoTcY3Fm8fndhA9w"
            },
55: {
                address: "5EcKhRTF1KkNULFZ67xtrkHDiTpXhVqeLCq3ANtM4PpbhSgs"
            },
56: {
                address: "5Dep9BR94tqseQnucRbk9XmM7XSetVXhvWewNXtbv1EHzQ3v"
            },
57: {
                address: "5DUdE2nKjm8uYAAbe81yHu6QaVMVi9XbR48924eZdy82JdL9"
            },
58: {
                address: "5Cyo8YsP8kQxSi7ps6DdN3dbRHGWzGxRKUZz6LxaQRktXJhS"
            },
59: {
                address: "5ETPkd2XjBuBREUU3ymsdUiFteKFuVuDvFfVP3yWUt7Pdg3e"
            },
60: {
                address: "5Gm6KvDi6Ydi7TaBsWYSv8yLQisvgVAuxC339dURKPAKLiXz"
            },
61: {
                address: "5CaPeGBJSthPKW1v1j7YiTeocEj54w2Qvi815kK5r8umVYY1"
            },
62: {
                address: "5FFj2aEgphVqdzF9g253AXSe8C8JPtFZ6hnErdq3LepJqjW5"
            },
63: {
                address: "5DpCwpsDzJcFiJSnTWdQmE8R5RDvjN2iKiqqNtjhjPBV8wsd"
            },
64: {
                address: "5FSwKkYyMfxRY5rbcP5PqPxT27v5ooiQbFAeg4QB5iPf7o2T"
            },
65: {
                address: "5GZK3wckQBE9S6a5tArNpqjCKQd3mcx6bPaa25xMg8rcHaXy"
            },
66: {
                address: "5ETRmQLkTME85xfJDWtGVaiyzdXZukKTy5kYj6A7CwzhpvEu"
            },
67: {
                address: "5CmudNfDru1yFZgmNdKVSQEUH8kicPyFPvEtassZMKE6GWBM"
            },
68: {
                address: "5G89SRLfJkJjetncXLVncABQemWKPoe9L8942XB2petnMdUx"
            },
69: {
                address: "5FBDnt58LJ3q7v97PJewt2ARmyZVPjTAW3AXNEU1HYZ7FwEy"
            },
70: {
                address: "5FcZwQg1mFpGS4SMgmnkcCoE7XK5CWaxyNtrMbKLh4GENS29"
            },
71: {
                address: "5EzCp5c2ug9byxrbCqoogNExgCV4WcchkvQ5iVMSeHxpgnVM"
            },
72: {
                address: "5Cgnrej1TmgaLsZCbgSQZQ6gT8XpDArBdgCUV6u7qn64qx5G"
            },
73: {
                address: "5GbSfoUsmSAMuL9VhZRwQP6KUYpAU7F7yAkcm42FrFTUpmmn"
            },
74: {
                address: "5HQEo2Daq4GainHDwg8JZpEJvpkhQzh7pw25tDAo3kpDYAKT"
            },
75: {
                address: "5HUuKtzWtm1T7rS9KuUpBtprXnDnaLEqBLXwnNNtzmay3scf"
            },
76: {
                address: "5HDdqEovJBG1TxMH82jnBnqcarea8CU5h9zLEcFLHFFH1CJg"
            },
77: {
                address: "5G8EREZGNfXjSAu9aPkEA3uDw72XADDDPxpU23zkAaSkdHJ2"
            },
78: {
                address: "5Ey444Y9CWZhUK7QDerpkhRfdkDPc27LzFNMzADSi1dg5LKt"
            },
79: {
                address: "5Cay6g9K63HFXM8drVDWroPS6m9GkMZfnVZgAbxCtxjnbEmi"
            },
80: {
                address: "5E9Ut2XEWUkuRLmCVjmAtdwHvq3VyRLxnMdgaQVJ3XZY8Mgg"
            },
81: {
                address: "5F2ENmDGggS3DGNtmTmLvdi4DwGb2ZNWVebnhQGKMQJ43Lgg"
            },
82: {
                address: "5Ed4J8JzsfHjYdpfiu4V9qY8GyBxLjY6dEwrFFnvkDkahG7s"
            },
83: {
                address: "5GwYpMTMnnBHQVBK2Zki8dGMY2GbNoxEe2NfgXmMjY4pDLWb"
            },
84: {
                address: "5F9xDghSXLjEPCNunukVKVbEy5cnnxpwfJMyBHoY8Kjn7qk6"
            },
85: {
                address: "5CvCoUKgoQz7AAVD4M9ofar5EaKQF52PbmMKGNHhkS3J49AG"
            },
86: {
                address: "5Dq4MRcz4rBoGW4eWymVfsnpZGDGedk6hwNstZADLY1YhQum"
            },
87: {
                address: "5ENyKXFe8rH73mJsvqiwhmPRXKTw76vMnWE7MgFJDHcCHu6G"
            },
88: {
                address: "5Ee4gPXXqWTQMZAhoFjRMwpab24iBBGbpFRkqf3zPLys8o6F"
            },
89: {
                address: "5CrwvhTTH8wMFd6oqgG9T7Z2HCLB9VjrNL9ckb13a9gE9Auy"
            },
90: {
                address: "5C8EZ5WhKfEgWWufrNGFiV2HgbNM7ZRbBsS3FTxBz1pspGkB"
            },
91: {
                address: "5HiUJSAeK2HUjJRcsSNfA2KD8wZQjHZQRnSnMtm7wHakew8o"
            },
92: {
                address: "5DC59n1JE94a8WQtLQx7K1WRTfqB6Zgz2JEdMMXT7aJ1pyJp"
            },
93: {
                address: "5FZvtFwqMqRt985ohdbGasFrGT3FPfvDomi4XhxboJpSoVdB"
            },
94: {
                address: "5GTnifsYPuRzbeiBXrhxoNkStqDiRWitkSxGsdTAvrZgLbaY"
            },
95: {
                address: "5GX3Cj9DUGTxTNFB3gm16zhVehRvwawsT5Te9fhkyVnnhaaP"
            },
96: {
                address: "5Fuz9F491RQQvAcUUQx15iMXE2BXu8858e98Gcx5aSenjhS6"
            },
97: {
                address: "5EACmRnrHhoxpMw1g4w5C7UDW6vFfU1suZTnrZEbzpMKiPHc"
            },
98: {
                address: "5CgNw6JU95knZrkkAqo9Lgsaz3CroHJ4835mpPHAmyyQiUqt"
            },
99: {
                address: "5Ffy8J2Cz5ArpyTqPuSNYRAAY5Nq1Na1ewoQcvqn4a71epy2"
            },
100: {
                address: "5EbM2nmtGATYyoqSscyL7N14vYHE4pU3qc59cJUrh1WVq1zq"
            },
101: {
                address: "5EcfXyjubia82msFC7g4uoXQhAFVWfbsiZVBknZaLkXTbroo"
            },
102: {
                address: "5Cc7Xm2dVS2e3YbF7G7ZCsVyEnzcqTHNhoRwdYoDWUWZYRh7"
            },
103: {
                address: "5HkJKFTYwST5JyYDzJsnDNodZeHUWGLFRhUs4wi7kL1XG8SN"
            },
104: {
                address: "5EkhsvAgxX4XKpypBsmtLiwoXxtyfq3dgtkqM4osueoPMarv"
            },
105: {
                address: "5FPU1rNwvykJDVVhLU7LgmvX2rTck8eZsBatfoPZKGRPU8SX"
            },
106: {
                address: "5CiseLKisX5AFqUojXTHbJHG56firKvrSPvnmgPKQKNvHXyH"
            },
107: {
                address: "5FSbfaNYmmaa6ysWtTZ5ZYaYkjjHwaa6LuyMR3MeBirvdsDb"
            },
108: {
                address: "5FepAFrmfRyjsq6mqxZ7zca6JyNiaAbmpRYh5RMPGmfAwBLy"
            },
109: {
                address: "5Fe4rB7Vn1PM5uwqpGNsthC6HxhDn3s7J9LEyXA79kvX7fqF"
            },
110: {
                address: "5CeRUQABV4EV9vEq4fQ1tNdyePC9R8qtNJnimBXFfsaEQbyM"
            },
111: {
                address: "5GARTMB3DRz97XQMQ1ykNM4zXHN2HcYBJbwSsGJVrTRcWaGL"
            },
112: {
                address: "5Hea4jCypQQzfPgf5uzZfYpJYSJB1mLQYGS7phyZ7mEnKXbU"
            },
113: {
                address: "5CM3mFZpePBiQwiXV33X9tu8NQaPdujKa5UWLiAMeShGH3oi"
            },
114: {
                address: "5DkW4k7TVikaecTDs4EKF8P2ag6yt5vSeG8fEe7rbbvTTerF"
            },
115: {
                address: "5CsortPyW5t8Ep6WWkmJJfauAqwc5gerPh9xvshUfqeiQMJf"
            },
116: {
                address: "5Cd9wQkUXVuWGygxyiP6JxwdB75YEjg8ELgrm9bcqJKrftmL"
            },
117: {
                address: "5DT6boedAwXBmrxKN1HwFJXPYDvdB2kov7PNTaZpsaX2DjCr"
            },
118: {
                address: "5DeGpjiKBgMoWQC2cP1eRY1AJKXpwbneaAcyaREyNjr8HeB4"
            },
119: {
                address: "5FK2343b3GF2r5L6Y6xquFTZzfiu7Vk3kqsjjK9Rg2JVVhPR"
            },
120: {
                address: "5GprCZhJxoBVNcK7QM416dNGaTTNq9PCZ3sbkdEiu2BUVBFc"
            },
121: {
                address: "5FdMLWYifN3iQBEYhAYSKgR4APPAH7Rh7cXon4u141SUiUox"
            },
122: {
                address: "5GKAQcDpEet31YPZB8gshdHvKHjbfD7xmBSnqztrK9ZoS4PD"
            },
123: {
                address: "5ELAfNirSY6f4Ds5c2iZmHnhRaFwJXVqtMEqs4GP97iiMyfh"
            },
124: {
                address: "5HKbqqv8sai5U3zJjGwVnmrb4L6v14n7Cn3gnEFtFzVvm6oQ"
            },
125: {
                address: "5CcFwcrkFc26PgpNoFWGpPLCnayfb6QC4j9HVGo1bXWVzqaL"
            },
126: {
                address: "5EuLFZkebRqkZ7WspiFAt5cQEEoX7zecXVimU8jadTKe8XCb"
            },
127: {
                address: "5Ccp1gWpm16ayn5ANKvbKFdQPdx9h1FcWu9m1mDGauM6V9xY"
            },
128: {
                address: "5ETv9DJaGdGmeA3PLKn4gqy175WjXHsogzSagVumon3uyKfx"
            },
129: {
                address: "5FvcNCFQSEch3fPb82VrwqSUPK6cqTrqmypXru35HLTxvwPF"
            },
130: {
                address: "5Fo72udQhHXQByiF7ijSTHh9mGhfJHRgM7pVPX5Vi1AqFZW8"
            },
131: {
                address: "5Eq9ZqiFtnx3TfTuAUgBt4zCR3T8NBhSkEkp6R2iSkunT6nh"
            },
132: {
                address: "5GzJqAVmu6A5enPM2jKcyLSse1G5g8q7e5jvRbDm2vuwP7HL"
            },
133: {
                address: "5CpGunJi3GCTSwxktMw6U1sTZ7Fb6AgV4Zxy41djdtLkSAtW"
            },
134: {
                address: "5EiHgLFKEQ3Z6XBEQQ149pmz34YbCmyxV9D8weh79gb7kUTG"
            },
135: {
                address: "5EA9vFPZn4oa7ip981avLzpLchf1ZRrGM29Yjxb4J2czSpio"
            },
136: {
                address: "5GkjYBJVicSWQDG9pJQHnHSUu4nu6suoZhhmSBjbp3tx4k3C"
            },
137: {
                address: "5Dp5b9K6TZqFCRxDXXFSu2Neh5kNBhzNCcSvwR2dcoxZXmDG"
            },
138: {
                address: "5GNpRLYSQtbfWG7jMx1RgHDfzEujZrk6XMjzvsMVyyR6TKDJ"
            },
139: {
                address: "5EDjPzCshdQ48cEN9XakzxjY24Kp4c6CxzXS918nfLZHwwaM"
            },
140: {
                address: "5EezUPXn5RmzkB3BRgbnC2oByu8w5dy4isjjisfnivMv2VHS"
            },
141: {
                address: "5C7ggJxEVkFtkLhwesZdhYPzonPk752xdifhRytozYrCAEWh"
            },
142: {
                address: "5CfHHJ7aELw1GzaDCzGhQjNwDaENWwr8Ni8fj956kJUHuXnx"
            },
143: {
                address: "5FBFkKKArkYiKBFnFCvxDRKnRRxJKkpvXso927oQLy8dnYjz"
            },
144: {
                address: "5FZtt2waL823NeEYjSm4jojfm2iwQemMh4NMTjScMhYv2VcD"
            },
145: {
                address: "5EgQeD5kp83pyH8JNmKyvXkkA8nn3JNNy6GRMTe2GTZVDdf3"
            },
146: {
                address: "5FKGT6DA93JEksESGWixwECyjxtYtbd4WMtENoionT6cnKsk"
            },
147: {
                address: "5FSv8155hPkE2UsiBJqcPrvP9Mc2G9rs24DKMUU7kBHFwxwc"
            },
148: {
                address: "5Csdmgki11GztbBXphXSCF7do82kYkhsoHzNwzFBrrgqHbCE"
            },
149: {
                address: "5EmrxwaECfkrsp2sDYW5PK2NhQRss5wk7RCPnnjKs3osQ2gz"
            },
150: {
                address: "5Fw5dajRk9ys8LHucNt91sTN4XJksUd8sewf4UpVy5jB9TLS"
            },
151: {
                address: "5Eh6vCQawYZ2me9B6wVFHfzMMtkKoedN8g8pSF3GyLR1B4Mh"
            },
152: {
                address: "5DCJGfwQcr6iRRcqcT4vy3C6z8vTYdXwuUUgpNzoHNpzYwQc"
            },
153: {
                address: "5F2LZ5grodgZu1uY4VPyQSJP8EKbPcedjcJBPGHcRpDAst8H"
            },
154: {
                address: "5HWrJLGpe4dmmyRYVp9Kx2rTkWJzzaPBwN4BEtesMbmTZqyE"
            },
155: {
                address: "5GTcaPegBaPbpWSi8QQ9EJXiNyXzUdNsFk64UYwjfxDKYKdE"
            },
156: {
                address: "5DL22xYvWijkaVU9FsqTeJDwTWAUXv3iR2NWRU7WRcBj9wFR"
            },
157: {
                address: "5GyiwGqEEC9wMgGdyrGJ5k585RsUNZ3F1ThpQfb5rXiLSkFR"
            },
158: {
                address: "5D1eJZssdYP6hMSxpW5TVW5acoTcUGautq47rfaieNFw8XQV"
            },
159: {
                address: "5DUNqksZARaQaKZmdUbmBS8NVqwY8d7jpKMdG86C1XyM1AKS"
            },
160: {
                address: "5EeA4LCvJg1DydUn3pbu8DAkqQyaVSx3kKhC1q4obcA3VWxe"
            },
161: {
                address: "5CbBcmnCMbK3CSVHGCZFRcERFHJKbUCqjPMVtLYjfJX6cQSr"
            },
162: {
                address: "5C7BSeC4YQJzTWQZ46rkRb4Drh3RFPJutHBKmVwTVubtV9bV"
            },
163: {
                address: "5CcFxosiNWqRx8LvPoCmtS3KYC9ku2FY6xTTsLCm2wStWjHJ"
            },
164: {
                address: "5DPrTgRH413rkZZ1sBuQ29CBepY4Jp9frVxCiimokc4qXjDR"
            },
165: {
                address: "5GQcTAJfqUTEcuNciCWqkTLPExy391sSL8NhE7ZZRdQgJtkj"
            },
166: {
                address: "5DFYsr8yYYGWrSb3WHsLf8Sfia6mCJhZtBZovi8T7npnu1zf"
            },
167: {
                address: "5CdgGjnBakuuiVg11EnQeKcFeGZhRZxgcy22aBTVprhgK27x"
            },
168: {
                address: "5HQppVJyroYZSgawDncn6xpKQje1yF9135U7X5zsAVgWeRp3"
            },
169: {
                address: "5FPX3TQ6ToSPJEybYRtdW5uLtomxM6zixw6CnVwa1znFEGTv"
            },
170: {
                address: "5FsdKBojGcAUaa6UGSXZcWfC1qkinGJBUNTfE57M6z9UNBiQ"
            },
171: {
                address: "5EAgHFUZE5R5DwUyffhosDbdxtQZpcxP8EyPgY1rbJoTyKGt"
            }
    },
    content: GAME_ELEMENTY
}

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
            suri
        );
    }
);