const mongoose = require('mongoose')
const Schema = mongoose.Schema
const hashPassword = require('../helpers/hashPasword')
const mongooseValidator = require('mongoose-validator')

let userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        validate: [
            mongooseValidator({
                validator: 'isEmail',
                message: 'Invalid email format'
            })
        ]
    }, 
    password: {
        type: String
    }
})

userSchema.pre('save', function(next) {
    this.password = hashPassword(this.password)
    next()
})

let User = mongoose.model('User', userSchema)

module.exports = User