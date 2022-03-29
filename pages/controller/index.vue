<script setup>
import { io } from "socket.io-client";
import { useDeviceMotion } from "@vueuse/core";
import { watchEffect } from "vue";

const socket = io();

const gyroData = reactive(useDeviceMotion());

const player = reactive({ id: 0, x: 0, y: 0 });
const colors = useColors();

onBeforeMount(() => {
  socket.emit("controllerConnected");
});

watchEffect(() => {
  socket.emit("playerMove", {
    accelerationX: gyroData.accelerationIncludingGravity.x,
    accelerationY: gyroData.accelerationIncludingGravity.y,
  });
  playerMove(gyroData.accelerationIncludingGravity);
});

socket.on("setPlayerID", (playerID) => {
  player.id = playerID;
});

function playerMove(accelerationIncludingGravity) {
  player.x = -accelerationIncludingGravity.x * 10;
  player.y = accelerationIncludingGravity.y * 10;
}

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div>
    <h1>Ready</h1>
    <h2>Player {{ player.id }}</h2>
    <ControllerPreview
      :x="player.x"
      :y="player.y"
      :color="colors[player.id - 1]"
    />
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
