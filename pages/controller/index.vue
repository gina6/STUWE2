<script setup>
import { io } from "socket.io-client";
import { useDeviceMotion } from "@vueuse/core";
import { watchEffect } from "vue";

const socket = io();
const steps = 25;

const { acceleration, accelerationIncludingGravity, rotationRate, interval } = useDeviceMotion();

watchEffect(() => playerMove({ accelerationIncludingGravity }));

function playerMove({ accelerationIncludingGravity }) {
  //socket.emit('playerMove', accelerationIncludingGravity)
}

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
    <h1>Player 1</h1>
    <h1>Controller</h1>
    <button @click="newPlayer">New Player</button>
    <button @click="left">Left</button>
    <button @click="right">Right</button>
    <button @click="up">Up</button>
    <button @click="down">Down</button>

    <h2>Acceleration Data: </h2>
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
  </div>
</template>

<style lang="scss" scoped>
button {
  height: auto;
  width: auto;
  padding: 20px;
}
</style>
