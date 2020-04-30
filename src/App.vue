<template>
  <div id="app">
    <v-app>
      <div id="nav">
        <app-header
        />
      </div>
      <router-view />
      <app-footer :footerDescription="footerDescription"></app-footer>
    </v-app>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {

      footerDescription: "TV Shows",
      headerMainTitle: "TV Shows",
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
