const router = require('express').Router()
const TranslationController = require('../controllers/TranslationController')

router.post('/', TranslationController.translating)
router.get('/', TranslationController.find)

module.exports = router