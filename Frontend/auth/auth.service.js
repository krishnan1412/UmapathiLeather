angular.module('leatherApp')
.service('AuthService', function(CONFIG) {
  this.login = function() {
    window.location.href =
      `${CONFIG.COGNITO_DOMAIN}/login?client_id=${CONFIG.CLIENT_ID}` +
      `&response_type=token&scope=email+openid&redirect_uri=${CONFIG.REDIRECT_URI}`;
  };

  this.logout = function() {
    localStorage.removeItem('token');
  };
});
