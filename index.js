const express = require('express');
const app = express();
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Route files
const csv2j = require('./routes/csv2j');
const test = require('./routes/test');

// Mount routers
app.use('/api/csv2j', csv2j);
app.use('/api/test', test);

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`App is listening on port ${port}.`)
);
