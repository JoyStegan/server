const axios = require('axios')

module.exports =  axios.create({
    baseURL:'https://translate.yandex.net/api/v1.5/tr.json'
})