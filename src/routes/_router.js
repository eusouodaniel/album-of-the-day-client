import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/albums',
      name: 'albums',
      component: () =>
        import('./Album.vue'),
    },
    {
      path: '/album/adicionar',
      name: 'albums-add',
      component: () =>
        import('./admin/Album/AddAlbum.vue'),
    },
    {
      path: '/album/:albumId',
      name: 'album-view',
      component: () =>
        import('./ViewAlbum.vue'),
    },
    {
      path: '/album/:albumId/editar',
      name: 'album-edit',
      component: () =>
        import('./admin/Album/EditAlbum.vue'),
    },
    {
      path: '/curtidos',
      name: 'Curtidos',
      component: () =>
        import('./Like.vue'),
    },
    {
      path: '/meu-perfil',
      name: 'Meu perfil',
      component: () =>
        import('./UserProfile.vue'),
    },
    {
      path: '/esqueceu-a-senha',
      name: 'forgotpassword',
      component: () =>
        import('./ForgotPassword.vue'),
    },
    {
      path: '*',
      redirect: '/',

    },
  ],
});
