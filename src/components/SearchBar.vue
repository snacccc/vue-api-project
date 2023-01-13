<template>

<form class="searchBox" id="searchBox">
<input type="text" class="searchInput" placeholder="Search..." name="searchInput" id="searchInput" >
<slot></slot>
</form>


</template>


<script>

  export default {
    name:"SearchBar",
    props:["inputs"],
    methods: {
      getData(x) {
      console.log(x)
      let key = `https://imdb-api.com/en/API/SearchMovie/k_jtrut4iw/${x}`;
      console.log(key);

      const response = fetch(key)
      console.log(response)
      const data = response.json
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