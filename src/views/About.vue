<template>
  <div class="about">
    
    <select class="rpsChoice" list='rpsChoiceList'>
      <option v-for="object in response">
        {{ object }}
      </option>
    </select>
    
  </div>
</template>

<script>

  import axios from 'axios'

  const response = await axios.get('https://rps101.pythonanywhere.com/api/v1/objects/all'); 

  export default {
    name: 'testing',
    data () {
      return {
        rpsList: []
      }
    }
  }

</script>

<style scoped>

  .about {
    padding: 1rem;
  }

  .header {
    font-size: 1.2rem;
  }

</style>
