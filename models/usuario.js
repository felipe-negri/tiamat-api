
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nome: { type: String, required: [true, 'Nome nao informado'] },
  sexo: { type: String, required: [true, 'Sexo nao informado'] },
  email: { type: String, required: [true, 'E-mail nao informado'] },
  senha: { type: String, min: [8, 'Minimo 8 caracteres na senha'], required: [true, 'Senha Nao informada'] },
  telefone: { type: Number, min: [8, 'Telefone invalido'], required: [true, 'Telefone nao informado'] }
})


module.exports = mongoose.model('Usuario', usuarioSchema);
