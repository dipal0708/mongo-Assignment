module.exports = {
    count_user_overall: {
        count: require('./count/user')
        },
        user:{
            add:require('./user/add')
        },
        task:{
            add:require('./task/add')
        }
}