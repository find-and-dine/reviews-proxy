const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/:restaurantId', express.static(path.resolve(__dirname, '..', 'public')));

// route to get :restaurantId data from service


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

// when rquest comes from client, ask proxy server first --> then ping th