<template>
  <div class="home">
    Hello World
  </div>
</template>



<script>


export default {
  name: 'HomeView',
  components: {},
  methods: {
    async fetchCovidData(){
      const res = await fetch('')
    }
  },
  created(){
    console.log("created")
  }
}
</script>
