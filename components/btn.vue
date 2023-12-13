<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: 'Button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  bgColor: {
    type: String,
    default: '#000',
  },
  textColor: {
    type: String,
    default: '#fff',
  },
  outline: {
    type: Boolean,
    default: false,
  },
  inline: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :class="[
      inline ? 'inline-block' : 'block',
      outline ? 'border border-solid border-current' : '',
      `bg-[${bgColor}] text-[${textColor}]`,
      'px-5 py-2',
    ]"
  >
    {{ text }}
  </button>
</template>
