<template>
  <div class="container">
             <div class="row">
                <div class="col-sm-12">
                   <div class="iq-card position-relative inner-page-bg bg-primary" style="height: 150px;">
                      <div class="inner-page-title">
                         <h3 class="text-white">{{dossier?.ref_Dossier}}</h3>
                         <p class="text-white">Dossier reference </p>
                      </div>
                   </div>
                </div>
                <div class="col-sm-12">
                   <div class="iq-card position-relative" style="height: 80px;">
                      <div class="inner-page-title">
                         <h4 class="card-title">Status</h4>
                      </div>
                   </div>
                   <div :class="['d-flex align-items-center clasStatus',getClassStatus(dossier?.status)]">
                    <a href="javascript:void();" :class="['w-100 iq-notify clasStatuslbl',getClassStatus(dossier?.status)]">{{dossier?.status.toUpperCase()}}</a>
                  </div>
                </div>
                <div class="col-sm-12 col-lg-6">
                   <div class="iq-card">
                      <div class="iq-card-header d-flex justify-content-between">
                         <div class="iq-header-title">
                            <h4 class="card-title">Spécialité</h4>
                         </div>
                      </div>
                      <div class="iq-card-body">
                         <p>{{dossier?.spcialite}}</p>
                      </div>
                   </div>
                   <div class="iq-card">
                      <div class="iq-card-header d-flex justify-content-between">
                         <div class="iq-header-title">
                            <h4 class="card-title"> Détaille de problème</h4>
                         </div>
                      </div>
                      <div class="iq-card-body">
                         <p>{{dossier?.more_Detail}}</p>
                      </div>
                   </div>
                </div>
                <div class="col-sm-12 col-lg-6">
                   <div class="iq-card">
                      <div class="iq-card-header d-flex justify-content-between">
                         <div class="iq-header-title">
                            <h4 class="card-title">Date de début du droblème :</h4>
                         </div>
                      </div>
                      <div class="iq-card-body">
                         <p>{{dossier?.iliness_start_date}}</p>
                      </div>
                   </div>
                   <div class="iq-card">
                      <div class="iq-card-header d-flex justify-content-between">
                         <div class="iq-header-title">
                            <h4 class="card-title"> Principaux symptomes </h4>
                         </div>
                      </div>
                      <div class="iq-card-body">
                         <p>{{dossier?.symptomes}}</p>
                      </div>
                   </div>
                </div>
                <div class="col-sm-12 col-lg-6" v-for="(document, index) in dossier?.documents" :key="index">
                   <div class="iq-card">
                       <div class="iq-card-header d-flex justify-content-between">
                         <div class="iq-header-title">
                            <h4 class="card-title">{{document.flag}}</h4>
                         </div>
                      </div>
                      <div class="iq-card-body">
                         <img src="@/assets/images/doc.jpg" class="document-img">
                      </div>
                   </div>
                </div>
             </div>
          </div>
</template>
<script>
// import AlertMessage from '@/components/alert/AlertMessage'
// import { getDossierByIdService } from '@/services/DossierService'
export default {
  name: 'ShowDossierView',
  components: {
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
    },
    getClassStatus (status) {
      switch (status) {
        case 'new':
          return 'class-status-new'
        case 'pending':
          return 'class-status-pending'
        case 'traited':
          return 'class-status-completed'
        case 'rdv':
          return 'class-status-rdv'
        case 'canceled':
          return 'class-status-canceled'
        case 'inprogress':
          return 'class-statusIn-progress'
      }
    }
  },
  data () {
    return {
      isShowAlert: false,
      messsaResp: '',
      typeResp: '',
      dossier: {}
    }
  },
  created () {
    this.dossier = JSON.parse(localStorage.showDossier)
  }
}
</script>
<style scoped>
.class-status-new{
  border-color: #B3E5FC;
  color: #23547B;
  background-color: #B3E5FC ;
}
.class-status-pending{
  border-color: #FFD8B2;
  color: #805B36;
  background-color: #FFD8B2 ;
}
.class-status-completed{
  border-color: #C8E6C9;
  color: #256029;
  background-color: #C8E6C9 ;
}
.class-status-rdv{
  border-color: #ECCFFF;
  color: #694382;
  background-color: #ECCFFF ;
}
.class-status-canceled{
  border-color: #FFCDD2;
  color: #C63737;
  background-color: #FFCDD2 ;
}
.class-statusIn-progress{
  border-color: #FEEDAF;
  color: #8A5340;
  background-color: #FEEDAF ;
}
.clasStatus{
  padding: 6px;
  border-radius: 50px;
  width: 120px;
  height: 35px;
  border-style: solid ;
  border-width: 1.2px;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 2%;
  margin-right: 2%;
}
.clasStatuslbl{
  font-size: 11px;
  width: 250px;
  font-weight: lighter;
}
.document-img{
 width: 98%;
 height: 80%;
 margin: 1%;
 border-radius: 10px;
}

</style>
