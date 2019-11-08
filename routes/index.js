const router = require('express').Router()
const translationRoute = require('./translationRoute')

router.use('/translations', translationRoute)


module.exports = router