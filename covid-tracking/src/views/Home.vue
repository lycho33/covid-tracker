<template>
  <h1>HOME Page</h1>
</template>



<script>
  export default {
   name: 'Home',
   components: {},
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
