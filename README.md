# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

version node v16.10.0
icons yarn add @mdi/font
maim.js  import '@mdi/font/css/materialdesignicons.css'

https://vant-contrib.gitee.io/vant/#/en-US/quickstart


<div id="Mapa" width="100%" style="height: 280px;"></div>   
<input type="text" name="input-address-formated" id="input-address-formated"> 
<input type="text" name="input-address" id="input-address">
<input type="text" name="input-city" id="input-city">
<input type="text" name="input-country" id="input-country">
<input type="text" name="input-postal-code" id="input-postal-code">
<input type="text" name="input-street" id="input-street">
<input type="text" name="input-exterior-number" id="input-exterior-number">
<input type="text" name="latitude" id="latitude">
<input type="text" name="longitude" id="longitude">
 
 
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js">
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCB7qwMnXsWaELVjEd0SR0N38SxyK2mT_M">
    </script>
     
     
       
    <script type="application/javascript">
        var map;
        var marker;
        var myLatlng = new google.maps.LatLng(16.79950392066451, -99.80640426685476);
        var geocoder = new google.maps.Geocoder();
        function initialize() {
            var mapOptions = {
            zoom: 13,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
            };
      map = new google.maps.Map(document.getElementById("Mapa"), mapOptions);
          var marker;
              google.maps.event.addListener(map, 'click', function(event) {
              placeMarker(event.latLng);
            });
 
 
        function placeMarker(location) {
            if (marker == null)
            {
                  marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    zoom:13
                  });
            }
            else
            {
                marker.setPosition(location);
            }
            geocoder.geocode(
                { location: location },
                (
                  results = google.maps.GeocoderResult,
                  status= google.maps.GeocoderStatus
                ) => {
                  if (status === "OK") {
                    if (results[0]) {
                  console.log  (results[0].address_components);
                   var address_components = results[0].address_components;
                            var components={};
                            jQuery.each(address_components,function(k,v1) {jQuery.each(v1.types,function(k2, v2){components[v2]=v1.long_name});});
                            var city, postal_code,state,country,sublocality,street_number,route;
                             
                            console.log(components);
                            if(components.locality) {
                                city = components.locality;
                            }
     
                            if(!city) {
                                city = components.administrative_area_level_1;
                            }
     
                            if(components.postal_code) {
                                postal_code = components.postal_code;
                            }
                            if(components.postal_code) {
                                postal_code = components.postal_code;
                            }
     
                            if(components.administrative_area_level_1) {
                                state = components.administrative_area_level_1;
                            }
                             
                            if(components.route) {
                                route = components.route;
                            }
                            if(components.sublocality_level_1) {
                                sublocality = components.sublocality_level_1;
                            }
                            if(components.country) {
                                country = components.country;
                            }
                            if(components.street_number) {
                              street_number = components.street_number;
                            }
                            $('#input-address-formated').val(results[0].formatted_address);
                            $('#input-address').val(state);
                            $('#input-city').val(city);
                            $('#input-country').val(country);
                            $('#input-postal-code').val(postal_code);
                            $('#input-street').val(route+', '+sublocality);
                            $('#input-interior-number').val(street_number);
                            $('#input-exterior-number').val(street_number);
                            $('#latitude').val(marker.getPosition().lat());
                            $('#longitude').val(marker.getPosition().lng());
                            console.log(marker.getPosition().lng())
                    } else {
                      window.alert("No results found");
                    }
                  } else {
                    window.alert("Geocoder failed due to: " + status);
                  }
                }
              );
        }
 
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    </script>
