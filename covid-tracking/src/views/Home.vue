<template>
  <div>
    <main v-if='loading === false'>
      <DataTitle :text="title" :dataDate="dataDate"/>
    </main>

    <main
      v-else-if="loading === true"
      class="flex flex-col text-center" 
    >
      <div class="text-gray-500 text-3xl mt-10 mb-6">
        Fetching Data
      </div>
      <img :src="loadingImage" class="w-24 m-auto">
    </main>

    <DataBoxes :stats="stats"/>
    <CountrySelect :countries="countries"/>

  </div>
</template>



<script>

  import DataTitle from '../components/DataTitle.vue'
  import DataBoxes from '../components/DataBoxes.vue'
  import CountrySelect from '../components/CountrySelect.vue'

  export default {
   name: 'Home',
   components: {
    DataTitle,
    DataBoxes,
    CountrySelect,
   },
   data(){
    return {
      loading: true,
      title: 'Global',
      dataDate: '',
      status: {},
      countries: [],
      loadingImage: require('../assets/blue-hourglass.gif')
    }
   },
   methods: {
    async fetchCovidData(){
      const res = await fetch('https://api.covid19api.com/summary')
      const data = res.json()
      return data
    },
   },
  async created(){
    const data = await this.fetchCovidData()
    console.log(data)
    this.dataDate = data.Date
    this.stats = data.Global
    this.countries = data.Countries
    this.loading = false
  }
}
</script>
