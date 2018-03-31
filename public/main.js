
const API = "http://jservice.io/api/random?count=100"


angular 
  .module("jeopardyBoard", [])
  .controller("mainController", ['$scope', '$http', ($scope, $http) =>{

    $http({
      method: "GET",
      url: API,
    })
  }]