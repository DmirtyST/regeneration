<template>
  <div :class="toggleValue === false ? 'accordion' : 'accordion active'">
    <div @click="toggleAccordion" class="accordion_title">
      <div class="accordion_icon"></div>
      <slot name="title"></slot>
    </div>
    <div class="accordion_content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  let toggleValue = ref(false);
  const toggleAccordion = () => {
    toggleValue.value = !toggleValue.value;
  };
</script>

<style lang="scss" scoped>
  .accordion {
    &:hover {
      .accordion_icon {
        background-color: $orange;
        transition: all ease 0.4s;
      }
    }
    &_content {
      opacity: 0;
      height: 0;
      visibility: hidden;
      transition: all linear 0.4s;
    }
    &_title {
      position: relative;
      z-index: 22;
      @include flex(row, '', center);
      gap: 2.4rem;
    }
    &_icon {
      @include size(2.4rem, 2.4rem);
      min-width: 2.4rem;
      min-height: 2.4rem;
      border-radius: 50%;
      border: 1px solid #383838;
      @include flex(row, center, center);
      padding: 0.5rem;
      position: relative;
      z-index: 22;
      transition: all ease 0.4s;
      &:before,
      &::after {
        content: '';
        position: absolute;
        height: 70%;
        width: 0.2rem;
        background-color: $black;
        transition: all ease 0.4s;
      }
      &::after {
        transform: rotate(90deg);
      }
    }
    &.active {
      .accordion_content {
        opacity: 1;
        transition: all linear 0.4s;
        visibility: visible;
        padding-bottom: 3rem;
        height: auto;
      }

      .accordion_icon {
        &::before {
          transform: rotate(90deg);
          transition: all ease 0.4s;
        }
      }
    }
  }
</style>
