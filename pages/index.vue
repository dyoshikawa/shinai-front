<template>
  <div class="all">
    <nav-bar/>
    <b-container>
      <div class="box-custom box__bg_photo">
        <h1>More important than todo</h1>
        <div id="login_buttons_box">
          <div id="login_buttons">
            <b-button
              class="btn-google left-button"
              variant="danger"
            >
              <i class="fab fa-google" />Login with Google
            </b-button>

            <br class="br-sp">

            <b-button
              class="btn-twitter"
              variant="info"
            >
              <i class="fab fa-twitter" />Login with Twitter
            </b-button>
          </div>
        </div>
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
  display: flex;
  align-items: center;
  flex-direction: column;
}

.box__bg_photo {
  background-image: url('~/static/turtle.jpeg');
  background-size: cover;
  background-position: center;
}

.br-sp {
  display: none;
}

h1 {
  font-family: 'Gamja Flower', cursive;
  font-size: 80px;
  margin-top: 60px;
}

.left-button {
  margin-right: 10px;
}

.btn-twitter {
  background-color: #00aced;
}

.btn-google {
  background-color: #dd4b39;
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

  #login_buttons_box {
    margin-top: 350px;
    align-items: center;
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 30px;
  }

  .box-custom {
    height: 250px;
  }

  #login_buttons_box {
    margin-top: 220px;
    align-items: center;
    flex-wrap: wrap;
  }

  .left-button {
    margin-bottom: 10px;
  }

  .br-sp {
    display: block;
  }
}
</style>
