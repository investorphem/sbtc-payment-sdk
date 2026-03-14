import { STACKS_MAINNET, STACKS_TESTNET, StacksNetwork } from "@stacks/network"

export interface ClientConfig {
  network?: "mainnet" | "testnet"
  contractAddress: string
  contractName: string
}

export class SBTCClient {
  network: StacksNetwork
  contractAddress: string
  contractName: string

  constructor(config: ClientConfig) {
    this.network = config.network === "mainnet" ? STACKS_MAINNET : STACKS_TESTNET
    this.contractAddress = config.contractAddress
    this.contractName = config.contractName
  }
}