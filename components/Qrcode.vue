<script setup>
  // import { useQRCode } from '@vueuse/integrations/useQRCode'
  // const host = window.location.protocol + "//" + window.location.host + "/controller/reactionController";
  // console.log(host);
  // const text = ref('http://10.155.116.40:3000/controller/reactionController')
  // const qrcode = useQRCode(text, {
  //   errorCorrectionLevel: 'H',
  //   margin: 3,
  // })
</script>
<template>
  <div>
    <p>Scan <br> to join</p>
    <!-- <img v-if="text" :src="qrcode" alt="QR Code"> -->
  </div>
</template>
<style lang="scss" scoped>
div {
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 3rem;

  background: rgba($rgb-grey, 0.2);
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
}
</style>