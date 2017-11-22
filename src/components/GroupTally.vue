<template>
  <div class="tallies">
    <div class="container">
      <div class="columns">
        <div class="column is-one-quarter">
          <animal-counter @tally="(...args) => logTally(...args)"/>
        </div>

        <div class="column">
          <inline-counter 
            ageClass="Juvenile"
            @tally="(...args) => logTally(...args)"            
          />
        </div>
      </div>

      <div class="columns">
        <pre><code>{{ groupTally }}</code></pre>
      </div>
    </div>
  </div>  
</template>

<script>
import AnimalCounter from './AnimalCounter'
import InlineCounter from './InlineCounter'

export default {
  name: 'GroupTally',

  components: {
    'animal-counter': AnimalCounter,
    InlineCounter
  },

  data () {
    return {
      groupTally: []
    }
  },

  methods: {
    logTally (val) {
      console.log(val)
      this.groupTally.push(val)
    }
  }
}
</script>

<style scoped>

</style>
