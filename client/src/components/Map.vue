<template>
  <div id="map" />
  <div id="list">
    <p>Points</p>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
    <ul>
      <li v-for='point in point' v-bind:key='point'>
        {{ points.point }}
      </li>
    </ul>
  </div>

</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
export default {
  name: 'Map',
  mounted() {
      mapboxgl.accessToken = 'pk.eyJ1IjoianNwZWRlcnNvbjE0IiwiYSI6ImNrbzdpNnNmMzB3MmUyb3F3Yjl6YnF2Z20ifQ.SyfIGD5bDQKOOu6Yg6n4Wg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-90.371485, 40.941962],
    zoom: 16
  });
  var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-90.371893, 40.943456 ]
      },
      properties: {
        title: 'Alumi Hall',
        description: 'Admissions and admistrative offices'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-90.372998, 40.943112]
      },
      properties: {
        title: 'Seymour Libary',
        description: 'Main libary on campus'
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-90.372199, 40.942661]
      },
      properties: {
        title: 'Seymour Hall',
        description: 'Cafeteria and dorms as well as career center'
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-90.37115, 40.943122]
      },
      properties: {
        title: 'Old Main',
        description: 'Site of the Lincoln Douglas debate'
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-90.370211, 40.941767]
      },
      properties: {
        title: 'Ford Center of Fine Arts',
        description: 'harbach theatre as well as recital hall'
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-90.370163, 40.943443]
      },
      properties: {
        title: 'George Davis Hall',
        description: 'acidemic building for social science classes'
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-90.375109, 40.943134]
      },
      properties: {
        title: 'Umbeck Science-Mathematics Center',
        description: 'acidemic building for science and math classes'
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-90.369385, 40.940915]
      },
      properties: {
        title: 'Memorial Gym',
        description: 'Gym with weight room, basketball court, and pool'
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-90.368683, 40.94075]
      },
      properties: {
        title: 'T. Fleming Fieldhouse',
        description: 'indoor track and field house'
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-90.371966, 40.939628]
      },
      properties: {
        title: 'Knosher Bowl',
        description: 'football field'
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-90.373409, 40.939612]
      },
      properties: {
        title: 'Prats Field',
        description: 'soccer field'
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-90.373553, 40.941729]
      },
      properties: {
        title: 'Me',
        description: 'Where I live currently'
      },
    }]
  };


  var points = [];
  // add markers to map
  geojson.features.forEach(function(marker) {
    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
    this.points = document.getElementsByTagName('marker').value;

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
      .addTo(map);
    }); 
  },
  

  data() {
    return {
      points: []  
    }
  }

  /* methods: {
    addPoints() {
      /* for (x = 0; x < document.getElementsByTagName('marker').length; x++) {
        this.points = document.getElementsByTagName('marker').item(x).value;
      } */
    //}
  //},
  //created(){
   // this.addPoints();
  //} 
}

</script>

<style>
#map {
  height: 600px;
  width: 80%;
  float: left;
}

#list {
  height: 600px;
  width: 18%;
  float: right;
  padding: 10px;
  border: 3px solid #aaaaaa;
}
.marker {
  background-image: url('../assets/mapbox-marker-icon-20px-red.png');
  background-size: cover;
  width: 15px;
  height: 25px;
  cursor: pointer;
}
.mapboxgl-popup {
max-width: 200px;
}
.mapboxgl-popup-content {
text-align: center;
font-family: 'Open Sans', sans-serif;
}
</style>