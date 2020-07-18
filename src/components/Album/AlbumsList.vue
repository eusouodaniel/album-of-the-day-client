<template>
<v-container fluid grid-list-md>
  <v-layout justify-center>
    <v-flex xs12>
      <v-data-iterator
        :items="albums"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        content-tag="v-layout"
        row wrap justify-center>
        <v-card
          slot="item"
          slot-scope="props"
          width="330px"
          class="ml-1 mr-1 mb-2"
          :to="{
            name: 'album-view',
            params: {
              albumId: props.item._id,
            },
          }">
          <v-img
            :src="props.item.image_url"
            height="300px">
          </v-img>
          <v-card-title primary-title>
            <div>
              <div class="title">{{ props.item.title }}</div>
              <div class="subheading">{{ props.item.artist }}</div>
              <div class="subheading blue--text">{{ props.item.genre }}</div>
            </div>
          </v-card-title>
        </v-card>
        <div slot="no-data">
          <v-progress-circular
            indeterminate
            color="#008000">
          </v-progress-circular>
        </div>
      </v-data-iterator>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import AlbumsService from '@/services/album';

export default {
  data() {
    return {
      albums: [],
      rowsPerPageItems: [6, 12],
      pagination: {
        rowsPerPage: 6,
      },
      limit: 36,
    };
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler(value) {
        this.albums = (await AlbumsService.index(value, this.limit)).data;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
