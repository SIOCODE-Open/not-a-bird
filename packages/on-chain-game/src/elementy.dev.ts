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
        address: "5DrMncfLrPsi6n3SnB62Nt6uzi2eJLyAEMt4Sty9tCbdGBbC"
    },
    elementContracts: {
        25: {
                address: "5CVLaGd5vNNuvWRNc132MaoKD6Zee4bhyrcMQeP7hrxpy4bv"
            },
26: {
                address: "5EtbhW2fhmrETjcW5HgNPz26dN8xYyFA2muUK6NdGjQpzTrL"
            },
27: {
                address: "5Cq3BgRZ5jdsAJKdquspHxc2utrEtN7YeXcwrGSYW4fwsCFD"
            },
28: {
                address: "5EeFB3NtCwQrxZdXQfYXHRyimpWLJxfQoeANszF45CcWx7Tx"
            },
29: {
                address: "5DzMfkVre2cA5N2eGt1DLtgLeM1Y9wJoAoQ91vafufGfk5hP"
            },
30: {
                address: "5EFkBFn75d2LauYTanTKWw4eNYAfWUqbxGkEzDE5sk4k9mdJ"
            },
31: {
                address: "5GadyiPAerWCFPHTjsBZDSnKpcHKssqHGUgwxptkksLKsvNz"
            },
32: {
                address: "5E6LeVE95wkdky9WuMEjLS9unQMs2MS4QGKZ53uyDKsHgNVT"
            },
33: {
                address: "5CXDwAQo4JJ4KiwS6KLLr7jQbQh4TAe1Bqh54oyMLGa5anfF"
            },
34: {
                address: "5ERS859PX6UkkDBYjdCv1EtiZu6dSk9ysWjwf1x7PXNhxJFa"
            },
35: {
                address: "5GzDEQAjKZVQWAmFZqTR6n6Q9BbbaHqzATBQFTjr3nN6LZtB"
            },
36: {
                address: "5H7PjRSk7kCJfSZwC3Ek7srCSdn8A74ogkhEZAA54Yfyo9Pt"
            },
37: {
                address: "5FYJd4urBzSj5JQMVfyyN8APbmVpvLJM5ujUDrdTmwb7twDn"
            },
38: {
                address: "5Fumhm4RgaP91PZS5Fn2q2wAhLfz2A2k38VNcKpwefhdy2n1"
            },
39: {
                address: "5CADmjuwV1v52pmPbKgpeMQoT9tWoT4Nbyh691nqjPpQu6VP"
            },
40: {
                address: "5EKpZU85DUJqjWC9hEgbdgY9zSyMVqbqx6v1zd4n2MJitru2"
            },
41: {
                address: "5FyjLupRVT7jLyXteV3nVmr3FBhLM8qXW9VXpL5BTW3vqHU8"
            },
42: {
                address: "5EGEXpeZRBGvRgT53VkB7dj42uFe8gD9cX3nn2zpny7trSVg"
            },
43: {
                address: "5H8UcH1v5xehMoohoEZncn9E8LrqjHdcWw2r8w1wAAFbQ4x5"
            },
44: {
                address: "5DKAuEAs9ZDrNZ3oeSfdXL2kNT6eC1SicddyDE3ZbWFuns7d"
            },
45: {
                address: "5GsFCqpGW1dXwDkPAjCHBg8DJsFGuw3BmrUWYkm9xWuGta1L"
            },
46: {
                address: "5DuSK1T6WnQ4MAP71XFtiyXeiroHr2HCfs8tPMELr6gzwj7i"
            },
47: {
                address: "5CA7CXausVLLsCnPXzndFmVVswtSCbdSBsLQBd3Moe21G79J"
            },
48: {
                address: "5DJSnSYZpaM3jvCQu51wrUkHxABUkMAS4refjuY2KS7HTPEs"
            },
49: {
                address: "5HNqufoMgvNodtJuGQSVfAikC4D9CvkA1JdPwQabmGmi4abS"
            },
50: {
                address: "5EsXqjPEks23tgrGs1Nw89Hf13W6swXBTx2ySo3pSi7nNBbd"
            },
51: {
                address: "5EdmWR1K5i29jokFtDS31T5wukJi6wnUjaqbcko5AWCEFaHh"
            },
52: {
                address: "5FZwVf5Nzej1aD7MomYfoiCpH2DXpFmqm9osccfkcFyfLXXn"
            },
53: {
                address: "5EnHvc12E2LZDYxeWKGCnSjzhpHX56anCBuGQqKPUaLBT3pp"
            },
54: {
                address: "5F5RcBikp6uxcV6Yn3h6siobPKWGMyt89jsg2WVFXpnKnaNg"
            },
55: {
                address: "5DbzsfwhigkrrXvU2oKWS4Z67dfdZiSJy3SboVux2MwL7rT4"
            },
56: {
                address: "5EJtLbfXusuzfuTapSTLaFkVe6qBKjPsYnagLDUBRKCLdRmS"
            },
57: {
                address: "5Gwqbc2HQb6i6Vrje8GjcjkC1yvhbpuXKxQ6fEHC6nxPbdeh"
            },
58: {
                address: "5CfRgR9SkxEv9J9suRFhvWDiGZyN4CS6saVBXmjSLhZFPQQd"
            },
59: {
                address: "5DDQvYbJFy5j19fZUPriZuFKgho9gQjuSNJbygngBpftXLEK"
            },
60: {
                address: "5EpsTQ33EN59fSjtN13onvWD9vuYKrLoeRviZ2rVHdkAXdVA"
            },
61: {
                address: "5Emz6tr2GPUyR2r5PRizFtvrdyjfM6FvbHYjkMD92V5A8xMy"
            },
62: {
                address: "5HRmaPu54EhEgjG3xogvAYEvR1W6nnjs4tnec7xqei2rzyNp"
            },
63: {
                address: "5H53r6fwLcRuq9HQLxEnrbtCRRwqXZK77RHCJd2hRrHMJZSg"
            },
64: {
                address: "5F4yVvApnx96N2QgNNroBx63j6LwCiYELyrgyxZe8gogTVA5"
            },
65: {
                address: "5CxGyPb4qSwakEksFgyx5pDouLWerbFY7991rkMoSLngrp2H"
            },
66: {
                address: "5Ez3M4Vfj3HESDEdviTAESUTqHA8dcdkZ9PfRireikHqLKo5"
            },
67: {
                address: "5H7k4WvLGy42JtyWGPXf6TnVfwfUYBPYB6b3FJjZqdBW9T8D"
            },
68: {
                address: "5Eo2p1oCwsx6oxKYcszSE9UdUJz9gVs9WLLeqNzmBpDgXLqZ"
            },
69: {
                address: "5HC1iPDXBwQyLxAT9th75UKtiDP6ocVnXaGSxAWEjWTDSRff"
            },
70: {
                address: "5EUcfeyxyp1T4CCeSfUydUj2zPyYPNfwkKydyftVQPjAoRJw"
            },
71: {
                address: "5CfZGXHJa2ybmq5mDFDBvDoKqenzJRMm4GaETkm1kEegW66V"
            },
72: {
                address: "5DEjRGMYjJBmH1agpFuqzoeHD5Q5ksBexc39FweFoCs5Frrj"
            },
73: {
                address: "5E8dqBq88XUSGaHnzWaJ1HZBFAMzkgFZP7rU73ineG94Lq9g"
            },
74: {
                address: "5DFKQsfFDUen9cau4pUdQRkPBtRMJJ6f6iTf3WtXEBYp82sB"
            },
75: {
                address: "5GgRUbiS2XvCD3nxkdQRWahfkcCdgekWZGiR56a6opbMhH8V"
            },
76: {
                address: "5DHRqG7BXoL3PPYYTEmHZbsWRmnqkjTQZ2hrXhxsWEBT7yTm"
            },
77: {
                address: "5GpCBE3WQi7PfdTVRSNvzCZvDe94F2HLNyWU4i8xxYRgH3JJ"
            },
78: {
                address: "5CUTHTGgYMTq9gb2JGUv3KYpX9kUmYukFhd35pRwbwQJBgaY"
            },
79: {
                address: "5GUDHNPobmZ6zm3ER5YWVTGTRbVuepq4mbCqgugcpckmuXd9"
            },
80: {
                address: "5GMxGt2iwP1eqfAy9TrxQ72fxxLExPp3YAfZsvpyTccshdjC"
            },
81: {
                address: "5EHuedsm6wAq2ApRATzJyEHP7qpZZQTMMM3dKNYBGiVnEELq"
            },
82: {
                address: "5HZXGBKbAmUnbBAFpBnPaXF9PhpzbDmXkvWFTCRyqw1yastB"
            },
83: {
                address: "5GwjyD3ERKrJ6Ci7rGWGrECTGCCDt1gnn56cj8nZU6E6FDWR"
            },
84: {
                address: "5FCnWR8v7EfBdGQ6vfSFMnyLYng6nRBkfXeo22Gw6nUFaQ3n"
            },
85: {
                address: "5Cb3CkT5m1wjUa5NmBqrKaj2LdENx4Br5bxd5mJRhKVu4fpV"
            },
86: {
                address: "5EyUh5qWHmUq6w5KErmKMDREoAprEEJpnCWNxPdDRCtqrh6K"
            },
87: {
                address: "5EZ3R1UZFjRD2HNrJ8Wn7UK53DgB5sPgiY2xr8XeHZUPRXD4"
            },
88: {
                address: "5Dt9QCbvMgJKKBcJgYxBxV682eVu7B2yubCbFN84pqPAsibZ"
            },
89: {
                address: "5DJsD95CT9j57qAAfBbgLBv6WA3TmEnuD9zYDAVCmCqRTNYW"
            },
90: {
                address: "5DfEk95Ymq5uZz4GvShMWcnsTLVrrR3gqyzmJabwFLD57ds1"
            },
91: {
                address: "5GiUnW58pGXRkgxkpo8xxN9UaDKxWUd75iB91xJUwmJqo6yX"
            },
92: {
                address: "5GiH3qQCZMAuEZPwuazhWjif4GzkwgDEtq5rYBSf66vtt6ss"
            },
93: {
                address: "5Gy5GCRZz7YnBuMUdepQLR8THvJJiA2jUtxce9qrnYyzrEmG"
            },
94: {
                address: "5CtVsWVH2EFo3VV4dUUwVne9eJTJAcFScTwcFGpPy46qJZX6"
            },
95: {
                address: "5HUwZHtoEcuGvHqL6hEFxE4Hn5NtR2KJf4zAwVzb6sjwWg1i"
            },
96: {
                address: "5DBRDkuig9SJna6MWDjraC1hZ2roBJ8wq2bobdCwC3MftA68"
            },
97: {
                address: "5CehbaSvrgJSZkf8TVuYYCgJoGHqLQt9UfLYLQJfC2avFGBv"
            },
98: {
                address: "5DfjpfkXC2eZkzRUEEaXZ3FHHvb6qJWAH5ZzZyfyN1MU3ZUc"
            },
99: {
                address: "5GQVkzUXi6kNYAd6ScR7Fhj53wmipBrzbdpk5ng13fTSevYX"
            },
100: {
                address: "5Gvi5HteF6YbSycgRfqTzJ575E55TBBn8MFECKuBwkMSyqi4"
            },
101: {
                address: "5H7SYTSEPTqZuHj5PoS53XwvEGWFHYybtecRzLaJCVk9ART9"
            },
102: {
                address: "5Gd3eyLH9Car5Q7GDMhqhSAXBJUogAeB5vjobJLPwLMBxKwA"
            },
103: {
                address: "5EXDUbKmo28RybmLcuxWkwLvpMJZZN8qvAtg18rfoXCxQbyr"
            },
104: {
                address: "5CydGcsy83rTEbJNCwk1otaDVBzP8nNgGNK2RKueYDHXyV1X"
            },
105: {
                address: "5CFr7McXLATHRbzcUr1L6c5jThUWtA4MGUdSQYF6tDfARc3z"
            },
106: {
                address: "5HhTLtmp8BUHVKT1n1SbxeZoskD23uq8Z7YaMhLh1SPqrqhC"
            },
107: {
                address: "5FQb8XDKpNSDCzjGYBjjWMQgutGqF7p3qZMEGj4DPCHTY7Bm"
            },
108: {
                address: "5E1T1uXGzgKR3fr43JiEFdczarXezSCmfh2tkphzU1DtQpJk"
            },
109: {
                address: "5GjWpAwffFip5ia2QFmJRFvNnjXhUdR6gEQKZsfGyvv2V9xG"
            },
110: {
                address: "5HCz1kNU3RvaJdBnJwmSEp7hPdV3jxJUb8UYTSqExKpotRJi"
            },
111: {
                address: "5FCJ5844wQq3Jcm5YMF4KNvHmUPSWppYKTrEf19jePAqjaM7"
            },
112: {
                address: "5CxqvuaE3F2vmDdrVMnoimYDHc2qaJ8docXGsz4Z37ihxno6"
            },
113: {
                address: "5Fgjhsk1UFWVeMupC3iAmGnNpJosxyfq1LSTvKAA5G5Yw3dq"
            },
114: {
                address: "5GhtWYmDud3qupwa5Jygtxk1sxvigdyWpuW3j5b2qYnYVR5u"
            },
115: {
                address: "5GiRSbuBcGf9Y9R6nKpXd4GFmyWsrcA2r83SJUE7c6p6KfgD"
            },
116: {
                address: "5FaHkDPqCmUUjXL37sc2DHyp4sqQqmBFTznu9tEoKpDFC2yn"
            },
117: {
                address: "5DnfH6aoy6MFKS6JCWDTyUV5pNbfae7J3NoWiZ7AhGbC8Cyv"
            },
118: {
                address: "5CrvmwDJNEp1niidJSvczad4NMyFYWYvSEAVebaXYnYXMQwQ"
            },
119: {
                address: "5EEQaD8r56DAn54CHN4M8wdhTpQV9o74PTvwgCMxTtZe7T1p"
            },
120: {
                address: "5Gfj9ZS59h9Zc36TPzz2xZ7d6r991vy95UTiTgYvUeRQfnfV"
            },
121: {
                address: "5CPGvDy4YejWNrZPd48phpkCme2LXonTYK4a6pegfvdRCfmM"
            },
122: {
                address: "5EY1gFGZxSM6ctmju9BreHNaJeRjTcw5zSNuoa7Kfek6b8KP"
            },
123: {
                address: "5ELwNqzkzNrrBjvtQcHiLwPB5pLjksgQpSkd1G4S7Ec2CGJe"
            },
124: {
                address: "5H2TntoJxiLU5Tsr5Zi3L3HSEfAqZWRx8Y7PZQeHpa6pDLQy"
            },
125: {
                address: "5CE8Tudn5CZHymDrqHDxz2NFsaX7fzUXY44rPjLMXsRLt7fq"
            },
126: {
                address: "5FpcidTMyvJEk822DLPhg6zQ4DjMPaiTNUXGxgvJWZqxtTFm"
            },
127: {
                address: "5CreUcWVBRakJ1MBmJbn8Wj7C9J1k1a3j4YAAcPfbHZX1nzC"
            },
128: {
                address: "5F4NYr77WgLCavLrtQMJQUsMsSArD76kWyzNGAz4ytK5peyn"
            },
129: {
                address: "5GExfh6R47iY68zdHzT11TWdYQHTBsjJVNyHeLzHqUqEhhES"
            },
130: {
                address: "5ECUZ9E2aoXdC451n4C66e1GT9uUZtpH2zQr8GkHESNvhuPk"
            },
131: {
                address: "5F5pXAH5Zno9cB3g8nJyhahPWJPxYS2B3q7VnsFYsuHaoErv"
            },
132: {
                address: "5HakDP7Bwq4woEELnZmqbPJTozbkttMG2bv5Mf4dstbmrJTW"
            },
133: {
                address: "5GoTGWnBCmH5QNzpozMjaJyQunqBnUQjB2BorwYac95jmXe6"
            },
134: {
                address: "5DuHbQh4rDSTDtLTBK3eJ5V9tWH7vrsVx6QyawVxhD5EQVMx"
            },
135: {
                address: "5DtZ1TPzBEnT5bvNBwEsAiza8yLyWn6kHHijpqyHKfWvP9Xz"
            },
136: {
                address: "5EWoLhaHbL4LF18c7i5uXNY7c7RuUS6KNyPT323ip5GrNu88"
            },
137: {
                address: "5ENQT2cVZExQQe26Tk1Zeg3ZfBftTT5VWk71FEopRxAsk5Uu"
            },
138: {
                address: "5HJMXYEkTp7uK4TjmoorNUg1NsnxJt7PTZCATcAVucNppWkj"
            },
139: {
                address: "5Cy9ZfKdoy5U3c2H7FebD4zj5Gfn7ATn8j2F8XdAUbLx6SDn"
            },
140: {
                address: "5EVNkhukzJvTz6wvdGjcZZJP1Jz2Xuu9L7ywox5WhWHXvq9q"
            },
141: {
                address: "5HEGw8KvTJdsF8CsPciwggVxQownhgbswSQduW58fmQoKitK"
            },
142: {
                address: "5EiCbq9kUTi4FLsD4etHnUsWUndKYncGirczSgtcREa4ZiuT"
            },
143: {
                address: "5Fh2w1tx9jHg1JrLLR6zW7dBh4KqptHVJUfQn9FyzLm17Tat"
            },
144: {
                address: "5G8Px6B3emd8LDZhV7LyhMX9vPQzHHKYwCfdsBNEPWsALk4o"
            },
145: {
                address: "5CRj8HheFmMP4WZ5EKEAFUdXJysBHmwH3vzCkKmqaczrN1Nx"
            },
146: {
                address: "5HQtEWtDy5eX77oPF5TiWUm85zPArZt4MKkh5zSgn6BwoD7M"
            },
147: {
                address: "5DqqXdWM1jo1hWWH6bN7YDKkNZmheBjC3PkY2wtcSTcVu68x"
            },
148: {
                address: "5F7QJAUDhTNxtAQetFJWuv2xQNCH6MDKcUiKyBJ1wSiDnnbh"
            },
149: {
                address: "5E2YmpNswnxMVJe5JgwfRNyPi9PG98N8bcxQtzeJk3LSKuwN"
            },
150: {
                address: "5EMZ1k4ULbHKxAbY3qKyXS1uTa8hMdUyeijxWxBeeHd37Fex"
            },
151: {
                address: "5FXFntgpfBsoCiaFHPX1QVuLA5Z3kmFF2Be22vm6y9RYB9q7"
            },
152: {
                address: "5C64ELKZBJzQaRK4x9sckT5u5eLUUNad1B8WqAVNiw6dPKMG"
            },
153: {
                address: "5CBPP8UdnWjPkrm1u2DxvSkG3Wedv5LpX7fxaux8FtqBuhz6"
            },
154: {
                address: "5H4phJLZCs6U7TvZd6G6ywi9E96UbA4Eo8jnfPtQ9ZRgKUJJ"
            },
155: {
                address: "5CwVy3hojabM1FFAwSQWokNBzNBzFvuXZgwNkCyhzsdEEuuy"
            },
156: {
                address: "5DWQnWpQYs4c6gvgR5t4Shswtd3bkRAz9iJEuKWb7WM1rico"
            },
157: {
                address: "5FEuuDctKt3vocc7B5Z1LMY3W5GpY5dQNHAMUwoDzFPxv3hp"
            },
158: {
                address: "5Gk19zsxiBAMP4KYJUF628rfjpCTjqiDxhSJ46it9oo5QEgM"
            },
159: {
                address: "5Gnk4PjYC2fU3Zh913rFFy5dTPZ2z9e7xsFBZkfRMGYBn2MN"
            },
160: {
                address: "5Fn8AUUbPU7NBiQq4TFDtde6PZSdRxzpPdtDkyfDJizwuUGs"
            },
161: {
                address: "5C76Myog4cURso1nrDe4AatdrwuQ43Mn9rceiGcZajxc2rdq"
            },
162: {
                address: "5HGMMLz2g2PnibaaoGU59nmvZmYvMF8uzc7kjUWdC7ZkR8TH"
            },
163: {
                address: "5DE4uv5Cevjc1N62R9f7dGySetJnyusC5Ri9m41CvNHYh4Xh"
            },
164: {
                address: "5CRN9E2KzfssLUGwMM6ztQmUw9nQESfUSYzMQzmkMiNvExpT"
            },
165: {
                address: "5FEcEJgxTm2Z2hs8YxoRAWWJ1nCX6Qyqp2gBgEoUALvVVLZ5"
            },
166: {
                address: "5DZZK5ttZaaaMtsifMoCXhstwt3MnAytM3YpawTA4K5HTUZK"
            },
167: {
                address: "5FJ4fh77ktKHo5sirUZk3SCF98yE2edjRMXN6auTTHwoT7xA"
            },
168: {
                address: "5CEubHfZkdpDnqQk9JaVq9yD1DmbyhGLn9NobdSEWtyrVFCS"
            },
169: {
                address: "5HV2TWNKvn2Sw3v76rPYNhGSddL5yiAsu32iSwBQQ3xpoNJm"
            },
170: {
                address: "5CK3frCFgQBkdPrX2znPhfebjtdu4pUeTdKP6771wiscJbYG"
            },
171: {
                address: "5GpKCYUxh2o2zc6uoPp7TQVg3GXv9JkVivgDDYQYToqi4tvi"
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