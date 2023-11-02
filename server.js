const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;
const HOST = '0.0.0.0'

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)