<template>
  <v-footer color="teal lighten-4" padless>
    <v-layout justify-center wrap>
      <v-flex teal py-4 text-center white--text xs12>
        <strong>{{ footerDescription }}</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
export default {
  name: "app-footer",
  components: {},
  props: {
    footerDescription: {
      type: String
    }
  }
};
</script>
<style scoped>
.text-center {
  padding: 0px;
   bottom: 0;
	position: fixed;
	width: 100%;
}
</style>
