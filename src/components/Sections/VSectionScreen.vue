<template>
  <section id="screen" class="screen">
    <div class="screen_row">
      <div class="screen_bg">
        <picture>
          <source type="image/webp" :srcset="screenBgWebp" />
          <VImg :sourse="screenBg" ps="cover" />
        </picture>
      </div>
      <div class="screen_item">
        <div class="screen_letter">Re</div>
        <div class="screen_sub">
          <VTypography size="md">A Revolutionary Way Forward</VTypography>
        </div>
        <div class="screen_title">
          <VHtag tag="h1" size="xl"
            >Ecological restoration catalyzed by remining {{ '&' }} reprocessing</VHtag
          >
        </div>
        <div class="screen_btn"><VButton color="brick">View Press Release</VButton></div>
      </div>
      <div class="screen_down">
        <div>Learn More</div>
        <div class="screen_icon">↓</div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import VButton from '@comps/UI/Button/VButton.vue';
  import VHtag from '@comps/UI/Htag/VHtag.vue';
  import VImg from '@comps/UI/Img/VImg.vue';
  import VTypography from '@comps/UI/Typography/VTypography.vue';
  import screenBg from '@/assets/screen.png';
  import screenBgWebp from '@/assets/screen.webp';
</script>

<style lang="scss" scoped>
  .screen {
    &_row {
      height: 100vh;
      padding: 0 1.5rem;
      width: 100%;
      position: relative;
      @include flex(column, center, center);
      z-index: 1;
    }

    &_bg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;

      img {
        object-position: bottom;
      }
    }

    &_item {
      width: 60rem;
      @include size(60rem, auto);
      text-align: center;
      position: relative;
      z-index: 1;
    }

    &_letter {
      position: absolute;
      left: 50%;
      top: -18%;
      transform: translateX(-50%);
      font-family: Source Serif Pro;
      @include font(40rem, 46rem, 0, 600);
      color: #fff;
      opacity: 0.23;
      z-index: -1;
    }

    &_sub {
      margin-bottom: 2.6rem;
      color: #fff;
    }

    &_title {
      margin-bottom: 3.3rem;
    }
    &_down {
      font-family: Roboto Condensed;
      @include font(1.1rem, 1.3rem, 0.5rem, 700);
      color: $white;
      text-align: center;
      text-transform: uppercase;
      position: absolute;
      bottom: 3.6rem;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
      div {
        transition: all ease 0.4s;
      }
      &:hover {
        div {
          transition: all ease 0.6s;
          &:first-of-type {
            transform: scale(1.2);
            @include font(1.1rem, 1.3rem, 0.8rem, 700);
          }
        }
      }
    }
    &_icon {
      margin-top: 0.5rem;
    }
  }
  @include media('max', 'lg') {
    .screen {
      &_row {
        height: 100rem;
      }
      &_letter {
        @include font(60rem, 46rem, 0, 600);
      }

      &_item {
        width: 70rem;
      }
    }
  }

  @include media('max', 'sm') {
    .screen {
      &_row {
        height: 70rem;
      }
      &_letter {
        @include font(42rem, 46rem, 0, 600);
      }
      &_sub {
        margin-bottom: 1.8rem;
      }

      &_title {
        margin-bottom: 2.5rem;
      }
      &_down {
        display: none;
      }
      &_item {
        width: 100%;
      }
    }
  }
</style>
