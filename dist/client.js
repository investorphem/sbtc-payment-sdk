"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SBTCClient = void 0;
const network_1 = require("@stacks/network");
class SBTCClient {
    network;
    contractAddress;
    contractName;
    constructor(config) {
        this.network = config.network === "mainnet" ? network_1.STACKS_MAINNET : network_1.STACKS_TESTNET;
        this.contractAddress = config.contractAddress;
        this.contractName = config.contractName;
    }
}
exports.SBTCClient = SBTCClient;
