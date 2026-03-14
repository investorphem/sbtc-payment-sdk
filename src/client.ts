import { StacksMainnet, StacksTestnet } from "@stacks/network"

export interface ClientConfig {
  network?: "mainnet" | "testnet"
  contractAddress: string
  contractName: string
}

export class SBTCClient {
  network
  contractAddress
  contractName

  constructor(config: ClientConfig) {
    this.network =
      config.network === "mainnet"
        ? new StacksMainnet()
        : new StacksTestnet()
    this.contractAddress = config.contractAddress
    this.contractName = config.contractName
  }
}