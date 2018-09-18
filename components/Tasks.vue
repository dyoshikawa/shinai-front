<template>
  <div>
    <template v-if="totalCount > 0">
      <b-pagination
        size="md"
        :total-rows="totalCount"
        :per-page="perPage"
        @change="changePage($event)"
      />
    </template>

    <b-card
      v-for="task in tasks"
      :key="task.id"
      class="mb-2"
    >
      わたしは
      &nbsp;<b>{{ task.content }}</b>&nbsp;
      をしません。
    </b-card>
  </div>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.state.tasks.list
    },
    totalCount() {
      return this.$store.state.tasks.totalCount
    },
    perPage() {
      return this.$store.state.tasks.perPage
    }
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
