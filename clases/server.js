"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Server = /** @class */ (function () {
    function Server() {
        this.port = 3000;
        this.app = (0, express_1.default)();
    }
    Server.prototype.start = function (callback) {
        this.app.listen(this.port, callback);
    };
    return Server;
}());
exports.default = Server;
