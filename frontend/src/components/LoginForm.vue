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
      fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: this.email, password: this.password }),
        headers: { "Content-Type": "application/json" },
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