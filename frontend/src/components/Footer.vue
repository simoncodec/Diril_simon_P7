<template>
  <div class="footer">
      <ul>
        <li>A propos</li>
        <li>Mentions légales</li>
        <li>© 2021 Groupomania, Inc.</li>
      </ul>
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
        color: #ffd6d7;
        text-decoration: none;
      }
    }
  }
}
</style>