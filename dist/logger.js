"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogge = void 0;
const store_1 = require("./store");
function startLogge() {
    setInterval(() => {
        store_1.GameManager.getInstance().log();
    }, 5000);
}
exports.startLogge = startLogge;
