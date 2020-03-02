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
    res.send('<p>Show me something</p>')
})

var io = socketIO(server)
io.on('connection',  (socket)=>{
    console.log('socket connect')
})