<template>
  <div>
    <home
      v-if="$store.state.user.isLogin"
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
  }
}
</script>

<style scoped>
</style>
