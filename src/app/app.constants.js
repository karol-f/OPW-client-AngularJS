/*global app*/
'use strict';
app.constant('AUTH', {
    TOKEN_HEADER_NAME: 'Auth-Token'
}).constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
}).constant('USER_ROLES', {
    admin: 'admin',
    user: 'user',
    guest: 'guest'
}).constant('ALERT_TYPE', {
    success: 'alert-success',
    error: 'alert-danger',
    warning: 'alert-warning'
});
