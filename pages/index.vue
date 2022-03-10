<template>
  <h1>Home Page</h1>
</template>

<script>
export default {
  mounted() {
    this.socket = this.$nuxtSocket({
      channel: '/index',
      withCredentials: true
    })
  },
}
</script>