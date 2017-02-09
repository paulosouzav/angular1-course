angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, operadoras, contatos, serialGenerator){
  $scope.app = "Lista Telefonica";

  $scope.contatos = contatos.data;
  $scope.operadoras = operadoras.data;


  var init = function () {
    calcularImpostos($scope.contatos);
    generateSerial($scope.contatos);
  };

  var calcularImpostos = function (contatos) {
    contatos.forEach(function(contato){
      contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco);
    });
  };

  var generateSerial = function (contatos){
    contatos.forEach(function(item){
      item.serial = serialGenerator.generate();
    });
  };

  $scope.apagarContatos = function(contatos){
    $scope.contatos = contatos.filter(function(contato){
      if (!contato.selecionado) return contato;
    });
    $scope.verificarContatoSelecionado($scope.contatos)
  };

  $scope.verificarContatoSelecionado = function(contatos){
    $scope.hasSelectedContact = contatos.some(function(contato){
      return contato.selecionado;
    });
  };

  $scope.ordenarPor = function(criterio){
    $scope.criterioDeOrdenacao = criterio;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };

  var calcularImposto = function (preco) {
    var imposto = 1.2;
    return preco * imposto;
  };

  init();

});
