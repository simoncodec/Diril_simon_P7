<template>
  <div class="signup">
    <form>
      <label for="username">Pseudo :</label>
      <input id="username" type="text" placeholder="Pseudo" required />
      <label for="department">Service :</label>
      <input id="department" type="text" placeholder="Service" required />
      <label for="password">Mot de passe :</label>
      <input
        id="password"
        type="password"
        placeholder="Mot de passe"
        required
      />
      <label for="password">Vérification du mot de passe :</label>
      <input
        id="password"
        type="password"
        placeholder="Vérifier mot de passe"
        required
      />
      <label for="email">Email :</label>
      <input id="email" type="email" placeholder="Email" required />
      <button id="btnSignup" type="submit">M'inscrire</button>
    </form>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
</style>