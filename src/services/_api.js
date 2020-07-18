import axios from 'axios';
import store from '../store/index';

export default () => axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? process.env.VUE_APP_PRD
    : process.env.VUE_APP_DEV,
  headers: {
    Authorization: `${store.state.auth.token}`,
  },
});
