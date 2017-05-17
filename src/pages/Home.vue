<template>
  <div>
    <section class="periodic-table">
      <cell v-for="element in ptData" :key="element" :data="element"></cell>
    </section>
    <section class="series">
      <cell v-for="element in laData.concat(acData)" :key="element" :data="element"></cell>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Cell from 'COMPONENTS/Element'
export default {
  data () {
    return {
      ptData: [],
      laData: [],
      acData: []
    }
  },
  computed: mapState({
    periodicTable: state => state.periodicTable,
    cnName: state => state.elementCName
  }),
  mounted () {
    this.ptData = [].concat(this.periodicTable).map((item, index) => Object.assign(item, {cnName: this.cnName[index]}))
    // 镧系元素
    this.laData = this.ptData.splice(56, 15, {
      atomicNumber: '57-71',
      symbol: 'La-Lu',
      cnName: '镧-镥',
      atomicMass: '',
      cpkHexColor: '70D4FF'
    })
    // 锕系元素
    this.acData = this.ptData.splice(74, 15, {
      atomicNumber: '89-103',
      symbol: 'Ac-Lr',
      cnName: '锕-铹',
      atomicMass: '',
      cpkHexColor: '70ABFA'
    })
  },
  components: { Cell }
}
</script>
