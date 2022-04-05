<script setup>
  const indicator = defineProps(['x', 'y', 'color'])
  
  const beforeMount = ref(false)
  const stylePosition = reactive({
    top: indicator.y + 'px', 
    left: indicator.x + 'px'
  })

  const window = reactive(useWindowSize())

  onBeforeMount(() => { 
    watchEffect(() => { 
      stylePosition.top = window.height * 0.5 + indicator.y + 'px'
      stylePosition.left = window.width * 0.5 + indicator.x + 'px'
    })
    beforeMount.value = true;
  })
</script>
<template>
  <div>
    <div v-if="beforeMount" class="indicator" :style="stylePosition"></div>
  </div>
</template>
<style lang="scss" scoped>
.indicator {
  z-index: -1;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1/1;
  position: absolute;
  transform: translate(-50%, -50%);
  background: radial-gradient(50% 50% at 50% 50%, v-bind('indicator.color') 0%, rgba(43, 43, 43, 0) 100%);
}
</style>