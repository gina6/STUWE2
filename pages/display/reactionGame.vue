<template>
  <div>
    <h1>Reaction Game</h1>
    <p v-show="message">Phone says Hi!</p>
    <button @click="click()">Send</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.socket = this.$nuxtSocket({
      withCredentials: true,
    });
    /* Listen for events: */
    this.socket.on("click", () => {
      console.log('click recieved')
      this.message = true;
    });
  },

  data: function () {
    return {
      message: false,
    };
  },

  methods: {
    click() {
      console.log('click emit')
      this.socket.emit("click");
    },
  },
};
</script>
