<template lang="html">
  <div class="counter">
    <h2>Male</h2>
    <button class="button is-large is-block is-fullwidth" @click.prevent="tally(10)">+ 10</button>
    <button class="button is-large is-block is-fullwidth" @click.prevent="tally(5)">+ 5</button>
    <button class="button is-large is-block is-fullwidth" @click.prevent="tally(1)">+ 1</button>
    
    <div class="field">
      <div class="control">
        <input  type="number" 
                class="input is-large"
                v-model="count">
      </div>
    </div>

    <button class="button is-large is-block is-fullwidth" @click.prevent="tally(-1)">- 1</button>
    <button class="button is-large is-block is-fullwidth" @click.prevent="tally(-5)">- 5</button>
    <button class="button is-large is-block is-fullwidth" @click.prevent="tally(-10)">- 10</button>
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
    tally (val) {
      geolocate()
        .then(pos => {
          let obj = {
            tally: val,
            timestamp: new Date(),
            ...pos
          }

          this.$emit('tally', obj)
        })
        .catch(err => {
          this.location = err
        })
    }
  }
}
</script>

<style lang="css" scoped>
.field {
  margin-top: 12px;
}
</style>
