<script setup>
  const indicator = defineProps(['x', 'y', 'color'])

  const stylePosition = reactive({
    top: indicator.y + 'px', 
    left: indicator.x + 'px',
  })
  watchEffect(() => { 
    stylePosition.left = indicator.x + 'px'
    stylePosition.top = indicator.y + 'px'
  })
</script>
<template>
  <div class="indicator" :style="stylePosition"></div>
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