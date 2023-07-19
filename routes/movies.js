const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getMovies,
  deleteCurrentUserMovie,
  createMovie,
} = require('../controllers/movies');

router.get('/', getMovies);

router.delete('/:_id', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex().required(),
  }),
}), deleteCurrentUserMovie);

router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().uri({
      scheme: [
        /https?/,
      ],
    }),
    trailerLink: Joi.string().required().uri({
      scheme: [
        /https?/,
      ],
    }),
    thumbnail: Joi.string().required().uri({
      scheme: [
        /https?/,
      ],
    }),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), createMovie);

module.exports = router;
