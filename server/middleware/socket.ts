import type { IncomingMessage, ServerResponse } from 'http'
import { Server } from 'socket.io'

let server: any = null

export default async (req: IncomingMessage, res: ServerResponse) => {
  if (!server) {
    // @ts-expect-error: Missing server property in socket
    server = res.socket?.server
    const io = new Server(server);

    io.on('connection', (socket) => {
      console.log('Made socket connection');

      socket.on('up', (steps) => {
        console.log('up');
        io.emit('moveUp', (steps));
      })

      socket.on('down', (steps) => {
        console.log('down');
        io.emit('moveDown', (steps));
      })

      socket.on('left', (steps) => {
        console.log('left');
        io.emit('moveLeft', (steps));
      })

      socket.on('right', (steps) => {
        console.log('right');
        io.emit('moveRight', (steps));
      })

      socket.on('newPlayer', (playerData) => {
        console.log('newPlayer');
        io.emit('addPlayer', (playerData));
      })

      socket.on('disconnect', () => console.log('disconnected'))
    })
  }
}