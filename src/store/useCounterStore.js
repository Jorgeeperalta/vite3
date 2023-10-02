import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 2, name: 'Eduardo', productos: []}),
    getters: {
      doubleCount: (state) => state.count * 2,
    },
    actions: {
      doble(){
          this.count = this.count*2
        },
      increment() {
        this.count++
        
      },
      traeProducto() {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
      
          .then((json) => (this.productos = json))
          .then((json) => console.log(this.productos));
      }
    },
  })