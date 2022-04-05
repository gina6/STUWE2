<script setup>
  const player = defineProps(['x', 'y', 'score', 'color'])

  const stylePosition = reactive({
    top: player.y + 'px', 
    left: player.x + 'px',
  })
  watchEffect(() => { stylePosition.left = player.x + 'px'; })
  watchEffect(() => { stylePosition.top = player.y + 'px'; })
</script>
<template>
  <div class="player" :style="stylePosition" />
</template>
<style lang="scss" scoped>
.player {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, v-bind('player.color') 100%);
  box-shadow: inset 0px 0px 6.65819px v-bind('player.color'), inset 0px 0px 13.3164px v-bind('player.color');
  filter: blur(0.416667px) drop-shadow(0px 0px 26.6327px v-bind('player.color'));
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-black;
  transition: ease-in-out 0.1s;
  transform: translate(-50px, -50px);
}
</style>