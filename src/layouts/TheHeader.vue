<template>
  <nav>
    <ul>
      <li><router-link to="/intro">COMPANY</router-link></li>
      <li><router-link to="/artist">ARTIST</router-link></li>
      <router-link to="/"><img src="../assets/images/logo.png" alt=""></router-link>
      <li><a href="http://www.cubeent.co.kr/aud_index" target="_blank">AUDITION</a></li>
      <li><router-link to="/contact">CONTACT</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>
