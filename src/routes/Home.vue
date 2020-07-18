<template>
  <div id="home">
    <v-parallax
      dark
      :src="require('@/assets/home.jpg')"
      height="420">
      <v-layout
        align-center
        column
        justify-center>
        <h1 class="display-2 font-weight-thin mb-3">Álbum do dia</h1>
        <h4 class="subheading">Seus álbuns favoritos do dia!</h4>
      </v-layout>
    </v-parallax>
    <release-list/>
  </div>
</template>
<script>
import ReleaseList from '@/components/List/ReleaseList.vue';

export default {
  name: 'home',
  components: {
    ReleaseList,
  },
};
</script>
