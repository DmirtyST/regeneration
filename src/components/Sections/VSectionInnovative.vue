<template>
  <section id="innovative" class="innovative panel">
    <VTitles>
      <template v-slot:sub>A Global Challenge</template>
      <template v-slot:title>An Innovative Solution</template>
    </VTitles>
    <VContainer width="120rem">
      <div class="innovative_row">
        <div class="innovative_item">
          <div class="innovative_info">
            <div class="innovative-info_sub">
              <VTypography size="md">THE PROBLEM</VTypography>
            </div>
            <div class="innovative-info_text">
              <VTypography size="xl"
                >The growing inventory of historical mine sites present an ecological and
                community challenge.
              </VTypography>
            </div>
          </div>
          <div class="innovative_img">
            <picture>
              <source type="image/webp" :srcset="innovative1Webp" />
              <VImg ps="cover" :sourse="innovative1" />
            </picture>
          </div>
        </div>
        <div class="innovative_item">
          <div class="innovative_info">
            <div class="innovative-info_sub">
              <VTypography size="md">THE CHALLENGE</VTypography>
            </div>
            <div class="innovative-info_text">
              <VTypography size="xl"
                >Over 3 billion tons of minerals will be needed to deploy the wind, solar,
                and geothermal power required to achieve a climate reduction target of
                2°C.
              </VTypography>
            </div>
          </div>
          <div class="innovative_img">
            <picture>
              <source type="image/webp" :srcset="innovative2Webp" />
              <VImg ps="cover" :sourse="innovative2" />
            </picture>
          </div>
        </div>
        <div class="innovative_item">
          <div class="innovative_info">
            <div class="innovative-info_sub">
              <VTypography size="md">THE OPPORTUNITY</VTypography>
            </div>
            <div class="innovative-info_text">
              <VTypography size="xl"
                >Brands, consumers, and investors are seeking biodiversity, community, and
                climate positive minerals.
              </VTypography>
            </div>
          </div>
          <div class="innovative_img">
            <picture>
              <source type="image/webp" :srcset="innovative3Webp" />
              <VImg ps="cover" :sourse="innovative3" />
            </picture>
          </div>
        </div>
        <div class="innovative_item">
          <div class="innovative_info">
            <div class="innovative-info_sub">
              <VTypography size="md">AN Innovative Solution</VTypography>
            </div>
            <div class="innovative-info_text">
              <VTypography size="xl"
                >We transform these legacy sites into ecological assets while producing
                needed minerals.
              </VTypography>
            </div>
          </div>
          <div class="innovative_img">
            <picture>
              <source type="image/webp" :srcset="innovative4Webp" />
              <VImg ps="cover" :sourse="innovative4" />
            </picture>
          </div>
        </div>
      </div>
    </VContainer>
  </section>
</template>

<script setup>
  import VTypography from '@comps/UI/Typography/VTypography.vue';
  import innovative1 from '@/innovative1.png';
  import innovative2 from '@/innovative2.png';
  import innovative3 from '@/assets/innovative3.png';
  import innovative4 from '@/assets/innovative4.png';
  import innovative1Webp from '@/assets/innovative1.webp';
  import innovative2Webp from '@/assets/innovative2.webp';
  import innovative3Webp from '@/assets/innovative3.webp';
  import innovative4Webp from '@/assets/innovative4.webp';
  import VContainer from '../UI/Container/VContainer.vue';
  import VImg from '@comps/UI/Img/VImg.vue';
  import VTitles from '@comps/UI/Titles/VTitles.vue';

  import {gsap} from 'gsap';
  import {ScrollTrigger} from 'gsap/ScrollTrigger';
  import {onMounted} from 'vue';
  gsap.registerPlugin(ScrollTrigger);

  onMounted(() => {
    gsap.to(
      '.innovative_item:first-child .innovative_img, .innovative_item:first-child .innovative-info_sub, .innovative_item:first-child .innovative-info_text',
      {
        translateX: 0,
        opacity: 1,
        duration: 1,
        scale: 1,
        scrollTrigger: {
          trigger: '.innovative_item:first-child',
          start: 'top 65%',
        },
      },
    );
    gsap.to(
      '.innovative_item:nth-child(3) .innovative_img, .innovative_item:nth-child(3) .innovative-info_sub, .innovative_item:nth-child(3) .innovative-info_text',
      {
        translateX: 0,
        opacity: 1,
        duration: 1,
        scale: 1,
        scrollTrigger: {
          trigger: '.innovative_item:nth-child(3)',
          start: 'top 65%',
        },
      },
    );
    gsap.to(
      '.innovative_item:nth-child(2) .innovative_img, .innovative_item:nth-child(2) .innovative-info_sub, .innovative_item:nth-child(2) .innovative-info_text',
      {
        translateX: 0,
        opacity: 1,
        duration: 1,
        scale: 1,
        scrollTrigger: {
          trigger: '.innovative_item:nth-child(2)',
          start: 'top 65%',
        },
      },
    );
    gsap.to(
      '.innovative_item:last-child .innovative_img, .innovative_item:last-child .innovative-info_sub, .innovative_item:last-child .innovative-info_text',
      {
        translateX: 0,
        opacity: 1,
        duration: 1,
        scale: 1,
        scrollTrigger: {
          trigger: '.innovative_item:last-child',
          start: 'top 65%',
        },
      },
    );
  });
</script>

<style lang="scss" scoped>
  .innovative {
    min-height: 100vh;
    padding-top: 14rem;
    padding-bottom: 5rem;
    background-color: $whiteLight;
    &_row {
      margin-top: 14rem;
    }
    &_item {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
      @include size('', 40rem);
      margin-bottom: 10rem;

      &:first-child,
      &:nth-child(3) {
        .innovative_img {
          transform: translateX(12rem) scale(0.6);
          opacity: 0;
        }
        .innovative-info_sub {
          transform: translateX(-15rem);
          opacity: 0;
        }
        .innovative-info_text {
          transform: translateX(-10rem);
          opacity: 0;
        }
      }
      &:nth-child(2),
      &:last-child {
        .innovative_img {
          transform: translateX(-12rem) scale(0.6);
          opacity: 0;
        }
        .innovative-info_sub {
          transform: translateX(15rem);
          opacity: 0;
        }
        .innovative-info_text {
          transform: translateX(10rem);
          opacity: 0;
        }
      }
      &:nth-child(2) {
        .innovative_img {
          grid-row-start: 1;
          grid-row-end: 2;
        }
      }
      &:last-child {
        .innovative_img {
          grid-row-start: 1;
          grid-row-end: 2;
        }
      }
    }
    &_info {
      @include flex(column, center);
    }
    &-info {
      &_sub {
        margin-bottom: 2rem;
        color: $gray;
      }
      &_text {
        width: 40rem;
      }
    }
    &_img {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 1;
      overflow: hidden;
      img {
        transition: all ease 0.4s;
        &:hover {
          transform: scale(1.2);
          transition: all ease 0.4s;
        }
      }
    }
  }
  @include media('max', 'sm') {
    .innovative {
      padding-top: 9rem;
      padding-bottom: 9rem;
      &_item {
        @include flex(column, center);
        flex-direction: column-reverse;
        gap: 0;
        margin-bottom: 5rem;
        height: auto;
      }
      &_row {
        margin-top: 5rem;
      }
      &_img {
        width: 100%;
        min-height: 26rem;
        margin-bottom: 4.8rem;
      }
      &-info {
        &_text {
          width: 100%;
        }
      }
    }
  }
</style>
