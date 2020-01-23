const Cliente = require('../models/cliente');

module.exports = {
  cadastro (req, res) {
    const cliente = new Cliente({
      cnpj: parseInt(req.body.cnpj),
      razaoSocial: req.body.razaoSocial,
      nomeFantasia: req.body.nomeFantasia,
      endereco: { 
        cep: req.body.endereco.cep,
        numero: req.body.endereco.numero,
        logradouro: req.body.endereco.logradouro,
        complemento: req.body.endereco.complemento,
      }
    })

    const err = cliente.validateSync();

    if(!err) {
      Cliente.findOne({ cnpj: req.body.cnpj }, (err, clienteBanco) => {
        if(clienteBanco) 
          { res.status(400).send({ message: 'Cliente ja cadastrado' }) 
        } else {
          cliente.save((err, cliente) => {
            if(err) return console.log(`Mensagem: ${error}`);
            res.send({cliente: cliente});
          })
        }
      })
    } else {
      res.status(400).send({erros: err.errors});
    }
    
  }
}
