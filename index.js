'use strict';

var express = require('express')
    , app = express()
    , socketIO = require('socket.io')

var port = process.env.PORT || 1337
var server = app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})

app
.get('/', (req, res)=>{
    res.status(200).sendFile(__dirname + '/index.html')
})
.get('/about', (req, res)=>{
    res.sendFile(__dirname + '/websocket.html')
})

var io = socketIO(server)
io.on('connection',  (socket)=>{
    console.log('socket connect')
    socket.on('sent', data=>{
        console.log(data + " received");
        socket.broadcast.emit('message', data)
        console.log(data + " re-broadcasted");
    })
})