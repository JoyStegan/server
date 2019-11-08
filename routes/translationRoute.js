const router = require('express').Router()
const { upload } = require('../middlewares/gcsUpload')
const TranslationController = require('../controllers/TranslationController')

router.post('/', upload.single('url'), TranslationController.translating)

module.exports = router
