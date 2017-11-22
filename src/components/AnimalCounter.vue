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

    timestamp: {{ timestamp }}

    <pre><code>{{ row }}</code></pre>
  </div>
</template>

<script>
import { geolocate } from '../utils'

export default {
  name: 'AnimalCounter',

  data () {
    return {
      count: 0,
      timestamp: null,
      location: null
    }
  },

  methods: {
    increment (val) {
      geolocate()
        .then(pos => {
          this.location = pos
        })
        .catch(err => {
          this.location = err
        })
      this.count = this.count + val
      this.timestamp = new Date()
    }
  },

  computed: {
    row () {
      return {
        count: this.count,
        timestamp: this.timestamp,
        location: this.location
      }
    }
  }
}
</script>

<style lang="css" scoped>
.field {
  margin-top: 12px;
}
</style>
