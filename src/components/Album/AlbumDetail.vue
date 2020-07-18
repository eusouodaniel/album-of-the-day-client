<template>
  <v-layout justify-center>
    <v-flex xs8 sm6 md4>
      <v-card flat>
        <v-img>
          <div class="embed-responsive" v-html="embed">
          </div>
        </v-img>
      <v-card-title>{{ summary }}</v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['embed', 'summary'],
  data() {
    return {
      author: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
