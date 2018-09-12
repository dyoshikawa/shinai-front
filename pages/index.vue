<template>
  <div>
    <welcome
      v-if="$store.state.user.isLogin"
    />
    <home
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
