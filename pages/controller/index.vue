<script setup>
import { io } from "socket.io-client";
import { useDeviceMotion } from "@vueuse/core";
import { watchEffect } from "vue";

const socket = io();

const gyroData = reactive(useDeviceMotion());

const playerPreview = reactive({ x: 100, y: 200, color: `#00c2d7` });

watchEffect(() => {
  playerMove(gyroData.accelerationIncludingGravity);
});

function playerMove(accelerationIncludingGravity) {
  playerPreview.x -= accelerationIncludingGravity.x;
  playerPreview.y += accelerationIncludingGravity.y;
  //socket.emit('playerMove', accelerationIncludingGravity)
}

</script>

<template>
  <div>
    <h1>Player 1</h1>
    <p>Acceleration X: {{ gyroData.accelerationIncludingGravity.x }}</p>
    <p>Acceleration Y: {{ gyroData.accelerationIncludingGravity.y }}</p>
    <Player
      :x="playerPreview.x"
      :y="playerPreview.y"
      :color="playerPreview.color"
    />
  </div>
</template>

<style lang="scss" scoped>
button {
  height: auto;
  width: auto;
  padding: 20px;
}
</style>
