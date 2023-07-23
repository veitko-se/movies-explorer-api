const router = require('express').Router();
const {
  updateUser,
  getUserMe,
} = require('../controllers/users');
const { updateUserValidation } = require('../middlewares/validations');

router.get('/me', getUserMe);
router.patch('/me', updateUserValidation, updateUser);

module.exports = router;
