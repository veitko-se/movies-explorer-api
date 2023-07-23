const Movie = require('../models/movie');
const NotFoundError = require('../errors/not-found-err');
const ForbiddenError = require('../errors/forbidden-err');
const { movieNotFoundErrorMessage, forbiddenErrorMessage } = require('../utils/constants');

const getMovieById = (movieId) => Movie.findById(movieId)
  .orFail(() => new NotFoundError(movieNotFoundErrorMessage(movieId)));

const checkMovieOwner = (userId, movie) => {
  if (userId !== movie.owner._id.toString()) {
    return Promise.reject(new ForbiddenError(forbiddenErrorMessage));
  }
  return movie;
};

const deleteMovie = (movieId) => Movie.findByIdAndRemove(movieId)
  .orFail(() => new NotFoundError(movieNotFoundErrorMessage(movieId)));

module.exports.deleteCurrentUserMovie = (req, res, next) => {
  const movieId = req.params._id;
  const userId = req.user._id;
  getMovieById(movieId)
    .then((movie) => checkMovieOwner(userId, movie))
    .then((checkedMovie) => deleteMovie(checkedMovie))
    .then((deletedMovie) => res.send(deletedMovie))
    .catch(next);
};

module.exports.getMovies = (req, res, next) => {
  const userId = req.user._id;
  Movie.find({ owner: userId }).sort([['year', -1]])
    .then((movies) => res.send(movies))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const owner = req.user._id;
  Movie.create({ ...req.body, owner })
    .then((movie) => res.status(201).send(movie))
    .catch(next);
};
