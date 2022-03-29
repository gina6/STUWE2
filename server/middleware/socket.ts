import type { IncomingMessage, ServerResponse } from 'http'
import { Server } from 'socket.io'

let server: any = null

export default async (req: IncomingMessage, res: ServerResponse) => {
  if (!server) {
    // @ts-expect-error: Missing server property in socket
    server = res.socket?.server
    const io = new Server(server);

    io.on('connection', (socket) => {

      socket.on('controllerConnected', () => {
        io.emit('playerRegister', ({ socketID: socket.id, x: 300, y: 300, score: 0 }));
      })

      socket.on('playerMove', (accelerationData) => {
        io.emit('move', accelerationData);
      })

      socket.on('disconnect', () => {
        io.emit('playerQuit', (socket.id));
      })
    })
  }
}