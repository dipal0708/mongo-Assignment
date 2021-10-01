const repository = require('../../repositories/user/userCount')

module.exports = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("params",params);
            const user = await repository(params)
            return resolve(user)
        } catch (err) {
            return reject(err)
        }
    })
};