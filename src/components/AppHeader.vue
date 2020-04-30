<template>
  <v-toolbar dark color="teal" padless>
    <router-link to="/" class="routerLink" color="primary ma-2">
      <v-toolbar-title class="font-bold white--text" color="primary ma-2"
        >TV Shows</v-toolbar-title
      >
      <v-toolbar-title class="font-bold white--text" color="primary ma-2"
        >{{headerMainTitle}}</v-toolbar-title
      >
    </router-link>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" sm="6" xs="9">
        <v-autocomplete
          v-model="searchValue"
          :loading="loading"
          :items="items"
          :search-input.sync="search"
          cache-items
          class="mx-4"
          flat
          id="id_search"
          hide-no-data
          hide-selected
          hide-details
          label="Enter a show title"
          solo-inverted
          return-object
          clearable
        ></v-autocomplete>
      </v-col>
    </v-row>
  </v-toolbar>
</template>

<script>
export default {
  name: "app-header",
  components: {},
   props: {
    headerMainTitle:{
      type:String
    }
    },
  
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      movies: [],
      currentId: "",
      searchValue: "",
      moviesList: ""
    };
  },
  watch: {
    search(val) {
      this.searchshows(val);
    },
    searchValue(val) {
      this.goToDetailPage(val);
    }
  },
  mounted() {
  },
  methods: {
    searchshows(value) {
      this.isLoading = true;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(async () => {
        if (value) {
          this.$store.dispatch("getSearchResultAction", value);
          let searchList = this.$store.state.searchList;
          if (searchList.length > 0) {
            this.items = searchList.map(e => e.show.name);
          }
        }
      }, 200);
    },
    goToDetailPage(selectedItemName) {
      this.$store
        .dispatch("getShowByNameAction", selectedItemName)
        .then(() => this.$router.push({ name: "show-details" }));
    }
  }
};
</script>

<style scoped>
.routerLink {
  text-decoration: none;
}
</style>
