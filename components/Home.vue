<template>
  <div class="box box-bg-photo">
    <nav-bar></nav-bar>
    <b-container>
      <div
        class="mb-3"
      >
        <task-form/>
      </div>
      <Tasks/>
    </b-container>
  </div>
</template>

<script>
import TaskForm from '~/components/TaskForm'
import NavBar from '~/components/NavBar'
import Tasks from '~/components/Tasks'

export default {
  components: {
    Tasks,
    NavBar,
    TaskForm
  }
}
</script>

<style scoped>
</style>
