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
    notTodos: this.$store.state.notTodos.list
  }
}
</script>

<style scoped>
</style>
