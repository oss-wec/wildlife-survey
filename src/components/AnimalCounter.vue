<template lang="html">
  <div class="counter">
    <h2>Male</h2>
    <button class="button is-large is-block is-fullwidth" @click.prevent="increment(10)">+ 10</button>
    <button class="button is-large is-block is-fullwidth" @click.prevent="increment(5)">+ 5</button>
    <button class="button is-large is-block is-fullwidth" @click.prevent="increment(1)">+ 1</button>
    
    <div class="field">
      <div class="control">
        <input  type="number" 
                class="input is-large"
                v-model="count">
      </div>
    </div>

    <button class="button is-large is-block is-fullwidth" @click.prevent="increment(-1)">- 1</button>
    <button class="button is-large is-block is-fullwidth" @click.prevent="increment(-5)">- 5</button>
    <button class="button is-large is-block is-fullwidth" @click.prevent="increment(-10)">- 10</button>

    timestamp: {{ this.timestamp }}
  </div>
</template>

<script>
export default {
  name: 'AnimalCounter',

  data () {
    return {
      count: 0,
      timestamp: null
    }
  },

  methods: {
    increment (val) {
      this.count = this.count + val
      this.timestamp = new Date()
    }
  }
}
</script>

<style lang="css" scoped>
.field {
  margin-top: 12px;
}
</style>
