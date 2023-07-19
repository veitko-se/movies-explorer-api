const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const userRoutes = require('./users');
const movieRoutes = require('./movies');
const { createUser, login } = require('../controllers/users');
const NotFoundError = require('../errors/not-found-err');
const auth = require('../middlewares/auth');

router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), login);

router.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().min(2).max(30),
  }),
}), createUser);

router.use(auth);

router.use('/users', userRoutes);

router.use('/movies', movieRoutes);

router.use((req, res, next) => {
  next(new NotFoundError('Маршрут не найден'));
});

module.exports = router;
