<template>
  <v-app id="inspire">
    <v-card class="mx-auto mt-5; header"  max-width="850" variant="flat">
      <v-card max-width="850" max-height="60" class="header">
  
        <v-row >
          <v-col md="2"> <h3>Empleados</h3></v-col>
          <v-col md="6">
            <v-text-field
              v-model="firstName"
              label="First name"
              :rules="firstNameRules"
              variant="underlined"
            ></v-text-field
          ></v-col>
          <v-col md="4"
            >
        
            <v-btn style="margin-left: 100px; margin-top: 10px" v-bind="props">
              Buscar
            </v-btn></v-col
          >
        </v-row>
     
      </v-card>
      <v-table density="confortable" hover="true" class="table">
        <thead>
          <tr></tr>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Calories</th>
            <th class="text-left">Name</th>
            <th class="text-left">Calories</th>
            <th class="text-left">Name</th>
            <th class="text-left">Calories</th>
            <th class="text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>

            <td>
              <v-tooltip text="Tooltip">
                <template v-slot:activator="{ props }">
                  <v-icon
                    location="top"
                    color="red darken-1"
                    v-bind="props"
                    @click="deleteItem(item)"
                    >mdi-pencil
                  </v-icon>
                </template>
              </v-tooltip>
              <v-tooltip text="Tooltip">
                <template v-slot:activator="{ props }">
                  <v-icon color="red darken-1" v-bind="props" @click="deleteItem(item)">
                    mdi-delete-forever-outline
                  </v-icon>
                </template>
              </v-tooltip>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-app>
</template>
  
  <script  setup>
import { ref } from 'vue'
const desserts = ref([
  { name: 'Frozen Yogurt', calories: 159 },
  {
    name: 'Ice cream sandwich',
    calories: 237
  },
  {
    name: 'Eclair',
    calories: 262
  },
  {
    name: 'Cupcake',
    calories: 305
  },
  {
    name: 'Gingerbread',
    calories: 356
  },
  {
    name: 'Jelly bean',
    calories: 375
  },
  {
    name: 'Lollipop',
    calories: 392
  },
  {
    name: 'Honeycomb',
    calories: 408
  },
  {
    name: 'Donut',
    calories: 452
  },
  {
    name: 'KitKat',
    calories: 518
  }
])
</script>
<style scoped>
.header{
  background: rgb(186, 161, 197);
}
.table {
  background: rgb(51, 83, 87);
}
</style>
  
  