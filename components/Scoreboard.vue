<script setup>
  const players = defineProps(['players'])

  const playerCnt = players.players.length
</script>

<template>
  <div class="scoreboard">
    <Score
      v-for="(player, index) in players.players"
      :key="player.id"
      :score="player.score"
      :color="player.color"
    >
    <div>{{index}}</div>
    </Score>
  </div>
</template>

<style lang="scss" scoped>
.scoreboard {
  @include glass;
  position: absolute;
  width: auto;
  height: auto;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 1.5rem 1.5rem 2.5rem;
  display: flex;
  flex-direction: row;
}
</style>
<style>
.wrapper:last-child *.divider{
  display: none;
}
</style>