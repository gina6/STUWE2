<script setup>
  const point = defineProps(['x', 'y'])

  const stylePosition = reactive({
    top: point.y + 'px', 
    left: point.x + 'px',
  })

  watchEffect(() => { console.log(stylePosition); })
</script>
<template>
  <div class="player" :style="stylePosition" ></div>
</template>
<style lang="scss" scoped>
.player {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: $color-pink;
}
</style>