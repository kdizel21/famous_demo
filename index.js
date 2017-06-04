const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes')

app.set('port', (process.env.PORT || 5000));
app.set('views', path.join(__dirname, 'src/static'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'src/static')));
app.use('/', routes);

// app.get('/', function (req, res) {
//   res.render('./index')
// })

app.listen(app.get('port'), function () {
  console.log('You are now listening on port ', app.get('port'))
})

module.exports = app;
