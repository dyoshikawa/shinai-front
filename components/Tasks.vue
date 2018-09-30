<template>
  <div>
    <template v-if="totalCount > 0">
      <b-pagination
        size="md"
        :total-rows="totalCount"
        :per-page="perPage"
        @change="$emit('change-page', $event)"
      />
    </template>

    <template v-for="task in tasks">
      <Task
        :key="task.ID"
        :taskId="task.ID"
        :userId="task.user.ID"
        :avatar="task.user.avatar"
        :content="task.content"
      />
    </template>
  </div>
</template>

<script>
import Task from '~/components/Task'

export default {
  components: { Task },

  computed: {
    tasks() {
      console.log(this.$store.getters['tasks/list'])
      return this.$store.getters['tasks/list']
    },
    totalCount() {
      return this.$store.state.tasks.totalCount
    },
    perPage() {
      return this.$store.state.tasks.perPage
    },
  },
}
</script>

<style scoped>
</style>
