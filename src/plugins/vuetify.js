import Vue from 'vue';
import Vuetify, { VLayout } from 'vuetify/lib';

import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  theme: {
    primary: '#008000',
    secondary: '#007300',
    error: '#FF5252',
    success: '#4CAF50',
  },
  iconfont: 'md',
  components: {
    VLayout,
  },
});
