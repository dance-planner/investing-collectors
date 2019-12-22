<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="offers[id].image" height="200px"></v-img>

    <v-card-title>{{ offers[id].name }}</v-card-title>

    <v-card-subtitle>{{balance}} Tokens</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "app",
  props: ["balance", "id"],
  data() {
    return {
      offers: [
        {
          name: "Audi R8",
          image:
            "https://i.ebayimg.com/00/s/NDgwWDY0MA==/z/O-4AAOSwIvdd37Bd/$_20.jpg"
        },
        {
          name: "Porsche 911",
          image:
            "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/zAEAAOSw7xZd1Sl4/$_20.jpg"
        },
        {
          name: "Mercedes-Benz SL 380",
          image:
            "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/kukAAOSw-c9d~TYe/$_20.jpg"
        }
      ]
    };
  }
};
</script>

<style>
</style>
