const express = require('express');
const app = express();

// Route files
const csv2j = require('./routes/csv2j');
const sudsprod = require('./routes/sudsprod');

// Mount routers
app.use('/api/csv2j', csv2j);
app.use('/api/sudsprod', sudsprod);

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`App is listening on port ${port}.`)
);
