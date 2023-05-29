const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ExpertSchema',
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now, 
    },
    profilePhoto: String,
    topics: [String],
    content: String,
    upvotes: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ExpertSchema',
            }
        ],
        default: [],
    },
    downvotes: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ExpertSchema',
            }
        ],
        default: [],
    },
});

export default PostSchema;