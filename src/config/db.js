const mongoose = require('mongoose');

const dbUrl = process.env.MONGODB_URI;

const connectDB = () => {
    try {
        mongoose.connect(dbUrl);
    } catch (e) {
        console.error(e);
    }
};


module.exports = connectDB;