const router = require('express').Router()
// const translationRoute = require('./translationRoute')
const userRoutes = require('./userRoutes')

// router.use('/translations', translationRoute)
router.use('/', userRoutes)

module.exports = router