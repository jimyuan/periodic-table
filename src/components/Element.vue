<template>
  <article class="element" :style="{backgroundColor: `#${element.cpkHexColor}`}">
    <div :data-number="element.atomicNumber">
      <span v-text="element.cnName" v-if="ver === 'cn'"></span>
      <span v-text="element.symbol" v-if="ver === 'en'"></span>
      <span>{{ element.atomicMass | massFormatter }}</span>
    </div>
  </article>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: ['data'],
  data () {
    return {
      element: this.data
    }
  },
  computed: mapState({
    ver: state => state.version
  })
}
</script>
