<template>
  <div>
    <div
      v-if="$store.state.user.isLogin === 'loading'"
    ></div>
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

export default {
  components: {
    Welcome,
    Home
  },
  async created() {
    this.$store.dispatch('user/fetch')
  }
}
</script>

<style scoped>
</style>
