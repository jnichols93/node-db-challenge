const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./routers/projectRouter.js');
const resourceRouter = require('./routers/resourceRouter.js');


const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);

module.exports = server;