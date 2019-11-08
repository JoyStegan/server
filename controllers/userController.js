const User = require('../models/user')
const generateToken = require('../helpers/generateToken')
const verifyPassword = require('../helpers/verifyPassword')

class userController {
    static register(req, res, next) {
        const registeredData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        User.create(registeredData)
            .then(user => {
                const data = {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }

                const token = generateToken(data)
                res.status(201).json({
                    token, msg: 'User is successfully registered'
                })
            })
            .catch(next)
    }

    static login(req, res, next) {
        const email = {
            email: req.body.email
        }

        User.findOne(email)
            .then(user => {
                const passwordIsTrue = verifyPassword(req.body.password, user.password)
                if(passwordIsTrue) {
                    const data = {
                        id: user._id,
                        name: user.name,
                        email: user.email
                    }

                    const token = generateToken(data)
                    res.status(200).json({
                        token, msg: 'Logged in'
                    })
                }
            })
            .catch(next)
    }
}

module.exports = userController