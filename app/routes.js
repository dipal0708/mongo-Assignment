
const middlewares = require('./middlewares'),
    controllers = require('./controller');
module.exports = (app) => {

    app.get('/', (req, res) => {
        return res.status(200).json({ message: 'Server is running' })
    })

    app.post(
        '/assignment',
        // middlewares.utility.required([]),
        controllers.count_user_overall.count
    )

    app.post('/user', middlewares.utility.required(['userName', 'empCode', 'firstName', 'lastName', 'email']), controllers.user.add)

    app.post('/task', middlewares.utility.required(['dueDate']), controllers.task.add)

}