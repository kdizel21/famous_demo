const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 5000));
app.set('views', path.join(__dirname, 'src/static'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'src/static')));

app.get('/', function (req, res) {
  res.render('./index')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
