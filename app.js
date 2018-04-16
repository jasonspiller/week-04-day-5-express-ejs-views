/* dependencies & app setup */
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

// add our middleware!
app.use(morgan('dev'));
app.use(express.static('public'));

// /* OLD error logger, static routes */
// app.use(logger('dev'));
// app.use('/static', express.static(path.join(__dirname, 'public')));

/* set the view engine */
app.set('views', './views');
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
	let data = {h2: 'Hello World'}
	res.render('index', data);
});



// last resort 404
app.get('*', (req, res) => {
	res.sendFile('/404.html', {root:'public'});
});

/* setting up port & listen */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`Hello Dave.`);
});
