import Api from './_api';

export default {
  index(search, limit = 10) {
    return Api().get('/albums', { params: { search, limit } });
  },
  show(id) {
    return Api().get(`/album/${id}`);
  },
  post(album) {
    return Api().post('/album', album);
  },
  put(album) {
    return Api().put(`/album/${album.id}`, album);
  },
};
