const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 

const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');
const app = express(); 

const server = http.Server(app);
const io = socketio(server);

mongoose.connect(
    'mongodb+srv://NasaAPI:spaceappschallenge19@nasaapi-5cptj.mongodb.net/nasapidb?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(cors());
app.use(express.json());
app.use(routes); 

server.listen(3334); 