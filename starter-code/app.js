// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// home:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/myExpress.html');
});

// about route:
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

// photo-gallery:
app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});

