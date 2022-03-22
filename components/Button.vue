<script setup>
  const button = defineProps(['route', 'active'])
</script>

<template>
  <div>
    <NuxtLink :to="button.route" class="button" :class="{ active: button.active }">
      <slot />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.button {
  width: auto;
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba($rgb-white, 0.25) 0%, rgba($rgb-white, 0.125) 36.25%, rgba($rgb-white, 0.125) 66.98%, rgba($rgb-white, 0.25) 100%);
  @include termina;
  font-weight: 700;
  font-size: 64px;
  color: rgba($rgb-white, 0.14);
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba($rgb-black, 0.25);
  &.active {
    color: $color-white;
    box-shadow: 0px 0px 32px  $rgb-purple, 
      inset 0px 0px 16px $rgb-purple, 
      inset 0px 0px 32px  $rgb-purple;
    background: linear-gradient(180deg, rgba($rgb-white, 0.5) 0%, rgba($rgb-white, 0.1) 100%);
    background-color: rgba($rgb-purple, 1);
  }
}
</style>