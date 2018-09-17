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
      v-for="notTodo in notTodos"
      :key="notTodo.id"
      class="mb-2"
    >
      わたしは
      &nbsp;<b>{{ notTodo.content }}</b>&nbsp;
      をしません。
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'NotTodos',

  computed: {
    notTodos() {
      return this.$store.state.notTodos.list
    },
    totalCount() {
      return this.$store.state.notTodos.totalCount
    },
    perPage() {
      return this.$store.state.notTodos.perPage
    }
  },

  async created() {
    await this.$store.dispatch('notTodos/fetch', 1)
  },

  methods: {
    async changePage(page) {
      console.log(page)
      await this.$store.dispatch('notTodos/fetch', page)
    }
  }
}
</script>

<style scoped>
</style>
