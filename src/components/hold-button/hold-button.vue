<template>
  <div>
    <Button @click="triggerPress" v-longpress="triggerLongPress">add 1 / Press 2s 10</Button>
    {{counter}}
  </div>
</template>

<script>
export default {
  name: 'LongPressButton',
  data () {
    return {
      counter: 0,
      pressTimer: null
    }
  },
  methods: {
    triggerPress (event) {
      this.counter += 1
    },
    triggerLongPress () {
      this.counter += 10
    }
  }
}
</script>

<style>
</style>
