<template>
  <b-navbar toggleable="md" type="dark" variant="dark" class="mb-5">
    <b-container>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand
        href="#"
        class="navbar-brand-custom"
      >
        しないことリスト
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item
              @click="loginWithGoogle"
            >
              Login with Google
            </b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import { loginWithGoogle } from '~/plugins/auth'

export default {
  methods: {
    loginWithGoogle() {
      loginWithGoogle()
    }
  }
}
</script>
