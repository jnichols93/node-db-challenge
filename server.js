  
const express = require("express");
const projectsRouter = require("./data/projects/projects-router");
const helmet = require("helmet");
const server = express();

server.use(helmet());
server.use(express.json());
// server.use('/api/projects/', projectsRouter)

server.get("/", (req, res) => res.send("<h1>Life is Fair 4 Me</h1>"));

module.exports = server;