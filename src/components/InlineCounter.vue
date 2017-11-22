<template>
  <div class="counter">
    <h2 class="title">{{ ageClass }}</h2>

    <div class="field has-addons">
      <div class="control">
        <a class="button is-medium" @click.prevent="tally(-10)">- 10</a>
      </div>
      <div class="control">
        <a class="button is-medium" @click.prevent="tally(-5)">- 5</a>
      </div>
      <div class="control">
        <a class="button is-medium" @click.prevent="tally(-1)">- 1</a>
      </div>
      
      <div class="control">
        <input 
          class="input is-medium"
          type="text"
          v-model.number="n"
        >
      </div>
      
      <div class="control">
        <a class="button is-medium" @click.prevent="tally(1)">+ 1</a>
      </div>
      <div class="control">
        <a class="button is-medium" @click.prevent="tally(5)">+ 5</a>
      </div>
      <div class="control">
        <a class="button is-medium" @click.prevent="tally(10)">+ 10</a>
      </div>
    </div>

  </div>
</template>

<script>
import { geolocate } from '../utils'
export default {
  name: 'InlineCounter',

  props: [ 'ageClass' ],

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

<style scoped>

</style>


