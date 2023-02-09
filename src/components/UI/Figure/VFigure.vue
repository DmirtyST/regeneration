<template>
  <div class="figure">
    <div class="figure_item">
      <div
        :style="[{opacity: 0.6}, {'background-color': `${color}`}]"
        class="figure-item_element"
      ></div>
    </div>
    <div class="figure_item">
      <div
        :style="[{opacity: 0.6}, {'background-color': `${color}`}]"
        class="figure-item_element"
      ></div>
      <div
        :style="[{opacity: 0.5}, {'background-color': `${color}`}]"
        class="figure-item_element"
      ></div>
    </div>
    <div class="figure_item">
      <div
        :style="[{opacity: 0.6}, {'background-color': `${color}`}]"
        class="figure-item_element"
      ></div>
      <div
        :style="[{opacity: 0.3}, {'background-color': `${color}`}]"
        class="figure-item_element"
      ></div>
      <div
        :style="[{opacity: 0.8}, {'background-color': `${color}`}]"
        class="figure-item_element"
      ></div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    color: {
      type: String,
      default: 'red',
    },
  });
</script>

<style lang="scss" scoped>
  .figure {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    transform: rotate(45deg);
    &_item {
      height: 100px;
      display: flex;
    }
    &-item {
      &_element {
        mix-blend-mode: normal;
        background-color: #996750;
        width: 100px;
        height: 100px;
      }
    }
  }
</style>
