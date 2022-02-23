<template>
  <v-card>
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Groupomania </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <router-link to="/Wall" class="navLink"><v-icon>mdi-home-city</v-icon></router-link>
            </v-list-item-icon>
            <v-list-item-content>
              <router-link to="/Wall" class="navLink"><v-list-item-title>Accueil</v-list-item-title></router-link>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <router-link to="/myProfile" class="navLink"><v-icon>mdi-account</v-icon></router-link>
            </v-list-item-icon>
            <v-list-item-content>
              <router-link to="/myProfile" class="navLink"><v-list-item-title>Mon profil</v-list-item-title></router-link>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <router-link to="/AllProfile" class="navLink"><v-icon>mdi-account-group</v-icon></router-link>
            </v-list-item-icon>
            <v-list-item-content>
              <router-link to="/AllProfile" class="navLink"><v-list-item-title>Tous les profils</v-list-item-title></router-link>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon class="red" @click="logout()">mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title @click="logout()">Se déconnecter</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "NavBar",
  methods : {
    logout ()
    {
      this.$store.commit("Logout");
      this.$router.push("/");
    }
  }
};
</script>

css