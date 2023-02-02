<template>
   <div class="home">
      <header class="header">
         Test
      </header>
   
      <div class="buttons">
         <Button @click="getObject()">
            Play
         </Button>
      </div>

      <div v-if="object">
         <p> {{ object }} </p> 
      </div>

   </div>
</template>

<script>

   import axios from 'axios';
   import Button from "../components/Button.vue";

   export default {
    name: "home",
    compontents: {
        Button,
    },
    data() {
        return {
            objectOne: '',
            objectTwo: '',
        };
    },
    methods: {
      async getObject () {
         const response = await axios.get('https://rps101.pythonanywhere.com/api/v1/objects/all')
         console.log(response)

         const info = response.data

         const randomNum = function () {
            return Math.floor(Math.random() * 100);
         }


         const number = randomNum()
         console.log(number)

         const objectOne = info[number]
         console.log(objectOne)

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
