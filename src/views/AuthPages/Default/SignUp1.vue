<template>
  <div>
    <h1 class="mb-0 row">Sign Up</h1>
    <form class="mt-4 row align-items-center" @submit.prevent="Register">
      <div class="form-group col-sm-6">
        <label for="first_name">First Name</label>
        <input type="text" class="form-control mb-0" id="first_name" required="required" placeholder="Your first name" v-model="firstname">
      </div>
      <div class="form-group col-sm-6">
        <label for="last_name">Last Name</label>
        <input type="text" class="form-control mb-0" id="last_name" required="required" placeholder="Your last name" v-model="lastname">
      </div>
      <!-- <div class="form-group col-sm-6">
        <label for="dob">Date Of Birth:</label>
        <input type="date"  class="form-control" id="dob" required="required" v-model="datenaissance">
      </div>
      <div class="form-group col-sm-6">
        <label for="phone">Phone:</label>
        <input type="text" class="form-control" id="phone" required="required" v-model="phone">
      </div> -->
      <div class="form-group col-sm-6">
        <label for="EmailSU">Email address</label>
        <input type="email" class="form-control mb-0" id="EmailSU" placeholder="Enter email" v-model="email" required="required">
      </div>
      <div class="form-group col-sm-6">
        <label for="PasswordUP">Password</label>
        <input type="password" class="form-control mb-0" id="PasswordUP" placeholder="Password" v-model="password" required="required">
      </div>
      <!-- <div class="form-group col-sm-6">
        <label>Pays:</label>
        <select class="form-control" id="exampleFormControlSelect3"  @change="changePays($event)" required="required">
          <option v-for="(pay, key) in payslist" :key="key" :value="pay.value">{{pay.text}}</option>
          <option selected="">{{pays}}</option>
        </select>
      </div>
      <div class="form-group col-sm-6">
        <label>Ville:</label>
        <select class="form-control" id="exampleFormControlSelect4" @change="changeVille($event)" required="required">
          <option v-for="(villeId, key) in villeslist" :key="key" :value="villeId.value">{{villeId.text}}</option>
          <option selected="">{{ville}}</option>
        </select>
      </div>
      <div class="form-group col-sm-12">
        <label>Address:</label>
        <textarea class="form-control" name="address" rows="5" style="line-height: 22px;" v-model="adresse"></textarea>
      </div> -->
      <div class="d-inline-block w-100">
        <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
          <input type="checkbox" class="custom-control-input" id="customCheck1" v-model="isCheckedTerms">
          <label class="custom-control-label" for="customCheck1">I accept <a href="#">Terms and Conditions</a></label>
        </div>
        <!-- <button type="submit" class="btn btn-primary float-right" @click="$router.push({name: 'social.list'})">Sign Up</button> -->
        <button v-if="isCheckedTerms" type="submit" class="btn btn-primary float-right" >Sign Up</button>
      </div>
      <div class="sign-info">
        <!-- <span class="dark-color d-inline-block line-height-2">Already Have Account ? <router-link to="/auth/signIn">Log In</router-link></span> -->
        <!-- <ul class="iq-social-media">
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
  name: 'SignUp',
  data: () => ({
    isCheckedTerms: false,
    firstname: '',
    lastname: '',
    datenaissance: '',
    email: '',
    password: '',
    phone: '',
    pays: '',
    ville: '',
    adresse: '',
    payslist: [
      { value: 'Canada', text: 'Canada' },
      { value: 'Niada', text: 'Niada' },
      { value: 'USA', text: 'USA' },
      { value: 'India', text: 'India' },
      { value: 'Africa', text: 'Africa' }
    ],
    villeslist: [
      { value: 'California', text: 'California' },
      { value: 'Florida', text: 'Florida' },
      { value: 'Georgia', text: 'Georgia' },
      { value: 'Connecticut', text: 'Connecticut' },
      { value: 'Louisiana', text: 'Louisiana' }
    ]
  }),
  methods: {
    changeVille (event) {
      this.ville = event.target.value
    },
    changePays (event) {
      this.pays = event.target.value
    },
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
    Register: function () {
      // this.showLoader()
      // registerService(this.firstname, this.email, this.password).then(async (res) => {
      //   await this.$emit('close')
      //   if (res.status === true) {
      //     this.$router.push('/listfiles')
      //     this.$emit('close')
      //     this.onCancelLoader()
      //   } else {
      //     this.onCancelLoader()
      //     this.$emit('showAlertResp', res.message, 'danger')
      //   }
      // })
    }
  }
}
</script>
