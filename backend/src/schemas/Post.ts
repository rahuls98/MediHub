const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expert',
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now, 
    },
    profilePhoto: String,
    topics: {
        type: [String],
        required: true,
        default: []
    },
    content: {
        type: String,
        required: true,
    },
    upvotes: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Expert',
            }
        ],
        default: [],
    },
    downvotes: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Expert',
            }
        ],
        default: [],
    },
});

export default PostSchema;