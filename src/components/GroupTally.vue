<template>
  <div class="tallies">
    <div class="container">
      <div class="columns">
        <div class="column is-one-quarter">
          <animal-counter @tally="(...args) => logTally(...args)"/>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import AnimalCounter from './AnimalCounter'

export default {
  name: 'GroupTally',

  components: {
    'animal-counter': AnimalCounter
  },

  methods: {
    logTally (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>

</style>
