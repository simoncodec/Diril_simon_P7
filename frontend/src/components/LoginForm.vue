<template>
  <div class="login">
      <v-form v-model="valid">
        <v-container><v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="password" :rules="passwordRule" :counter="10" label="Last name" required>
            </v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="email" :rules="emailRules" label="E-mail" required>
            </v-text-field>
          </v-col>
        </v-row></v-container>
      </v-form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
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