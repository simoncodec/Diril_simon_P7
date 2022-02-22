<template>
  <div class="home">
    <img alt="logo groupomania" src="../assets/icon2.png" />
    <SignupForm />

    <p class="loginLink">Vous avez déjà un compte? <router-link to="/" class="routerLink">Connectez-vous</router-link></p>

  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue"
export default {
  name: 'Signup',
  components: {
    SignupForm,
  },
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
}
img {
    height: 100px;
    width: 100px;
  }

</style>