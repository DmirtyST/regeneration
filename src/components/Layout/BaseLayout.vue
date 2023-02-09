<template>
  <div class="wrapper">
    <div class="wrapper_loading">
      <div class="wrapper_item"></div>
      <div class="wrapper_item"></div>
    </div>
    <BaseHeader />
    <main class="page">
      <slot></slot>
    </main>
    <BaseFooter />
  </div>
</template>

<script setup>
  import BaseHeader from './BaseHeader.vue';
  import BaseFooter from './BaseFooter.vue';
  import {gsap} from 'gsap';
  import {ScrollTrigger} from 'gsap/ScrollTrigger';
  import {onMounted} from 'vue';
  gsap.registerPlugin(ScrollTrigger);
  onMounted(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.wrapper_loading',
      },
    });
    gsap.to('.wrapper_loading', {
      duration: 0.7,

      translateY: '-100%',

      scrollTrigger: {
        trigger: '.wrapper_loading',
      },
    });

    tl.to('.wrapper_item:last-child', {
      opacity: 0,
      rotateY: '180deg',
    });
    tl.to('.wrapper_item:first-child', {
      opacity: 1,
      rotateY: '180deg',
    });
  });
</script>

<style lang="scss" scoped>
  .wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &_loading {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: $black;
      z-index: 999;
      @include flex(row, center, center);
      transition: ease-in-out 0.5s;
    }

    &_item {
      width: 3rem;
      height: 3rem;
      border: 2px solid white;
      &:first-child {
        opacity: 0;
      }
      &:last-child {
        border-radius: 50%;
        position: absolute;
      }
    }
  }
  .page {
    flex: 1 1 auto;
  }
</style>
