const router = require('express').Router();
const {
  getMovies,
  deleteCurrentUserMovie,
  createMovie,
} = require('../controllers/movies');
const { deleteCurrentUserMovieValidation, createMovieValidation } = require('../middlewares/validations');

router.get('/', getMovies);
router.delete('/:_id', deleteCurrentUserMovieValidation, deleteCurrentUserMovie);
router.post('/', createMovieValidation, createMovie);

module.exports = router;
