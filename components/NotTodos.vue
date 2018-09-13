<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'NotTodos',

  computed: {
    tasks: this.$store.state.notTodos.list
  }
}
</script>

<style scoped>
</style>
