#!/usr/bin/env node
const zlib = require('zlib');

process.stdin.pipe(zlib.createInflate()).pipe(process.stdout);
