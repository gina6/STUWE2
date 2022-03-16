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
        io.emit('moveUp', (steps));
      })

      socket.on('down', (steps) => {
        io.emit('moveDown', (steps));
      })

      socket.on('left', (steps) => {
        io.emit('moveLeft', (steps));
      })

      socket.on('right', (steps) => {
        io.emit('moveRight', (steps));
      })

      socket.on('newPlayer', (playerData) => {
        io.emit('addPlayer', (playerData));
      })

      socket.on('disconnect', () => console.log('disconnected'))
    })
  }
}