<template>
  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">NotTodoList</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item
            @click="login"
          >
            Login
          </b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    }
  }
}
</script>
