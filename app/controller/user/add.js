
const service = require('../../services/user/add')

module.exports = (req, res) => {
  service(req.body).then(result => {
    return res.status(201).json({ status: true, message: 'user successfully added.', data: result })
  }).catch(err => {
    return res.status(err.code).json({ status: false, message: err.message })
  })
};
