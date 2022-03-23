<script setup>
const timerInMs = reactive({time: 30000, timer: null});

onMounted(() => {
  setTimeout(() => {
    startTimer();
  }, 3000);
});
function startTimer() {
  timerInMs.timer = setInterval(() => {
    timerInMs.time -= 1000;
  }, 1000);
}
</script>

<template>
  <div>
    {{ timerInMs.time }}
  </div>
</template>
