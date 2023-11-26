import Server from './clases/server';

const server = new Server();


//Lenatar express

server.start(() => {
    console.log(`Servidor corriendo en puertro ${ server.port }`);
});