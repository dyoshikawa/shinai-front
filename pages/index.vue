<template>
  <div>
    <loading
      v-if="$store.state.user.isLogin === 'loading'"
    ></loading>
    <home
      v-else-if="$store.state.user.isLogin"
    />
    <welcome
      v-else
    />
  </div>
</template>

<script>
import Welcome from '~/components/Welcome'
import Home from '~/components/Home'
import Loading from '~/components/Loading'

export default {
  components: {
    Welcome,
    Home,
    Loading
  },
  async created() {
    this.$store.dispatch('user/fetch')
  }
}
</script>

<style scoped>
</style>
