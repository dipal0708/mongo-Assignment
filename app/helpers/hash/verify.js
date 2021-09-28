const crypto = require('crypto')

module.exports = (str, hash_str) => {
    return crypto.createHmac('sha256', process.env.PASS_SECRET).update(str).digest('hex') === hash_str
}