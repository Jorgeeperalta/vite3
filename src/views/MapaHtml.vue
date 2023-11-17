<template>
  <v-card>
    <v-alert-title>Google draw</v-alert-title>
    <v-card-subtitle>
      <div v-html="miHtml"></div>
      <v-table></v-table>
    </v-card-subtitle>
       
  </v-card>

</template>

<script>
export default {
  data: () => ({
    miHtml: `<div class="mapouter">
      <div class="gmap_canvas">
     
        <iframe width="817" height="560" id="gmap_canvas" src="http://127.0.0.1:5500/src/views/Google.html" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
        </iframe>
        
      </div>`,
  }),
    mounted () {
  
      },
      created(){
    
      },
  methods: {},
};
</script>

<style>
</style>