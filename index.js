#!/usr/bin/env nodejs

const assert = require('assert');
const process = require('process');

const server = require('./server/server');

const port = process.argv[2]||8080;
server.serve(port);

