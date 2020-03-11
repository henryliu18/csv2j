const express = require('express');
const app = express();

// Route files
const csv2j = require('./routes/csv2j');

// Mount routers
app.use('/api/csv2j', csv2j);

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`App is listening on port ${port}.`)
);
