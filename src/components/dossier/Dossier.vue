<template src="@/components/dossier/Dossier.html"></template>
<style scoped src="@/components/dossier/Dossier.css"></style>
<script>

export default {
  name: 'DossieR',
  components: {},
  props: ['dossier'],
  methods: {
    updateFiles () {
      console.log('UPDAAATE FILLE!')
    },
    destroyFile () {
      console.log('HEEEY BROOTHER !')
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
    },
    showDetailsDossier: function (dossier) {
      // this.$router.push({
      //   path: '/Details',
      //   name: 'socialDetails',
      //   params: { dossierId: dossierId }
      // })
      localStorage.showDossier = JSON.stringify(dossier)
      this.$router.push('/Details')
    }
  },
  data () {
    return {
    }
  }

}
</script>
