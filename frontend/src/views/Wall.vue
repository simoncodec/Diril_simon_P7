<template>
  <div class="wall">
     <NavBar />
    <v-card outlined class="posts">
      <div v-for="post in posts" :key="post.id">
        <v-card-text>{{ post.content }}</v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data: () => ({
    posts: [],
  }),
  mounted: function () {
    fetch("http://localhost:3000/api/messages", {
      method: "GET",
      headers: { authorisation: "bearer" },
    })
      .then((Response) => Response.json())
      .then((Response) => (this.posts = Response));
  },
};
</script>

<style scoped>
.wall {
  margin: 3%;
}
.posts {
  margin-top: 3%;
  padding: 3%
}
</style>