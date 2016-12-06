const WebSocketServer = require('ws').Server;
new WebSocketServer({port: 3333}).on('connection', function (game) {
  console.log("Game connected");

  new WebSocketServer({port: 3334}).on('connection', function (client) {
    console.log("New client connected");

    client.on('message', (command) => game.send(command));
  });
});

console.log("Waiting for game to connect to websockets server...");
