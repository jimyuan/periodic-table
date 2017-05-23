<template>
  <div class="element-detail">
    <h1 v-if="element === ''">No Element Info.</h1>
    <section v-else class="element-content">
      <div class="element-img" :style="{backgroundImage: `url(${imgUrl})`}"></div>
      <div class="element-info">
        <ul>
          <!-- 原子序号 -->
          <li><span v-text="switchLang('Number|原子序号')"></span> {{ element.atomicNumber }}</li>
          <!-- 元素名称 -->
          <li><span v-text="switchLang('Element Name|元素名称')">Element Name</span> {{ element.name }}</li>
          <!-- 元素名称缩写 -->
          <li><span v-text="switchLang('Symbol|中文名称')"></span> <span v-text="switchLang(`${element.symbol}|${element.cnName}`)"></span></li>
          <!-- 原子量 -->
          <li><span v-text="switchLang('Atomic Mass|原子量')"></span> {{ element.atomicMass }}</li>
          <!-- 电子轨道排布  -->
          <li><span v-text="switchLang('E-Configuration|电子轨道排布')"></span> <span v-html="ecFormat(element.electronicConfiguration)"></span></li>
          <!-- 同位素  -->
          <li v-if="element.isotopes"><span v-text="switchLang('Isotopes|同位素')"></span> {{ element.isotopes }}</li>
          <!-- 电负性 -->
          <li v-if="element.electronegativity"><span v-text="switchLang('Electrone Gativity|电负性')">Electrone Gativity</span> {{ element.electronegativity }}</li>
          <!-- 原子半径 -->
          <li v-if="element.atomicRadius"><span v-text="switchLang('Atomic Radius|原子半径')"></span> {{ element.atomicRadius }} x 10<sup>-12</sup> m</li>
          <!-- 离子半径 -->
          <li v-if="element.ionRadius"><span v-text="switchLang('Ion Radius|离子半径')"></span> [{{ element.ionRadius }}] x 10<sup>-12</sup> m</li>
          <!-- 范德华半径 -->
          <li v-if="element.vanDelWaalsRadius"><span v-text="switchLang('VanDelWaals Radius|范德华半径')"></span> {{ element.vanDelWaalsRadius }} x 10<sup>-12</sup> m</li>
          <!-- 电离能 -->
          <li v-if="element.ionizationEnergy"><span v-text="switchLang('Ionization Energy|电离能')"></span> {{ element.ionizationEnergy }} kJ/mol</li>
          <!-- 电子亲和能 -->
          <li v-if="element.electronAffinity"><span v-text="switchLang('Electron Affinity|电子亲和能')"></span> {{ element.electronAffinity }} kJ/mol</li>
          <!-- 化合价 -->
          <li v-if="element.oxidationStates"><span v-text="switchLang('Oxidation States|化合价')"></span> {{ element.oxidationStates }}</li>
          <!-- 标准态 -->
          <li v-if="element.standardState"><span v-text="switchLang('Standard State|常温下形态')"></span> {{ element.standardState }}</li>
          <!-- 键合型 -->
          <li v-if="element.bondingType"><span v-text="switchLang('Bonding Type|键合型')"></span> {{ element.bondingType }}</li>
          <!-- 熔点 -->
          <li v-if="element.meltingPoint"><span v-text="switchLang('Melting Point|熔点')"></span> {{ element.meltingPoint }}</li>
          <!-- 沸点 -->
          <li v-if="element.boilingPoint"><span v-text="switchLang('Boiling Point|沸点')"></span> {{ element.boilingPoint }}</li>
          <!-- 密度 -->
          <li v-if="element.density"><span v-text="switchLang('Density|密度')"></span> {{ element.density }} g/cm³</li>
          <!-- 所属族群 -->
          <li v-if="element.groupBlock"><span v-text="switchLang('Group Block|所属族群')"></span> {{ element.groupBlock }}</li>
          <!-- 发现年代 -->
          <li><span v-text="switchLang('Year Discovered|发现年代')"></span> <span class="small">{{ element.yearDiscovered }}</span></li>
        </ul>
      </div>
    </section>
    <template v-if="element.discription">
      <hr>
      <p class="element-desc">{{ element.discription }}</p>
    </template>
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
  },
  methods: {
    ecFormat (ec) {
      const reg = /\d+$/
      const arr = ec.split(' ')
      return arr.map(item => {
        let r = reg.exec(item)
        return reg.test(item) ? item.replace(reg, `<sup>${r[0]}</sup>`) : item
      }).join(' ')
    },
    switchLang (str) {
      return this.ver === 'en' ? str.split('|')[0] : str.split('|')[1]
    }
  }
}
</script>
