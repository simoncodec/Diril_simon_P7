<template>
  <div class="wall">
     <NavBar />
     <CreatePost v-on:newPost=newPost />
    <v-card outlined class="posts">
      <div v-for="post in posts" :key="post.id">
        <v-card-text>{{ post.content }}</v-card-text>
        <v-img :src="post.attachement"></v-img>
      </div>

    </v-card>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CreatePost from "@/components/CreatePost.vue"
export default {
  components: {
    NavBar,
    CreatePost,
  },
  data: () => ({
    posts: [],
  }),
  methods:{
    newPost(post){
      this.posts.unshift(post)
    }
  },
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