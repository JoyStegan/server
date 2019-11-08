if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>{
    console.log(`connect to mongodb`);
  })
  .catch(()=>{
    console.log(`fail connect to mongodb`);
  })

  app.use('/', router)

app.listen(PORT, () => console.log('SERVER RUNNING ON PORT ' + PORT))
