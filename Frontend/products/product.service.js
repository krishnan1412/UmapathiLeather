angular.module('leatherApp')
.service('ProductService', function($http, CONFIG) {
  this.getProducts = function() {
    return $http.get(CONFIG.API_URL + '/products', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });
  };
});
