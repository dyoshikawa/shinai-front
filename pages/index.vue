<template>
  <div>
    <nav-bar/>

    <div class="box-c box__bg_photo">
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  components: {
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
.box-c {
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.box__bg_photo {
  background-image: url('~/static/turtle.jpeg');
  background-size: cover;
  background-position: center;
}
</style>
