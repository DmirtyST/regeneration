<template>
  <div class="header">
    <div class="header_row">
      <router-link to="#screen">
        <div class="header_logo">
          <div class="header_img">
            <VImg :sourse="headerLogo" ps="cover" />
          </div>
          <div class="header_text">
            <div>A Restoration and</div>
            <div>REMining Enterprise</div>
          </div>
        </div>
      </router-link>
      <div class="header_btn">
        <router-link to="#partner">
          <VButton color="transper">BECOME A PARTNER</VButton></router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
  import headerLogo from '../Image/headerLogo.png';
  import VImg from '../UI/Img/VImg.vue';
  import VButton from '../UI/Button/VButton.vue';
  import {gsap} from 'gsap';
  import {ScrollTrigger} from 'gsap/ScrollTrigger';
  import {onMounted} from 'vue';
  gsap.registerPlugin(ScrollTrigger);

  onMounted(() => {
    let mm = gsap.matchMedia();
    mm.add('(min-width:1024px)', () => {
      gsap.to('.header_row', {
        backgroundColor: '#1B1B1B',
        paddingTop: '2.3rem',
        paddingBottom: '2.3rem',
        duration: 0.1,
        scrollTrigger: {
          start: 'top top',
          end: 'top -40%',
          trigger: '.header',
          scrub: true,
        },
      });
    });
  });
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    width: 100%;
    z-index: 300;
    &_row {
      padding: 0 4rem;
      padding-top: 4.3rem;
      padding-bottom: 4.3rem;
      @include flex(row, space-between);
    }

    &_logo {
      @include flex(row, '', center);
      gap: 2.4rem;
    }

    &_img {
      @include size(15rem, 2.6rem);
      position: relative;
      img {
        z-index: 1;
      }
    }

    &_text {
      font-family: Roboto Condensed;
      @include font(0.9rem, 1.6rem, 0.2rem, 700);
      padding-left: 1.7rem;
      border-left: 0.1rem solid rgba(255, 255, 255, 0.3);
      color: $white;
      width: 15rem;
      height: 3.2rem;
      @include flex(column, center);
    }
  }
  @include media('max', 'lg') {
    .header {
      &_row {
        padding-top: 2.3rem;
        padding-bottom: 2.3rem;
        background-color: $black;
      }
    }
  }
  @include media('max', 'sm') {
    .header {
      &_row {
        padding: 0 2rem;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        background-color: $black;
      }
      &_btn {
        display: none;
      }
      &_img {
        @include size(10rem, 1.7rem);
        position: relative;
      }
    }
  }
</style>
