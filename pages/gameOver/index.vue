<script setup>
const players = usePlayers();
const score = ref(players.value[0].score);

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div class="wrapper">
    <h1>Time's up!</h1>
    <div class="content">
      <h2>Score</h2>
      <div class="line"></div>
      <div class="score">{{ score }}</div>
      <Button :route="'/arena'" :active="true">Play again</Button>
      <NuxtLink to="/"> Back to Lobby </NuxtLink>
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
  .wrapper {
    width: 1440px;
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
      background-color: $color-purple;
      position: absolute;
      top: 70%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 1340px;
      z-index: -1;
      content: "";
      border: 40px solid rgba($rgb-white, 0.16);
      box-shadow: 0px 0px 63.9186px $color-purple,
        inset 0px 0px 31.9593px $color-purple;
      filter: blur(25px);
    }
  }

  h2 {
    font-family: "Termina";
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 77px;

    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 5rem;
    width: 100%;
    height: 600px;
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
    font-size: 144px;

    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  a {
    font-family: "Termina";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 43px;

    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding-top: 5rem;
  }
}
</style>