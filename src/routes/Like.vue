<template>
<v-container fluid>
  <v-layout justify-center>
    <v-flex xs10 v-if="isUserLoggedIn">
      <like-list class="mr-2 mt-4" />
    </v-flex>
    <v-flex xs10 v-else>
      <h3>Logue-se para acessar essa função</h3>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapState } from 'vuex';
import LikeList from '@/components/List/LikeList.vue';

export default {
  name: 'likes',
  components: {
    LikeList,
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth.isUserLoggedIn,
    }),
  },
};
</script>

<style>
</style>
