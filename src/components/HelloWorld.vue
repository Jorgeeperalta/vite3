<script setup>
import { ref } from 'vue'
import { useStore } from '../store/useStore'

const counter = useStore()

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
 
  <v-sheet
    elevation="12"
    max-width="600"
    rounded="lg"
    width="100%"
    class="pa-4 text-center mx-auto"
  >
    <v-icon
      class="mb-5"
      color="success"
   
      size="112"
    >mdi-check-circle</v-icon>

    <h2 class="text-h5 mb-6">You reconciled this account</h2>

    <p class="mb-4 text-medium-emphasis text-body-2">
      To see a report on this reconciliation, click <a href="#" class="text-decoration-none text-info">View reconciliation report.</a>

      <br>

      Otherwise, you're done!
    </p>

    <v-divider class="mb-4"></v-divider>

    <div class="text-end">
      <v-btn
        class="text-none"
        color="success"
        rounded
        variant="flat"
        width="90"
      >
        Done
      </v-btn>
    </div>
  </v-sheet>

  <h1>{{ msg }} {{ counter.name }} {{counter.count}}</h1>


  <div class="card">
    <v-btn type="button" @click="counter.count++">count is {{ counter.count }}</v-btn>
   
  </div>

 
</template>

<style scoped>
.read-the-docs {
  color: #ac3a3a;
}
</style>
