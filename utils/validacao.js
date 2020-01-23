module.exports = {
  validaJson(err, req, res, next) {
    if (err instanceof SyntaxError) {
      res.status(400).send({ message: 'Json Invalido'});
    } else {
      next();
    }
  },
  validaRota(req, res, next) {
    if (req.accepts('html')) {
      res.status(404).send({ message: 'Rota nao encontrada' });
      return;
    }
  }
}