<template>
  <div>
    <p :class="['Typography', `Typography_${size}`]">
      <slot></slot>
    </p>
  </div>
</template>

<script setup>
  const props = defineProps({
    size: {
      type: String,
      default: 'md',
    },

    color: {
      type: String,
    },
  });
</script>

<style lang="scss" scoped>
  .Typography {
    &_xl {
      @include font(3rem, 4rem, 0px, 400);
    }
    &_lg {
      @include font(1.5rem, 2.4rem, 0px, 400);
      font-family: 'Roboto';
    }
    &_md {
      @include font(1.3rem, 1.5rem, 0.5rem, 700);
      font-family: 'Roboto Condensed';
      text-transform: uppercase;
    }
  }

  @include media('max', 'sm') {
    .Typography {
      &_xl {
        @include font(2.2rem, 2.8rem, 0px, 400);
      }
      &_lg {
        @include font(1.4rem, 2.1rem, 0px, 400);
      }
      &_md {
        @include font(1.1rem, 1.3rem, 0.5rem, 700);
      }
    }
  }
</style>
