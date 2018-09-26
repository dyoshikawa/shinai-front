<template>
  <b-card
    class="mb-2"
  >
    <router-link
      :to="`/users/${userId}`"
    >
      <Avatar
        :url="avatar"
      />
    </router-link>

    <router-link
      :to="`/tasks/${taskId}`"
      class="text-dark"
    >
      わたしは
      &nbsp;<b>{{ content }}</b>&nbsp;
      をしません。
    </router-link>
  </b-card>
</template>

<script>
import Avatar from '~/components/Avatar'

export default {
  components: {
    Avatar,
  },

  props: {
    taskId: {
      type: Number,
      require: true,
    },
    userId: {
      type: Number,
      require: true,
    },
    avatar: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
  },
}
</script>
