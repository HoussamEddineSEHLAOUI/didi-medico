<template>
    <AlertMessage v-if="isShowAlert" :messsaResp="messsaResp" :typeResp="typeResp"></AlertMessage>
    <div class="col-sm-12">
      <div class="iq-card position-relative inner-page-bg bg-primary" style="height: 150px;">
        <div class="inner-page-title">
          <h3 class="text-white">Mes Dossiers</h3>
        </div>
      </div>
      <div class="iq-search-bar searchbar">
              <div class="searchbox">
                  <input type="text" class="text search-input" placeholder="Type here to search..." v-model="search">
                  <a class="search-link" href="#"><i class="ri-search-line"></i></a>
              </div>
          </div>
    </div>
    <div class="alert text-white bg-warning" role="alert" v-if="isShowWarning">
      <div class="iq-alert-text">
        <b>warning</b>
        <p>monavismedical.com est un service de télémédecine développé et édité par la société Medicare Expertise. L’analyse et l’étude de vos dossiers sont réalisés par des membres du corps médical (médecins, professeurs, internistes, spécialistes). Votre dossier est totalement anonyme et traité dans la plus grande confidentialité, comme mentionné dans nos termes et conditions d’utilisation
      </p>
      </div>
      <button type="button" class="close-btn close" data-dismiss="alert" aria-label="Close">
        <i class="ri-close-line"></i>
      </button>
    </div>
    <DossieR v-for="(dossier , key) in filteredList()"
    :key="key"
    :dossier="dossier"
    ></DossieR>
    <div class="class-vide-files" v-if="ListDosier.length <= 0">
      <button class="btn btn-success btn-block btn-new-folder " type="button" @click="soumettreNewFile">Soumettre un nouveau dossier</button>
    </div>
</template>
<script>
import DossieR from '@/components/dossier/Dossier.vue'
import AlertMessage from '@/components/alert/AlertMessage'
export default {
  name: 'ListDossierView',
  components: {
    DossieR,
    AlertMessage
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
    soumettreNewFile () {
      this.$router.push('/newFile')
    },
    filteredList () {
      return this.ListDosier.filter(dossier => {
        return dossier.ref_Dossier.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  data () {
    return {
      search: '',
      ListDosier: [],
      isShowAlert: false,
      isShowWarning: true,
      messsaResp: '',
      typeResp: ''
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
.class-vide-files{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.btn-new-folder{
  height: 50px;
  width: 30%;
}
.searchbar{
  position: absolute;
  top: 0;
  margin-top: 45px;
  margin-right: 30%;
  margin-left: 30%;
}
.close-btn{
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
}
</style>
