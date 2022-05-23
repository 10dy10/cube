<template>
  <div class="wrap">
    <Header />
    <section>
      <main>
        <div class="inner"></div>
      </main>
    </section>
  </div>
  <div class="scroll-down">
    <p></p>
    <div>SCROLL</div>
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



</style>
