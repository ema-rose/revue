<template>
  <div id="map" />
  <div id="list">
    <p>Points</p>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      mapboxgl.accessToken =
        "pk.eyJ1IjoianNwZWRlcnNvbjE0IiwiYSI6ImNrbzdpNnNmMzB3MmUyb3F3Yjl6YnF2Z20ifQ.SyfIGD5bDQKOOu6Yg6n4Wg";
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/light-v9",
      });
      map.on('load', () => {
      // TODO: Here we want to load a layer
      // TODO: Here we want to load/setup the popup
      });
    });
    return {};
  },
};
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
</style>