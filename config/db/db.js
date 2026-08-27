const mongoose = require('mongoose');

const db = () => {
    const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/movieData";
    mongoose.connect(mongoURI)
        .then(() => {
            console.log("db connected...");
        })
        .catch((err) => {
            console.log("Error connecting to database:", err);
        });
};

module.exports = db;
