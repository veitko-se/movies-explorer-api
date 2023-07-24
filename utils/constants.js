module.exports.VALID_URL_REGEX = /^https?:\/\/(www\.)?[\w-.~:/?#[\]@!$&'()*+,;=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([\w-.~:/?#[\]@!$&'()*+,;=]*)$/;

module.exports.emailValidateMessage = (email) => `Email ${email} имеет некорректный формат!`;
module.exports.linkValidateMessage = (link) => `Ссылка ${link} имеет некорректный формат!`;
module.exports.userConflictErrorMessage = (email) => `Пользователь с указанным email='${email}' уже существует`;
module.exports.userNotFoundErrorMessage = (userId) => `Пользователь по указанному _id='${userId}' не найден`;
module.exports.movieNotFoundErrorMessage = (movieId) => `Фильм с _id='${movieId}' не найден`;
module.exports.forbiddenErrorMessage = 'Отказано в доступе';
module.exports.notFoundErrorMessage = 'Маршрут не найден';
module.exports.findUnauthorizedErrorMessage = 'Неправильные почта или пароль';
module.exports.authUnauthorizedErrorMessage = 'Необходима авторизация';
module.exports.badRequestErrorMessage = (message) => `Переданы некорректные данные: ${message}`;
module.exports.unexpectedErrorMessage = (message) => `Внутренняя ошибка сервера: ${message}`;
