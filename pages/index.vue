<template>
  <div class="all">
    <nav-bar/>
    <b-container>
      <div class="box-custom box__bg_photo">
        <h1>Not Todo List</h1>
      </div>
    </b-container>
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
.box-custom {
  height: 100vh;
  display: flex; /* 要素をflexboxに対応させる */
  align-items: center; /* 縦方向の中央揃え */
  flex-direction: column; /* 子要素の並びを上から下にする（要素の改行に対応） */
}

.box__bg_photo {
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
    font-family: 'Gamja Flower', cursive;
    font-size: 50px;
    margin-top: 0px;
  }

  .box-custom {
    width: 100%;
    height: 400px;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 40px;
  }

  .box-custom {
    height: 250px;
  }
}
</style>
