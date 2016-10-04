angular.module('devmtnTravel').controller('mainCtrl', function($scope, $stateParams, mainSrv) {
   $scope.locations = mainSrv.travelInfo;

for (var i = 0; i < mainSrv.travelInfo.length; i++) {
   if($stateParams.id === mainSrv.travelInfo[i].city) {
      $scope.currentLocation = mainSrv.travelInfo[i];
      break;
   }
}

})
