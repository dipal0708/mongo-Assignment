
const service = require('../../services/task/add')

module.exports = (req, res) => {
  service(req.body).then(result => {
    return res.status(201).json({ status: true, message: 'task successfully added.', data: result })
  }).catch(err => {
    return res.status(err.code).json({ status: false, message: err.message })
  })
};
