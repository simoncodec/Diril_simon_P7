<template>
  <div class="home">
    <HomePage/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    HomePage, Footer,
  }
};
</script>