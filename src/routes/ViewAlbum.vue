<template>
<v-container fluid>
  <v-btn @click="goBack" flat dark round color="#008000" >
    <v-icon>arrow_back_ios</v-icon>
    Voltar
  </v-btn>
  <v-layout justify-center>
    <v-flex xs6 sm5 md4>
      <album-image :url="album.image_url"/>
    </v-flex>
    <v-flex xs6 sm5 md4>
      <album-metadata :album="album" @done="dialog = true"/>
    </v-flex>
  </v-layout>
  <album-detail
  :embed="embed"
  :summary="album.description"
  class="mt-5"
  />
</v-container>
</template>

<script>
import { mapState } from 'vuex';
import AlbumsService from '@/services/album';

import AlbumImage from '@/components/Album/AlbumImage.vue';
import AlbumMetadata from '@/components/Album/AlbumMetadata.vue';
import AlbumDetail from '@/components/Album/AlbumDetail.vue';

export default {
  data() {
    return {
      album: {},
      embed: '',
      dialog: false,
    };
  },
  methods: {
    goBack() {
      this.dialog = false;
      this.$router.go(-1);
    },
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth.isUserLoggedIn,
      user: state => state.auth.user,
      route: state => state.route,
    }),
  },
  async mounted() {
    const { albumId } = this.route.params;
    this.album = (await AlbumsService.show(albumId)).data;
    this.embed = this.album.embed;
  },
  components: {
    AlbumImage,
    AlbumMetadata,
    AlbumDetail,
  },
};
</script>

<style lang="scss" scoped>
</style>
