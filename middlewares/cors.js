const allowedCors = [
  'https://bitfilms.veitko-se.nomoredomains.xyz',
  'http://bitfilms.veitko-se.nomoredomains.xyz',
  'http://localhost:3000',
];

module.exports.simpleCors = (req, res, next) => {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  next();
};

module.exports.complexCors = (req, res, next) => {
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    res.end();
  } else {
    next();
  }
};
