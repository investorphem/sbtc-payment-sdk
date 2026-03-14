"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = generateId;
function generateId() {
    return Date.now().toString() + Math.floor(Math.random() * 1000);
}
