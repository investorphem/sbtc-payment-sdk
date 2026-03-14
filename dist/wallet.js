"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectWallet = connectWallet;
const connect_1 = require("@stacks/connect");
function connectWallet() {
    (0, connect_1.showConnect)({
        appDetails: {
            name: "sBTC Payment Processor",
            icon: ""
        },
        redirectTo: "/"
    });
}
