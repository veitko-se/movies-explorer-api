const router = require('express').Router();
const userRoutes = require('./users');
const movieRoutes = require('./movies');
const { createUser, login } = require('../controllers/users');
const NotFoundError = require('../errors/not-found-err');
const auth = require('../middlewares/auth');
const { loginValidation, createUserValidation } = require('../middlewares/validations');
const { notFoundErrorMessage } = require('../utils/constants');

router.post('/signin', loginValidation, login);
router.post('/signup', createUserValidation, createUser);
router.use(auth);
router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use((req, res, next) => {
  next(new NotFoundError(notFoundErrorMessage));
});

module.exports = router;
