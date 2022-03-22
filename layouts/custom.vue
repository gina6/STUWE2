<script setup lang="ts">
  useMeta({
    htmlAttrs: {
      style: [
        `height: 100%;`,
      ]
    },
    bodyAttrs: {
      style: [
        `background: #080A29 url(/thefasterone_background_texture.svg) no-repeat top; background-size: cover; min-height: 100%; overflow: hidden;`
      ]
    }
  })
</script>

<template>
  <div>
    <slot />
  </div>
</template>