<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon  @click ="mostrarNavegationDrawer = true">
       
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>Xiinbalkiin</v-toolbar-title>

      <v-spacer></v-spacer>
      <b-btn icon>
        <v-icon> mdi-google-translate </v-icon>
        ES
      </b-btn>
    </v-app-bar>
    <NavegationDrawer
      :drawer="mostrarNavegationDrawer"
      @cerrar="mostrarNavegationDrawer = false"
    />
  </div>
</template>

<script>
import NavegationDrawer from "./NavegationDrawer.vue";

export default {
  components: {
    NavegationDrawer,
  },
  data: () => ({ mostrarNavegationDrawer: false }),
};
</script>

<style lang="scss" scoped>
</style> 