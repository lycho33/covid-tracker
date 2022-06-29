<template>
  <!-- bg: background && mb: margin-bottom -->
  <header class="text-center bg-blue-800 text-white p-4 mb-10">
    <!-- md: material-design for when you hit a certain window-size, then the font will be 5x larger -->
    <div class="text-3xl md:text-5xl font-bold mb-3">Covid-19 Tracker</div>
    <!-- _blank => the link will open in another tag -->
    <p>API by <a class="text-blue-300" href="https://covid19api.com" target="_blank">covid19api.com</a></p>
  </header>
</template>

<script>
export default {
  name: 'Header',

}
</script>

