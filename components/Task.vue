<template>
  <b-card
    class="mb-2"
    @click="alert('aaa')"
  >
    <router-link
      :to="`/users/${userId}`"
    >
      <Avatar
        :url="avatar"
      />
    </router-link>
    わたしは
    &nbsp;<b>{{ content }}</b>&nbsp;
    をしません。
  </b-card>
</template>

<script>
import Avatar from '~/components/Avatar'

export default {
  components: {
    Avatar,
  },

  props: {
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
