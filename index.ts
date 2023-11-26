import Server from './clases/server';
import userRoutes from './routes/usuario';

const server = new Server();

//Rutas de mi app
server.app.use('/user', userRoutes)




//Levantar express

server.start(() => {
    console.log(`Servidor corriendo en puertro ${ server.port }`);
});