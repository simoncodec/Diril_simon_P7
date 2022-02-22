<template>
  <div class="login">
    <v-form v-model="valid">
      <v-container>
        <v-col>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          >
          </v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="password"
            :rules="passwordRule"
            :counter="10"
            label="Mots de passe"
            required
          >
          </v-text-field>
        </v-col>
      </v-container>
    </v-form>
    <v-btn class="btn" :disabled="!valid" @click="login"> connection </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
    valid: false,
  }),
  methods: {
    login() {
      const request = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.user),
      };
      fetch("http://localhost:3000/api/auth/login", request)
        .then((response) => response.json())
        .then((data) => {
          this.$store.commit('LOGIN', data)
          this.$router.push('Wall');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  padding: 5px;
  label {
    color: rgba(0, 0, 0, 0.5);
    margin: 10px;
  }
  button {
    margin: 10px;
  }
}
</style>