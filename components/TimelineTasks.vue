<template>
  <Tasks
    @change-page="changePage($event)"
  />
</template>

<script>
import Tasks from '~/components/Tasks'
import trace from '~/plugins/trace'

export default {
  components: { Tasks },

  async created() {
    await this.$store.dispatch('tasks/fetchTimeline')
  },

  methods: {
    async changePage(page) {
      trace(page)
      await this.$store.dispatch('tasks/fetchTimeline', page)
    },
  },
}
</script>

<style scoped>
</style>
