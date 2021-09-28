/*
 * File: verify.js
 * Path: /app/helpers/jwt/verify.js
 * Project: Offshore: Recruitment API
 * File Created: Wednesday, 3rd February 2021 12:51:03 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 4th February 2021 5:01:28 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2021 - 2021 Offshore: Ludhiana, Offshore: Ludhiana
 */

const jwt = require('jsonwebtoken');

module.exports = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}