<template>
   <div class="home">
      <header class="header">
         Test
      </header>
   
      <div class="buttons">
         
         <Retrieve ref="retrieveRef"/>
         <Button @click="retrieveRef.getObject()">Play</Button>

      </div>

      <div v-if="object">
         <p> {{ object }} </p> 
      </div>

   </div>
</template>

<script>

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
            objectTwo: '',
        };
    },
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
