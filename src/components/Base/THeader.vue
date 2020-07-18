<template>
<v-toolbar light app flat fixed>
  <v-toolbar-title class="text-uppercase mr-4" to="/">
    <router-link class="title font-weight-light" to="/">
      AOD
    </router-link>
  </v-toolbar-title>
  <v-toolbar-items>
    <v-btn flat to="/albums">Explorar</v-btn>
  </v-toolbar-items>
  <v-spacer></v-spacer>
  <v-toolbar-items v-if="isUserLoggedIn">
    <v-btn flat icon to="/curtidos">
      <v-icon>favorite</v-icon>
    </v-btn>
    <v-btn flat icon to="/meu-perfil">
      <v-icon>account_circle</v-icon>
    </v-btn>
    <v-btn flat @click="logout">Sair</v-btn>
  </v-toolbar-items>
  <v-toolbar-items v-else>
    <auth-pop-up/>
  </v-toolbar-items>
</v-toolbar>
</template>

<script>
import { mapState } from 'vuex';
import AuthPopUp from '@/components/Auth/AuthPopUp.vue';

export default {
  name: 'THeader',
  components: {
    AuthPopUp,
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth.isUserLoggedIn,
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-decoration: none;
  color: #008000;
  :hover {
    cursor: pointer;
  }
}
</style>
