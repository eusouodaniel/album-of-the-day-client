import Api from './_api';

export default {
  index(search, limit = 10) {
    return Api().get('/albums', { params: { search, limit } });
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
