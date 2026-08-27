const express = require('express');
const upload = require('../middlewares/multer');
const {
    homeMovieController,
    viewMovieController,
    editMovieController,
    updateMovieController,
    deleteMovieController,
    addMovieController,
} = require('../controllers/movieController');

const route = express.Router();

route.get("/", homeMovieController);

route.get("/view-movies", viewMovieController);

route.get("/edit-movie/:id", editMovieController);

route.get("/delete-movie/:id", deleteMovieController);

route.post("/update-movie", upload.single("poster"), updateMovieController);

route.post("/add-movie", upload.single("poster"), addMovieController);

module.exports = route;
