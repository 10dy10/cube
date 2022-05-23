<template>
  <Header />
  <div class="wrap">
    <section class="back-slide">
      <main>        
        <swiper
          :modules="modules"
          :space-between="50"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide><img src="./assets/images/banner02.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="./assets/images/banner01.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="./assets/images/banner03.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="./assets/images/banner04.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="./assets/images/banner05.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="./assets/images/banner06.jpg" alt=""></swiper-slide>
        </swiper>
      </main>
    </section>
  </div>
  <div class="scroll-down">
    <p></p>
    <div>SCROLL</div>
  </div>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Header from './layouts/TheHeader.vue'

import 'swiper/css';

export default {
  name: 'App',
  components: {
    Header,
    Swiper,
    SwiperSlide,
  },
  data(){
    return {
      swiper: null,
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
}
</script>

<style>
@import url(./assets/css/reset.css);
@import url(./assets/css/common.css);

</style>
