<template>
  <Tasks
    @change-page="changePage($event)"
  />
</template>

<script>
import Tasks from '~/components/Tasks'

export default {
  components: {
    Tasks
  },

  async created() {
    await this.$store.dispatch('tasks/fetch', 1)
  },

  methods: {
    async changePage(page) {
      console.log(page)
      await this.$store.dispatch('tasks/fetch', page)
    }
  }
}
</script>

<style scoped>
</style>
