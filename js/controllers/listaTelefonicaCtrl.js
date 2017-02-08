angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatosAPI, operadorasAPI, serialGenerator){
  $scope.app = "Lista Telefonica";

  $scope.contatos = [];
  $scope.operadoras = [];

  var carregarContatos = function (){
    contatosAPI.getContatos().then(successContatos, errorContatos);
  };
    function successContatos(response){
      $scope.contatos = response.data;
    };
    function errorContatos(response){
      $scope.message = "Aconteceu um problema no carregarContatos()";
    };

  var carregarOperadoras = function (){
    operadorasAPI.getOperadoras().then(function
      successOperadoras(response){
        $scope.operadoras = response.data;
      }
    )
  };

  $scope.adicionarContato = function (contato){
    contato.serial = serialGenerator.generate();
    contato.data = new Date();
    contatosAPI.saveContato(contato).then(successAddContact, errorAddContact);
  };
    var successAddContact = function (contato){
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      carregarContatos();
    };
    var errorAddContact = function(contato){
      $scope.message = "Aconteceu um problema no adicionarContato()";
    };

  $scope.apagarContatos = function(contatos){
    $scope.contatos = contatos.filter(function(contato){
      if (!contato.selecionado) return contato;
    });
  };

  $scope.isContatoSelecionado = function(contatos){
    return contatos.some(function(contato){
      return contato.selecionado;
    });
  };

  $scope.ordenarPor = function(criterio){
    $scope.criterioDeOrdenacao = criterio;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };

  carregarContatos();
  carregarOperadoras();

});
