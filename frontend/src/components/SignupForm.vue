<template>
  <div class="formSignup">
    <v-form v-model="valid">
      <v-container>
          <v-col>
            <v-text-field
              v-model="password"
              :rules="passwordRule"
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
              v-model="password"
              :rules="passwordRule"
              :counter="40"
              label="E-mail"
              required
            >
            </v-text-field>
          </v-col>

          <v-col>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Departement"
              required
            >
            </v-text-field>
          </v-col>
      </v-container>
    </v-form>
    <v-btn class="btn" disabled="!valid" @click="login">connection</v-btn>

  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.formSignup
{
  text-align: center;
}
</style>