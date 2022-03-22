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
        io.emit('move', accelerationData);
      })

      socket.on('disconnect', () => console.log('disconnected'))
    })
  }
}