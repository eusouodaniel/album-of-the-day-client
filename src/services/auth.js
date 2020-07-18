import Api from './_api';

export default {
  register(credential, recaptcha) {
    return Api().post('/register', { credential, recaptcha });
  },
  login(credential, recaptcha) {
    return Api().post('/login', { credential, recaptcha });
  },
  forgotPassword(credential) {
    return Api().post('/forgot-password', credential);
  },
};
