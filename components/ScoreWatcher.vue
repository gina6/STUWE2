<script setup>
  const players = defineProps(["players"]);
  
  const route = useRouter();

watchEffect(() => {
  players.players.forEach((player) => {
    if (player.score === 10) {
      route.push("/gameOver");
    }
  });
});
</script>
<template>
  <div></div>
</template>