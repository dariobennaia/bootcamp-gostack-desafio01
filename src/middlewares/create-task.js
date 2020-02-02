const validation = (req, res, next) => {
  const { title } = req.body;
  
  if (!title) {
    return res.status(422).json({ error: 'Informe o titulo da task.' });
  }

  if(typeof title !== 'string') {
    return res.status(422).json({ error: 'O titulo deve ser uma string.' });
  }

  if(title.length < 5) {
    return res.status(422).json({ error: 'O titulo deve ao minimo 5 caracteres.' });
  }

  return next();
};

module.exports = validation;
