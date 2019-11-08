const imageToTextApi = require('../apis/imageTotext')
const translateApi = require('../apis/translate')

class TranslationController{

    static translating(req, res, next){
        const { url, lang } = req.body
        const lib = ['English', 'Korean', 'Japanese', 'German', 'Russian', 'Arabic', 'Spanish', 'French']
        const code = ['eng', 'kor', 'jpn', 'ger', 'rus', 'ara', 'spa', 'fre']
        const langCode = ['en', 'ko', 'ja', 'de', 'ru', 'ar', 'es', 'fr']
        let text = encodeURI('no data')
        let rawText = ''
        let index = lib.indexOf(lang)
        let coordinate = null

        imageToTextApi.get(`/imageurl?apikey=8168819fce88957&url=${url}&language=${code[index]}&isOverlayRequired=true`)
            .then(({ data }) =>{
                rawText = data.ParsedResults[0].ParsedText.split('\r\n').join(' ')
                if(data.ParsedResults[0].ParsedText) text = encodeURI(data.ParsedResults[0].ParsedText.split('\r\n').join(' '))
                if(data.ParsedResults[0].TextOverlay != undefined) coordinate = data.ParsedResults[0].TextOverlay.Lines
                return translateApi.get(`/translate?key=trnsl.1.1.20191107T102920Z.d933306c7eb28579.215efaba6144008c524aaa63de6f174361196e17&lang=${langCode[index]}-id&text=${text}`)
            })
            .then(({ data }) =>{
                 res.status(200).json({text: rawText, translation : data.text[0], coordinate })
            })
            .catch(next)
    }
}

module.exports = TranslationController