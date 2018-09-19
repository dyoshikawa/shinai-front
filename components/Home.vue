<template>
  <div class="box box-bg-photo">
    <b-container>
      <div
        class="mb-3"
      >
        <task-form/>
      </div>
      <auth-user-tasks/>
    </b-container>
  </div>
</template>

<script>
import TaskForm from '~/components/TaskForm'
import NavBar from '~/components/NavBar'
import AuthUserTasks from '~/components/AuthUserTasks'

export default {
  components: {
    AuthUserTasks,
    NavBar,
    TaskForm
  }
}
</script>

<style scoped>
</style>
