const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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
    }
});

export default UserSchema;