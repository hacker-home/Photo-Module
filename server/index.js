const express = require('express');

const app = express();

// const bodyParser = require('body-parser');

// const db = require('../database/index.js');

const PORT = 3000;

app.use(express.static('public/dist/'));

// app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
