var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

var contatos = [
  {
    "id":0,
    "nome": "maRIANa fERMaN",
    "telefone":"95416-5152",
    "data":"2012-04-12",
    "operadora":{
      "nome":"Vivo",
      "codigo":"15",
      "categoria":"Celular",
			"preco": "1"
    },
    "cor":"#9b59b6"
  },
  {
    "id":1,
    "nome": "clauDionoR da SILVA",
    "telefone":"95416-5152",
    "data":"2012-04-12",
    "operadora":{
      "nome":"Vivo",
      "codigo":"15",
      "categoria":"Celular",
			"preco": "1"
    },
    "cor":"#bdc3c7"
  },
  {
    "id":2,
    "nome": "Paulo Virote",
    "telefone":"99516-5152",
    "data":"2015-04-12",
    "operadora":{
      "nome":"Vivo",
      "codigo":"15",
      "categoria":"Celular",
			"preco": "1"
    },
    "cor":"#e74c3c"
  },
  {
    "id":3,
    "nome":"Gabriela Gelb",
    "telefone":"99780-2923",
    "data":"2013-03-15",
    "operadora":{
      "nome":"Vivo",
      "codigo":"15",
      "categoria":"Celular",
			"preco": "1"
    },
    "cor": "#2ecc71"
  },
  {
    "id":4,
    "nome": "Silvia Helena",
    "telefone":"3658-3720",
    "data":"2017-01-01",
    "operadora":{
      "nome":"Oi",
      "codigo":"22",
      "categoria":"Fixo",
			"preco": "3"
    },
    "cor":"#3498db"
  }
];


app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.get('/contatos/:id', function(req, res) {
  contatos.forEach(function (contato) {
  	if (contato.id == req.params.id) {
  		res.json(contato);
  		return;
  	}
  });
  res.status(404).end();
});

app.post('/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});

app.listen(process.env.PORT || 3412);
