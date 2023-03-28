import { Io } from '../../index';

Io.on('connection', client => {
    console.log('Cliente conectado');
    client.on('disconnect', () => {
        console.log('Cliente Desconectado');

    });


    client.on('mensaje', (payload) => {
        console.log('Mensaje', { payload });
        Io.emit('mensaje', { admin: 'Nuevo mensaje' })
    });

    client.on('qqqq', (payload) => {
        console.log(payload);

        Io.emit('nuevo-mensaje', 'HEY...' + payload);
    });

});
