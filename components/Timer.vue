<script setup>
const timer = reactive({ timeInMs: 30000, interval: null });

onMounted(() => {
  setTimeout(() => {
    startTimer();
  }, 3000);
});
function startTimer() {
  timer.interval = setInterval(() => {
    timer.timeInMs -= 1000;
  }, 1000);
}
</script>

<template>
  <div class="timer">
    {{ timer.timeInMs / 1000 }}
  </div>
</template>
<style lang="scss" scoped>
.timer {
  font-family: "Termina";
  font-style: normal;
  font-weight: 500;
  font-size: 48px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba($rgb-black, 0.25);
}
</style>