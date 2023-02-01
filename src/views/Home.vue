<template>
   <div class="home">
      <header class="header">
         Test
      </header>
   
      <div class="buttons">
         <Button @click="getJoke()">
            Generate Joke
         </Button>
      </div>

      <div v-if="joke">
         <p> {{ joke }} </p> 
      </div>

   </div>
</template>

<script>

   import Button from "../components/Button.vue";

   export default {
    name: "home",
    compontents: {
        Button,
    },
    data() {
        return {
            joke: ''
        };
    },
    methods: {
      async getJoke () {
         const info= await this.$http.get('')
         this joke = info.
      }
    }
}
   
</script>

<style scoped>
   .home {
      padding: 1rem;
      margin: 1rem;
   }

   .header {
      font-size: 1.2rem;
   }

   .buttons {
      display: flex;
      flex-direction: column;
      ;
   }

</style>
