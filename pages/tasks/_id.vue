<template>
  <b-container>
    <Task
      :taskId="task.id"
      :userId="task.user.id"
      :avatar="task.user.avatar"
      :content="task.content"
    />
  </b-container>
</template>

<script>
import Task from '~/components/Task'

export default {
  components: {
    Task,
  },

  computed: {
    task() {
      return this.$store.state.tasks.one
    },
  },

  async created() {
    await this.$store.dispatch('tasks/fetchOne', this.$route.params.id)
  },
}
</script>

<style scoped>
</style>
