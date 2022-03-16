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

    useMeta({
      bodyAttrs: {
        style: `background-color: #080A29`
      }
    })
  })

</script>

<template>
  <div>
    <!-- <div class="background">
      <div class="line" />
    </div> -->
    <h1>The Faster One</h1>
    <div class="content">
      <Qrcode />
      <div class="players">
        <PlayerPreview :number="1" />
        <PlayerPreview :number="2" />
        <PlayerPreview :number="3" />
        <PlayerPreview :number="4" />
        <Button />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

div { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;

  h1 {
    font-style: italic;
    font-weight: 700;
    font-size: 120px;
    line-height: 144px;
    color: $color-white;
    text-transform: uppercase;
    text-shadow: 0px 4px 4px rgba($color-black, 0.5);
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .players {
    
  }
}
</style>
