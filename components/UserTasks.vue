<template>
  <Tasks
    @change-page="changePage($event)"
  />
</template>

<script>
import Tasks from '~/components/Tasks'

export default {
  components: { Tasks },

  async created() {
    await this.$store.dispatch('tasks/fetchUser', {
      page: 1,
      id: this.$route.params.id,
    })
  },

  methods: {
    async changePage(page) {
      console.log(this.$route.params.id)
      await this.$store.dispatch('tasks/fetchUser', {
        page: page,
        id: this.$route.params.id,
      })
    },
  },
}
</script>

<style scoped>
</style>
