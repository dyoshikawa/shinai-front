<template>
  <div class="login-buttons">
    <span class="first-button">
      <google-login-button/>
    </span>
    <br class="br-sp">
    <twitter-login-button/>
  </div>
</template>

<script>
import GoogleLoginButton from '~/components/GoogleLoginButton'
import TwitterLoginButton from '~/components/TwitterLoginButton'

export default {
  components: {
    GoogleLoginButton,
    TwitterLoginButton,
  },
}
</script>

<style scoped>
.login-buttons {
  display: flex;
}
.br-sp {
  display: none;
}
.first-button {
  margin-right: 10px;
}

@media screen and (max-width: 480px) {
  .login-buttons {
    display: block;
  }
  .br-sp {
    display: block;
  }
  .first-button {
    margin-right: 0px;
    margin-bottom: 10px;
  }
}
</style>
