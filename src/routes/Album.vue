<template>
<v-container fluid>
  <v-layout justify-center>
    <v-flex xs3>
      <category-list/>
      <viewed-history-list v-if="isUserLoggedIn" class="mr-2 mt-2" />
    </v-flex>
    <v-flex xs7>
      <albums-search-bar />
      <albums-list />
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapState } from 'vuex';
import AlbumsSearchBar from '@/components/Album/AlbumsSearchBar.vue';
import AlbumsList from '@/components/Album/AlbumsList.vue';
import CategoryList from '@/components/List/CategoryList.vue';

export default {
  name: 'albumPage',
  components: {
    AlbumsSearchBar,
    AlbumsList,
    CategoryList,
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth.isUserLoggedIn,
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>
