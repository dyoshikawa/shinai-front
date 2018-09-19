<template>
  <div>
    <Home
      v-if="$store.state.user.isLogin"
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
    Loading
  }
}
</script>

<style scoped>
</style>
