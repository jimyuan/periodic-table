webpackJsonp([1],{HLba:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("9rMa"),i={data:function(){return{ele:this.$route.params.name,codeArr:"001.x3,002.6,003.3,004.1,005.6,006.x4,007.8,008.10,009.6,010.8,011.9,012.15,013.21,014.12,015.6,NativeSulfur,017.3,018.7,019.6,020.6,021.8,022.18,023.10,024.11,025.7,026.32,027.14,028.9,029.24,030.7,031.7,032.10,033.7,034.12,035.2,036.6,037.5,038.5,039.11,040.17,041.13,042.2,043.1,044.5,045.7,046.10,047.26,048.11,049.7,050.22,051.15,052.4,053.8,054.6,055.4,056.1,057.1,058.7,059.1,060.2,061.1,062.6,063.9,064.1,065.5,066.2,067.4,068.5,069.1,070.3,071.3,072.2,073.8,074.5,075.10,076.8,077.4,078.6,079.2,080.14,081.5,082.27,083.23,084.8,085.4,086.4,087.4,088.15,089.4,090.6,091.5,092.19,093.2,094.3,095.1,096.2,097.2,098.2,099.3,100.3,101.3,102.2,103.2,104.2,105.2,106.4,107.2,108.2,109.1,110.1,111.1,112.1,113.1,114.1,115.1,116.1,117.1,118.1".split(",")}},computed:(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e})({},Object(s.b)({periodicTable:function(e){return e.elements},ver:function(e){return e.version}}),{element:function(){var e=this;return(isNaN(parseInt(this.ele,10))?this.periodicTable.find(function(t){return t.name===e.ele}):this.periodicTable[this.ele-1])||""},imgUrl:function(){return"http://periodictable.com/Samples/"+this.codeArr[this.element.atomicNumber-1]+"/s10.JPG"}}),watch:{$route:function(e){this.ele=e.params.name}},methods:{ecFormat:function(e){var t=/\d+$/;return e.split(" ").map(function(e){var n=t.exec(e);return t.test(e)?e.replace(t,"<sup>"+n[0]+"</sup>"):e}).join(" ")},switchLang:function(e){return"en"===this.ver?e.split("|")[0]:e.split("|")[1]}}},o=n("QAAC"),a=Object(o.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"element-detail"},[""===e.element?n("h1",[e._v("No Element Info.")]):n("section",{staticClass:"element-content"},[n("div",{staticClass:"element-img",style:{backgroundImage:"url("+e.imgUrl+")"}}),e._v(" "),n("div",{staticClass:"element-info"},[n("ul",[n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("Number|原子序号"))}}),e._v(" "+e._s(e.element.atomicNumber))]),e._v(" "),n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("Element Name|元素名称"))}},[e._v("Element Name")]),e._v(" "+e._s(e.element.name))]),e._v(" "),n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("Symbol|中文名称"))}}),e._v(" "),n("span",{domProps:{textContent:e._s(e.switchLang(e.element.symbol+"|"+e.element.cnName))}})]),e._v(" "),n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("Atomic Mass|原子量"))}}),e._v(" "+e._s(e.element.atomicMass))]),e._v(" "),n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("E-Configuration|电子轨道排布"))}}),e._v(" "),n("span",{domProps:{innerHTML:e._s(e.ecFormat(e.element.electronicConfiguration))}})]),e._v(" "),e.element.isotopes?n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("Isotopes|同位素"))}}),e._v(" "+e._s(e.element.isotopes))]):e._e(),e._v(" "),e.element.electronegativity?n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("Electrone Gativity|电负性"))}},[e._v("Electrone Gativity")]),e._v(" "+e._s(e.element.electronegativity))]):e._e(),e._v(" "),e.element.atomicRadius?n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("Atomic Radius|原子半径"))}}),e._v(" "+e._s(e.element.atomicRadius)+" x 10"),n("sup",[e._v("-12")]),e._v(" m")]):e._e(),e._v(" "),e.element.ionRadius?n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("Ion Radius|离子半径"))}}),e._v(" ["+e._s(e.element.ionRadius)+"] x 10"),n("sup",[e._v("-12")]),e._v(" m")]):e._e(),e._v(" "),e.element.vanDelWaalsRadius?n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("VanDelWaals Radius|范德华半径"))}}),e._v(" "+e._s(e.element.vanDelWaalsRadius)+" x 10"),n("sup",[e._v("-12")]),e._v(" m")]):e._e(),e._v(" "),e.element.ionizationEnergy?n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("Ionization Energy|电离能"))}}),e._v(" "+e._s(e.element.ionizationEnergy)+" kJ/mol")]):e._e(),e._v(" "),e.element.electronAffinity?n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("Electron Affinity|电子亲和能"))}}),e._v(" "+e._s(e.element.electronAffinity)+" kJ/mol")]):e._e(),e._v(" "),e.element.oxidationStates?n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("Oxidation States|化合价"))}}),e._v(" "+e._s(e.element.oxidationStates))]):e._e(),e._v(" "),e.element.standardState?n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("Standard State|常温下形态"))}}),e._v(" "+e._s(e.element.standardState))]):e._e(),e._v(" "),e.element.bondingType?n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("Bonding Type|键合型"))}}),e._v(" "+e._s(e.element.bondingType))]):e._e(),e._v(" "),e.element.meltingPoint?n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("Melting Point|熔点"))}}),e._v(" "+e._s(e.element.meltingPoint))]):e._e(),e._v(" "),e.element.boilingPoint?n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("Boiling Point|沸点"))}}),e._v(" "+e._s(e.element.boilingPoint))]):e._e(),e._v(" "),e.element.density?n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("Density|密度"))}}),e._v(" "+e._s(e.element.density)+" g/cm³")]):e._e(),e._v(" "),e.element.groupBlock?n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("Group Block|所属族群"))}}),e._v(" "+e._s(e.element.groupBlock))]):e._e(),e._v(" "),n("li",[n("span",{domProps:{textContent:e._s(e.switchLang("Year Discovered|发现年代"))}}),e._v(" "),n("span",{staticClass:"small"},[e._v(e._s(e.element.yearDiscovered))])])])])]),e._v(" "),e.element.discription?[n("hr"),e._v(" "),n("p",{staticClass:"element-desc"},[e._v(e._s(e.element.discription))])]:e._e()],2)},[],!1,null,null,null);t.default=a.exports}});