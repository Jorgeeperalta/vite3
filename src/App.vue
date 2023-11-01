<template>
  <v-app>
    <v-main>
      <router-view></router-view>
      <router-link to="/about"
      >/about</router-link
    >
    <router-link to="/mapa"
      >/mapa</router-link
    >
    <router-link to="/mapahtml"
      >/mapa html</router-link
    >
  
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
  
  },

  data: () => ({
    //
  }),
}
</script>
