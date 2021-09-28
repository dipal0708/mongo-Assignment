const repository = require('../../../repositories/user/save'),
    generate_token = require('../../../helpers/jwt/generate.js')

module.exports = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            params = { ...params, ...{ email: { value: params.email }, phone: { value: params.phone } } }
            const user = await repository(params)

            return resolve({ authorization: await generate_token({ user_id: user._id }) })
        } catch (err) {
            return reject(err)
        }
    })
};