"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Server {
    constructor() {
        this.port = 4000;
        this.app = express();
    }
    start(callback) {
        this.app.listen(this.port, callback);
    }
}
exports.default = Server;
