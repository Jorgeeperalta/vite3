<template>
   <div v-html="miHtml"></div>
</template>

<script>
export default {
    data: () => ({
  	miHtml: `<strong>Soy HTML</strong> y puedo
    <br>Ser
    <br>Inyectado
    <br>
    en Vue. Aquí un link:
    <a href="//parzibyte.me/blog">parzibyte.me/blog</a>`,
  }),
  methods: {
  	
  }
}
</script>

<style>

</style>