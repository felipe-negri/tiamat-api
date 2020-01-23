module.exports = {
  validaJson(err, req, res, next) {
    if (err instanceof SyntaxError) {
      res.status(400).send({ message: 'Json Invalido'});
    } else {
      next();
    }
  }
}