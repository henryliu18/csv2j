const express = require('express');
const app = express();
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Body parser
app.use(express.json());

// Route files
const csv2j = require('./routes/csv2j');

// Mount routers
app.use('/api/csv2j', csv2j);

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`App is listening on port ${port}.`)
);
