import Api from './_api';

export default {
  update(profile) {
    return Api().put('/user-profile', profile);
  },
};
