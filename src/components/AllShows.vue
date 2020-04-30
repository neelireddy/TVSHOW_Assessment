<template>
  <v-container>
    <h1>All Shows</h1>
    <v-row>
      <v-col xs12 sm6 md4 lg3 v-for="show in shows" :key="show.id">
        <v-card max-height="450" max-width="200px" @click="onShowSelect(show)"> 
            <v-img hover :src="show.image.medium"></v-img>
          <v-card-title class="d-block">{{ show.name }}</v-card-title>
          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="red" dark right>
              <v-icon dark left>mdi-star</v-icon>
              {{ show.rating.average }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "all-shows",
  data() {
    return {
      pageTitle: "All Shows",
      imageURL: "https://image.tmdb.org/t/p/w1280",
      page: 1,
      showPagination: false
    };
  },
  computed: {
    shows() {
      let allShows = this.$store.state.allShows;
      return allShows.sort(this.sortTvShow);
    }
  },
  mounted() {
    this.getAllShows();
  },
  methods: {
    getAllShows() {
      return this.$store.dispatch("getAllShowsAction");
    },
    onShowSelect(show) {
      this.$store
        .dispatch("getShowDetailsByIdAction", show.id)
        .then(() => this.$router.push({ name: "show-details" }));
    },
    sortTvShow(a, b) {
      const ratingA = a.rating.average;
      const ratingB = b.rating.average;

      let comparison = 0;
      if (ratingA < ratingB) {
        comparison = 1;
      } else if (ratingA > ratingB) {
        comparison = -1;
      }
      return comparison;
    }
  }
};
</script>

<style scoped>
.v-img:hover {
  background: #536dfe;
}
.routerLink {
  text-decoration: none;
}
</style>
