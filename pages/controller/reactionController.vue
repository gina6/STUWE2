<script>
import { io } from "socket.io-client";
const socket = io();
const steps = 25;

export default {
  methods: {
    up() {
      socket.emit("up", steps);
    },
    down() {
      socket.emit("down", steps);
    },
    left() {
      socket.emit("left", steps);
    },
    right() {
      socket.emit("right", steps);
    },
    newPlayer() {
      socket.emit("newPlayer", {
          id: Math.floor(Math.random() * 100),
          x: Math.floor(Math.random() * 500),
          y: Math.floor(Math.random() * 500),
          score: 0
      });
    }
  },
};
</script>

<template>
  <div>
    <h1>Controller</h1>
    <button @click="newPlayer">
      New Player
    </button>
    <button @click="left">Left</button>
    <button @click="right">Right</button>
    <button @click="up">Up</button>
    <button @click="down">Down</button>
  </div>
</template>

<style lang="scss" scoped>
  button {
    height: auto;
    width: auto;
    padding: 20px;

  }
</style>
