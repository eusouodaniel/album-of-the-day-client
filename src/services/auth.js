import Api from './_api';

export default {
  register(credential, recaptcha) {
    return Api().post('/users/register', { credential, recaptcha });
  },
  login(credential, recaptcha) {
    return Api().post('/users/login', { credential, recaptcha });
  },
  forgotPassword(credential) {
    return Api().post('/users/forgot-password', credential);
  },
};
