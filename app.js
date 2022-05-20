const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
const port = 3000

app.get('/', function (req, res) {
  res.render('index')
})
app.listen(port, function () {
  console.log(`listening on http://localhost:3000`)
})
