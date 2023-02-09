<template>
  <div class="line"></div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .line {
    width: 10.4rem;
    height: 0.3rem;
    background-color: $brick;
  }
  @include media('max', 'sm') {
    .line {
      width: 8.8rem;
    }
  }
</style>
