<template>
  <button :type="type" :disabled="disabled" :class="['btn', `btn_${color}`]">
    <slot></slot>
  </button>
</template>

<script setup>
  const props = defineProps({
    label: {
      type: String,
      default: 'button',
    },
    color: {
      type: String,
      default: 'btn',
    },
    disabled: {
      type: Boolean,
      require: false,
    },
    type: {
      type: String,
      default: 'submit',
    },
    icon: {
      type: Boolean,
      default: true,
    },
  });
</script>

<style lang="scss" scoped></style>
