
const middlewares = require('./middlewares'),
    controllers = require('./controller');
module.exports = (app) => {

    app.get('/', (req, res) => {
        return res.status(200).json({message: 'Server is running'})
    })

    app.post(
        '/signup',
        middlewares.utility.required(['phone', 'email', 'first_name', 'last_name', 'password']),
        middlewares.utility.is_email(['email']),
        middlewares.utility.is_phone(['phone']),
        controllers.auth.signup.step1
    )

}