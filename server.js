const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

// server.use('/api/accounts', router);

server.get('/', (req, res) =>{
    res.send('<h2>Node DB-2 Project</h2>')
})

module.exports = server;