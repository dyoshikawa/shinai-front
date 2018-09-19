<template>
  <div>
    <nav-bar/>
    <nuxt/>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import Loading from '~/components/Loading'

export default {
  components: { NavBar, Loading },
  async created() {
    await this.$store.dispatch('user/fetch')
  }
}
</script>
