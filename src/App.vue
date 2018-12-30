<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import classheader from "@c/classheader/topnav"
  export default {
    name: 'App',
    components: {
      classheader
    },
  }
</script>

<style>
  body{}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
/*    font-family: fantasy;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
