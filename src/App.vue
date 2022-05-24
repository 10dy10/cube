<template>
  <Header />
  <div class="wrap" data-scroll-container>
    <section class="back-slide" data-scroll data-scroll-speed="1.2">
      <main>
        <swiper
          :loop="true"
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

    <section class="section" id="sectionPin">
      <div class="pin-wrap">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <img src="./assets/images/banner02.jpg" alt="">
        <img src="./assets/images/banner01.jpg" alt="">
        <img src="./assets/images/banner04.jpg" alt="">
        <img src="./assets/images/banner05.jpg" alt="">
        <img src="./assets/images/banner06.jpg" alt="">
        <img src="./assets/images/banner03.jpg" alt="">
        <img src="./assets/images/banner01.jpg" alt="">
        <img src="./assets/images/banner02.jpg" alt="">
        <img src="./assets/images/banner03.jpg" alt="">
      </div>
    </section>

  </div>
</template>

<script>
import Header from "./layouts/TheHeader.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import LocomotiveScroll from 'locomotive-scroll';

import 'swiper/css';

export default {
  name: "App",
  components: {
    Header,
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
    };
  },
  methods: {
    setScroll(){
      const scroller = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
      });
      gsap.registerPlugin(ScrollTrigger);
  
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
  
      window.addEventListener('load', function (){
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
            anticipatePin: 1,
            start: "top top",
            end: pinWrapWidth
          },
          x: -horizontalScrollLength,
          ease: "none"
        });
  
        ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
  
        ScrollTrigger.refresh();
      })
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

</style>
