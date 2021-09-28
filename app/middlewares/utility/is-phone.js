/*
 * File: is-phone.js
 * Path: /app/middlewares/utility/is-phone.js
 * Project: Offshore: Recruitment API
 * File Created: Wednesday, 3rd February 2021 11:30:58 pm
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 4th February 2021 5:03:06 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2021 - 2021 Offshore: Ludhiana, Offshore: Ludhiana
 */

const isPhone = require('../../validations/is-phone')

/**
 * @description validate email format of given fields
 * @param Array fields 
 * @returns Response | next
 */
module.exports = (fields) => {
    return (req, res, next) => {
        let params = req.body

        if (req.method === 'GET')
            params = { ...req.params, ...req.query }


        let errors = fields.filter(field => {
            if (params && params[field] && !isPhone(params[field]))
                return field
        })

        if (errors.length)
            return res.status(422).json({ status: false, message: `${errors.join(', ')} is not valid Phone` })

        return next()
    }
}