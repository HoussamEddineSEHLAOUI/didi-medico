<template src="@/components/sidebar/SideBar.html"></template>
<style scoped src="@/components/sidebar/SideBar.css"></style>
<script>
export default {
  name: 'SideBar',
  props: {
    horizontal: { type: Boolean },
    toggleButton: { type: Boolean, default: true }
  },
  components: {},
  methods: {
    miniSidebar () {
      this.$emit('toggle')
    }
  },
  data () {
    return {
    }
  }
}
</script>
