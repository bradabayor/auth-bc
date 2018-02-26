const express = require('express');
const mainController = require('./controllers/mainController');

// Start Express App
const app = express();

// Set Up View Templates
app.set('view engine', 'ejs');

// Use Static files
app.use(express.static('.'));

// Fire controllers
mainController(app);

// Listen to port
app.listen(3000);
console.log('Port 3000 now listening...');
