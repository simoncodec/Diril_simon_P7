<template>
  <div class="createPost">
    <v-container>
      <v-textarea
        v-model="posts.content"
        :rules="contentRules"
        class="content"
        color="black"
        label="Quoi de neuf...?"
      ></v-textarea>
      <div class="attachIcon">
        <v-row>
          <v-file-input
            v-model="posts.attachement"
            type="file"
            accept="image/png, image/jpeg, image/bmp, image/gif"
          ></v-file-input>
          <v-btn class="btnPost" large @click="postContent"
            >Publier</v-btn
          >
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  data() {
    return {
      posts: {
        content: "",
        attachement: [],
      },
    };
  },
  methods: {
    postContent() {
      const newPost = new FormData();
        newPost.append("content",this.posts.content);
        newPost.append("attachement", this.posts.attachement);
      const request = {
        method: "POST",
        headers: {
          authorization: "Bearer " + this.$store.getters.getToken,
        },
        body: newPost,
      };
      fetch("http://localhost:3000/api/messages/", request)
        .then((response) => response.json())
        .then((response) => {
          this.$emit("newPost", response)
        })
        .catch((er) => {
          console.log(er);
        });
    },
  },
};
</script>

<style scoped>
</style>