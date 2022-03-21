<script setup>
  import { io } from "socket.io-client";
  let socket = io.connect('https://thefasterone.herokuapp.com/');

  socket.on('playerMove', (accelerationData) => {
    playerPosition[0].x -= accelerationData.x;
    playerPosition[0].y += accelerationData.y;
  })

  const pointPosition = reactive([
    {id: 1, x: 100, y: 200, color: `#00c2d7`}
  ]) 
  const playerPosition = reactive([
    {id: 1, x: 300, y: 300, score: 0, color: `#00C2D7`},
    {id: 2, x: 500, y: 300, score: 0, color: `#FF2281`},
    {id: 3, x: 700, y: 300, score: 0, color: `#FF5F1F`},
    {id: 4, x: 900, y: 300, score: 0, color: `#65ED4B`},
  ]) 
  watchEffect(() => {
    collectTest(pointPosition[0], playerPosition[0])
  })
  
  function collectTest(point, player) {
    let dx = (point.x + 50) - (player.x + 50)
    let dy = (point.y + 50) - (player.y + 50)
    let distance = Math.sqrt(dx * dx + dy * dy)
    // distance < (pointradius + playerradius) => collect
    if (distance < 100) {
      player.score += 1
      point.x = Math.floor(Math.random() * 500)
      point.y = Math.floor(Math.random() * 500)
    }
  }

  definePageMeta({
    layout: "custom",
  });

</script>
<template>
  <div>
    <Scoreboard :players="playerPosition" />
    <Point :x="pointPosition[0].x" :y="pointPosition[0].y" :color="pointPosition[0].color"/>
    <Player 
      v-for="player in playerPosition"
      :key="player.id"
      :x="player.x"
      :y="player.y"
      :score="player.score"
      :color="player.color"
    ></Player>
  </div>
</template>
<style lang="scss" scoped>
div{
  height: 100%;
  width: 100%;
}
</style>