<template src="@/views/homepage/Homepage.html"></template>
<style scoped src="@/views/homepage/Homepage.css"></style>
<script>
// import { isLoggedIn } from '@/services/LoginService'
// import ModalSignIn from '@/components/modal/ModalSignIn/ModalSignIn'
// import ModalSignUp from '@/components/modal/ModalSignUp/ModalSignUp'
// import WizardNewPatient from '@/components/wizardNewPatient/WizardNewPatient'
import Lottie from '@/components/lottie/Lottie'
import FooterHomePage from '@/components/footer/FooterHomePage/FooterHomePage.vue'
// import AlertMessage from '@/components/alert/AlertMessage.vue'
const $ = require('jquery')
export default {
  name: 'HomeView',
  components: {
    FooterHomePage,
    Lottie
  },
  mounted () {
    $(document).on('scroll', function () {
      var pageTop = $(document).scrollTop()
      var pageBottom = pageTop + $(window).height()
      var tags = $('.tag')
      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]
        if ($(tag).position().top < pageBottom) {
          $(tag).addClass('visible')
        } else {
          $(tag).removeClass('visible')
        }
      }
    })
  },
  data () {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    SignIn: function () {
      this.$router.push('/auth/signIn')
    },
    SignUp: function () {
      this.$router.push('/auth/signUp')
    },
    NewFile: function () {
      this.$router.push('/newFile')
    }
  }
}
</script>
