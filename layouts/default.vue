<template>
  <div>
    <Loading
      v-if="$store.state.user.isLogin === 'loading'"
    />
    <template v-else>
      <nav-bar/>
      <nuxt/>
    </template>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import Loading from '~/components/Loading'

export default {
  components: { NavBar, Loading },
  async created() {
    this.$store.dispatch('user/fetch')
  }
}
</script>
