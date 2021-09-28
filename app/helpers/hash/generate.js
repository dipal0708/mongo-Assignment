const crypto = require('crypto')

module.exports = (str) => {
    return crypto.createHmac('sha256', process.env.PASS_SECRET).update(str).digest('hex')
}