<script setup>
const players = usePlayers();
const colors = useColors();
const colorProp = defineProps(["color"]);
const singleplayer = computed(() => players.value.length == 1);
const winnerIndex = computed(() =>
  players.value.findIndex((player) => {
    return player.score == 10;
  })
);

watchEffect(() => {
  colorProp.color = colors[winnerIndex];
});

function resetGame(players) {
  players.forEach((player) => {
    player.score = 0;
    player.x = 300;
    player.y = 300;
  });
}

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div class="wrapper">
    <div v-if="singleplayer == true" class="singleplayer">
      <h1>Time's up!</h1>
      <div class="content">
        <h2>Your Score</h2>
        <div class="line"></div>
        <Score :score="players[0].score" :color="players[0].color" />
      </div>
    </div>
    <div v-else class="multiplayer">
      <h1 :color="colors[winnerIndex]">
        Player {{ players[winnerIndex].playerID }} wins!
      </h1>
      <div class="scores">
        <div v-for="player in players" :key="player.playerID" class="content">
          <h2>Player {{ player.playerID }}</h2>
          <div class="line"></div>
          <Score :score="player.score" :color="player.color" />
        </div>
      </div>
    </div>
    <Button :route="'/'" @click="resetGame(players)" :active="true"
      >Back to Lobby</Button
    >
    <!-- <NuxtLink to="/" > Back to Lobby </NuxtLink> -->
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
  .wrapper {
    // width: 1440px;
    margin: 5rem auto 0 auto;
  }

  h1 {
    position: relative;
    font-style: italic;
    font-weight: 700;
    font-size: 120px;
    line-height: 144px;
    color: $color-white;
    text-transform: uppercase;
    text-shadow: 0px 4px 4px rgba($color-black, 0.5);

    &::after {
      background-color: v-bind("colorProp.color");
      position: absolute;
      top: 70%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 1340px;
      z-index: -1;
      content: "";
      border: 40px solid rgba($rgb-white, 0.16);
      box-shadow: 0px 0px 63.9186px v-bind("colorProp.color"),
        inset 0px 0px 31.9593px v-bind("colorProp.color");
      filter: blur(25px);
    }
  }

  h2 {
    font-family: "Termina";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 77px;
    text-transform: uppercase;

    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .multiplayer {
    .scores {
      display: flex;
      flex-direction: row;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    margin: 3rem;
    height: 400px;
  }

  .line {
    width: 170px;
    height: 0px;
    border: 2px solid #ffffff;
  }

  .score {
    font-family: "Termina";
    font-style: normal;
    font-weight: 800;
    font-size: 36px;

    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  a {
    font-family: "Termina";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 43px;

    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding-top: 3rem;
  }
}
</style>