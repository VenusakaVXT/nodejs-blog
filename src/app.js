const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')

// Connect database
db.connect()

// Static file
app.use(express.static(path.join(__dirname, 'public')))

// Use middleware
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// Server: POST of form -> PUT
app.use(methodOverride('_method'))

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    helpers: {
        sum: (a, b) => a + b
    }
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Route intit
route(app)

// Get port for local host
app.listen(port, () => {
    console.log(`App listening on port localhost:${port}`)
})