<template lang="html">
  <div class="create-post container">
    <h1>What 3 Words</h1>
    <Map></Map>
  </div>
</template>

<script>
  import Map from '@/components/Map'
  export default {
    name: 'subvue',

    components: { Map },

    data() {
        return {
            permalink: this.$route.params.name,
            posts: [],
            subvue: null
        }
    },

    mounted() {
        
    },

    methods: {

    },

    watch: {
        $route() {
            this.permalink = this.$route.params.name
            this.fetchData()
        }
    }
}
</script>

<style scoped lang="css">
form {
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
}

input,
textarea {
    display: block;
    width: 100%;
    margin: 0;
    border: none;
    background: rgb(223, 224, 221);
    padding: 15px;
    margin: 20px 0;

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
}

.permalink {
    color: gray;
    text-align: right;
}
</style>
