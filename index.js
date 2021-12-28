const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const aboutRoutes = require('./routes/about')
const brandsRoutes = require('./routes/brands')
const lowensteinRoutes = require('./routes/lowenstein_page')
const rventRoutes = require('./routes/rvent_page')
const hamiltonRoutes = require('./routes/hamilton_page')
const medinRoutes = require('./routes/medin_page')
const biolightRoutes = require('./routes/biolight_page')
const productsRoutes = require('./routes/products')
const contactsRoutes = require('./routes/contacts')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')



// routes

app.use(express.static('public'))
app.use(express.static('node_modules'));
app.use('/', homeRoutes)
app.use('/about', aboutRoutes)
app.use('/brands', brandsRoutes)
app.use('/lowenstein_page', lowensteinRoutes)
app.use('/rvent_page', rventRoutes)
app.use('/hamilton_page', hamiltonRoutes)
app.use('/medin_page', medinRoutes)
app.use('/biolight_page', biolightRoutes)
app.use('/products', productsRoutes)
app.use('/contacts', contactsRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})