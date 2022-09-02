<template>
  <div class="container">
    <div class=" row">
      <div class="col-sm-12">
        <div class="iq-card position-relative inner-page-bg bg-primary" style="height: 100px;">
          <div class="inner-page-title">
          </div>
        </div>
      </div>
      <div clas="col-sm-12">
        <div class="tab-pane fade active show ml-4" id="basicinfo" role="tabpanel">
          <img src="@/assets/images/profile.png" class="img-profil">
          <h4>Mes Information</h4>
          <hr>
          <div class="row">
            <div class="col-3">
              <h6>First name :</h6>
            </div>
            <div class="col-9">
              <p class="mb-0">{{firstName}}</p>
            </div>
            <div class="col-3">
              <h6>Last name :</h6>
            </div>
            <div class="col-9">
              <p class="mb-0">{{lastName}}</p>
            </div>
            <div class="col-3">
              <h6>dateNaissance</h6>
            </div>
            <div class="col-9">
              <p class="mb-0">{{dateNaissance}}</p>
            </div>
            <div class="col-3">
              <h6>Email</h6>
            </div>
            <div class="col-9">
              <p class="mb-0">{{email}}</p>
            </div>
            <div class="col-3">
              <h6>Mobile</h6>
            </div>
            <div class="col-9">
              <p class="mb-0">{{phone}}</p>
            </div>
            <div class="col-3">
              <h6>Pays</h6>
            </div>
            <div class="col-9">
              <p class="mb-0">{{pays}}</p>
            </div>
            <div class="col-3">
              <h6>Ville</h6>
            </div>
            <div class="col-9">
              <p class="mb-0">{{ville}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfilE',
  mounted () {
  },
  data () {
    return {
      lastName: '',
      firstName: '',
      dateNaissance: '',
      email: '',
      pays: '',
      ville: '',
      phone: ''
    }
  }
}
</script>
<style>
.img-profil{
  width: 120px;
  height: 120px;
  border-radius: 50%;
  top: 0;
  right: 0;
  margin-right: 50px;
}
</style>
