<script setup>
import { io } from "socket.io-client";
import { useDeviceMotion } from "@vueuse/core";
const socket = io();
const steps = 25;

const window = reactive(useWindowSize())

const player = reactive(
  {id: 1, x: window.width / 2, y: window.height / 2, color: `#00c2d7`} //'#070925'
)

const {
  acceleration,
  accelerationIncludingGravity,
  rotationRate,
  interval,
} = useDeviceMotion();


definePageMeta({
  layout: "custom",
});

function up() {
  socket.emit("up", steps);
}

function down() {
  socket.emit("down", steps);
}

function left() {
  socket.emit("left", steps);
}

function right() {
  socket.emit("right", steps);
}

function newPlayer() {
  socket.emit("newPlayer", {
    id: Math.floor(Math.random() * 100),
    x: Math.floor(Math.random() * 500),
    y: Math.floor(Math.random() * 500),
    score: 0,
  });
}
</script>

<template>
  <div>
    <h1>Ready</h1>
    <h2>Player {{ player.id }}</h2>
    <ControllerPreview :x="player.x" :y="player.y" :color="player.color" />
    <button @click="newPlayer">New Player</button>
    <button @click="left">Left</button>
    <button @click="right">Right</button>
    <button @click="up">Up</button>
    <button @click="down">Down</button>

    <h3>Acceleration Data: </h3>
    <p>Acceleration X: {{ acceleration.x }}</p>
    <p>Acceleration Y: {{ acceleration.y }}</p>
    <p>Acceleration Z: {{ acceleration.z }}</p>
    <br>
    <p>Acceleration Gravity X: {{ accelerationIncludingGravity.x }}</p>
    <p>Acceleration Gravity Y: {{ accelerationIncludingGravity.y }}</p>
    <p>Acceleration Gravity Z: {{ accelerationIncludingGravity.z }}</p>
    <br>
    <p>Rotation Alpha: {{ rotationRate.alpha }}</p>
    <p>Rotation Beta: {{ rotationRate.beta }}</p>
    <p>Rotation Gamma: {{ rotationRate.gamma }}</p>
    <br>
    <p>Intervall: {{ interval }}</p>
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
