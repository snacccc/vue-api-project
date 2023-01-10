<script>

  export default {
    name: "getData",
    methods: {
      getData(x) {
      searchInput.input;    
      let input = searchInput.value;
      console.log(input);
      let key = `https://imdb-api.com/en/API/SearchMovie/k_jtrut4iw/${input}`;
      console.log(key);
      this.getInfo(key);  
      },
    }
  }

</script>