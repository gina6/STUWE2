<script setup>
  const player = defineProps(['number', 'color', 'active'])

  const backgroundActive = reactive({
    backgroundColor: player.active ? `${player.color}33` : `rgba($rgb-grey, 0.2)`
  })

  watchEffect(() => { 
    backgroundActive.backgroundColor = player.active ? `${player.color}33` : `rgba($rgb-grey, 0.2)`
  })

</script>
<template>
  <div class="player" :class="{ active: player.active }" :style="backgroundActive" >
    <p>Player {{ player.number }}</p>
    <div class="icon-check"></div>
  </div>
</template>
<style lang="scss" scoped>
.player {
  width: 196px;
  height: 196px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 5px solid $rgb-grey;
  padding: 2.5rem 1rem;
  background-color: rgba($rgb-grey, 0.2);
  border-radius: 20px;

  p {
    @include termina;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    text-transform: uppercase;
    color: $color-grey;
    text-shadow: 0px 4px 4px rgba($rgb-black, 0.25);
  }
    &.active {
      border: 5px solid v-bind('player.color');

      p {
        color: v-bind('player.color');
      }

    .icon-check {
      display: inline-block;
      mask-image: $icon-check;
      mask-repeat: no-repeat;
      mask-size: contain;
      width: 38px;
      height: 38px;
      background-size: 38px 38px;
      background-color: v-bind('player.color');
    }
  }
}
</style>