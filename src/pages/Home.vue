<template>
  <div>
    <section class="periodic-table" @click="goDetail">
      <cell v-for="element in ptData" :key="element" :data="element"></cell>
    </section>
    <section class="series" @click="goDetail">
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
    periodicTable: state => state.elements
  }),
  mounted () {
    // 复制元素列表
    this.ptData = [].concat(this.periodicTable)
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
  methods: {
    goDetail (evt) {
      const index = evt.path.find(item => item.tagName.toLowerCase() === 'div').dataset.number
      index && this.$router.push({
        path: `/element/${this.periodicTable[index - 1].name}`
      })
      // console.log(`/element/${this.periodicTable[index].name}`)
    }
  },
  components: { Cell }
}
</script>
