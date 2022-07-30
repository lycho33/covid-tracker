<template>
  <main v-if='!loading'>
    Show Data
  </main>

  <main
    class="flex flex-col align-center justify-center text-center" 
    v-else
  >
    <div class="tedxt-gra-500 text-3xl mt-10 mb-6">
      Fetching Data
    </div>
    <img :src="loadingImage" class="w-24 m-auto">
  </main>
</template>



<script>
  export default {
   name: 'Home',
   components: {},
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
    }
   },
  async created(){
    const data = await this.fetchCovidData()
    console.log(data)
  }
}
</script>
