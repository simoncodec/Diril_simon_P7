<template>
  <div class="signup">
    <SignupForm />
    <Footer />
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: 'Signup',
  components: {
    SignupForm,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>