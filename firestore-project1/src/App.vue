<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>
<style lang="scss">
@charset "UTF-8";
@import "./assets/scss/common";
@import "./assets/scss/initial";
</style>
