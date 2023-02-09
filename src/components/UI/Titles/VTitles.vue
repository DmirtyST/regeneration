<template>
  <ul class="titles">
    <li class="titles_item">
      <div class="titles_sub">
        <VTypography size="md"><slot name="sub"></slot></VTypography>
      </div>
    </li>
    <li class="titles_item">
      <div class="titles_title">
        <VHtag v-if="title === true" tag="h2" size="lg"><slot name="title"></slot></VHtag>
        <slot v-if="title !== true" name="title"></slot>
      </div>
    </li>

    <slot></slot>
    <li class="titles_item">
      <div class="titles_line"><VLine /></div>
    </li>
  </ul>
</template>

<script setup>
  import VTypography from '../Typography/VTypography.vue';
  import VHtag from '../Htag/VHtag.vue';
  import VLine from '../Line/VLine.vue';
  import {gsap} from 'gsap';
  import {ScrollTrigger} from 'gsap/ScrollTrigger';
  import {onMounted} from 'vue';
  const props = defineProps({
    title: {
      type: Boolean,
      default: true,
    },
  });
  gsap.registerPlugin(ScrollTrigger);

  onMounted(() => {
    let titltes = document.querySelectorAll('.titles_item');
    titltes.forEach((title) => {
      gsap.to(title, {
        opacity: 1,
        translateY: 0,
        duration: 1,
        scrollTrigger: {
          trigger: title,
        },
      });
    });
  });
</script>

<style lang="scss" scoped>
  .titles {
    text-align: center;
    margin: 0 auto;
    @include flex(column, center, center);
    color: $black;

    &_sub {
      margin-bottom: 1.9rem;
      color: $gray;
    }
    &_title {
      margin-bottom: 2.9rem;
    }
    &_item {
      &:first-child {
        transform: translateY(15rem);
      }
      &:nth-child(even) {
        transform: translateY(20rem);
      }
      &:last-child {
        transform: translateY(19rem);
      }
      opacity: 0;
    }
  }
  @include media('max', 'sm') {
    .titles {
      &_sub {
        margin-bottom: 1.2rem;
      }
      &_title {
        margin-bottom: 1.6rem;
      }
    }
  }
</style>
