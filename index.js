const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./db/mongo');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Body parser
app.use(express.json());

// Connect to database
connectDB();

// Route files
const csv2j = require('./routes/csv2j');
const bootcamp = require('./routes/bootcamps');

// Mount routers
app.use('/api/csv2j', csv2j);
app.use('/api/v1/bootcamps', bootcamp);

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`App is listening on port ${port}.`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});
