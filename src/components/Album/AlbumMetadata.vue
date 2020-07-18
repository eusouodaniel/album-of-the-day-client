<template>
<div>
  <div class="a-title">
    {{album.title}}
  </div>
  <div class="a-artist">
    {{album.artist}}
  </div>
  <div class="a-sub blue--text">
    {{album.genre}}
  </div>
  <div class="a-sub">
    Melhor música na opinião do autor: {{album.best_music}}
  </div>
  <div class="a-sub">
    Postado por: {{album.user.name}}
  </div>

  <div v-if="isUserLoggedIn">
    <v-btn v-if="!like" @click="setLike" flat dark round color="pink">
      <v-icon>favorite_border</v-icon>
      Curtir isso
    </v-btn>
    <v-btn v-if="like" @click="unsetLike" flat dark round color="pink" >
      <v-icon>favorite</v-icon>
      Curtido
    </v-btn>
  </div>
  <div v-else>
    <p>Hmm, precisamos que você esteja logado na plataforma :(</p>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import LikeService from '@/services/like';

export default {
  props: ['album'],
  data() {
    return {
      like: null,
    };
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth.isUserLoggedIn,
      user: state => state.auth.user,
    }),
  },
  watch: {
    async album() {
      if (!this.isUserLoggedIn) return;
      try {
        const likes = (await LikeService.index({
          albumId: this.album._id,
        })).data;
        if (likes.length) {
          [this.like] = likes;
        }
      } catch (err) {
        console.log(err); // eslint-disable-line no-console
      }
    },
  },
  methods: {
    async setLike() {
      try {
        this.like = (await LikeService.post({
          albumId: this.album._id,
        })).data;
      } catch (err) {
        console.log(err); // eslint-disable-line no-console
      }
    },
    async unsetLike() {
      try {
        await LikeService.delete(this.like._id);
        this.like = null;
      } catch (err) {
        console.log(err); // eslint-disable-line no-console
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.a-title {
  font-size: 30px;
}
.a-artist {
  font-size: 24px;
}
.a-sub {
  font-size: 18px;
}
</style>
