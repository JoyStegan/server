const jwt = require('jsonwebtoken')

function verifyToken(token) {
    const decoded = jwt.verify(token, process.env.SECRET)
    return decoded
}

module.exports = verifyToken