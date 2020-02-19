const express = require('express');

// const db = require('./data/dbConfig.js');
const router = require('./data/router/cars-router.js')
const server = express();

server.use(express.json());

server.use('/api/cars', router);

server.get('/', (req, res) =>{
    res.send('<h2>Node DB-2 Project</h2>')
})

module.exports = server;