const express = require('express');

const ReciperRouter = require('./recipes/recipe-router');

const server = express();

server.use(express.json());
server.use('/api/recipes', ReciperRouter);

module.exports = server;
