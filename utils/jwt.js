const jwt = require('jsonwebtoken');

module.exports = {
  verificaAcesso(req, res, next) {
    jwt.verify(req.headers['x-access-token'], process.env.JWTKEY, (err) => {
      if (err) {
        if (err.message.includes('jwt must be provided')) { res.status(401).send({ message: 'JWT nao informado' }) }
        if (err.message.includes('Unexpected token')) { res.status(401).send({ message: 'JWT invalido' }) }
        if (err.message.includes('jwt expired')) { res.status(401).send({ message: 'JWT expirado' }) }
      } else { next(); }
    });
  }
}