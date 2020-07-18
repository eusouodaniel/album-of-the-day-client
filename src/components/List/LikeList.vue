<template>
  <panel title="Curtidos">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="likes">
      <template slot="items" slot-scope="props">
        <td class="text-xs">
          {{ props.item.album.title }}
        </td>
        <td class="text-xs">
          {{ props.item.album.artist }}
        </td>
        <td class="text-xs-right">
          <v-btn
            color="primary"
            :to="{
              name: 'album-view',
              params: {
                albumId: props.item.album._id,
              },
            }">
            Ver
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import { mapState } from 'vuex';
import LikeService from '@/services/like';
import Panel from '@/components/Base/Panel.vue';

export default {
  components: {
    Panel,
  },
  data() {
    return {
      headers: [
        {
          text: 'Título',
          value: 'title',
        },
        {
          text: 'Artista',
          value: 'artist',
        },
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true,
      },
      likes: [],
    };
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth.isUserLoggedIn,
      user: state => state.auth.user,
    }),
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.likes = (await LikeService.index()).data;
    }
  },
};
</script>

<style scoped>
</style>
