<template>
  <div class="formSignup">
    <v-form v-model="valid">
      <v-container>
          <v-col>
            <v-text-field
              v-model="username"
              :rules="usernameRule"
              :counter="40"
              label="Nom d'utilisateur"
              required
            >
            </v-text-field>
          </v-col>

          <v-col>
            <v-text-field
              v-model="password"
              :rules="passwordRule"
              :counter="40"
              label="Mots de passe"
              required
            >
            </v-text-field>
          </v-col>

          <v-col>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              :counter="40"
              label="E-mail"
              required
            >
            </v-text-field>
          </v-col>

          <v-col>
            <v-text-field
              v-model="departement"
              :rules="departementRules"
              label="Departement"
              required
            >
            </v-text-field>
          </v-col>
      </v-container>
    </v-form>
    <v-btn class="btn" :disabled="!valid" @click="signup">connection</v-btn>

  </div>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: "",
    email: "",
    departement: "",
    valid: false,
  }),
    methods: {
    signup() {
      fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ email: this.email, password: this.password, username: this.username, departement: this.departement }),
        headers: { "Content-Type": "application/json" },
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.formSignup
{
  text-align: center;
}

.btn {
    margin: 10px;
  }
</style>