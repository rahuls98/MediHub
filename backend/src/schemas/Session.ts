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
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sessionDate: {
        type: String,
        required: true
    },
    sessionTime: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    }
});

export default SessionSchema;