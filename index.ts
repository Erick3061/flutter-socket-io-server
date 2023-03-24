import express from 'express';
import path from 'path';
import { config } from 'dotenv';
import http from 'http';
import io from 'socket.io';

const publicPath = path.resolve(__dirname, '../public');

//app Express
const app = express();
app.use(express.static(publicPath));
config();


//Node server
const server = http.createServer(app);
export const Io = new io.Server(server);
require('./src/sockets/socket');
//Mesaje de Sockets

server.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
});