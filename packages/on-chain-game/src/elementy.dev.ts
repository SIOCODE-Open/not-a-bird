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
        address: "5DMJ2phvivq2AS6RNjr8K81wrQahKBwy8sGHrxiJeUECPhXn"
    },
    elementContracts: {
        25: {
                address: "5GVyRVdtv2JPQTX5JEid9TNSpdfgwbiBPbxMmy9HvGmnaBwj"
            },
26: {
                address: "5EgPrGnhB6a7486PP7JAriRP3oZvEUz8HQ4ZbUpjAH95939r"
            },
27: {
                address: "5FsDSQx1aTSvxnVvyFq7Wt3JZ7hncAPwgMmsyosKhWbfUXxF"
            },
28: {
                address: "5FRMnxgirtCPCUBEziBqrSJa6T3fWgZnD6bKpAwGbH1WAQaq"
            },
29: {
                address: "5GGWBcXeZbtiGReahchGwUGLSDXz6wKGtAQ34gvvsaQwvxNS"
            },
30: {
                address: "5GUkV4nEF83W3zUGKzchRxZJt9TDX4NMuyeoi4veQxBmDvQ8"
            },
31: {
                address: "5GBBH4tysYHM4T5jKKKjT97FUjBAuPP5XadvnK2ByA4rSFvc"
            },
32: {
                address: "5GnmHaktV5ztcXkCPe6nP1L15h7V3FhLVGwvdpecMdSiw5LB"
            },
33: {
                address: "5HCPh3UBZSM7y32hio4jE7CQBZX3T6Qcc3fGYcAnoswRNm95"
            },
34: {
                address: "5CCGvtLWa2UX45auJSJYyaxJZgddXxujDjVBkBGknM2MyYty"
            },
35: {
                address: "5DNm6yaqXoziDaT5nPdsg6EZBDLcGkT7gLQpsy1b1o4gtGZi"
            },
36: {
                address: "5CJ5NYqHvNgHLnqY86dqrvGhxBRRY3opXYsoB1ARZCNQhgD6"
            },
37: {
                address: "5Drx9xbQCf7oNdvhRaWeqQf5rqmbZ3saxQoB76Mr6uV3rygH"
            },
38: {
                address: "5GXWmUgE2bNMndq42LausFMwDN48vmTNUfyVynqFcdqp3v3f"
            },
39: {
                address: "5EambFX1ym72EVWddxmMAbsQsPF34mVFDrg3S9qdoq3RVWx3"
            },
40: {
                address: "5FGEhCAn4KHeVcaoWWX6qtTeCEoV3pu9vffr9XPTku3wJ4uN"
            },
41: {
                address: "5DLxfiHnpeP5DiQ3dgLDwZ2g4kq6C8e7hLYoxNUGcKPYfJAm"
            },
42: {
                address: "5D3WqvjXoyFrHPfP5KfASaK7T6FQ5rnmuryHx5Abr1gDBiz1"
            },
43: {
                address: "5Ebw1KmXD6KECEHavHggGA586eEMGZX6D84eZrNhs4x8CDCW"
            },
44: {
                address: "5DpUNVkBkymwCbjDCzM3xNEDcNxo4AkkoSjB2azewiC5unB8"
            },
45: {
                address: "5DrSiVBdRQmntPtAXdpMG21X2tnREwUuKAVjYD7BFYdYiaTC"
            },
46: {
                address: "5HenieWQz7FDiFcXuNWEcc81MKM5EWr2wkonYpgd4UPWQfwS"
            },
47: {
                address: "5ENqyAtfFyFtxgwcWwWVoXdy33vAHM4jUpP9xE3dQQaGwFKt"
            },
48: {
                address: "5GHCZSzZjNF57acUHK2Nn862yiDBiGbX2KsyAGX79sSWS2qr"
            },
49: {
                address: "5DtUCQd7T2R8ibccJrx1qR9tRtPDthqsV3XychbtfbgPDZSZ"
            },
50: {
                address: "5DQKv6quzgGxEp1q8ECjUabYGcitzffPiTG493P8mxhwFVpT"
            },
51: {
                address: "5FJDpwWmbgKiEm4NeD2HvpUvnJmHEQVy7qrH1mHmDM8onKkw"
            },
52: {
                address: "5GgvNxw7twfVfeqDtzbPzCHzjsL64tQR84d99mVW3uPsQTkr"
            },
53: {
                address: "5H2Xs3tAsrdZUydhkuPGqGPeqZQrp1U9ekovXeGn7tY8b7Pf"
            },
54: {
                address: "5G5VoaMd54DDgPoBADxJP15no3yVcmQBCmpX6NRNjJgFcnDQ"
            },
55: {
                address: "5CzijxizyVFnD23rKhJrtW5MPJvLqAneapugwBvATKjFQ47Q"
            },
56: {
                address: "5CmWoYvkHCyLJLN8fzb9TcwxmuELFWTVZnu3hm2M2n41kazL"
            },
57: {
                address: "5FS8EatoYu39hxTXMNdouPYRhZbYNmscNks9iZMHN68tQwnU"
            },
58: {
                address: "5DQmPLwEg6dY3ZWwSPMwGmCHxRq5Jc5pP7daW5e3DuJj4YX4"
            },
59: {
                address: "5GfTDn7YP9ExNP84PU8qtshK2muokNXM2uJd9Et4deewQEHL"
            },
60: {
                address: "5HK8NxRLWB7BTPdMYAwBhSKJh92tjcuK7R8xSWv5VdYJvcVE"
            },
61: {
                address: "5C7Ybu1M1QRhPTZnZzPVnj8KxJeWadXcF98Y8vhxBvX9qDAb"
            },
62: {
                address: "5H7qT4USjcBD2jCRtsi222eKvbC6u4K4hVvxDuzDNsjC6EhG"
            },
63: {
                address: "5DNdwuY9SozZeWieWYz7XkKxsPYLea8eUkmKRZe1rWjv3RmM"
            },
64: {
                address: "5GgjLMCUQ6r4F7QUh75G9suy3iC93iarMyKbHvzArWUDhNZT"
            },
65: {
                address: "5FSQghwmsvhesSoL3i2MiZbFFHV1S58R4LUiJGSYeRTnwLxW"
            },
66: {
                address: "5D2cLEd3Fi6uYtwXdxQbMLr3TguEG8yyq6CidegmPTCYNoYE"
            },
67: {
                address: "5FgCjdNsfPUAqxAqKccJWBSYBaBe6mYXPugWBfzP9xGJTjdK"
            },
68: {
                address: "5EQkGCKmGNVDSfAHzWpSewzKCai1v1i5xYZigLMSF5ft72T9"
            },
69: {
                address: "5DRtBTbcXZK3axHASC2hCZZPaigZp5axQiYJsGzD72ECB6Xb"
            },
70: {
                address: "5CMMhffcxQRUPo44QduqCw3SBxsTnvrZVHwYjU4kRS4HEihx"
            },
71: {
                address: "5DeWMoRKtKBaotqj4whwmCnnpoLfuRw4L4HLjmvPVYsmP9nT"
            },
72: {
                address: "5FjzWbPAtqwzR9WxjmzKKjvZ7F5Tdv5MAxe6jgsRz1PnrDMt"
            },
73: {
                address: "5HNqBqefw7G7oSbGVbYFcRab2j3hPdBcdwCeMmknHG7PziES"
            },
74: {
                address: "5FX854PHzcq5tYftMQo662aZViHY6JWPmYAnZhamgof9tK2M"
            },
75: {
                address: "5HGgTkXgEEJw62r5AWNWwPLhKYNgu5aNVjN3qJEjTfYLi5Me"
            },
76: {
                address: "5EPWjR7s7vZNqiYSQ1dRcZ3FZCsfQdGEQ8uJuk4tTdLPiG1q"
            },
77: {
                address: "5G7opfeverzTRDTDsJPc8zC5kLm1x14MXsQRWX2WUuj5SThH"
            },
78: {
                address: "5EuyAFSTgf1quztxBYbrgb6p8xJBAmYbyAZ8L6cjAfKQj4J8"
            },
79: {
                address: "5D52qopK88z13oi1VCMhj42pdZj5x9SxNQGwjGQBr3pE4tDh"
            },
80: {
                address: "5EemSio6Xj52mZVZt1B6y9aRrCBT5uuoBZZqvwTo7V9jmQzr"
            },
81: {
                address: "5C8MDqi8nrX8Cc7LsnLzwVS8unT8BY74jamEvXDCzintnLDy"
            },
82: {
                address: "5D21fqpxjcW2K9bJ2kCCSmNbGYx5AU6rWZKDQj6W6LPiP7rv"
            },
83: {
                address: "5DnBqbHVxSvhJ5JWDaX8xctDBFUmB3dnCGQTb6o5oQx1WbCP"
            },
84: {
                address: "5HLnF47wDEuJR71vUg96KMaTdJ3mTT5yn2wc4kp6UBLifV4y"
            },
85: {
                address: "5GbYp2gW7BLVe2niPTm4kiY3qwLsgodbcNCmwUxMGF9KYzQd"
            },
86: {
                address: "5HfLBQ5aBNFWxKk33zYyrdSapXrXZoHjcDYGJwYS36YRWLPd"
            },
87: {
                address: "5EssfVKUnXc8QcXNxRhtVu78HXjnLYRNNetwk9GaZ4GrfpR2"
            },
88: {
                address: "5E9oTbXzUQZFkevQmA48zNAsrSpRrm9BDS6t1TStGZmUxaai"
            },
89: {
                address: "5DPYLFEV8TczjmdAWkjUQUKtLSmFW4x4qLAS8PVe4bQhL4KW"
            },
90: {
                address: "5CdYX9xPeRQvkTjm6eAFRmSSknVKrY5XYm58eUUEsYF7SUGo"
            },
91: {
                address: "5EGJ99p6qRtdfQe6QLbFVKjt6Y8rpAYvfcYD9VizL9FjRZ8j"
            },
92: {
                address: "5GowAeEwek6j2K7L6WvGyNedDRdxGNACNnxBczmTxW7oaCKy"
            },
93: {
                address: "5GZotSMQGsBq8EE5cnoLL3L5oKQBbveCpfTxJtxBrzzqe7bH"
            },
94: {
                address: "5Ca5t7B7kxWtCuztU8rfP1APxJbUyfnDxDGATiAxMuqqABrL"
            },
95: {
                address: "5GHppJwqTURrD7DW1mhsSwM3Hu9vS3xJrFfyzaP32xuoK5T9"
            },
96: {
                address: "5C9NYM3eyyjRPQAi2Wn1xAt1jwL5Lg5zTf2PiCRAG4T1uNk7"
            },
97: {
                address: "5FJp6rWNKsxqXRB8uvoV9WTTtiJ8iEWYCMSNPshXpLktaGt1"
            },
98: {
                address: "5Ho6XK3MDEjP6gKiYENkJJ8DLmp9CrfxdKqDehBtT7bjuz6z"
            },
99: {
                address: "5DhJnYhRNTMGnqMLsDjdn8bSqyrHgDWwDKdKQiF4gXGWreho"
            },
100: {
                address: "5FG4hsjgHGZ6vRJQNT32op6cdXu67v71LZRv3cmGNqEVWhCu"
            },
101: {
                address: "5FNsA8WtyqKo7oXVram5c7LRgnQbRdUXGA4JzqFTFSYViTbP"
            },
102: {
                address: "5GctPM9JqWKaQEHu6tiZD2hJkZFDa7GnJdQ58N1FY1S3J9VG"
            },
103: {
                address: "5EKcPY71wN24yLmQ1jAhJYCYY6nknJwNPjREXYqFhPnaPaH2"
            },
104: {
                address: "5Gn7HnxfDLgau36xsPbn3qFF8JEh3GySw5HJR5sYiHkPfHBQ"
            },
105: {
                address: "5DwZ1uTPEVZxvfyP9FrfSJGSA4LdfezUPWjnBqqZFeUFof3d"
            },
106: {
                address: "5DREPFDjn1yaJegn133vCJe8s4ayEBZiDRJqQRRw6gWJeBxt"
            },
107: {
                address: "5HNnZaaXaTLuZ847muSF8pUfVrH2hcjmjSKHojWWfPvc1mhJ"
            },
108: {
                address: "5ChRvoke7WeeEpmfqGrbpsz4ftvD4oEDB9rKzRg853NWbQHp"
            },
109: {
                address: "5F3YJZhCZqEBp8gThid7qwujf4bTMatm6KgYvfqoXHyMxkwv"
            },
110: {
                address: "5FM6Fcop2EvXzGT11buBYPB3bz2EtxPCU8cqxzxaRjFKtDeT"
            },
111: {
                address: "5Hbti1mHfz7uiYoKWzyq5BUxpw3MqxWFy5hYKDpszMefN3n8"
            },
112: {
                address: "5CZnybs9XSSJsAv7GRkasGEQtMuXnxmLscXodPrjB4GtGe2r"
            },
113: {
                address: "5GaUQn4TAnfPybRt6KCr1NCsSG3EW3zZaWjZtE3dYwMD5AZ1"
            },
114: {
                address: "5G1Qpxpc7ZvbbjfwJnJJPEx4VzYqeVYTsy55BstKQCQf4KZf"
            },
115: {
                address: "5HUoQRJ7UMQb8Jz7L3QS6HWNEbCzMQoqPsoq1d4KBfr18qoW"
            },
116: {
                address: "5DYcjLdakgpZeAqy9pPLwLLbhe8sMiAdfemRJdcpkEH6HehG"
            },
117: {
                address: "5CovBtVoLrzBc2EWKwVbV68bu7aLxbtMd2DwdLswQ2gSfLPm"
            },
118: {
                address: "5E2q4r4Fy2CrXiw9BWdY5iMWDLfd85jkXoncZzRYBfT32nuS"
            },
119: {
                address: "5GVRGHxtdYFWRWdRpYtvNb32btsLkCwsavMDagdFVdAwwSfd"
            },
120: {
                address: "5HS9T8DA7atVFq8S3F2brhYZn6xC4H3hStnrnfEauQVq2btt"
            },
121: {
                address: "5GXzLT9RxqEhALkGS2rx5s17BXgcRKwJmRzK3FTkaGbt9As9"
            },
122: {
                address: "5E2etZxScri8DdPwT1VyFCctgyQs54CGjKA8tXRprKn1kk6c"
            },
123: {
                address: "5HdGVzJUyMnDVpFBj8fekL9bmjPy1ypjBRkKbsYFnTu3MBcg"
            },
124: {
                address: "5DPePVGzJ8fvbAbbUUDjWaYYp8dz4kHynF2NWftZYDbP6xAY"
            },
125: {
                address: "5GNtRmGiayUKV7oBfU749c4bwJCphucZg9Lb6p19zohSLzDi"
            },
126: {
                address: "5HXEYdfJ4Ep5DsXc8n9eRAGnDr726TsRGRatNW2ht1nuzsdP"
            },
127: {
                address: "5FXUKNfc9Bz9E7f9rHSQV17vitH8WHAwVazFpWUQXcsMoVy9"
            },
128: {
                address: "5GAK7rDneE2nwnayMKKsNe7Sac1yLaC4mxGajs3c4jCWcBQK"
            },
129: {
                address: "5GqBcEATZxFzTxPMUiwRkbaJN7QKNdXX9ZrHeoipDbbFUWFt"
            },
130: {
                address: "5EGtNHLuwnFs7sn6gGVfaWX8dvLcV54W1UAjBd8mTUfaUGYT"
            },
131: {
                address: "5Fmo2v7NXXK9RpPjvqEZGeEpiAPkoHiBMkiSoneBLRBmZq3h"
            },
132: {
                address: "5HR7Nh9hG46mAsu8PzBgbjEZJBPgHmQyYFsSspeov6rGmXfY"
            },
133: {
                address: "5GLgZzctZu9PAYdAybTSRn78T26BtJQhqA4gwihqAN46DmqG"
            },
134: {
                address: "5FQv26w33qXSkMr6NnFUUXoWkcsdeYi1g9oEBfdaxf9WiE3k"
            },
135: {
                address: "5F4sNmVLFEyko78Wg6uph1yfFFtrK9FHYsjwynE3AXLpMbeC"
            },
136: {
                address: "5HM3HewZMnHBh8QEzmC2zKPzCgCMRXbWrTRwCMtSMidgFAEc"
            },
137: {
                address: "5DLTTxYURggdUuUNJe5uW1xYdJpm4nE3C8FtBq3zsdLT377Z"
            },
138: {
                address: "5DDRdoRFqYvoHk4o4fYPHmjPThYn8X1RkL2d2Yq4G9t2YvbY"
            },
139: {
                address: "5EDdZeRyNszdxRAC6cXtoSduDzeX46fEv8VM79ShU8jU5nPx"
            },
140: {
                address: "5CrHxvhWzgKGwDTw1MCWfL2MiE9jwCXkvHcvYUhG58XWXU1s"
            },
141: {
                address: "5Cs4kMpAgKz8wH5pvyFvC429ShghV9JrNoRoa22tjUYEEPyb"
            },
142: {
                address: "5ChQTJPBPXBmp8XLwufRyCRWNrDFSS924QhKDvz8UzrYmgpu"
            },
143: {
                address: "5CDJz9teb9GzsgWaiH7pBHowXZRvV7orUY1e8Qh1hKarbBqm"
            },
144: {
                address: "5CdA7Xqofp8q8oZQLM4mc5doth1zXz5Ro3ye7BQ3hRsYJTva"
            },
145: {
                address: "5Fnkk87wpeZdN1zC68p8kYo5J9P662dyyH6yDQ135HPcuYZn"
            },
146: {
                address: "5ConfXtRkUj9u7rwqsj1ncivzk4Z2L4f1WZZwuVPXxbuKCzt"
            },
147: {
                address: "5GJTAnzN12HcDvjEQP7v76pJDWW1aQSDSDQBpqzNtYpypkgk"
            },
148: {
                address: "5FQEhF48D8rU2fENewYLG8uaDZfbSCzB27F99wQopaQC2sJs"
            },
149: {
                address: "5F3BjLHMigHr48ZbYQrPU5RohY14AMVqiwgVVmr1AZwcCsTw"
            },
150: {
                address: "5CvGxJgnQEHSvDKa7APTdMX2cvHN3M2SU9WUDrkAGrtAcVMV"
            },
151: {
                address: "5DYgP3FdBjYQXVuG257pdgAorF5fVsNoTTR4EeXWVp91Kxtn"
            },
152: {
                address: "5HgQL9VCSmT7TqRELgTFSdEv7dafu99srvy9WHbffCBZ4A9K"
            },
153: {
                address: "5C5tpfxsEQQcszeymfU6zqBpnJMWv43jcMcPV2s3s8eQ3ygY"
            },
154: {
                address: "5Cgt1bUgbA3kJRxjAMqMAmGzg9DaA28c5puaXjpfAgJV1HRP"
            },
155: {
                address: "5Fwka9tyKhdrnUN8NSNnraGqFrygmnf461MUgyrHpqPgi1UQ"
            },
156: {
                address: "5E6QTGTFNnZcUpfDGm64nFd13ypMFLiJPUXJxE5CPaWeVDLs"
            },
157: {
                address: "5DWo49GCixfx6yk77yxJXMDBHTz2UhH8k9wMjnHfeoZQQVYa"
            },
158: {
                address: "5GBtpgN12Ch6556L98yvK3VKYpmoEJ6fwMkXNiDRbqeKQXVf"
            },
159: {
                address: "5EtZiB97rrVba9vFoow9tGhuzPUE5TGUTFKv95NULXVajHyo"
            },
160: {
                address: "5DdzL6h6mPhcT7gUvGoPRmexcm7FUxZEqQC4neyrnaAtf6Em"
            },
161: {
                address: "5EgqCrgKZ4GbGCvuZn2tnPApUvWoBPoGM9MJY3c7ZQJZYT5C"
            },
162: {
                address: "5DVXh8ufMqVyLMJ3jLMbLkTFMcgDpJMHeT7qPG4EWsMkXsgb"
            },
163: {
                address: "5Ff5aS2g2rTWbjYpCVV3zfJts2GBqniJaBAn1mnqVSkKU9m1"
            },
164: {
                address: "5Dxekdy4QTtgxwRUtbWuVxzQAgAY5TP7S7N2ShFMSze7i2uv"
            },
165: {
                address: "5DK8RzFgU11EvuCZEGPDxyGcXgwiFCi3kK12eumpZUtiB4hC"
            },
166: {
                address: "5F7wZmFz4xvx7hYutTUxGsqbkuQQhDMje5KLgKQnY79s35YQ"
            },
167: {
                address: "5DvmUkEu2LnVzH5MLew8JmrDbCzpJzZNLTWciWFb8L5GbVzA"
            },
168: {
                address: "5CzPofeAN8ZRNQXphbc9LoWRKqvagh17WBtYXjSJCng5CMEg"
            },
169: {
                address: "5FSf13HgaNrhyLRr4UrC52BUUuSYif7TLLCF6NBWqzbhAcmC"
            },
170: {
                address: "5DkKRwfj53dHcsWiMPnhb91ohZaDWBgBp9CWpiBMtE9W3Q2x"
            },
171: {
                address: "5CSzwdEy2cbXYMZRn2wHdHoxvTPGP9P4viKMwah3MHwcrirw"
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