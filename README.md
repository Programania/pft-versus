# Programania From the Trenches - Versus game

This little game is adapted from the [Street Fighter Alpha port to JavaScript found here](https://github.com/gamedev8/js-sfa) by [@gamedev8](https://github.com/gamedev8). All kudos for them.

## Set everything up

1. Download dependencies with ```game/npm install``` **and** ```remote-control/npm install```
1. Run remote control server with ```remote-control/npm run server```
1. Run remote control client with ```remote-control/npm run client```
1. Run game with ```game/npm run game```

## Connect to the game

Open a browser and access to whatever URL the ```npm run game``` command has announced.

You can **start a new versus** clicking on the bottom left button.

A new match will start after some player loses. If you want to change characters, just click the bottom left button again.

## Connect remote control clients

Open a browser and access to whatever URL the ```npm run client``` command has announced.

Replace ```localhost``` by the server's local IP address to access it remotely.
