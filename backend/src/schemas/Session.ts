const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expert',
        required: true
    },
    interestedUsers: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        default: []
    },
    topics: [String],
    createdDate: {
        type: Date,
        default: Date.now, 
    },
});

export default SessionSchema;