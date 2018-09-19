<template>
  <div>
    <template v-if="totalCount > 0">
      <b-pagination
        size="md"
        :total-rows="totalCount"
        :per-page="perPage"
        @change="$emit('change-page', $event)"
      />
    </template>

    <b-card
      v-for="task in tasks"
      :key="task.id"
      class="mb-2"
    >
      <b-img
        :src="task.user.avatar"
        fluid
        rounded="circle"
        class="avatar"
      />
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
  }
}
</script>

<style scoped>
.avatar {
  width: 40px;
}
</style>
