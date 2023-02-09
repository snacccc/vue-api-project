<template>
   <div class="home">
      <header class="header">
         Test
      </header>
   
      <div class="buttons">
         
         <Retrieve ref="retrieve"/>
         <Button @click="getObjects()">Play</Button>

      </div>

      <div v-if="objects">
         <p> {{ objects[0] }} vs. {{ objects[1] }}</p>
          
      </div>

   </div>
</template>

<script>

   import axios from 'axios'
   import Button from "../components/Button.vue";
   import Retrieve from '../components/Retrieve.vue';

   export default {
    name: "home",
    compontents: {
        Button,
        Retrieve,
    },
    data() {
        return {
            objects: []
        };
    },
      methods: {
         async getObjects () {
         const response = await axios.get('https://rps101.pythonanywhere.com/api/v1/objects/all')
         console.log(response)

         const info = response.data

         const randomNum = function () {
            return Math.floor(Math.random() * 100);
         }


         const firstNumber = randomNum()
         console.log(firstNumber)

         const objectOne = info[firstNumber]
         console.log(objectOne)

         const secondNumber = randomNum()
         console.log(secondNumber)

         const objectTwo = info[secondNumber]
         console.log(objectTwo)

         this.objects.splice(0, 2)
         this.objects.push(objectOne, objectTwo)

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
