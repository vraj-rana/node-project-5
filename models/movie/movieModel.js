const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    genre: {
        type: String,
        required: true,
        trim: true,
    },
    releaseYear: {
        type: Number,
        required: true,
    },
    poster: {
        type: String,
        required: true,
    },
});

const Movie = mongoose.model("movies", movieSchema);

module.exports = Movie;
