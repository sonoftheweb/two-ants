<script lang="ts" setup>
import MenuArea from '~/components/layout/MenuArea.vue'

const el = ref<HTMLElement | null>(null)
const { x, y, isScrolling, arrivedState, directions } = useScroll(el, {
  behavior: 'smooth',
})
const menuState = useMenu()

watch(y, value => {
  // console.log(directions)
  if (value >= 260 && directions.bottom) {
    menuState.hideHeader()
  }

  if (value < 260 && directions.top) {
    menuState.showHeader()
  }

  if (directions.top) {
    menuState.showHeader(true)
  }
})
</script>

<template>
  <div class="w-screen">
    <MenuArea />
    <div ref="el" id="content-area" class="h-screen">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
