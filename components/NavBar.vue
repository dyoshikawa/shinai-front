<template>
  <b-navbar toggleable="md" type="dark" variant="dark" class="mb-3">
    <b-container>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand
        href="/"
        class="navbar-brand-custom"
      >
        しないことリスト
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item
            href="/timeline"
          >
            みんなのリスト
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <Avatar
                :url="avatar"
              />
            </template>

            <template v-if="isLogin">
              <b-dropdown-item
                @click="logout"
              >
                Logout
              </b-dropdown-item>
            </template>
            <template v-else>
              <b-dropdown-item
                @click="loginWithGoogle"
              >
                Login with Google
              </b-dropdown-item>
            </template>

          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import { loginWithGoogle, logout } from '~/plugins/auth'
import Avatar from '~/components/Avatar'

export default {
  components: {
    Avatar
  },

  computed: {
    isLogin() {
      return this.$store.state.user.isLogin
    },
    avatar() {
      return this.$store.state.user.avatar
    }
  },

  methods: {
    loginWithGoogle() {
      loginWithGoogle()
    },
    logout() {
      logout(this.$store)
    }
  }
}
</script>
