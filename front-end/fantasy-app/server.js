//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/dynasty'));


const allowed = [
  '.js',
  '.css',
  '.png',
  '.jpg'
];

// Catch all other routes and return the angular index file
app.get('*', (req, res) => {
  if (allowed.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
    res.sendFile(path.resolve(`dist/${req.url}`));
  } else {
    res.sendFile(path.join(__dirname, 'dist/dynasty/index.html'));
  }
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);

