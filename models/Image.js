const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema({
    url: {
        type: String,
        required: [true, 'url is required']
    },
    text: {
        type: String,
        required: [true, 'text is required']
    },
    translation: {
        type: String,
        required: [true, 'translation is required']
    },
    coordinate: {
        type: [Object],
        required: [true, 'coordinate is required']
    },
    lang: {
        type: String,
        required: [true, 'Language is required']
    }
})

module.exports = mongoose.model('Image', imageSchema)