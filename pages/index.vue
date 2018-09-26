<template>
  <div>
    <Loading
      v-if="$store.state.authUser.isLogin === 'loading'"
    />
    <Home
      v-else-if="$store.state.authUser.isLogin"
    />
    <Welcome
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
    Loading,
  },
}
</script>

<style scoped>
</style>
