import { showConnect } from "@stacks/connect"

export function connectWallet() {
  showConnect({
    appDetails: {
      name: "sBTC Payment Processor",
      icon: ""
    },
    redirectTo: "/"
  })
}