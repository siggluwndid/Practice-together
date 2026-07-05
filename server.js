const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Database connection
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Error handler middleware (MUST be after routes)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
