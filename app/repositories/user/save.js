const Model = require('../../models/user')

module.exports = (params) => {
    return new Promise((resolve, reject) => {
        new Model(params).save((err, doc) => {
            if (err)
                return reject({ code: 502, message: err.message })

            return resolve(doc)
        })
    })
}
