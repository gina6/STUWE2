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

      socket.on('playerMove', (accelerationData) => {
        io.emit('playerMove', (accelerationData));
      })

      socket.on('up', (acceleration) => {
        io.emit('moveUp', (acceleration));
      })

      socket.on('down', (acceleration) => {
        io.emit('moveDown', (acceleration));
      })

      socket.on('left', (acceleration) => {
        io.emit('moveLeft', (acceleration));
      })

      socket.on('right', (acceleration) => {
        io.emit('moveRight', (acceleration));
      })

      socket.on('newPlayer', (playerData) => {
        io.emit('addPlayer', (playerData));
      })

      socket.on('disconnect', () => console.log('disconnected'))
    })
  }
}