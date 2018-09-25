<template>
  <div>
    <b-button
      class="btn-twitter"
      variant="info"
    >
      <i class="fab fa-twitter" />&nbsp;Login with Twitter
    </b-button>
  </div>
</template>

<script>
import { loginWithTwitter } from '~/plugins/auth'

export default {
  methods: {
    login() {
      loginWithTwitter()
    },
  },
}
</script>

<style scoped>
.btn-twitter {
  background-color: #00aced;
}
</style>
