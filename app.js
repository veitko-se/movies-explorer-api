require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const router = require('./routes');
const { badRequestErrorHandler, unexpectedErrorHandler } = require('./middlewares/error-handler');
const { HTTP_PORT, DB_URL } = require('./utils/settings');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { simpleCors, complexCors } = require('./middlewares/cors');
const { limiter } = require('./utils/rateLimiter');

const app = express();
mongoose.connect(DB_URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.disable('x-powered-by');

app.use(requestLogger);
app.use(limiter);
app.use(simpleCors);
app.use(complexCors);
app.use(router);

app.use(errorLogger);
app.use(errors()); // ошибки от Celebrate
app.use(badRequestErrorHandler);
app.use(unexpectedErrorHandler);

app.listen(HTTP_PORT);
