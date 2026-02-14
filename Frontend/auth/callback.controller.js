angular.module('leatherApp')
.controller('CallbackController', function() {
  const hash = window.location.hash;
  const token = new URLSearchParams(hash.replace('#','')).get('id_token');
  localStorage.setItem('token', token);
  window.location.href = '/';
});
