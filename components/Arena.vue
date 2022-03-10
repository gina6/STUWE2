<script setup>
  const pointPosition = reactive([
    {id: 1, x: 100, y: 200}
  ]) 
  const playerPosition = reactive([
    {id: 1, x: 300, y: 300, score: 0},
    {id: 2, x: 400, y: 300, score: 0}
  ]) 
  console.log(playerPosition[0].x);
  // watchEffect(() => {
  //   playerPosition.forEach(player =>
  //     let dx = pointPosition.x - player.x; 
  //     let dy = pointPosition.y - player.y;
  //     let distance = Math.sqrt(dx * dx + dy * dy);
  //     // distance < (pointradius + playerradius) => collision
  //     if (distance < 65) {
  //       score += 1
  //     }
  //   )
  // })
</script>
<template>
  <div>
    <button @click="playerPosition.push({id: Math.floor(Math.random() * 100), x: Math.floor(Math.random() * 500), y: Math.floor(Math.random() * 500), score: 0})" >New Player</button>
    <button @click="playerPosition[0].x -= 10" >Left</button>
    <button @click="playerPosition[0].x += 10" >Right</button>
    <button @click="playerPosition[0].y -= 10" >Up</button>
    <button @click="playerPosition[0].y += 10" >Down</button>
    <Point :x="100" :y="200"/>
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