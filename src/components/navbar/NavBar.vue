<template src="@/components/navbar/NavBar.html"></template>
<style src="@/components/navbar/NavBar.css" scoped></style>
<script>
import { mapGetters } from 'vuex'
import Lottie from '@/components/lottie/Lottie'
export default {
  name: 'NavBarStyle1',
  props: {
    homeURL: { type: Object, default: () => ({ name: 'layout1.dashboard' }) },
    title: { type: String, default: 'Dashboard' },
    logo: { type: String, default: require('@/assets/images/logo.png') },
    horizontal: { type: Boolean, default: false },
    items: { type: Array }
  },
  mounted () {
    document.addEventListener('click', this.closeSearch, true)
  },
  components: {
    Lottie
  },
  computed: {
    ...mapGetters({
      bookmark: 'Setting/bookmarkState'
    })
  },
  data () {
    return {
      id: '',
      lastName: '',
      firstName: '',
      image: '',
      visible: false,
      globalSearch: '',
      showSearch: false,
      showMenu: false,
      userFriendRequest: [
        {
          img: require('@/assets/images/user/05.jpg'),
          name: 'Jaques Amole',
          friend: '40  friends'
        },
        {
          img: require('@/assets/images/user/06.jpg'),
          name: 'Lucy Tania',
          friend: '12  friends'
        },
        {
          img: require('@/assets/images/user/07.jpg'),
          name: 'Val Adictorian',
          friend: '0  friends'
        },
        {
          img: require('@/assets/images/user/08.jpg'),
          name: 'Manny Petty',
          friend: '3  friends'
        }

      ]
    }
  },
  methods: {
    miniSidebar () {
      this.$emit('toggle')
    },
    openSearch () {
      this.showSearch = true
      this.showMenu = 'iq-show'
      this.globalSearch = ''
    },
    closeSearch (event) {
      const classList = event.target.classList
      if (!classList.contains('searchbox') && !classList.contains('search-input')) {
        this.removeClass()
      }
    },
    removeClass () {
      this.showSearch = false
      this.showMenu = ''
      this.globalSearch = ''
    },
    logOut: async function () {
      await localStorage.clear()
      await this.$router.push('/')
    }
  }
}
</script>
