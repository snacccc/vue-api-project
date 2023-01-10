<script>

  export default {
    name: "getInfo",
    methods: {
      async getInfo (key) {

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
          movieError.innerText = "Something went wrong";
          movieError.style.opacity = 1;
          return;
        }
      }
    }
  }

</script>