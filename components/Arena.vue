<script setup>
   import { io } from "socket.io-client";
   let socket = io.connect('https://thefasterone.herokuapp.com/');

  socket.on('playerMove', (accelerationData) => {
    
  })

  socket.on('moveUp', (acceleration) => {
    playerPosition[0].y -= acceleration;
  });

  socket.on('moveDown', (acceleration) => {
    playerPosition[0].y += acceleration;
  });

  socket.on('moveLeft', (acceleration) => {
    playerPosition[0].x -= acceleration;
  });

  socket.on('moveRight', (acceleration) => {
    playerPosition[0].x += acceleration;
  });

  socket.on('addPlayer', (playerData) => {
    playerPosition.push(playerData);
  })

  const pointPosition = reactive([
    {id: 1, x: 100, y: 200}
  ]) 
  const playerPosition = reactive([
    {id: 1, x: 300, y: 300, score: 0},
    {id: 2, x: 400, y: 300, score: 0}
  ]) 
  watchEffect(() => {
    collectTest(pointPosition[0], playerPosition[0])
  })
  
  function collectTest(point, player) {
    let dx = (point.x + 40) - (player.x + 25)
    let dy = (point.y + 40) - (player.y + 25)
    let distance = Math.sqrt(dx * dx + dy * dy)
    // distance < (pointradius + playerradius) => collect
    if (distance < 65) {
      player.score += 1
      point.x = Math.floor(Math.random() * 500)
      point.y = Math.floor(Math.random() * 500)
    }
  }

</script>
<template>
  <div>
    <Point :x="pointPosition[0].x" :y="pointPosition[0].y"/>
    <Player 
      v-for="player in playerPosition"
      :key="player.id"
      :x="player.x"
      :y="player.y"
      :score="player.score"
    ></Player>
  </div>
</template>
<style lang="scss" scoped>
div{
  height: 100%;
  width: 100%;
}
</style>