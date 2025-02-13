const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            minLength: 4
        },
        email: {
            type: String,
            required: true,
            match: /^\S+@\S+\.\S+$/
        },
        city: {
            type: String,
            required: true,
            match: /^[A-Za-z\s]+$/
        },
        web: {
            type: String,
            required: true,
            match: /^(https?:\/\/)[^\s$.?#].[^\s]*$/
        },
        zip: {
            type: String,
            required: true,
            match: /^\d{5}-\d{4}$/
        },
        phone: {
            type: String,
            required: true,
            match: /^\d-\d{3}-\d{3}-\d{4}$/
        }
    }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
