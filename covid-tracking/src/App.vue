<template>
  <Header />
  <div class="container">
    <router-view />
  </div>
  <Demo />
</template>

<script>
  import Header from '@/components/Header'
  import Demo from './views/Demo.vue'

  export default {
    components: {
      Header,
      Demo,
    },
  }
</script>

