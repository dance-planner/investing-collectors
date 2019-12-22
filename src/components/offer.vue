<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="offers[id].image" height="200px"></v-img>

    <v-card-title>{{ offers[id].name }}</v-card-title>

    <v-card-subtitle>Sie besitzen {{balance}} von {{ offers[id].max }} Coins</v-card-subtitle>
    <v-card-subtitle>Preis pro Coin: 5€</v-card-subtitle>
    <v-card-actions style="margin-left: auto; margin-right: auto; width: 100%">
      <v-btn color="green" text>Kaufen</v-btn>
      <v-btn color="red" text>Verkaufen</v-btn>
      <v-btn color="red" text>Mehr</v-btn>
    </v-card-actions>
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
            "https://i.ebayimg.com/00/s/NDgwWDY0MA==/z/O-4AAOSwIvdd37Bd/$_20.jpg",
          max: 1000000,
          price: 20
        },
        {
          name: "Porsche 911",
          image:
            "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/zAEAAOSw7xZd1Sl4/$_20.jpg",
          max: 1000000,
          price: 70
        },
        {
          name: "Mercedes-Benz SL 380",
          image:
            "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/kukAAOSw-c9d~TYe/$_20.jpg",
          max: 1000000,
          price: 5
        }
      ]
    };
  }
};
</script>

<style>
</style>
