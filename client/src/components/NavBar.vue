<template lang="html">
  <nav>
    <router-link class="title" :to="{ name: 'couriers', params: {} }">Map</router-link>
    <div class="dropdown">
      <button class="dropbtn">Tours</button>
      <div class="dropdown-content">
        <router-link
          v-for="subvue in $store.state.subscribedSubvues"
          :key="subvue.permalink"
          :to="{ name: 'Subvue', params: {name: subvue.permalink} }"
          >{{ subvue.name }}</router-link>
        <router-link class="create-subvue" :to="{ name: 'Home' }">List</router-link>
        <router-link class="create-subvue" :to="{ name: 'SignUp' }">Import</router-link>
      </div>
    </div>

    <div class="dropdown">
      <button class="dropbtn">About</button>
      <div class="dropdown-content">
        <router-link class="create-subvue" :to="{ name: 'couriers' }">How To Use</router-link>
        <router-link class="create-subvue" :to="{ name: 'Credits' }">Team Couriers</router-link>
      </div>
    </div>
    

    <router-link style="float:right" :to="{ name: 'CreatePost', params: {} }">Add Point</router-link>
    <router-link style="float:right" :to="{ name: 'CreateSubVue', params: {} }">Make Tour</router-link>
  </nav>
</template>

<script>
export default {
  name: 'nav',

  methods: {
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style scoped lang="css">
nav {
  overflow: hidden;
  background-color: rgb(175, 234, 220);
  font-family: Arial;
}

nav a {
  float: left;
  font-size: 16px;
  color: rgb(4, 30, 66);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.title {
  font-weight: bold;
}

.create-subvue {
  background-color: rgb(23, 92, 93);
  color: rgb(4, 30, 66);
}

.create-subvue:hover {
  background-color: rgb(7, 44, 45)
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: rgb(4, 30, 66);
  padding: 14px 16px;
  background-color: inherit;
  font: inherit;
  margin: 0;
}

nav a:hover, .dropdown:hover .dropbtn {
  background-color: #111;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
