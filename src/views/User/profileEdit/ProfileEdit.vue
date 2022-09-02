<template src="@/views/User/profileEdit/ProfileEdit.html"></template>
<style scoped src="@/views/User/profileEdit/ProfileEdit.css"></style>
<script>
import moment from 'moment'
import AlertMessage from '@/components/alert/AlertMessage'
import country from '@/assets/Api/CountryApi'
const $ = require('jquery')
export default {
  name: 'ProfileEdit',
  components: {
    AlertMessage
  },
  mounted () {
    this.initialiseValue()
  },
  data () {
    return {
      first_name: '',
      last_name: '',
      date_naissance: '',
      email: '',
      password: '123456',
      phone: '',
      address: '',
      image: null,
      imageprofile: null,
      pays: '',
      ville: '',
      adresse: '',
      currentPassword: '',
      payslist: country,
      villeslist: [
        { value: 'California', text: 'California' },
        { value: 'Florida', text: 'Florida' },
        { value: 'Georgia', text: 'Georgia' },
        { value: 'Connecticut', text: 'Connecticut' },
        { value: 'Louisiana', text: 'Louisiana' }
      ],
      active_el: 0,
      isShowAlert: false,
      messsaResp: '',
      typeResp: ''
    }
  },
  methods: {
    showLoader () {
      this.loader = this.$loading.show({
        container: null,
        canCancel: false,
        onCancel: this.onCancel
      })
    },
    onCancelLoader () {
      this.loader.hide()
    },
    showAlertResp (messsaResp, typeResp) {
      this.isShowAlert = true
      this.messsaResp = messsaResp
      this.typeResp = typeResp
      setTimeout(() => {
        this.isShowAlert = false
      }, 2022)
    },
    showPassword: function () {
      var passInput = $('#password')
      if (passInput.attr('type') === 'password') {
        passInput.attr('type', 'text')
      } else {
        passInput.attr('type', 'password')
      }
    },
    previewImage: function (event) {
      const input = event.target
      if (input.files && input.files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.image = e.target.result
          this.imageprofile = input.files[0]
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    changePassword: function () {
    },
    getDateDeNaissance: function (value, format) {
      if (value) {
        return moment(String(value)).format(format || 'YYYY-MM-DD')
      }
    },
    changeVille (event) {
      this.ville = event.target.value
    },
    changePays (event) {
      this.pays = event.target.value
    }
  }
}
</script>
