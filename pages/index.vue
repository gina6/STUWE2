<script setup lang="ts">

  const players = usePlayers()
  const colors = useColors()
  const playerCnt = computed(() => players.value.length)

  definePageMeta({
    layout: "custom",
  });

</script>

<template>
  <div class="wrapper">
    <h1>The Faster One</h1>
    <div class="content">
      <Qrcode />
      <div class="content-right">
        <div class="players">
          <PlayerPreview :number="1" :color="colors[0]" :active="playerCnt > 0" />
          <PlayerPreview :number="2" :color="colors[1]" :active="playerCnt > 1" />
          <PlayerPreview :number="3" :color="colors[2]" :active="playerCnt > 2" />
          <PlayerPreview :number="4" :color="colors[3]" :active="playerCnt > 3" />
        </div>
        <Button :route="'/arena'" :active="true">Play</Button>
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
      content: '';
      border: 40px solid rgba($rgb-white, 0.16);
      box-shadow: 0px 0px 63.9186px $color-purple, inset 0px 0px 31.9593px $color-purple;
      filter: blur(25px);
    }
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5rem;
    width: 100%;
    height: 600px;

    .content-right {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .players {
        width: 412px;
        height: 412px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
      }
    }
  }
}
</style>
