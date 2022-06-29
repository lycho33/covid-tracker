<template>
  <main  v-if="!loading" class="home">
    Show Data
  </main>

  <main class="flex flex-col align-center justify-center text-center" v-else>
    <!-- mt: margin-top -->
    <div class="text-gray-500 text-3xl mt-10 mb-6">
      Fetching Data
    </div>
    <!-- w: width, m: margin -->
    <img :src="loadingImage" class="w-24 m-auto" alt="">
  </main>
</template>



<script>


export default {
  name: 'HomeView',
  components: {},
  data(){
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
