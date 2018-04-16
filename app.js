/* dependencies & app setup */
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.static('public'));

// set up views
app.set('views', './views');
app.set('view engine', 'ejs');


// setup routes
const homepage = require('./routes/index')
const pizzas = require('./routes/pizza')
app.use('/', homepage);
app.use('/pizzas', pizzas);


// last resort 404
app.get('*', (req, res) => {
	res.sendFile('/404.html', {root:'public'});
});

/* setting up port & listen */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`Hello Dave.`);
});
