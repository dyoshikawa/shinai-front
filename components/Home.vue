<template>
  <div class="box box-bg-photo">
    <nav-bar></nav-bar>
    <b-container>
      <div
        class="mb-3"
      >
        <not-todo-form/>
      </div>
      <not-todos/>
    </b-container>
  </div>
</template>

<script>
import NotTodoForm from '~/components/NotTodoForm'
import NavBar from '~/components/NavBar'
import NotTodos from '~/components/NotTodos'

export default {
  components: {
    NotTodos,
    NavBar,
    NotTodoForm
  }
}
</script>

<style scoped>
</style>
