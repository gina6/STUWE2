<script>
// import { useQRCode } from '@vueuse/integrations/useQRCode'

// export default {
//   setup() {
//     const qrcode = useQRCode('https://thefasterone.herokuapp.com/controller/reactionController');
//     return qrcode;
//   }
// }

</script>
<template>
  <div class="container">
    <p>Scan <br> to join</p>
    <div class="qrcode"></div>
    <!-- <img :src="qrcode" alt="QR Code"> -->
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: auto;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem;

  background: rgba(24, 26, 58, 0.8);
  box-shadow: 0px 4px 4px rgba($rgb-white, 0.25);
  border-radius: 20px;
  p {
    @include termina;
    font-weight: 700;
    font-size: 50px;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
    color: $color-white;
  }
  .qrcode {
    display: inline-block;
    background-image: $icon-qrcode;
    background-repeat: no-repeat;
    background-position: center;
    width: 380px;
    height: 380px;
    background-size: 380px 380px;
  }
}
</style>