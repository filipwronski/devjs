<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'home'}">Home</router-link> |
      <router-link :to="{ name: 'score'}">Score</router-link> |
      <router-link :to="{ name: 'settings'}">Settings</router-link> |
      <router-link :to="{ name: 'vote'}">Vote</router-link>
      <button @click='changeCreditential()'>
        <span v-if="$store.state.isAdmin">Logout</span> 
        <span v-else>Login</span></button>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'app',
  methods: {
    ...mapMutations([
      'setIsAdmin',
    ]),
    changeCreditential() {
      this.setIsAdmin();
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
