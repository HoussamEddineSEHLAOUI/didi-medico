<template src="@/components/lottie/Lottie.html"></template>
<script>
import lottie from 'lottie-web'
export default {
  name: 'LottiE',
  props: {
    option: {
      type: Object,
      required: true
    },
    className: {
      type: String,
      default: 'bodymovin'
    }
  },
  mounted () {
    lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: this.option
    })
  }
}
</script>
