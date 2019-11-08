const router = require('express').Router()
const TranslationController = require('../controllers/TranslationController')

router.post('/', TranslationController.translating)

module.exports = router