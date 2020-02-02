const projects = require('../projects');

const validation = (req, res, next) => {
  const { id } = req.params;
  const project = projects.find(obj => obj.id == id);

  if (!project) {
    return res.status(400).json({ error: 'Projeto inexistente.' });
  }

  return next();
}

module.exports = validation;
