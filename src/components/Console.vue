<template>
  <div>
    <p>Toggle Logging to show Console output will appear below...</p>
    <button @click="toggleLogging">Toggle Logging</button>
    <hr />
    <p v-for="(log, i) in logs" :key="i" class="linebreaks" >{{log}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...(mapState as any)({
      logs: (state: any) => state.logs,
    })
  }
})
export default class Console extends Vue {
  toggleLogging() {
    this.$store.dispatch("toggleLogging");
  }
}
</script>

<style scoped>
.linebreaks {
  white-space:pre;
}
</style>
