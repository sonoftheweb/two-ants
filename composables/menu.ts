export const useMenu = () => {
  const isMenuOpen = ref(false)
  const headerHidden = ref<boolean>(false)

  watch(isMenuOpen, () => {
    useAnime({
      targets: '.menu-trigger',
      rotate: isMenuOpen.value ? 225 : 0, // Rotate to 225 degrees if open, otherwise back to 0
      duration: 150,
      easing: 'spring(1, 80, 10, 0)',
    })

    useAnime({
      targets: '.menu',
      width: isMenuOpen.value ? '300px' : '0px',
      duration: 150,
      update: anim => {
        if (anim.progress === 100 && isMenuOpen.value) {
          const listItems = document.querySelectorAll('.menu ul li')
          listItems.forEach((li, index) => {
            // Temporarily set width to 'auto' to measure content width
            li.style.width = 'auto'
            const naturalWidth = li.offsetWidth

            // Reset width to 0 then animate to natural width
            li.style.width = '0px'
            useAnime({
              targets: li,
              width: naturalWidth + 'px', // Animate to the natural width
              duration: 350,
              delay: index * 100, // Delay incrementally by 100ms for each `li`
              easing: 'easeInOutSine',
            })
          })
        }

        if (anim.progress === 100 && !isMenuOpen.value) {
          const listItems = document.querySelectorAll('.menu ul li')
          listItems.forEach((li, index) => {
            useAnime({
              targets: li,
              width: '0px', // Animate width back to 0
              duration: 100,
              delay: index * 50, // Delay incrementally by 50ms for each `li`
              easing: 'linear',
            })
          })
        }
      },
    })
  })

  const hideHeader = () => {
    if (!headerHidden.value) {
      useAnime({
        targets: '#main-header',
        height: '0px',
        paddingTop: '0px',
        paddingBottom: '0px',
        duration: 80,
        easing: 'easeInOutQuad',
        backgroundColor: 'transparent',
      })
      headerHidden.value = true
    }
  }

  const showHeader = (temp: boolean = false) => {
    if (headerHidden.value) {
      let settings = {
        targets: '#main-header',
        height: '78px',
        paddingTop: '20px',
        paddingBottom: '20px',
        duration: 80,
        easing: 'easeInOutQuad',
        backgroundColor: 'transparent',
      }

      if (temp) {
        settings.backgroundColor = '#fff'
      }

      useAnime(settings)
      headerHidden.value = false
    }
  }

  return {
    isMenuOpen,
    toggleMenu: () => (isMenuOpen.value = !isMenuOpen.value),
    hideHeader,
    showHeader,
  }
}
