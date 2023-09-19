<script setup>
import { ref, watch, reactive, onMounted } from "vue";
import { useStore } from "../store/useStore";
import Table from "../components/Table.vue";
const counter = useStore();

defineProps({
  msg: String,
});

const count = ref(0);

const desserts = reactive([
  {
    name: "Frozen Yogurt",
    calories: 159,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
  },
  {
    name: "Eclair",
    calories: 262,
  },
  {
    name: "Cupcake",
    calories: 305,
  },
  {
    name: "Gingerbread",
    calories: 356,
  },
  {
    name: "Jelly bean",
    calories: 375,
  },
  {
    name: "Lollipop",
    calories: 392,
  },
  {
    name: "Honeycomb",
    calories: 408,
  },
  {
    name: "Donut",
    calories: 452,
  },
  {
    name: "KitKat",
    calories: 518,
  },
]);
const tipobusqueda = ref("");
const productos = ref([
  {
    category: "men's clothing",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    rating: { rate: 3.9, count: 120 },
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  },
]);
const radio = ref("");
const selected = ref("");
const filtro = ref("");
const dialog = ref(false);
const dialogAlert = ref(false);
const firstName = ref("");
const lastName = ref("");
const names = ref("");
const postreEncontrado = ref("");
const firstNameRules = ref([
  (value) => {
    if (value?.length > 3) return true;

    return "First name must be at least 3 characters.";
  },
]);
onMounted(() => {
  traeProd();
});
function traeProd() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())

    .then((json) => (productos.value = json))
    .then((json) => console.log(productos.value));
}
function del() {
  if (selected.value) {
    const i = names.indexOf(selected.value);
    names.splice(i, 1);
    selected.value = first.value = last.value = "";
  }
}

watch(selected, (name) => {
  [last.value, first.value] = name.split(", ");
});

function hasValidInput() {
  return firstName.value.trim() && lastName.value.trim();
}
//
// function guardaEmpleado() {
//   if (hasValidInput()) {
//     desserts.push({
//       name: firstName.value,
//       calories: lastName.value,
//     });
//   } else {
//   }
// }
function guardaEmpleado() {
  if (hasValidInput()) {
    productos.value.push({
      category: firstName.value,
      description: lastName.value,
      id: 30,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    });
    dialogAlert.value = true;
    setTimeout(() => {
      dialogAlert.value = false;
    }, 3000);

    dialog.value = false;
  } else {
  }
}

function filteredNames() {
  console.log(productos.value.length);
  if (Array.isArray(productos.value)) {
    postreEncontrado.value = productos.value.find(function (producto) {
      return producto.id === filtro.value;
    });
    console.log(postreEncontrado.value);
    // Si "postreEncontrado" es válido, agrégalo nuevamente a "desserts"
    if (true) {
      console.log(postreEncontrado.value.category);
      productos.value.length = 0;

      productos.value.push(postreEncontrado.value);
    }
  } else {
    console.log("no es un arreglo");
  }
  console.log(productos.value);
}
// function filteredNames() {

//   postreEncontrado.value = desserts.find(function (dessert) {
//     return dessert.name === filtro.value;
//   });

//   // Si "postreEncontrado" es válido, agrégalo nuevamente a "desserts"
//   if (postreEncontrado) {
//     desserts.length = 0;
//     desserts.push({
//       name: postreEncontrado.value.name,
//       calories: postreEncontrado.value.calories,
//     });
//   }
//   console.log(desserts.value);
//   console.log(postreEncontrado.value.name);
// }
import JSConfetti from "js-confetti";
const confetti = new JSConfetti();

function showConfetti() {
  confetti.addConfetti();
}
function seleccionabusqueda() {
  switch (radio.value) {
    case "description":
      tipobusqueda.value = "description";
      break;
    case "category":
      tipobusqueda.value = "category";
      break;
  }
}
///////////////////
</script>

<template>
  <h1 @click="showConfetti">🎉 Congratulations!</h1>
  <v-dialog width="800px" v-model="dialogAlert">
    <v-card color="success">
      <v-sheet width="800px" class="mx-auto" color="success">
        <v-alert
          type="success"
          title="Se almaceno con exito"
          text="kulgggggggggggoihohoi!"
        ></v-alert>
      </v-sheet>
    </v-card>
  </v-dialog>

  <v-dialog width="400px" v-model="dialog">
    <v-card>
      <v-card-title> <v-label>Agrega item</v-label></v-card-title>
      <v-card-text>
        <v-sheet width="300px" class="mx-auto">
          <v-form fast-fail @submit.prevent>
            <v-text-field
              v-model="firstName"
              label="First name"
              :rules="firstNameRules"
            ></v-text-field>

            <v-text-field
              v-model="lastName"
              label="Last name"
              :rules="firstNameRules"
            ></v-text-field>
            <v-divider class="mb-4"></v-divider>
            <v-btn @click="guardaEmpleado()" block class="mt-2">Guardar</v-btn>
          </v-form>
        </v-sheet>
      </v-card-text>
    </v-card>
  </v-dialog>
  <v-card flat>
    <v-toolbar color="primary" dark extended flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-toolbar>

    <v-card
      class="mx-auto"
      max-width="1200"
      height="1300px"
      style="margin-top: -64px"
    >
      <v-toolbar flat>
        <v-toolbar-title class="text-grey"> Title </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-apps</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card-text style="height: 200px">
        <v-sheet
          elevation="12"
          max-width="600"
          rounded="lg"
          width="100%"
          class="pa-4 text-center mx-auto"
        >
          <v-icon class="mb-5" color="success" size="112"
            >mdi-check-circle</v-icon
          >

          <h2 class="text-h5 mb-6">You reconciled this account</h2>

          <p class="mb-4 text-medium-emphasis text-body-2">
            To see a report on this reconciliation, click
            <a href="#" class="text-decoration-none text-info"
              >View reconciliation report.</a
            >

            <br />

            Otherwise, you're done!
          </p>

          <v-divider class="mb-4"></v-divider>
          <h1>{{ msg }} {{ counter.name }} {{ counter.count }}</h1>
          <div class="text-end">
            <v-btn
              class="text-none"
              color="success"
              rounded
              variant="flat"
              width="90"
              @click="counter.count++"
            >
              +
            </v-btn>
          </div>
        </v-sheet>
        <br />
        <v-divider></v-divider>
        <v-card max-width="1200" max-height="80">
          <v-card-text>
            <v-row>
              <v-col md="2"> <h3>Empleados</h3></v-col>
              <v-col md="4">
                <!-- <v-text-field
                v-model="filtro"
                label="Filtro"
                @click="filteredNames"
               
              ></v-text-field
            > -->
                <v-autocomplete
                  v-model="filtro"
                  label="Autocomplete"
                  :items="productos"
                  :item-title="tipobusqueda"
                  item-value="id"
                ></v-autocomplete>
              </v-col>
              <v-col md="2">
                <v-radio-group v-model="radio">
                  <v-radio value="description" @click="seleccionabusqueda()"
                    >name</v-radio
                  >
                  <v-radio value="category" @click="seleccionabusqueda()"
                    >calories</v-radio
                  >
                </v-radio-group>
              </v-col>
              {{ radio }} {{ tipobusqueda }}
              <v-col md="2">
                <v-btn
                  style="margin-left: 10px; margin-top: 10px"
                  v-bind="props"
                  @click="dialog = true"
                >
                  Agregar
                </v-btn>
                <v-btn @click="filteredNames()">mostrar</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-table height="300px" @click="filteredNames()">
          <thead>
            <tr>
              <th class="text-left">Categoria</th>
              <th class="text-left">Descripcion</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in productos" :key="item.category">
              <td>{{ item.category }}</td>
              <td>{{ item.description }}</td>
            </tr>
          </tbody>
        </v-table>
        {{ postreEncontrado }}
        <br />
        <Table />
      </v-card-text>
    </v-card>
  </v-card>
</template>

<style scoped>
.read-the-docs {
  color: #ac3a3a;
}
</style>
