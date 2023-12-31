const mongoose = require('mongoose');
const { VALID_URL_REGEX, linkValidateMessage } = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (v) => VALID_URL_REGEX.test(v),
      message: (props) => linkValidateMessage(props.value),
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (v) => VALID_URL_REGEX.test(v),
      message: (props) => linkValidateMessage(props.value),
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (v) => VALID_URL_REGEX.test(v),
      message: (props) => linkValidateMessage(props.value),
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'owner',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
