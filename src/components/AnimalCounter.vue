<template lang="html">
  <div class="counter">
    <h2>Male</h2>
    <button class="button is-medium is-block is-fullwidth" @click.prevent="tally(10)">+ 10</button>
    <button class="button is-medium is-block is-fullwidth" @click.prevent="tally(5)">+ 5</button>
    <button class="button is-medium is-block is-fullwidth" @click.prevent="tally(1)">+ 1</button>
    
    <div class="field">
      <div class="control">
        <input  type="number" 
                class="input is-medium"
                v-model="n">
      </div>
    </div>

    <button class="button is-medium is-block is-fullwidth" @click.prevent="tally(-1)">- 1</button>
    <button class="button is-medium is-block is-fullwidth" @click.prevent="tally(-5)">- 5</button>
    <button class="button is-medium is-block is-fullwidth" @click.prevent="tally(-10)">- 10</button>
  </div>
</template>

<script>
import { geolocate } from '../utils'

export default {
  name: 'AnimalCounter',

  data () {
    return {
      n: 0,
      idx: 0
    }
  },

  methods: {
    tally (val) {
      this.n = this.n + val
      this.idx += 1

      let obj = {
        idx: this.idx,
        tally: val,
        timestamp: new Date()
      }

      geolocate()
        .then(pos => {
          obj = { ...obj, ...pos }

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
