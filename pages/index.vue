<script setup lang="ts">
import { io } from "socket.io-client";
import { onMounted } from 'vue';

  onMounted(() => {
    const socket = io();
  
    socket.on("connect", () => {
      console.log('connected');
      console.log(socket.connected);
    });
  
    socket.on("disconnect", () => {
      console.log('disconnected');
      console.log(socket.connected);
    });
  })
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <NuxtLink to="/display/reactionGame" class="start">Start</NuxtLink>

  </div>
</template>

<style lang="scss" scoped>
.start {
  color: $color-white;
  font-size: 1rem;
  background-color: $color-black;
  padding: 1rem, 2rem;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}
</style>
