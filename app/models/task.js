const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    collection = new Schema({
        dueDate: Date,
        userId: {
            type: Schema.Types.ObjectId, 
            ref: 'user'
        }
    }, {
        timestamps: true,
        strict: true
    })

module.exports = mongoose.model('task', collection)