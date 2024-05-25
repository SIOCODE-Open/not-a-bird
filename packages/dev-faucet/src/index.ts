import express from 'express';
import { program } from 'commander';
import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";
import { cryptoWaitReady } from "@polkadot/util-crypto";
import { BN } from "@polkadot/util";

program.option('-p, --port <port>', 'Port to run the faucet on', '5001');
program.option('-s, --suri <suri>', 'SURI of the faucet account', '//Alice');
program.option('-n, --node <node>', 'Node endpoint to connect to', 'ws://127.0.0.1:9944');
program.option('--name <name>', 'Name of the chain this faucet is for', 'SIONET');
program.parse(process.argv);

const progOpts = program.opts();

function generateFaucetWebPageCode() {
    return `<!DOCTYPE html>
    <html>
    <head>
        <title>${progOpts.name} Faucet</title>
    </head>
    <body>
        <h1>${progOpts.name} Faucet</h1>
        <fieldset id="fields">
            <legend>Request Tokens</legend>
            <label for="address">Address</label>
            <input name="address" type="text" placeholder="5C..." value="">
            <button onclick="requestTokens()">Request Tokens</button>
        </fieldset>
        <p id="error" style="display: none; color: red;">
            This is an error message
        </p>
        <p id="success" style="display: none; color: green;">
            Tokens requested successfully
        </p>
        <p id="finished" style="display: none; color: #999">
            Please refresh the page to request more tokens.
        </p>
        <script>
            async function requestTokens() {
                try {
                    const address = document.querySelector('input[name="address"]').value;
                    const res = await fetch('/tokens', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ address })
                    });
                    if (!res.ok) {
                        const body = await res.text();
                        throw new Error('Failed to request tokens: ' + body);
                    }
                    const data = await res.json();
                    document.getElementById('error').style.display = 'none';
                    document.getElementById('success').style.display = 'block';
                    document.getElementById('success').innerText = 'Tokens requested successfully to ' + address;
                    document.getElementById('fields').style.display = 'none';
                } catch (err) {
                    document.getElementById('error').style.display = 'block';
                    document.getElementById('error').innerText = err.message;
                    document.getElementById('success').style.display = 'none';
                    document.getElementById('fields').style.display = 'none';
                } finally {
                    document.getElementById('finished').style.display = 'block';
                }
            }
            window.requestTokens = requestTokens;
        </script>
    </body>
    </html>`;
}

var _wsProvider: WsProvider | null = null;
var _api: ApiPromise | null = null;
var _keyring: Keyring | null = null;
var _keypair: any = null;

async function lazyLoadChain() {
    await cryptoWaitReady();
    if (!_keyring) {
        _keyring = new Keyring({ type: "sr25519" });
        _keypair = _keyring.addFromUri(progOpts.suri, { name: "faucet" });
    }
    if (!_wsProvider) {
        _wsProvider = new WsProvider(progOpts.node);
    }
    if (!_api) {
        _api = new ApiPromise({ provider: _wsProvider });
        await _api.isReady;
    }
    return {
        wsProvider: _wsProvider,
        api: _api,
        keyring: _keyring,
        keypair: _keypair
    };
}

const app = express();

app.use(express.json());

// CORS
app.use(
    (_req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
        next();
    }
);

// Frontend
app.get(
    '/',
    (req, res) => {
        res.status(200);
        res.send(generateFaucetWebPageCode());
    }
);

// Tokens endpoint
app.post(
    '/tokens',
    async (req, res) => {
        try {
            const { wsProvider, api, keyring, keypair } = await lazyLoadChain();
            const { address } = req.body;
            const sentTokenCount = 1_000_000_000_000 * 200;
            const gasLimit = api.registry.createType("WeightV2", {
                refTime: new BN("20000000000"),
                proofSize: new BN("200000"),
            });
            const tx = api.tx.balances.transferAllowDeath(
                address,
                sentTokenCount
            );
            try {
                await new Promise<any>(
                    async (resolve, reject) => {
                        try {
                            await tx.signAndSend(
                                keypair,
                                (result) => {
                                    if (result.status.isInBlock) {
                                        resolve(result);
                                    } else if (result.status.isError) {
                                        reject(result);
                                    }
                                }
                            );
                        } catch (err) {
                            reject(err);
                        }
                    }
                );
                res.status(200);
                res.json({
                    address,
                    sentTokenCount
                });
            } catch (err) {
                res.status(500);
                res.send(`${err}`);
            }
        } catch (err) {
            res.status(500);
            res.send(err.message);
        }
    }
);

app.listen(progOpts.port, () => {
    console.log(`Faucet running on port ${progOpts.port}`);
});
