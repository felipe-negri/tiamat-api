# tiamat-api

Instruçoes de Uso

1. Fazer uma Requisição do tipo POST para a rota /usuario/cadastro passando um JSON no seguinte modelo:

{
	"nome": "Felipe Negri",
	"sexo": "Masculino",
	"email": "felipe.negri43@gmail.com",
	"senha": "123456789",
	"telefone": 995271260
}

2. Fazer uma Requisição do tipo POST para a rota /usuario/login passando um JSON no seguinte modelo:

{
	"email": "felipe.negri43@gmail.com",
	"senha": "123456789"
}

Será gerado um token JWT (Guarde, será necessário)

3. Fazer uma Requisição do tipo POST para a rota /usuario/login passando um JSON no seguinte modelo e passando o header x-access-token com o token JWT gerado anteriormente.

{
   "cnpj":"15247895211",
   "razaoSocial":"Felipe Negri Vieira LTDA",
   "nomeFantasia":"XPTO LTDA",
   "endereco":{
      "cep":"3557030",
      "numero":"52",
      "logradouro":"Rua Capitao",
      "complemento":"casa"
   }
}

Feito isso todas as rotas disponíveis foram testadas :3
