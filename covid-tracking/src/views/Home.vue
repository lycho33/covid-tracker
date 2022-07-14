<template>
  <h1>HOME Page</h1>
</template>



<script>
  // import DataTitle from '../components/DataTitle.vue'
  // import DataBoxes from '../components/DataBoxes.vue'
  // import CountrySelect from '../components/CountrySelect.vue'
  export default {
   name: 'Home',
   components: {
   },
   methods: {
    async fetchCovidData(){
      const res = await fetch('https://api.covid19api.com/summary')
      const data = await res.json()
      return data
    }
   },
   //lifecycle method
   created(){
    console.log(123)
   },
   data(){
     //these are all your variables/STATE
     return {
     }
   },
   methods: {
   },
}
</script>
