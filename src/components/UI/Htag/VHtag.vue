<template>
  <h1 v-if="tag === 'h1'" :class="('Htag', `Htag_${size}`)"><slot></slot></h1>
  <h2 v-if="tag === 'h2'" :class="('Htag', `Htag_${size}`)"><slot></slot></h2>
  <h3 v-if="tag === 'h3'" :class="('Htag', `Htag_${size}`)"><slot></slot></h3>
  <h4 v-if="tag === 'h4'" :class="('Htag', `Htag_${size}`)"><slot></slot></h4>
  <h5 v-if="tag === 'h5'" :class="('Htag', `Htag_${size}`)"><slot></slot></h5>
  <h6 v-if="tag === 'h6'" :class="('Htag', `Htag${size}`)"><slot></slot></h6>
</template>

<script setup>
  const props = defineProps({
    size: {
      type: String,
      default: 'xs',
    },
    tag: {
      type: String,
      default: 'xs',
    },
  });
</script>

<style lang="scss" scoped>
  .Htag {
    &_xl {
      color: $white;
      @include font(5.8rem, 7rem, 0px, 400);
    }
    &_lg {
      @include font(5rem, 6.3rem, 0px, 600);
    }
    &_md {
      @include font(3.8rem, 4.8rem, 0px, 600);
    }
    &_sm {
      @include font(3rem, 3.8rem, 0px, 400);
    }
  }

  @include media('max', 'sm') {
    .Htag {
      &_xl {
        @include font(4rem, 4.6rem, 0px, 400);
      }
      &_lg {
        @include font(3.4rem, 4.2rem, 0px, 600);
      }
      &_md {
        @include font(2.4rem, 3rem, 0px, 600);
      }
      &_sm {
        @include font(1.8rem, 2.3rem, 0px, 400);
      }
    }
  }
</style>
