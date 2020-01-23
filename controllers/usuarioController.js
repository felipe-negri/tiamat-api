const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  cadastro(req, res) {
    const usuario = new Usuario({
      nome: req.body.nome,
      sexo: req.body.sexo,
      email: req.body.email,
      senha: req.body.senha,
      telefone: req.body.telefone,
    })

    const err = usuario.validateSync();

    if (!err) {
      usuario.senha = bcrypt.hashSync(usuario.senha, 10);
      Usuario.findOne({ email: req.body.email }, (err, usuarioBanco) => {
        if (usuarioBanco) {
          res.status(400).send({ message: 'Usuario ja cadastrado' })
        } else {
          usuario.save((err) => {
            if (err) return console.log(`Mensagem: ${err}`);
            res.send({ message: 'Usuario criado com sucesso' });
          })
        }
      })

    } else {
      res.status(400).send({ erros: err.errors });
    }
  },

  login(req, res, next) {
    Usuario.findOne({ email: req.body.email }, (err, usuario) => {
      if (err) { next(err) };

      if (bcrypt.compareSync(req.body.senha, usuario.senha)) {
        const token = jwt.sign({ id: usuario._id }, process.env.JWTKEY, { expiresIn: '1h' });
        res.send({ message: 'Acesso liberado', token: token });
      } else {
        res.status(401).send({ message: 'Acesso Negado email/senha invalido' });
      }
    })
  }
}

