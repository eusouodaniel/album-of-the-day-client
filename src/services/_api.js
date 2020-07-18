import axios from 'axios';
import store from '../store/index';

export default () => axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? '#'
    : 'http://localhost:3000',
  headers: {
    Authorization: `${store.state.auth.token}`,
  },
});
