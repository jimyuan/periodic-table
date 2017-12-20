<template>
  <article class="element" :style="{backgroundColor: `#${this.cpkColor}`}" @click="goDetail(element.atomicNumber)">
    <div :data-number="element.atomicNumber" :class="{radiation: Array.isArray(element.atomicMass) || [90,91,92].indexOf(element.atomicNumber)>-1}">
      <span v-text="element.cnName" v-if="ver === 'cn'"></span>
      <span v-text="element.symbol" v-if="ver === 'en'"></span>
      <span>{{ element.atomicMass | massFormatter }}</span>
    </div>
  </article>
</template>
<script>
export default {
  props: ['data'],
  data () {
    return {
      element: this.data
    }
  },
  computed: {
    ver () {
      return this.$store.state.version
    },
    cpkColor () {
      return this.element.cpkHexColor || 'eee'
    }
  },
  methods: {
    goDetail (num) {
      this.$router.push({
        path: `/element/${this.element.name}`
      })
    }
  }
}
</script>
