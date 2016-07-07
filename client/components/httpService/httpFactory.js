(function() {
  'use strict';

  function Service($http, $q) {
    /* Get the data from data.json */
    this.fetchData = fetchData;

    function fetchData() {

      var defer = $q.defer();
      $http.get('components/httpService/data.json')
        .success(function(data) {
          console.log(data);
          defer.resolve(data);
        }).error(function(err) {
          console.log(err);
          defer.resolve(err);
        })
      return defer.promise;

    }

    function postData(){

    }

  }

  angular.module('demoApp')
    .service('httpService', [
      '$http',
      '$q',
      Service]);
})();
