"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./clases/server");
var server = new server_1.default();
//Lenatar express
server.start(function () {
    console.log("Servidor corriendo en puertro ".concat(server.port));
});
