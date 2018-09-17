<template>
  <div>
    <div
      class="form-text mb-2"
    >
      わたしは、
    </div>

    <b-input
      class="mb-2"
      v-model="content"
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
  data() {
    return { content: '' }
  },
  methods: {
    async register() {
      const body = { content: this.content }
      await this.$store.dispatch('notTodos/add', body)
      this.content = ''
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
