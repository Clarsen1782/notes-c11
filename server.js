const express = require('express');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs')

const PORT = 3001;

const app = express();

app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });