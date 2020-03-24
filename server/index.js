const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const cors = require('cors');

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/restaurantId', express.static(path.resolve(__dirname, '...', 'public')));
app.use(cors);

// dummy API call -- refactor later
app.get('/api/:restaurantId', (req, res) => {
  const { restaurantId } = req.params;
  res.send(200);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));