const express = require('express');
const api_routes = require('./api');
const index_routes = require('./html');


const PORT = process.env.Port || 3001;

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(api_routes);
app.use(index_routes);


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });