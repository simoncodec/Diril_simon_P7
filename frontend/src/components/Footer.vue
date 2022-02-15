<template>
  <div class="footer">
    <v-footer>
      <ul>
        <li><a href="#">A propos</a></li>
        <li><a href="#">Mentions légales</a></li>
        <li><a href="#">© 2022 Groupomania, Inc.</a></li>
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
ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  li {
    list-style-type: none;
    padding: 20px;
    a {
      color: black;
    }
  }
}
</style>