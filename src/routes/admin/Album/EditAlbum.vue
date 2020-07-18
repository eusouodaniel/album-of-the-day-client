<template>
<v-layout justify-center>
  <v-flex xs3 v-if="isUserLoggedIn">
    <panel title="Criar álbum">
      <v-text-field
        label="Título"
        v-model="album.title"
        prepend-icon="title"
        required
      ></v-text-field>
      <v-text-field
        label="Artista"
        v-model="album.artist"
        prepend-icon="face"
        required
      ></v-text-field>
      <v-text-field
        label="Gênero"
        v-model="album.genre"
        prepend-icon="loyalty"
        required
      ></v-text-field>
      <v-text-field
        label="URL da imagem"
        v-model="album.image_url"
        prepend-icon="photo"
        required
      ></v-text-field>
      <v-text-field
        label="Melhor música"
        v-model="album.best_music"
        prepend-icon="queue_music"
      ></v-text-field>
      <v-text-field
        label="Embed"
        v-model="album.embed"
        prepend-icon="cloud"
      ></v-text-field>
    <v-btn color="primary" @click="save">Editar álbum</v-btn>
    </panel>
  </v-flex>
  <v-flex xs10 v-else>
    <h3>Logue-se para acessar essa função</h3>
  </v-flex>
</v-layout>
</template>

<script>
import { mapState } from 'vuex';
import Panel from '@/components/Base/Panel.vue';
import AlbumsService from '@/services/album';

export default {
  data() {
    return {
      album: {
        title: null,
        artist: null,
        genre: null,
        image_url: null,
        best_music: null,
        embed: null,
      },
    };
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth.isUserLoggedIn,
      user: state => state.auth.user,
    }),
  },
  mounted() {
    if (!this.isUserLoggedIn) {
      this.$router.push('/');
      return;
    }
  },
  components: {
    Panel,
  },
  methods: {
    async save() {
      this.error = null;
      // eslint-disable-next-line
      const albumId = this.$store.state.route.params.albumId;
      try {
        await AlbumsService.put(this.album);
        this.$router.push(`/album/${albumId}`);
      } catch (err) {
        console.log(err); // eslint-disable-line no-console
      }
    },
  },
  async mounted() {
    try {
      // eslint-disable-next-line
      const albumId = this.$store.state.route.params.albumId;
      this.album = (await AlbumsService.show(albumId)).data;
    } catch (err) {
      console.log(err); // eslint-disable-line no-console
    }
  },
};
</script>
