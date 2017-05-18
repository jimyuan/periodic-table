<template>
  <div class="element-detail">
    <h1 v-if="element === ''">No Element Info.</h1>
    <section v-else class="element-content">
      <div class="element-img" :style="{backgroundImage: `url(${imgUrl})`}"></div>
      <div class="element-info">
        <ul>
          <li>Name: {{ element.name }}</li>
          <li>Symbol: {{ element.symbol }}</li>
          <li>Symbol: {{ element.symbol }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      ele: this.$route.params.name,
      codeArr: '001.x3,002.6,003.3,004.1,005.6,006.x4,007.8,008.10,009.6,010.8,011.9,012.15,013.21,014.12,015.6,NativeSulfur,017.3,018.7,019.6,020.6,021.8,022.18,023.10,024.11,025.7,026.32,027.14,028.9,029.24,030.7,031.7,032.10,033.7,034.12,035.2,036.6,037.5,038.5,039.11,040.17,041.13,042.2,043.1,044.5,045.7,046.10,047.26,048.11,049.7,050.22,051.15,052.4,053.8,054.6,055.4,056.1,057.1,058.7,059.1,060.2,061.1,062.6,063.9,064.1,065.5,066.2,067.4,068.5,069.1,070.3,071.3,072.2,073.8,074.5,075.10,076.8,077.4,078.6,079.2,080.14,081.5,082.27,083.23,084.8,085.4,086.4,087.4,088.15,089.4,090.6,091.5,092.19,093.2,094.3,095.1,096.2,097.2,098.2,099.3,100.3,101.3,102.2,103.2,104.2,105.2,106.4,107.2,108.2,109.1,110.1,111.1,112.1,113.1,114.1,115.1,116.1,117.1,118.1'.split(',')
    }
  },
  computed: {
    ...mapState({
      periodicTable: state => state.elements,
      ver: state => state.version
    }),
    element () {
      return (isNaN(parseInt(this.ele, 10))
        ? this.periodicTable.find(item => item.name === this.ele)
        : this.periodicTable[this.ele - 1]) || ''
    },
    imgUrl () {
      const code = this.codeArr[this.element.atomicNumber - 1]
      return `http://periodictable.com/Samples/${code}/s10.JPG`
    }
  },
  watch: {
    '$route' (to) {
      this.ele = to.params.name
    }
  }
}
</script>
