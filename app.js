const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

const restaurantList = require('./restaurant.json').results
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
const port = 3000
app.get('/search', function (req, res) {
  const keyword = req.query.keyword
  selectedRestaurants = restaurantList.filter(function (restaurtant) {
    return restaurtant.name.toLocaleLowerCase().includes(keyword.trim().toLocaleLowerCase())
  })

  res.render('index', { selectedRestaurants: selectedRestaurants, keyword: keyword })
})
app.get('/restaurants/:id', function (req, res) {
  const id = Number(req.params.id)
  restaurant = restaurantList.find(function (restaurant) {
    return restaurant.id === id
  })
  res.render('show', { restaurant: restaurant })
})

app.get('/', function (req, res) {
  res.render('index', { selectedRestaurants: restaurantList })
})
app.listen(port, function () {
  console.log(`listening on http://localhost:3000`)
})
