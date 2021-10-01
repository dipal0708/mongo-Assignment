
const service = require('../../services/user/usercount')

module.exports = (req, res) => {
  service(req.body).then(result => {
    return res.status(201).json({ status: true, message: 'user count successfully count.', data: result })
  }).catch(err => {
    console.log("err123",err);
    return res.status(err.code).json({ status: false })
  })
};
