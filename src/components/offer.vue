<template>
  <v-card class="mx-auto" max-width="344">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

    <v-card-title>Angebot {{id}}</v-card-title>

    <v-card-subtitle>{{balance}} Tokens</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "app",
  props: ["balance", "id"],
  data() {
    return {};
  }
};
</script>

<style>
</style>
