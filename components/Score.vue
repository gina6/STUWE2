<script setup>
const player = defineProps(["score", "color"]);
const players = usePlayers();
const singleplayer = computed(() => players.value.length == 1);
</script>

<template>
  <div class="wrapper">
    <div class="score">
      {{ player.score }}
    </div>
    <div v-if="singleplayer == false" class="divider"></div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  .score {
    @include termina;
    font-weight: 700;
    font-size: 96px;
    line-height: 115px;
    color: $rgb-white;
    text-shadow: 0px 4px 4px rgba($rgb-black, 0.25);
    height: 130px;
    width: 120px;
    padding: 0 4.5rem;
    background: radial-gradient(
      50% 50% at 50% 50%,
      v-bind("player.color") 0%,
      rgba(43, 43, 43, 0) 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .divider {
    height: 4px;
    width: 100px;
    background-color: $rgb-white;
    box-shadow: 0px 4px 4px rgba($rgb-black, 0.25);
    transform: rotate(90deg);
  }
}
</style>