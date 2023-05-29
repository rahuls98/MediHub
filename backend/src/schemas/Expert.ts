const mongoose = require('mongoose');

const ExpertSchema = new mongoose.Schema({
    pangeaUserId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true,
    },
    followerCount: {
        type: Number,
        default: 0
    },
    expertiseTopics: {
        type: [String],
        required: true
    }
});

export default ExpertSchema;