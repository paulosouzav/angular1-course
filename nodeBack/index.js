var router = require('./router');

var app = router(3412);

var operadoras = [
  {"nome": "Oi", "codigo":14, "categoria": "Celular"},
  {"nome": "Vivo", "codigo":15, "categoria": "Celular"},
  {"nome": "Tim", "codigo":41, "categoria": "Celular"},
  {"nome": "GVT", "codigo":15, "categoria": "Fixo"},
  {"nome": "Embratel", "codigo":41, "categoria": "Fixo"}
];
var contatos = [
  {
    "nome": "maRIANa fERMaN",
    "telefone":"95416-5152",
    "data":"2012-04-12",
    "operadora":{
      "nome":"Vivo",
      "codigo":"15",
      "categoria":"Celular"
    },
    "cor":"#9b59b6"
  },
  {
    "nome": "clauDionoR da SILVA",
    "telefone":"95416-5152",
    "data":"2012-04-12",
    "operadora":{
      "nome":"Vivo",
      "codigo":"15",
      "categoria":"Celular"
    },
    "cor":"#bdc3c7"
  },
  {
    "nome": "Paulo Virote",
    "telefone":"99516-5152",
    "data":"2015-04-12",
    "operadora":{
      "nome":"Vivo",
      "codigo":"15",
      "categoria":"Celular"
    },
    "cor":"#e74c3c"
  },
  {
    "nome":"Gabriela Gelb",
    "telefone":"99780-2923",
    "data":"2013-03-15",
    "operadora":{
      "nome":"Vivo",
      "codigo":"15",
      "categoria":"Celular"
    },
    "cor": "#2ecc71"
  },
  {
    "nome": "Silvia Helena",
    "telefone":"3658-3720",
    "data":"2017-01-01",
    "operadora":{
      "nome":"Oi",
      "codigo":"22",
      "categoria":"Fixo"
    },
    "cor":"#3498db"
  }
];

app.interceptor(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  next();
});
app.interceptor(function(req, res, next){
  res.setHeader('Content-Type','application/json;charset=UTF-8');
  next();
});

app.get('/operadoras', function(req,res){
  res.write(JSON.stringify(operadoras));
  res.end();
});
app.get('/contatos', function(req,res){
  res.write(JSON.stringify(contatos));
  res.end();
});

app.post('/contatos',function(req,res){
  var contato = req.body;
  contatos.push(JSON.parse(contato));
  res.end();
});

app.options('/contatos', function(req, res){
   res.end();
});
