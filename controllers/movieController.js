const fs = require('fs');
const path = require('path');
const Movie = require('../models/movie/movieModel');

const homeMovieController = (req, res) => {
    try {
        res.render("index");
    } catch (err) {
        console.log("Error rendering index page:", err);
        res.render("err");
    }
};

const viewMovieController = async (req, res) => {
    try {
        let movies = await Movie.find();
        res.render("view", { movies });
    } catch (err) {
        console.log("Error fetching movies list:", err);
        res.render("err");
    }
};

const editMovieController = async (req, res) => {
    try {
        let { id } = req.params;
        let movie = await Movie.findById(id);
        res.render("edit", { movie });
    } catch (err) {
        console.log("Error editing movie details:", err);
        res.render("err");
    }
};

const deleteMovieController = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findById(id);

        if (movie && movie.poster) {
            fs.unlink(movie.poster, (err) => {
                if (err) {
                    console.log("Error deleting image file:", err);
                } else {
                    console.log("Image file deleted successfully");
                }
            });
        }

        await Movie.findByIdAndDelete(id);
        res.redirect("/view-movies");
    } catch (err) {
        console.log("Error deleting movie:", err);
        res.render("err");
    }
};

const updateMovieController = async (req, res) => {
    try {
        let movie = await Movie.findById(req.body.id);

        if (movie && movie.poster && req.file) {
            fs.unlink(movie.poster, (err) => {
                if (err) {
                    console.log("Error deleting old image file:", err);
                } else {
                    console.log("Old image file deleted successfully");
                }
            });

            await Movie.findByIdAndUpdate(req.body.id, { ...req.body, poster: req.file.path });
        } else {
            await Movie.findByIdAndUpdate(req.body.id, req.body);
        }

        res.redirect("/view-movies");
    } catch (err) {
        console.log("Error updating movie information:", err);
        res.render("err");
    }
};

const addMovieController = async (req, res) => {
    try {
        let movie = await Movie.create({
            title: req.body.title,
            genre: req.body.genre,
            releaseYear: req.body.releaseYear,
            poster: req.file ? req.file.path : "",
        });

        res.redirect("/view-movies");
    } catch (err) {
        console.log("Error adding movie to collection:", err);
        res.render("err");
    }
};

module.exports = {
    homeMovieController,
    viewMovieController,
    editMovieController,
    updateMovieController,
    deleteMovieController,
    addMovieController,
};
