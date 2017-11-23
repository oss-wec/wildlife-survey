<template>
  <div class="tallies">
    <div class="container">
      <div class="columns">
        <div class="column is-one-half">
          <inline-counter 
            ageClass="adult"
            :clickOrder="clickOrder"
            @clickOrder="increment"
            @tally="(...args) => logTally(...args)"            
          />
        </div>

        <div class="column is-one-half">
          <inline-counter 
            ageClass="juvenile"
            :clickOrder="clickOrder"
            @clickOrder="increment"
            @tally="(...args) => logTally(...args)"            
          />
        </div>
      </div>

      <div class="columns">
        <pre><code>{{ groupTally }}</code></pre>
        <pre><code>{{ totalAdults }}</code></pre>
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
      clickOrder: 0,
      groupTally: []
    }
  },

  methods: {
    logTally (val) {
      console.log(val)
      this.groupTally.push(val)
    },

    increment () {
      this.clickOrder += 1
    }
  },

  computed: {
    totalAdults () {
      const adults = this.groupTally
        .filter(f => f.ageClass === 'adult')
        .map(m => m.tally)

      // return adults.length

      if (adults.length !== 0) {
        return adults.reduce((acc, cur) => acc + cur)
      } else {
        return 0
      }
    }
  }
}
</script>

<style scoped>

</style>
