<script setup>
import { io } from "socket.io-client";
let socket = io.connect("https://thefasterone.herokuapp.com/");

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
    point.x = 50 + Math.floor(Math.random() * (window.width-50));
    point.y = 50 + Math.floor(Math.random() * (window.width-50));
  }
}

socket.on("move", (movementData) => {
  players.value.forEach((player) => {
    if (player.playerID === movementData.playerID) {
      if (
        !(
          (player.x <= 0 && movementData.accelerationX > 0) ||
          (player.x >= window.width - 50 && movementData.accelerationX < 50)
        )
      ) {
        player.x -= movementData.accelerationX;
      }
      if (
        !(
          (player.y <= 0 && movementData.accelerationY < 0) ||
          (player.y >= window.height - 50 && movementData.accelerationY > 50)
        )
      ) {
        player.y += movementData.accelerationY;
      }
    }
  });
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
      :key="player.playerID"
      :x="player.x"
      :y="player.y"
      :score="player.score"
      :color="colors[player.playerID - 1]"
    ></Player>
  </div>
</template>
<style lang="scss" scoped>
div {
  height: 100%;
  width: 100%;
}
</style>