const bcryptjs = require('bcryptjs')

function hashPassword(password) {
    const salt = 10
    const hashedPassword = bcryptjs.hashSync(password, salt)
    return hashedPassword
}

module.exports = hashPassword