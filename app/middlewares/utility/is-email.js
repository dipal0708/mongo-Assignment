/*
 * File: email.js
 * Path: /app/middlewares/utility/email.js
 * Project: Offshore: Recruitment API
 * File Created: Wednesday, 3rd February 2021 12:51:03 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 4th February 2021 5:02:53 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2021 - 2021 Offshore: Ludhiana, Offshore: Ludhiana
 */
const isValidEmail = require('../../validations/is-email')

/**
 * @description validate email format of given fields
 * @param Array fields 
 * @returns Response | next
 */
module.exports = (fields) => {
    return (req, res, next) => {
        let params = req.body

        if (req.method === 'GET')
            params = req.params


        let errors = fields.filter(field => {
            return params && params[field] && !isValidEmail(params[field])
        })

        if (errors.length)
            return res.status(422).json({ status: false, message: `${errors.join(', ')} is not valid Email` })

        return next()
    }
}