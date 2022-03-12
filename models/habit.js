const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    favourite: {
        type: Boolean
    },
    currentStatus: {
        date: Date,
        state: String
    }
},{
    timestamps: true
});

const Habit = mongoose.model('Habit',habitSchema);
module.exports = Habit;