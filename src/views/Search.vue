<template>
   <div class="home">
   
      <div class="search" id="search">
      <form class="searchBox" id="searchBox" @input="getData(x)">
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
            key: "https://imdb-api.com/en/API/SearchMovie/k_jtrut4iw/inception",
        };
    },
    methods: {
      getData(x) {
      searchInput.input;    
      let input = searchInput.value;
      console.log(input);
      let key = `https://imdb-api.com/en/API/SearchMovie/k_jtrut4iw/${input}`;
      console.log(key);

      const getInfo = async function (key) {
         try {

            movieError.innerText = "";
            movieError.style.opacity = 0;

            const response = await fetch(key);
            const data = await response.json();
            console.log(data);   

            if (!data.results[0]) {
                  movieError.innerText = "Unable to find specified movie";
                  movieError.style.opacity = 1;
                  return;
            } else {

            const movieTitle = data.results[0]['title'];
            const movieImage = data.results[0]['image'];
            console.log(movieTitle);
            console.log(moviePoster);
            movieName.innerHTML = movieTitle;
            moviePoster.src = movieImage;
            moviePoster.style.opacity = 1;

            }

         } catch (error) {
            console.log(error);
            console.log(data.errorMessage);
            movieError.innerText = "Something went wrong";
            movieError.style.opacity = 1;
            return;
         }
         }
         getInfo(key)
      },
    }
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
