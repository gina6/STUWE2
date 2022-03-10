<script setup>
  const player = defineProps(['x', 'y', 'score'])

  const stylePosition = reactive({
    top: player.y + 'px', 
    left: player.x + 'px',
  })
  watchEffect(() => { stylePosition.left= player.x + 'px'; })
  watchEffect(() => { stylePosition.top= player.y + 'px'; })
  watchEffect(() => { console.log(stylePosition); })
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
}
</style>