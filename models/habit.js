const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    favourite: {
        type: Boolean
    },
    status: {
        date: {
            type: Date,
        },
        state: {
            type: String,
            enum: ['finished','unfinished']
        }
    }
},{
    timestamps: true
});

const Habit = mongoose.model('Habit',habitSchema);
module.exports = Habit;