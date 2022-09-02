<template>
  <div>
    <h1 class="mb-0">Sign in</h1>
    <p>Enter your email address and password to access admin panel.</p>
    <form class="mt-4" @submit.prevent="login">
      <div class="form-group">
        <label for="Email1SI">Email address</label>
        <input type="email" class="form-control mb-0" id="Email1SI" placeholder="Enter email" v-model="email">
      </div>
      <div class="form-group">
        <label for="PasswordSU">Password</label>
        <!-- <router-link to="/auth/password-reset" class="float-righ0t">Forgot password?</router-link> -->
        <input type="password" class="form-control mb-0" id="PasswordSU" placeholder="Password" v-model="password">
      </div>
      <div class="d-inline-block w-100">
        <!-- <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
          <input type="checkbox" class="custom-control-input" id="customCheck2">
          <label class="custom-control-label" for="customCheck1">Remember Me</label>
        </div> -->
        <!-- <button type="submit" class="btn btn-primary float-right" @click="$router.push({name: 'social.list'})">Sign in</button> -->
        <button type="submit" class="btn btn-primary float-right" >Sign in</button>
      </div>
      <div class="sign-info">
        <!-- <span class="dark-color d-inline-block line-height-2">Don't have an account? <router-link to="/auth/signUp">Sign up</router-link></span>
        <ul class="iq-social-media">
          <li><a href="#"><i class="ri-facebook-box-line"></i></a></li>
          <li><a href="#"><i class="ri-twitter-line"></i></a></li>
          <li><a href="#"><i class="ri-instagram-line"></i></a></li>
        </ul> -->
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'SignIn1',
  data: () => ({
    email: '',
    password: '',
    loader: null
  }),
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
    login () {
      // this.showLoader()
      // loginService(this.email, this.password).then(async (res) => {
      //   await this.$emit('close')
      //   if (res === true) {
      //     await this.$router.push('/newFile')
      //     this.onCancelLoader()
      //   } else {
      //     this.onCancelLoader()
      //     this.$emit('showAlertResp', res, 'danger')
      //   }
      // })
    }
  }
}
</script>
