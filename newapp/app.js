// app.js - new file at top level
const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);
const port = 3000
// map all routes to the express app
const calculatorRoutes =
require('./routes/calculatorRoutes');
app.use('/calculator', calculatorRoutes);
// export the app
module.exports = app;