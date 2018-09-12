<template>
  <b-button
    class="btn-google first-button"
    variant="danger"
    @click="login"
  >
    <i class="fab fa-google" />&nbsp;Login with Google
  </b-button>
</template>

<script>
import { loginWithGoogle } from '~/plugins/auth'

export default {
  name: 'GoogleLoginButton',

  methods: {
    login() {
      loginWithGoogle()
    }
  }
}
</script>

<style scoped>
.btn-google {
  background-color: #dd4b39;
}
</style>
