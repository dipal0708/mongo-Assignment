
const jwt = require('jsonwebtoken')

module.exports = (params) => {
    return jwt.sign(params, process.env.JWT_SECRET, {
        // algorithm: 'RS256',
        expiresIn: parseInt(process.env.JWT_EXPIRY_TIME)
    })
}