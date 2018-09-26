<template>
  <b-img
    :src="url"
    fluid
    rounded="circle"
    class="avatar"
  />
</template>

<script>
export default {
  name: 'Avatar',

  props: {
    url: {
      type: String,
      default: '/turtle.png',
    },
  },
}
</script>

<style scoped>
.avatar {
  width: 40px;
}
</style>
