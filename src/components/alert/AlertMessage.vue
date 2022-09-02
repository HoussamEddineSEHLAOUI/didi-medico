<template src="@/components/alert/AlertMessage.html"></template>
<style scoped src="@/components/alert/AlertMessage.css"></style>
<script>
const $ = require('jquery')
export default {
  name: 'AlertMessage',
  props: ['messsaResp', 'typeResp'],
  data () {
    return {
      disabled: true,
      message: ''
    }
  },
  methods: {
    warnDisabled () {
      this.disabled = true
      setTimeout(() => {
        this.disabled = false
      }, 2022)
    },
    closeModal: function () {
      $('#alret').modal('hide')
    }
  }
}
</script>
