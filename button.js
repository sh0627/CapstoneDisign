angular.module('ionicApp', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal) {
  
  
  $ionicModal.fromTemplateUrl('modal.html', function(modal) {
    $scope.modal = modal;
  }, {
    animation: 'slide-in-up',
    focusFirstInput: true
  });

})

.controller('ModalCtrl', function($scope) {
  
  $scope.newUser = {}; 
  
  $scope.createContact = function() {
    console.log('Create Contact', $scope.newUser);
    $scope.modal.hide();
  };
  
});