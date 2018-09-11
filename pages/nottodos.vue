<template>
  <div class="box box-bg-photo">
    <nav-bar></nav-bar>
    <b-container>
      <not-todo-form/>
    </b-container>
  </div>
</template>

<script>
import NotTodoForm from '~/components/NotTodoForm'
import NavBar from '~/components/NavBar'

export default {
  components: {
    NavBar,
    NotTodoForm
  }
}
</script>

<style scoped>
</style>
