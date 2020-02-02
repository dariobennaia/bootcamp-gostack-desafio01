const registerRequests = (req, res, next) => {
  console.count('Total de requisições');
  return next();
}

module.exports = registerRequests;
