<template>
  <div class="all">
    <nav-bar/>
    <b-container>
      <div class="box box-bg-photo">
        <h1>More important than todo</h1>
        <div class="login-buttons-box">
          <login-buttons/>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import LoginButtons from '~/components/LoginButtons'

export default {
  components: {
    LoginButtons,
    NavBar
  },
  async created() {
    await this.$store.dispatch('user/fetch')
    const a = this.$store.state.user.isLogin
    console.log(a)
  }
}
</script>

<style scoped>
.box {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.box-bg-photo {
  background-image: url('~/static/turtle.jpeg');
  background-size: cover;
  background-position: center;
}

h1 {
  font-family: 'Gamja Flower', cursive;
  font-size: 80px;
  margin-top: 60px;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 50px;
    margin-top: 0px;
  }
  .box {
    width: 100%;
    height: 400px;
  }
  .login-buttons-box {
    margin-top: 350px;
    align-items: center;
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 30px;
  }
  .box {
    height: 250px;
  }
  .login-buttons-box {
    margin-top: 220px;
  }
}
</style>
