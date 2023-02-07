<script>

  import axios from 'axios'

 export default {
  name: 'Retrieve',
  props: ['inputs'],
  data () {
    return {
      object: '',
    }
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

         const object = info[number]
         console.log(object)

      }
  },
 }

</script>