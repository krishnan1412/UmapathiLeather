angular.module('leatherApp', [])
.constant('CONFIG', {
  API_URL: 'http://localhost:3000',
  COGNITO_DOMAIN: 'https://your-domain.auth.region.amazoncognito.com',
  CLIENT_ID: 'your-client-id',
  REDIRECT_URI: 'http://localhost:8080/callback'
});
