<template>
  <div id="popular">
    {{ info }}
  </div>  


</template>

<script>

new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios 
      .get ('https://imdb-api.com/en/API/Top250Movies/k_jtrut4iw')
      .then (response => (this.info = response))
  }
})



</script>

<style scoped>

  

</style>
