<template>
  <div>
    <b-card
      v-for="notTodo in notTodos"
      :key="notTodo.id"
    >
      私は、
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
    }
  },

  async created() {
    console.log('a')
    await this.$store.dispatch('notTodos/fetch')
  }
}
</script>

<style scoped>
</style>
