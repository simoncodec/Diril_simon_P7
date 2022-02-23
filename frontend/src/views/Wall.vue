<template>
    <div class="wall">
    <div class="component">
      <Navbar />
      <CreatePost />
    </div>
  <div class="container-card">
    <div v-for="post in posts" :key="post.id">
      {{ post.content }}
    </div>
  </div>
    </div>
</template>

<script>
export default {
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

</style>