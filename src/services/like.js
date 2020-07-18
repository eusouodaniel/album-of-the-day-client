import Api from './_api';

export default {
  index(params) {
    return Api().get('/likes', { params });
  },

  post(like) {
    return Api().post('/like', like);
  },

  delete(id) {
    return Api().delete(`/like/${id}`);
  },
};
