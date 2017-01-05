const express = require('express');
const hbs = require('hbs');

//Making a new express app
var app = express();


//Specifying the path for partials
hbs.registerPartials(__dirname + '/views/partials');
//Setting up the view engine
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
})

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'oeibfoiaebfo efubo afoafoa eofean aneoin iofns ojnbfa fobaofaiffoafa ifb  ousbrovjsbfsf jh jkhisfnjlipafafpihrvbs'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Error handling the request'
  });
});

//About page
app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
  });
});



//Port
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
