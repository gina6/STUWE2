<script setup>
import { io } from "socket.io-client";
let socket = io.connect("http://10.155.98.145:3000/");

const window = reactive(useWindowSize());

const pointPosition = reactive([{ id: 1, x: 100, y: 200, color: `#00c2d7` }]);
const players = usePlayers();
const colors = useColors();

watchEffect(() => {
  players.value.forEach((player) => collectTest(pointPosition[0], player));
});

function collectTest(point, player) {
  let dx = point.x + 50 - (player.x + 50);
  let dy = point.y + 50 - (player.y + 50);
  let distance = Math.sqrt(dx * dx + dy * dy);
  // distance < (pointradius + playerradius) => collect
  if (distance < 100) {
    player.score += 1;
    point.x = Math.floor(Math.random() * window.width);
    point.y = Math.floor(Math.random() * window.height);
  }
}

socket.on("move", (accelerationData) => {
  if (
    !(
      (players.value[0].x <= 0 && accelerationData.accelerationX < 0) ||
      (players.value[0].x >= window.width - 100 &&
        accelerationData.accelerationX > 0)
    )
  ) {
    players.value[0].x -= accelerationData.accelerationX;
  }
  if (
    !(
      (players.value[0].y <= 0 && accelerationData.accelerationY < 0) ||
      (players.value[0].y >= window.height - 100 &&
        accelerationData.accelerationY > 0)
    )
  ) {
    players.value[0].y += accelerationData.accelerationY;
  }
});

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div>
    <Scoreboard :players="players" />
    <Point
      :x="pointPosition[0].x"
      :y="pointPosition[0].y"
      :color="pointPosition[0].color"
    />
    <Player
      v-for="player in players"
      :key="player.id"
      :x="player.x"
      :y="player.y"
      :score="player.score"
      :color="colors[player.id - 1]"
    ></Player>
  </div>
</template>
<style lang="scss" scoped>
div {
  height: 100%;
  width: 100%;
}
</style>