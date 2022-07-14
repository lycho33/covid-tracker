<template>
  <Header />
  <router-view />
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

