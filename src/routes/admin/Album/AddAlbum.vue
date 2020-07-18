<template>
<v-layout justify-center>
  <v-flex xs3>
    <panel title="Album Metadata">
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
        label="URL do álbum"
        v-model="album.imageUrl"
        prepend-icon="photo"
        required
      ></v-text-field>
      <v-text-field
        label="Conta do SoundCloud"
        v-model="album.soundCloudId"
        prepend-icon="cloud"
      ></v-text-field>
      <v-text-field
        label="Ações"
        v-model="album.stocks"
        prepend-icon="all_inbox"
        required
      ></v-text-field>
    </panel>
  </v-flex>
  <v-flex xs7>
    <panel title="Detalhes" class="ml-2">
      <v-textarea
        label="Lista de músicas"
        v-model="album.songs"
        prepend-icon="playlist_play"
      ></v-textarea>
      <v-textarea
        label="Descrição"
        v-model="album.description"
        prepend-icon="description"
      ></v-textarea>
      <v-btn color="primary" @click="add">Adicionar álbum</v-btn>
    </panel>
  </v-flex>
</v-layout>
</template>

<script>
import Panel from '@/components/Base/Panel.vue';
import AlbumsService from '@/services/album';

export default {
  data() {
    return {
      album: {
        title: null,
        artist: null,
        genre: null,
        imageUrl: null,
        soundCloudId: null,
        songs: null,
        stocks: null,
        description: null,
      },
    };
  },
  components: {
    Panel,
  },
  methods: {
    async add() {
      try {
        await AlbumsService.post(this.album);
        this.$router.push('/album');
      } catch (err) {
        console.log(err); // eslint-disable-line no-console
      }
    },
  },
};
</script>
