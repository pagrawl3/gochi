const app = require('express')();
const server = require('http').Server(app);
const mongoose = require('mongoose');
const expressConfig = require('./middleware/express');
const api = require('./api/index');

// MongoDB Connection
mongoose.connect('mongodb://localhost/gochi');

expressConfig(app);
api(app);

server.listen(9000);
console.log('Listening on 9000');
