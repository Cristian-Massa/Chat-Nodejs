const Express = require('express')
const { Server } = require('socket.io')


const app = Express()

app.listen(3001, ()=>{
    console.log(`server open on 3001`)
})
const io = new Server(app, {})

io.on('connection', (socket)=>{
    console.log('socket io')
})