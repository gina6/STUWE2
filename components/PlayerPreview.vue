<script setup>
  const player = defineProps(['number', 'color'])

  const isActive = ref(true)
  const styleColor = reactive({
    color: player.color,
  })
</script>
<template>
  <div class="player" :class="{ active: isActive }">
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
  border: 5px solid #8D899E;
  padding: 2.5rem 1rem;

  background: rgba($rgb-grey, 0.2);
  border-radius: 20px;
  p {
    @include termina;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    text-transform: uppercase;
    color: $color-darkgrey;
    text-shadow: 0px 4px 4px rgba($rgb-black, 0.25);
  }
  .active {
    .icon-check {
      width: 38px;
      height: 38px;
      mask-image: $icon-check;
      background-color: $color-pink;
    }
  }
}
</style>