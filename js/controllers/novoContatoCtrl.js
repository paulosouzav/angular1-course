angular.module("listaTelefonica").controller("novoContatoCtrl", function($scope, contatosAPI, serialGenerator, $location, operadoras){

  $scope.operadoras = operadoras.data;

  $scope.adicionarContato = function (contato){
    contato.serial = serialGenerator.generate();
    contato.data = new Date();
    contatosAPI.saveContato(contato).then(successAddContact, errorAddContact);
  };
    var successAddContact = function (contato){
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      $location.path("/contatos");
    };
    var errorAddContact = function(contato){
      $scope.message = "Aconteceu um problema em adicionarContato() e não foi possível carregar os dados.";
    };
});
