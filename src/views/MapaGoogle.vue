<template>
    <GoogleMap api-key="AIzaSyCB7qwMnXsWaELVjEd0SR0N38SxyK2mT_M" style="width: 100%; height: 500px" :center="center" :zoom="15"  :libraries="['visualization']">
      <Marker :options="{ position: center }" >
        <InfoWindow>
        <div id="content">
          <div id="siteNotice"></div>
          <h1 id="firstHeading" class="firstHeading">Uluru</h1>
          <div id="bodyContent">
            <p>
              <b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern
              part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the
              nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two
              major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and
              Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and
              ancient paintings. Uluru is listed as a World Heritage Site.
            </p>
            <p>
              Attribution: Uluru,
              <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
                https://en.wikipedia.org/w/index.php?title=Uluru</a
              >
              (last visited June 22, 2009).
            </p>
          </div>
        </div>
      </InfoWindow>
      </Marker> 
      <MarkerCluster>
      <Marker v-for="(location, i) in locations" :options="{ position: location }" :key="i" >
        <InfoWindow>
            <div>
                <p>{{ location.detalle }} {{ i }}</p>
            </div>
        </InfoWindow>
      </Marker>
    </MarkerCluster> 
    <Polygon :options="bermudaTriangle" />
    </GoogleMap>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import { GoogleMap, Marker, InfoWindow , MarkerCluster, HeatmapLayer, Polygon } from "vue3-google-map";
  
  export default defineComponent({
    components: { GoogleMap, Marker, InfoWindow, MarkerCluster, HeatmapLayer, Polygon  },
    setup() {
      const center = { lat: 40.689247, lng: -74.044502 };
      const triangleCoords = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 },
    ];
    const bermudaTriangle = {
      paths: triangleCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    };
      const heatmapData = [
      { location: { lat: 37.782, lng: -122.447 }, weight: 0.5 },
      { lat: 37.782, lng: -122.445 },
      { location: { lat: 37.782, lng: -122.443 }, weight: 2 },
      { location: { lat: 37.782, lng: -122.441 }, weight: 3 },
      { location: { lat: 37.782, lng: -122.439 }, weight: 2 },
      { lat: 37.782, lng: -122.437 },
      { location: { lat: 37.782, lng: -122.435 }, weight: 0.5 },

      { location: { lat: 37.785, lng: -122.447 }, weight: 3 },
      { location: { lat: 37.785, lng: -122.445 }, weight: 2 },
      { lat: 37.785, lng: -122.443 },
      { location: { lat: 37.785, lng: -122.441 }, weight: 0.5 },
      { lat: 37.785, lng: -122.439 },
      { location: { lat: 37.785, lng: -122.437 }, weight: 2 },
     ];
      const locations = [
      { lat: -31.56391, lng: 147.154312, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -33.718234, lng: 150.363181, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -33.727111, lng: 150.371124, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -33.848588, lng: 151.209834, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -33.851702, lng: 151.216968, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -34.671264, lng: 150.863657, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -35.304724, lng: 148.662905, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -36.817685, lng: 175.699196, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -36.828611, lng: 175.790222, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -37.75, lng: 145.116667, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -37.759859, lng: 145.128708, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -37.765015, lng: 145.133858, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -37.770104, lng: 145.143299, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -37.7737, lng: 145.145187, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -37.774785, lng: 145.137978, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -37.819616, lng: 144.968119, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -38.330766, lng: 144.695692, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -39.927193, lng: 175.053218, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -41.330162, lng: 174.865694, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -42.734358, lng: 147.439506, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -42.734358, lng: 147.501315, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -42.735258, lng: 147.438, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
      { lat: -43.999792, lng: 170.463352, detalle:'fddsfsfsdfsdfsfsfdsfsdfsd' },
    ]
  
      return { center, locations, heatmapData, bermudaTriangle };
    },
  });
  </script>