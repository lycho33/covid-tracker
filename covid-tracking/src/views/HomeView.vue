<template>
  <!-- if the loading is false, then render this -->
  <main  v-if="!loading" class="home">
    <DataTitle :text="title" :dataDate="dataDate" />

    <DataBoxes :stats="stats" />
  </main>

  <main v-else class="flex flex-col align-center justify-center text-center">
    <!-- mt: margin-top -->
    <div class="text-gray-500 text-3xl mt-10 mb-6">
      Fetching Data
    </div>
    <!-- w: width, m: margin -->
    <img :src="loadingImage" class="w-24 m-auto" alt="">
  </main>
</template>



<script>
  import DataTitle from '../components/DataTitle.vue'
  import DataBoxes from '../components/DataBoxes.vue'

  export default {
   name: 'HomeView',
   components: {
    DataTitle,
    DataBoxes
   },
   data(){
     //these are all your variables/STATE
     return {
       loading: true,
       title: 'Global',
       dataDate: '',
       status: {},
       countries: [],
       loadingImage: require('../assets/blue-hourglass.gif'),
     }
   },
   methods: {
     async fetchCovidData(){
       const res = await fetch('https://api.covid19api.com/summary')
       const data = await res.json()
       return data
     }
   },
   //runs before the Virtual DOM is mounted and after the component is intialized 
   async created(){
     console.log("created")
     const data = await this.fetchCovidData()
     this.dataDate = data.Date
     this.stats = data.Global
     this.countries = data.countries
     this.loading = false
   }
}
</script>
