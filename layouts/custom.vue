<script setup lang="ts">
  useMeta({
    bodyAttrs: {
      class: 'body',
      style: [
        `background: #080A29 url(/thefasterone_background_texture.svg) no-repeat top; background-size: cover;`
      ]
    }
  })
</script>

<template>
  <div>
    <slot />
  </div>
</template>