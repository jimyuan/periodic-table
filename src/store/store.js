import Vue from 'vue'
import Vuex from 'vuex'
import periodicTable from 'periodic-table/data.json'

Vue.use(Vuex)

// -== 数据修正 ==-
// 修正 9 号元素的 cpkColor
periodicTable[8].cpkHexColor = '90e050'
// 修正 46 号元素的 cpkColor
periodicTable[45].cpkHexColor = '006985'
// 修正 68 号元素的 cpkColor
periodicTable[67].cpkHexColor = '00e675'
const cnNames = '氢,氦,锂,铍,硼,碳,氮,氧,氟,氖,钠,镁,铝,硅,磷,硫,氯,氩,钾,钙,钪,钛,钒,铬,锰,铁,钴,镍,铜,锌,镓,锗,砷,硒,溴,氪,铷,锶,钇,锆,铌,钼,锝,钌,铑,钯,银,镉,铟,锡,锑,碲,碘,氙,铯,钡,镧,铈,镨,钕,钷,钐,铕,钆,铽,镝,钬,铒,铥,镱,镥,铪,钽,钨,铼,锇,铱,铂,金,汞,铊,铅,铋,钋,砹,氡,钫,镭,锕,钍,镤,铀,镎,钚,镅,锔,锫,锎,锿,镄,钔,锘,铹,𬬻,𬭊,𬭳,𬭛,𬭶,鿏,𫟼,𬬭,鎶,鉨,𫓧,镆,鉝,石田,气奥'.split(',')
export default new Vuex.Store({
  state: {
    elements: periodicTable.map((item, index) => Object.assign(item, {cnName: cnNames[index]})),
    version: 'en'
  },
  mutations: {
    'setVer': (state, data) => {
      state.version = data
    }
  }
})

/**
 *               --=== JSON 文件字段说明 ===--
 *
 * "Atomic Number"           : 11,                 // 序号
 * "Symbol"                  : "Na",               // 元素缩写
 * "Name"                    : "Sodium",           // 元素名称
 * "Atomic Mass"             : "22.98976928(2)",   // 原子量
 * "cpkHexColor"             : "AB5CF2",           // CPK 色值
 * "electronicConfiguration" : "[Ne] 3s1",         // 原子轨道排布
 * "electronegativity"       : 0.93,               // 电负性
 * "atomicRadius"            : 154,                // 共价半径 (10^-12m)
 * "ionRadius"               : "102 (+1)",         // 离子半径 (10^-12m)
 * "vanDelWaalsRadius"       : 227,                // 范德华半径 (10^-12m)
 * "ionizationEnergy"        : 496,                // 电离能 (kJ/mol)
 * "electronAffinity"        : -53,                // 电子亲和能 (kJ/mol)
 * "oxidationStates"         : "-1, 1",            // 化合价
 * "standardState"           : "solid",            // 标准态
 * "bondingType"             : "metallic",         // 键合型
 * "meltingPoint"            : 371,                // 熔点 (K)
 * "boilingPoint"            : 1156,               // 沸点 (K)
 * "density"                 : 0.968,              // 密度 (0.968g/cm³)
 * "groupBlock"              : "alkali metal",     // 所属族类
 * "yearDiscovered"          : 1807                // 发现年份
 */
