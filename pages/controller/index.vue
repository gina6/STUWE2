<script setup>
import { io } from "socket.io-client";
import { useDeviceMotion } from "@vueuse/core";
import { watchEffect } from "vue";

const socket = io();

const gyroData = reactive(useDeviceMotion());

const window = reactive(useWindowSize());

const player = reactive(
  { id: 1, x: window.width / 2, y: window.height / 2, color: `#00c2d7` } //'#070925'
);
const player = reactive(
  {id: 1, x: 0, y: 0, color: `#00c2d7`} //'#070925'
)

watchEffect(() => {
  playerMove(gyroData.accelerationIncludingGravity);
});

function playerMove(accelerationIncludingGravity) {
  player.x -= accelerationIncludingGravity.x;
  player.y += accelerationIncludingGravity.y;
  //socket.emit('playerMove', accelerationIncludingGravity)
}

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div>
    <h1>Ready</h1>
    <h2>Player {{ player.id }}</h2>
    <ControllerPreview :x="player.x" :y="player.y" :color="player.color" />
  </div>
</template>

<style lang="scss" scoped>
h1 {
  @include ethnocentric;
  font-weight: 400;
  font-size: 48px;
  line-height: 49px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: $color-white;
  position: absolute;
  top: calc(50% - 2rem);
  left: 50%;
  transform: translate(-50%, -50%);
}
h2 {
  @include termina;
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: $color-white;
  position: absolute;
  top: calc(50% + 2rem);
  left: 50%;
  transform: translate(-50%, -50%);
}
h3 {
  color: $color-white;
}
p {
  color: $color-white;
}
button {
  height: auto;
  width: auto;
  padding: 20px;
}
</style>
