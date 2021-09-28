

const service = require('../../../services/auth/signup/step1')

module.exports = (req, res) => {
  service(req.body).then(result => {
    return res.status(201).json({ status: true, message: 'user successfully registered.', data: result })
  }).catch(err => {
    return res.status(err.code).json({ status: false, message: err.message })
  })
};
