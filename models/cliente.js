
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
  cnpj: {
    type: Number,
    min: [11, 'CNPJ Invalido'],
    required: [true, 'CNPJ Nao Informado']
  },
  razaoSocial: { type: String, trim: true, required: [true, 'Razao Social Nao Informada'] },
  nomeFantasia: { type: String, trim: true, required: [true, 'Nome Fantasia Nao Informado'] },
  endereco: {
    cep: { type: Number, trim: true, min: [8, 'O CEP deve conter 8 digitos no minimo'], required: [true, 'CEP Nao Informado'] },
    numero: { type: Number, trim: true, required: [true, 'Numero Nao Informado'] },
    logradouro: { type: String, trim: true, required: [true, 'Logradouro Nao Informado'] },
    complemento: { type: String, trim: true, required: [true, 'Complemento Nao Informado'] },
  },
  criacaoEm: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Cliente', clienteSchema);
