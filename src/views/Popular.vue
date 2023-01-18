<template>
  <div id="popular">
    {{ info }}
  </div>  


</template>

<script>

  export default {
    name: "Popular",
    data () {
      return {
        info: null
      }
    },
    mounted () {
      axios
        .get ('https://imdb-api.com/en/API/MostPopularMovies/k_jtrut4iw.json')
        .then (response => (this.info = response))
    }
  }

</script>

<style scoped>

  

</style>
