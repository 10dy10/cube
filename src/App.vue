<template>
  <Header />
  <div class="wrap">
    <section class="back-slide" data-scroll data-scroll-speed="1.2">
      <main>
        <swiper
          :modules="modules"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          :loop="true"
          effect="fade"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="(a, i) in 6" :key="i">
            <img :src="require(`./assets/images/banner0${i +1}.jpg`)">
          </swiper-slide>
        </swiper>
        <div class="scroll-down">
          <p></p>
          <div>SCROLL</div>
        </div>
      </main>
    </section>

    <section id="sectionPin">
      <div class="pin-wrap">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <img src="./assets/images/banner02.jpg">
        <img src="./assets/images/banner01.jpg">
        <img src="./assets/images/banner04.jpg">
        <img src="./assets/images/banner05.jpg">
        <img src="./assets/images/banner06.jpg">
        <img src="./assets/images/banner03.jpg">
        <img src="./assets/images/banner07.jpg">
      </div>
    </section>

    <section class="bottom">
      <Footer />
    </section>

  </div>
</template>

<script>
import Header from "./layouts/TheHeader.vue";
import Footer from './layouts/TheFooter.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

import LocomotiveScroll from 'locomotive-scroll';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      
    };
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
      modules: [ Autoplay, EffectFade ]
    };
  },
  methods: {
    setScroll(){
      const scroller = new LocomotiveScroll({
        el: document.querySelector('.wrap'),
        // smooth: true
      });
  
      scroller.on("scroll", ScrollTrigger.update);
  
      ScrollTrigger.scrollerProxy('.wrap', {
        scrollTop(value){
          return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y
        },
        getBoundingClientRect(){
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
        },
        pinType: document.querySelector('.wrap').style.transform ? "transform" : "fixed"
      })
  
      // let pinBoxes = document.querySelectorAll('.pin-wrap > *')
      let pinWrap = document.querySelector('.pin-wrap')
      let pinWrapWidth = pinWrap.offsetWidth
      let horizontalScrollLength = pinWrapWidth - window.innerWidth

      gsap.to(".pin-wrap", {
        scrollTrigger: {
          scroller: '.wrap', //locomotive-scroll
          scrub: true,
          trigger: "#sectionPin",
          pin: true,
          // anticipatePin: 1,
          start: "top top",
          end: pinWrapWidth,
          markers: true,
        },
        x: -horizontalScrollLength,
        ease: "none"
      });

      ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

      ScrollTrigger.refresh();
    }
  },
  mounted(){
    this.setScroll()
  }
};
</script>

<style>
@import url(./assets/css/reset.css);
@import url(./assets/css/common.css);

#app {
  width: 100%;
  height: 100%;
}

</style>
