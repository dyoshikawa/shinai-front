<template>
  <div class="box box__bg_photo">
    <b-container>
      <h1 class="title">
        しないことリスト
      </h1>
      <shinai-form/>
    </b-container>
  </div>
</template>

<script>
import NotTodoForm from '~/components/NotTodoForm'

export default {
  components: {
    NotTodoForm
  }
}
</script>

<style scoped>
.box {
  width: 100vw;
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
