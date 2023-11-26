import express = require('express');


export default class Server {
    public app : express.Application;
    public port: number = 4000;

    constructor() {
        this.app = express();
    }

    start ( callback: () => void) {
        this.app.listen( this.port, callback );
    }
}