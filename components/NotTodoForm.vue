<template>
  <div>
    <div
      class="form-text mb-2"
    >
      わたしは、
    </div>

    <b-input
      class="mb-2"
    />

    <div
      class="form-text mb-2"
    >
      をしません。
    </div>

    <b-button
      variant="primary"
      @click="register"
    >
      登録
      <img
        src="~/static/turtle.png"
        class="turtle"
      >
    </b-button>
  </div>
</template>

<script>
export default {
  methods: {
    async register() {
      await this.$store.dispatch('notTodos/add')
    }
  }
}
</script>

<style scoped>
.form-text {
  font-family: 'Gamja Flower', cursive;
  font-size: 23px;
}
.turtle {
  margin-left: 2px;
  height: 12px;
}
</style>
