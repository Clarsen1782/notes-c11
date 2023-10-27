const express = require('express');
const index_routes = require('./public/routes/html')
const { v4: uuidv4 } = require('uuid');

const fs = require('fs')

const PORT = 3001;

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));



app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });