import '@babel/polyfill';
import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './routes/_router';
import store from './store/index';
import './registerServiceWorker';
import './plugins/vuetify';
import './plugins/vue-media-embed';

Vue.config.productionTip = false;
Vue.use(VeeValidate);

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
