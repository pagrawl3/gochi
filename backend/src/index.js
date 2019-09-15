const app = require('express')();
const server = require('http').Server(app);
const mongoose = require('mongoose');
const expressConfig = require('./middleware/express');
const api = require('./api/index');

// MongoDB Connection
mongoose.connect('mongodb+srv://ahem:brahmasami@gochi-n4snt.azure.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

expressConfig(app, api);

server.listen(9000);
console.log('Listening on 9000');
