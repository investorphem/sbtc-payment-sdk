import { StacksNetwork } from "@stacks/network";
export interface ClientConfig {
    network?: "mainnet" | "testnet";
    contractAddress: string;
    contractName: string;
}
export declare class SBTCClient {
    network: StacksNetwork;
    contractAddress: string;
    contractName: string;
    constructor(config: ClientConfig);
}
