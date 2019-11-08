const axios = require('axios')

module.exports =  axios.create({
    baseURL:'https://api.ocr.space/parse'
})