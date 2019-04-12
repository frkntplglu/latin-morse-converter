var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var clients = [];

io.on('connection', function(socket){
  console.log('an user connected');
  clients.push(socket.id);
  console.log(clients.length);
  io.sockets.emit('userCount', { userCount: clients.length });

  socket.on('disconnect', (socket) => {
    console.log("disconnect a client..");
    const index = clients.indexOf(socket.id);
    clients.splice(index,1);
    console.log(clients.length);
    io.sockets.emit('userCount', { userCount: clients.length });
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

