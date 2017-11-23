<template>
  <div class="counter">
    <h2 class="subtitle">{{ ageClass }}</h2>

    <div class="field has-addons">
      <div class="control">
        <a class="button is-medium" @click.prevent="tally(-10)">- 10</a>
      </div>
      <div class="control">
        <a class="button is-medium" @click.prevent="tally(-5)">- 5 </a>
      </div>
      <div class="control">
        <a class="button is-medium" @click.prevent="tally(-1)">- 1 </a>
      </div>
      
      <div class="control">
        <input 
          class="input is-medium read-only"
          type="text"
          v-model.number="n"
          readonly
        >
      </div>
      
      <div class="control">
        <a class="button is-medium" @click.prevent="tally(1)">+ 1 </a>
      </div>
      <div class="control">
        <a class="button is-medium" @click.prevent="tally(5)">+ 5 </a>
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

  props: [ 'ageClass', 'clickOrder' ],

  data () {
    return {
      n: 0
    }
  },

  methods: {
    tally (val) {
      this.n = this.n + val

      let obj = {
        ageClass: this.ageClass,
        clickOrder: this.clickOrder,
        tally: val,
        timestamp: new Date()
      }

      this.$emit('clickOrder')

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
input {
  text-align: center;
  width: 100px;
  color: #e68311;
  background-color: #fdefde;
  border-color: #e68311;
  z-index: 1;
}
</style>


