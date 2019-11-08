if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

const app = express()
const PORT = process.env.PORT || 3000

app.use(errorHandler)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
  .then(() => {
    console.log('Mongoose is successfully connected')
  })
  .catch(err => {
    console.log(err)
  })
  
app.use('/', routes)
app.listen(PORT, () => console.log('SERVER RUNNING ON PORT ' + PORT))
