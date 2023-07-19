const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  // getUsers,
  // getUserById,
  updateUser,
  getUserMe,
} = require('../controllers/users');

// router.get('/', getUsers);
router.get('/me', getUserMe);
// router.get('/:userId', celebrate({
//   params: Joi.object().keys({
//     userId: Joi.string().length(24).hex().required(),
//   }),
// }), getUserById);
router.patch('/me', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email(),
    password: Joi.string().min(8),
    name: Joi.string().min(2).max(30),
  }),
}), updateUser);

module.exports = router;
