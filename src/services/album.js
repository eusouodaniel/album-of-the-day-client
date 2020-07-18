import Api from './_api';

export default {
  index(query, limit = 10) {
    return Api().get('/albums', { params: { query, limit } });
  },
  show(id) {
    return Api().get(`/albums/${id}`);
  },
  post(album) {
    return Api().post('/albums', album);
  },
  put(album) {
    return Api().put(`/albums/${album._id}`, album);
  },
};
