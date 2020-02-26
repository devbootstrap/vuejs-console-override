<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <button @click="testLog">Test Log</button>
    </div>
    <Console />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Console from './components/Console.vue';

@Component({
  components: {
    Console,
  }
})
export default class App extends Vue {
  testLog() {
    console.log('in testLog in App.vue')
    this.$store.dispatch('testLog')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
