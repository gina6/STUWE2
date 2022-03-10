<script setup>
  const player = defineProps(['x', 'y', 'score'])

  const stylePosition = reactive({
    top: player.y + 'px', 
    left: player.x + 'px',
  })
  watchEffect(() => { stylePosition.left = player.x + 'px'; })
  watchEffect(() => { stylePosition.top = player.y + 'px'; })
</script>
<template>
  <div class="player" :style="stylePosition" >
    {{player.score}}
  </div>
</template>
<style lang="scss" scoped>
.player {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: $color-black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-white;
  transition: ease-in-out 0.1s;
}
</style>