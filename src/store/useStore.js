import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      count: 25,
      name: 'prueba',
      isAdmin: true,
      items: [],
      hasChanged: true,
      color:'#009688',
    }
  },
})