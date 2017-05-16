<template>
  <div>
    <section class="periodic-table">
      <article class="element" v-for="element in ptData"></article>
    </section>
    <section class="series">
      <article class="element" v-for="element in laData.concat(acData)"></article>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      ptData: [],
      laData: [],
      acData: []
    }
  },
  computed: mapState({
    periodicTable: state => state.periodicTable
  }),
  mounted () {
    this.ptData = [].concat(this.periodicTable)
    // 镧系元素
    this.laData = this.ptData.splice(56, 15, {
      atomicNumber: '57-71',
      name: 'lanthanoids'
    })
    // 锕系元素
    this.acData = this.ptData.splice(74, 15, {
      atomicNumber: '89-103',
      name: 'actinoids'
    })
  }
}
</script>
