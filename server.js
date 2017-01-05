const express = require('express');

//Making a new express app
var app = express();

//2 args :- The root of the folder and what to send back
//The function will have 2 arguments:- request and response
app.get('/', (req, res) => {
  // res.send('<h1>Hello express</h1>');
  res.send({
    name : 'Andrew',
    likes: [
      'Biking',
      'Coding'
    ]
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Error handling the request'
  });
});

//About page
app.get('/about', (req, res) => {
  res.send('About page');
});



//Port
app.listen(3000);
