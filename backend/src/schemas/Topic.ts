const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    searchCounter: {
        type: Number,
        default: 0,
    },
});

export default TopicSchema;