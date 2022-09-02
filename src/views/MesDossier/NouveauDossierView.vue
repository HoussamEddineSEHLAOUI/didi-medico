<template>
<div class="row" >
                  <div class="col-sm-12">
                     <div class="iq-card position-relative inner-page-bg bg-primary" style="height: 100px;">
                        <div class="inner-page-title">
                           <h3 class="text-white">Nouveau Dossier</h3>
                           <p class="text-white"></p>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-12 col-lg-12">
                     <div class="iq-card">
                        <!-- <div class="iq-card-header d-flex justify-content-between">
                           <div class="iq-header-title">
                              <h4 class="card-title"></h4>
                           </div>
                        </div> -->
                        <div class="iq-card-body">
                           <div class="stepwizard ">
                              <div class="stepwizard-row setup-panel">
                                 <div id="user" :class="[ 'wizard-step wizardBtn' , {  active : active_el == 0  }]">
                                    <a class="btn btndefault newbtn">
                                    <i class="ri-lock-unlock-line text-primary"></i>
                                    <span>Informations Patient</span>
                                    </a>
                                 </div>
                                 <div id="document" :class="[ 'wizard-step wizardBtn' , {  active : active_el == 1  }]" >
                                    <a class="btn btndefault" >
                                    <i class="ri-user-fill text-danger"></i>
                                    <span>Problème medical</span>
                                    </a>
                                 </div>
                                 <div id="bank" :class="[ 'wizard-step wizardBtn' , {  active : active_el == 2  }]">
                                    <a class="btn btndefault">
                                    <i class="ri-camera-fill text-success"></i>
                                    <span>Documents</span>
                                    </a>
                                 </div>
                                 <div id="confirm" :class="[ 'wizard-step wizardBtn' , {  active : active_el == 3  }]">
                                    <a class="btn btndefault">
                                    <i class="ri-check-fill text-warning"></i>
                                    <span>Confirm</span>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div class="form">
                              <form v-if="active_el==0" class="row setup-content"  id="user-detail" @submit="activate(1)">
                                 <div class="col-sm-12 mt-0">
                                    <div class="col-md-12 p-0">
                                       <h3 class="mb-4">Informations Patient:</h3>
                                       <div class="row">
                                          <div class="form-group col-md-6">
                                             <label class="control-label">Nom</label>
                                             <input  maxlength="100" type="text" required="required" class="form-control" :placeholder="lastName"  v-model="lastName" />
                                          </div>
                                          <div class="form-group col-md-6">
                                             <label class="control-label">Prénom</label>
                                             <input maxlength="100" type="text" required="required" class="form-control" :placeholder="firstName" v-model="dateNaissance" />
                                          </div>
                                          <div class="col-md-6 form-group">
                                             <label for="cDB" class="control-label">Date de naissance: </label>
                                             <input type="date" class="form-control" id="cDB" name="dateNaissance" v-model="dateNaissance" >
                                          </div>
                                          <div class="col-md-6 form-group">
                                             <label for="emailid" class="control-label">Email Id: *</label>
                                             <input type="email" id="emailid" class="form-control" required="required" name="emailid" :placeholder="email" v-model="email">
                                          </div>
                                          <div class="form-group col-sm-6">
                                             <label>Pays:</label>
                                             <select class="form-control" id="exampleFormControlSelect3"  @change="changePays($event)">
                                                <option v-for="(pay, key) in payslist" :key="key" :value="pay.name">{{pay.name}}</option>
                                                <option selected="">{{pays}}</option>
                                             </select>
                                          </div>
                                          <div class="form-group col-sm-6">
                                             <label>Ville:</label>
                                             <select class="form-control" id="exampleFormControlSelect4" @change="changeVille($event)">
                                                <option v-for="(villeId, key) in villeslist" :key="key" :value="villeId.value">{{villeId.text}}</option>
                                                <option selected="">{{ville}}</option>
                                             </select>
                                          </div>
                                          <div class="col-md-6 form-group">
                                             <label for="ctele" class="control-label">Tél: *</label>
                                             <input type="text" class="form-control" required="required" id="ctele" name="cno" :placeholder="phone" v-model="phone">
                                          </div>
                                          <div class="form-group col-sm-6">
                                             <label>Sexe:</label>
                                             <select class="form-control" id="exampleFormControlSelect5" @change="changeSexe($event)">
                                                <option key="0" value="H">Homme</option>
                                                <option key="1" value="F">Famme</option>
                                             </select>
                                          </div>
                                          <!-- <div class="col-md-12 mb-3 form-group">
                                             <label for="address" class="control-label">Address: *</label>
                                             <textarea name="address" class="form-control" id="address" rows="5" style="max-height: 80px;" ></textarea>
                                          </div> -->
                                       </div>
                                       <button class="btn btn-primary nextBtn btn-lg pull-right" type="submit" >Next</button>
                                    </div>
                                 </div>
                              </form>
                              <form v-if="active_el==1" class="row setup-content" id="document-detail" @submit="activate(2)">
                                 <div class="col-sm-12">
                                    <div class="col-md-12 p-0">
                                       <h3 class="mb-4">Problème Médical:</h3>
                                       <div class="row">
                                          <div class="col-md-12 mb-3 form-group">
                                             <label for="moredetail" class="control-label">Détailler votre problème: *</label>
                                             <textarea name="moredetail" class="form-control" id="moredetail" rows="5" required="required" v-model="moredetail"></textarea>
                                          </div>
                                          <div class="col-md-12 mb-3 form-group">
                                             <label for="symptomes" class="control-label">Principaux symptomes: *</label>
                                             <textarea name="symptomes" class="form-control" id="symptomes" rows="5" required="required" v-model="symptomes"></textarea>
                                          </div>
                                          <div class="col-md-6 form-group">
                                             <div class="form-group">
                                                <label for="ilinessstartdate" class="control-label">Date de début du droblème: *</label>
                                                <input type="date" class="form-control" required="required" id="ilinessstartdate" name="url" placeholder="Company Url." v-model="ilinessstartdate">
                                             </div>
                                          </div>
                                          <div class="form-group col-md-6">
                                             <label for="type" class="control-label">Spécialité: *</label>
                                             <select class="form-control" id="type" name="type" @change="changeSpecialite($event)">
                                                <option v-for="(specialite , index) in specialites.data" :key="index" :value="specialite.name">{{specialite.name}}</option>
                                                <option selected="">Autre</option>
                                             </select>
                                          </div>
                                       </div>
                                       <button class="btn btn-primary nextBtn btn-lg pull-right" type="submit" >Next</button>
                                       <button class="btn btn-secondary  btn-lg pull-left" type="button" @click="activate(0)" >Previous</button>
                                    </div>
                                 </div>
                              </form>
                              <div v-if="active_el==2" class="row setup-content" id="bank-detail">
                                 <div class="col-sm-12">
                                    <div class="col-md-12 p-0">
                                       <h3 class="mb-4">Documents:</h3>
                                       <div class="form-card text-left">
                                       <div class="form-group">
                                          <label>Résultas Analyses:</label>
                                          <img src="@/assets/images/check.png" alt="" class="avatar-succes-uplode" v-if="FileResultasAnalyses">
                                          <input type="file" class="form-control" name="pic"  id="file-input" @change="previewFileResultasAnalyses">
                                       </div>
                                       <div class="form-group">
                                          <label>Radiologie (IRM ,Scanner):</label>
                                          <img src="@/assets/images/check.png" alt="" class="avatar-succes-uplode" v-if="FileRadiologie">
                                          <input type="file" class="form-control" name="pic-2" id="file-input" @change="previewFileRadiologie">
                                       </div>
                                       <div class="form-group">
                                          <label>Compte rendu médecins:</label>
                                          <img src="@/assets/images/check.png" alt="" class="avatar-succes-uplode" v-if="FileCompteRenduMedcins">
                                          <input type="file" class="form-control" name="pic-2" id="file-input" @change="previewFileCompteRenduMedcins">
                                       </div>
                                    </div>
                                       <button class="btn btn-primary nextBtn btn-lg pull-right" type="button" @click="activate(3)" >Next</button>
                                       <button class="btn btn-secondary btn-lg pull-left" type="button" @click="activate(1)" >Previous</button>
                                    </div>
                                 </div>
                              </div>
                              <div v-if="active_el==3" class="row setup-content" id="cpnfirm-data">
                                 <div class="col-sm-12" v-if="isConfirme">
                                    <div class="col-md-12 p-0">
                                       <h3 class="mb-4 text-left">Votre demande a bien été enregistrée:</h3>
                                       <h3 class="mb-4 text-left">Ref Dossier : {{dossierRef}}</h3>
                                       <div class="row justify-content-center" >
                                          <div class="col-6"><lottie :option="require('@/assets/images/success.json')" id="lottie-succes" /></div>
                                       </div>
                                    </div>
                                    <button class="btn btn-primary nextBtn btn-lg pull-right" type="button" @click="ShowDossier()">Aller à Mes Dossier</button>
                                 </div>
                                 <div class="col-sm-12" v-if="!isConfirme">
                                    <div class="col-md-12 p-0">
                                    </div>
                                    <button class="btn btn-success  btn-lg pull-right confirmbtn" type="button" @click="Confirmation()">Confirmer</button>
                                 </div>
                            </div>
                           </div>
                        </div>
                     </div>
                  </div>
</div>
</template>
<script>
import moment from 'moment'
import specialites from '@/assets/Api/SpecialiteApi'
import country from '@/assets/Api/CountryApi'
import Lottie from '@/components/lottie/Lottie'
export default {
  name: 'NouveauDossierView',
  components: { Lottie },
  methods: {
    miniSidebar () {
      this.$emit('toggle')
    },
    activate: function (el) {
      if (!this.isConfirme) {
        this.active_el = el
      }
    },
    previewFileResultasAnalyses (event) {
      this.FileResultasAnalyses = event.target.files[0]
    },
    previewFileRadiologie (event) {
      this.FileRadiologie = event.target.files[0]
    },
    previewFileCompteRenduMedcins (event) {
      this.FileCompteRenduMedcins = event.target.files[0]
    },
    changeSpecialite (event) {
      this.spcialite = event.target.value
    },
    getDateDeNaissance: function (value, format) {
      console.log(moment(String(value)).format(format || 'YYYY-MM-DD'))
      if (value) {
        return moment(String(value)).format(format || 'YYYY-MM-DD')
      }
    },
    changeVille (event) {
      this.ville = event.target.value
    },
    changePays (event) {
      this.pays = event.target.value
    },
    changeSexe (event) {
      this.sexe = event.target.value
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
    }
  },
  data () {
    return {
      active_el: 0,
      specialites: specialites,
      idDossier: 1,
      sexe: '',
      lastName: '',
      firstName: '',
      dateNaissance: '',
      email: '',
      pays: '',
      ville: '',
      phone: '',
      symptomes: '',
      ilinessstartdate: '',
      moredetail: '',
      spcialite: 'Autre',
      FileResultasAnalyses: null,
      FileRadiologie: null,
      FileCompteRenduMedcins: null,
      isConfirme: false,
      dossierRef: null,
      payslist: country,
      villeslist: [
        { value: 'California', text: 'California' },
        { value: 'Florida', text: 'Florida' },
        { value: 'Georgia', text: 'Georgia' },
        { value: 'Connecticut', text: 'Connecticut' },
        { value: 'Louisiana', text: 'Louisiana' }
      ]
    }
  },
  mounted () {
  }
}

</script>
<style scoped>
.btndefault{
}
/* .wizardBtn{
   border-color: #495057;
   border-width: 2px;
   height: 100%;
   font-size: 10px;
} */
/* .wizardBtn span {
   font-size: 15px;
} */
/* .newbtn{
   border: 1px solid #e0e8e;
} */
#file-input::-webkit-file-upload-button {
   background-color: #e9ecef;
   margin-top:1px;
   border: 1px solid #ced4da;
}
#file-input{
   padding-left: 0;
   padding-top: 0;
   color: #495057;
}
.avatar-succes-uplode{
   width: 15px;
   height: 15px;
   position: absolute;
   right: 0;
}
.confirmbtn{
   width: 300px;
}
</style>
