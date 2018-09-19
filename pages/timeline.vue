<template>
  <div>
    <b-container>
      <timeline-tasks/>
    </b-container>
  </div>
</template>

<script>
import Loading from '~/components/Loading'
import TimelineTasks from '~/components/TimelineTasks'

export default {
  components: {
    TimelineTasks,
    Loading
  }
}
</script>

<style scoped>
</style>
