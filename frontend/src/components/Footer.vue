<template>
  <div class="foot">
    <v-footer class="justify-center footer">
      <ul>
        <li><a href="#">A propos</a></li>
        <li><a href="#">Mentions légales</a></li>
        <li><a href="#">© 2021 Groupomania, Inc.</a></li>
      </ul>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #ea8685;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    li {
      list-style-type: none;
      padding: 20px;
      a {
        color: black;
        text-decoration: none;
      }
    }
  }
}
</style>