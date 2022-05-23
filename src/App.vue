<template>
  <div class="wrap">
    <Header />
    <section>
      <main>
        <div class="inner"></div>
      </main>
    </section>
  </div>
</template>

<script>
import Header from './layouts/TheHeader.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
@import url(./assets/css/reset.css);
@import url(./assets/css/common.css);

main {
  width: 100%;
  height: 100vh;
  background-image: url(./assets/images/banner01.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
}

</style>
