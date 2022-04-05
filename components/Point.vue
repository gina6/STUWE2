<script setup>
  const point = defineProps(['x', 'y', 'color'])

  const stylePosition = reactive({
    top: point.y + 'px', 
    left: point.x + 'px',
  })
  watchEffect(() => { 
    stylePosition.left = point.x + 'px'
    stylePosition.top = point.y + 'px'
  })
</script>
<template>
  <div class="point" :style="stylePosition" ></div>
</template>
<style lang="scss" scoped>
.point {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: radial-gradient(50% 50% at 50% 50%, rgba(255, 34, 129, 0) 78.65%, v-bind('point.color') 100%);
  filter: drop-shadow(0px 0px 8.33333px v-bind('point.color'));
  transform: translate(-50px, -50px);
}
</style>