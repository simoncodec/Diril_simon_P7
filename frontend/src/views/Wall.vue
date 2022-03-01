<template>
  <div class="wall">
     <NavBar />
     <CreatePost v-on:newPost=newPost />
    <v-card outlined class="posts">
      <div v-for="post in posts" :key="post.id">
        <v-card-text>{{ post.content }}</v-card-text>
        <v-img :src="post.attachement"></v-img>
         <p class="h6"><v-icon>mdi-account</v-icon> {{ post.User.username }}</p>
         <v-icon class="btnAction" v-if="getUser.username == post.User.username || getUser.isAdmin" @click="deletePost(post.id, index)">mdi-trash-can-outline</v-icon>
      </div>

    </v-card>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CreatePost from "@/components/CreatePost.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    NavBar,
    CreatePost,
  },
  data: () => ({
    posts: [],
  }),
   computed: {
    ...mapGetters(["getUser","getToken"]),
  },
  methods:{
    newPost(post){
      post.User={username:this.$store.state.user.username},
      this.posts.unshift(post)
    },
        deletePost (postId, index) {
      const request = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + this.$store.getters.getToken,
        },
      };
      fetch("http://localhost:3000/api/messages/" + postId, request )
        .then(() => {
          this.posts.splice(index, 1)
        })
    }
  },
  mounted: function () {
    fetch("http://localhost:3000/api/messages", {
      method: "GET",
      headers: { authorisation: "Bearer"  + this.$store.getters.getToken},
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