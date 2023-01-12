<template>

<form class="searchBox" id="searchBox">
<input type="text" class="searchInput" placeholder="Search..." name="searchInput" id="searchInput" >
</form>


</template>


<script>

  export default {
    name:"Searchbar",
    props:["inputs"],
    methods: {
      getData(x) {
      console.log(x)
      let key = `https://imdb-api.com/en/API/SearchMovie/k_jtrut4iw/${x}`;
      console.log(key);
      this.accessAPI(key);
      },
      },
      mounted () {
        inputs.$on("submit", this.getData)
      }
    }



</script>

<style>

.searchInput {
      height: 4rem;
      width: 32rem;
      font-size: 1.5rem;
      border: 0.3rem solid;
      border-color: var(--accent);
   }

</style>