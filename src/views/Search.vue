<template>
   <div class="home">
   
      <div class="search" id="search">
      <form class="searchBox" id="searchBox" @submit ="getData(x)">
      <input type="text" class="searchInput" placeholder="Search..." name="searchInput" id="searchInput" >
      </form>

      <header class="movieError" id="movieError"></header>

      <section class="movieInfo" id="movieInfo">
      <p class="movieName" id="movieName"></p>
      <img class="moviePoster" id="moviePoster" src="" alt="">
    </section>

      </div>

   </div>
</template>

<script>


   import Button from "../components/Button.vue";

   export default {
    name: "search",
    compontents: {
        Button,
    },
    data() {
        return {
            count: 0,
            clicked: false,
        };
    },
    methods: {
      getData(x) {
      searchInput.input;    
      let input = searchInput.value;
      console.log(input);
      let key = `https://imdb-api.com/en/API/SearchMovie/k_jtrut4iw/${input}`;
      console.log(key);
      this.accessAPI(key);
      },
      accessAPI (key) {
         const response = fetch(key)
         console.log(response);
         const data = response.json;
         this.getInfo(data);
      },
      getInfo (data) {

         try {
            if (!data.results[0]) {
               console.log("No data")
               return;
            } else {
               console.log(data);
            }

         } catch (error) {
            console.log(error);  
            return;
         }
      }
    },
    async created (input) {
      await this.accessAPI(`https://imdb-api.com/en/API/SearchMovie/k_jtrut4iw/${input}`);
    },
}
   
</script>

<style scoped>
   .home {
      padding: 1rem;
      margin: 1rem;
      color: var(--fontcolormain);
   }

   .searchInput {
      height: 4rem;
      width: 32rem;
      font-size: 1.5rem;
      border: 0.3rem solid;
      border-color: var(--accent);
   }

   .movieError {
      opacity: 0;
      color: red;
   }

   .movieName {
      font-size: 3rem;
   }

   .moviePoster {
      height: 40rem;
      width: 30rem;
      border: 0rem;
      opacity: 0;
   }

</style>
