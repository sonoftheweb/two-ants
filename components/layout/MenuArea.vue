<script lang="ts" setup>
import IconPlus from '~/components/icons/IconPlus.vue'

const menuState = useMenu()

const toggleMenu = () => {
  menuState.toggleMenu()
}
</script>

<template>
  <header id="main-header">
    <div>2Ants Labs</div>
    <IconPlus
      @click="toggleMenu"
      @mouseover="
        useAnime({
          targets: '.menu-trigger',
          scale: 1.1,
          duration: 50,
          easing: 'easeOutElastic(1, .6)',
        })
      "
      @mouseout="
        useAnime({
          targets: '.menu-trigger',
          scale: 1,
          duration: 50,
          easing: 'easeInElastic(1, .6)',
        })
      "
      class="menu-trigger"
    />
    <div class="menu">
      <ul>
        <li><NuxtLink>Works</NuxtLink></li>
        <li><NuxtLink>Lab</NuxtLink></li>
        <li><NuxtLink>Contact</NuxtLink></li>
      </ul>
    </div>
  </header>
</template>
