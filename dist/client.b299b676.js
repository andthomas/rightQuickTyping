webpackJsonp([1,2],{172:function(e,t,n){"use strict";var s=n(33),r=n(343),a=(n.n(r),n(333)),i=n.n(a),o=n(175),c=n(176);n(171);n.d(t,"a",function(){return u}),n.i(r.sync)(c.a,o.a);var u=new s.a(Object.assign({router:o.a,store:c.a},i.a))},173:function(e,t,n){"use strict";var s=n(328),r=n.n(s);window.Promise=window.Promise||r.a},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(326),r=n.n(s);r.a.install({onUpdateReady:function(){console.log("update ready"),r.a.applyUpdate()},onUpdated:function(){console.log("updated"),location.reload()}})},175:function(e,t,n){"use strict";var s=n(33),r=n(340),a=n(336),i=n.n(a);s.a.use(r.a),t.a=new r.a({mode:"hash",routes:[{path:"/",component:i.a}]})},176:function(e,t,n){"use strict";var s=n(33),r=n(344),a=n(342);s.a.use(r.a);var i={backSpaceRecord:[],accuracyRecord:[],wpmRecord:[]},o={ADDBACKSPACE:function(e,t){e.backSpaceRecord.push(t)},ADDACCURACY:function(e,t){e.accuracyRecord.push(t)},ADDWPM:function(e,t){e.wpmRecord.push(t)}},c={incrementAsync:function(e){var t=e.commit;setTimeout(function(){t("INCREMENT")},200)}},u=new r.a.Store({state:i,mutations:o,actions:c,plugins:[n.i(a.a)()]});t.a=u},177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(171);t.default={extends:s.a,props:["options"],data:function(){return{xAxis:[],options:{scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Attempt"}}]}}}},mounted:function(){this.createChart(this.options)},methods:{calcX:function(){this.xAxis=[];for(var e=1,t=0;t<this.$store.state.accuracyRecord.length;t++)this.xAxis.push(e.toString()),e++},createChart:function(){this.calcX(),this.renderChart({labels:this.xAxis,datasets:[{label:"Accuracy",borderColor:"#f87979",data:this.$store.state.accuracyRecord},{label:"Deletes",borderColor:"blue",data:this.$store.state.backSpaceRecord},{label:"Words Per Minute",borderColor:"green",data:this.$store.state.wpmRecord}]})}}}},178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(330);t.default={data:function(){return{words:["JUMPILY","PHONILY","HOKILY","HOMILY","HOMINY","JIMPLY","JOKILY","LINKUP","MOUJIK","MOULIN","NYMPHO","PHYLON","PHYLUM","PINKLY","PLUNKY","POKILY","PUNILY","UNHOLY","UPLINK","HILUM","HINKY","HIPLY","HOKUM","HONKY","HULKY","HUMPY","HUNKY","IMPLY","JIMPY","JUMPY","JUNKY","JUPON","KHOUM","LINKY","LINUM","LUMPY","LUPIN","LYMPH","MILKY","MUHLY","MUJIK","NOILY","NYMPH","ONIUM","OPIUM","PHONY","PINKO","PINKY","PLINK","PLONK","PLUMY","PLUNK","POILU","PULIK","PUNJI","PUNKY","PYLON","UNHIP","YUPON","HOLK","HOLM","HOLP","HOLY","HOMY","HONK","HULK","HUMP","HUNK","HYMN","HYPO","IKON","INKY","INLY","JIMP","JINK","JOHN","JOIN","JOKY","JOUK","JUMP","JUNK","KILN","KILO","KINO","KNOP","KOHL","KOJI","KOPH","LIMN","LIMO","LIMP","LIMY","LINK","LINO","LINY","LION","LOIN","LOUP","LUMP","LUNK","LUNY","MILK","MILO","MINK","MOIL","MOLY","MONK","MONY","MOPY","MUNI","MUON","NOIL","OILY","OINK","ONLY","OUPH","PHON","PILY","PINK","PINY","PION","PLOY","PLUM","POKY","POLY","PONY","PULI","PUNK","PUNY","PYIN","UPON","YOLK","YONI","HIM","HIN","HIP","HON","HOP","HOY","HUM","HUN","HUP","HYP","ILK","IMP","INK","ION","JIN","JOY","JUN","KHI","KIN","KIP","KOI","KOP","LIN","LIP","LOP","LUM","MHO","MIL","MOL","MON","MOP","MUN","NIL","NIM","NIP","NOH","NOM","OHM","OIL","PHI","PIN","PIU","PLY","POH","POI","POL","POM","PUL","PUN","UMP","UPO","YIN","YIP","YOK","YOM","YON","YOU","YUK","YUM","YUP","HI","HM","HO","IN","JO","KI","LI","LO","MI","MO","MU","MY","NO","NU","OH","OI","OM","ON","OP","OY","PI","UH","UM","UN","UP","YO"],counter:0,backspace:0,scores:[],playing:!1,givenSentence:"",answer:"",running:!0}},methods:{start:function(e){13==e.which&&(this.playing=!this.playing,this.playGame(10),this.timer()),8==e.which&&this.backspace++},sentenceLength:function(){return Math.floor(219*Math.random())},playGame:function(e){if(1==this.playing){this.$emit("inPlay",!1),this.sentence=[],document.getElementById("enterContainer").innerHTML="Press enter to stop",document.getElementById("inputText").readOnly=!1,this.answer="",document.getElementById("sentenceContainer").innerHTML=this.sentence.toString(),this.givenSentence="",this.counter=0,this.backspace=0;for(var t=0;t<e;t++)this.sentence.push(" "+this.words[this.sentenceLength()]);var n=this.sentence.toString().replace(/,/g,"").toLowerCase();document.getElementById("sentenceContainer").innerHTML=n,this.givenSentence=n}},timer:function(){function e(){if(n.playing)n.counter=n.counter+.1;else{if(clearInterval(t),n.running){var e=n.answer.split(" ").length-1,s=Math.round(60/n.counter*e*100/100),r=Math.round(100*n.testSimilarity());n.$store.commit("ADDBACKSPACE",n.backspace),n.$store.commit("ADDACCURACY",r),n.$store.commit("ADDWPM",s),n.$emit("inPlay",!0),document.getElementById("inputText").readOnly=!0,document.getElementById("enterContainer").innerHTML="Press enter to start a new round"}n.running=!n.running}}var t=setInterval(function(){e()},100),n=this},testSimilarity:function(){return s.compareTwoStrings(this.givenSentence,this.answer)}}}},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(335),r=n.n(s),a=n(334),i=n.n(a);t.default={components:{TextInput:r.a,Chart:i.a},data:function(){return{dataLength:this.$store.state.accuracyRecord.length,showChart:!0}},methods:{toggleChart:function(e){console.log(this.dataLength,"data"),console.log(this.showChart,"chart"),this.showChart=e}}}},226:function(e,t){},227:function(e,t){},228:function(e,t){},229:function(e,t){},325:function(e,t,n){function s(e){return n(r(e))}function r(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./af":55,"./af.js":55,"./ar":62,"./ar-dz":56,"./ar-dz.js":56,"./ar-kw":57,"./ar-kw.js":57,"./ar-ly":58,"./ar-ly.js":58,"./ar-ma":59,"./ar-ma.js":59,"./ar-sa":60,"./ar-sa.js":60,"./ar-tn":61,"./ar-tn.js":61,"./ar.js":62,"./az":63,"./az.js":63,"./be":64,"./be.js":64,"./bg":65,"./bg.js":65,"./bn":66,"./bn.js":66,"./bo":67,"./bo.js":67,"./br":68,"./br.js":68,"./bs":69,"./bs.js":69,"./ca":70,"./ca.js":70,"./cs":71,"./cs.js":71,"./cv":72,"./cv.js":72,"./cy":73,"./cy.js":73,"./da":74,"./da.js":74,"./de":77,"./de-at":75,"./de-at.js":75,"./de-ch":76,"./de-ch.js":76,"./de.js":77,"./dv":78,"./dv.js":78,"./el":79,"./el.js":79,"./en-au":80,"./en-au.js":80,"./en-ca":81,"./en-ca.js":81,"./en-gb":82,"./en-gb.js":82,"./en-ie":83,"./en-ie.js":83,"./en-nz":84,"./en-nz.js":84,"./eo":85,"./eo.js":85,"./es":87,"./es-do":86,"./es-do.js":86,"./es.js":87,"./et":88,"./et.js":88,"./eu":89,"./eu.js":89,"./fa":90,"./fa.js":90,"./fi":91,"./fi.js":91,"./fo":92,"./fo.js":92,"./fr":95,"./fr-ca":93,"./fr-ca.js":93,"./fr-ch":94,"./fr-ch.js":94,"./fr.js":95,"./fy":96,"./fy.js":96,"./gd":97,"./gd.js":97,"./gl":98,"./gl.js":98,"./gom-latn":99,"./gom-latn.js":99,"./he":100,"./he.js":100,"./hi":101,"./hi.js":101,"./hr":102,"./hr.js":102,"./hu":103,"./hu.js":103,"./hy-am":104,"./hy-am.js":104,"./id":105,"./id.js":105,"./is":106,"./is.js":106,"./it":107,"./it.js":107,"./ja":108,"./ja.js":108,"./jv":109,"./jv.js":109,"./ka":110,"./ka.js":110,"./kk":111,"./kk.js":111,"./km":112,"./km.js":112,"./kn":113,"./kn.js":113,"./ko":114,"./ko.js":114,"./ky":115,"./ky.js":115,"./lb":116,"./lb.js":116,"./lo":117,"./lo.js":117,"./lt":118,"./lt.js":118,"./lv":119,"./lv.js":119,"./me":120,"./me.js":120,"./mi":121,"./mi.js":121,"./mk":122,"./mk.js":122,"./ml":123,"./ml.js":123,"./mr":124,"./mr.js":124,"./ms":126,"./ms-my":125,"./ms-my.js":125,"./ms.js":126,"./my":127,"./my.js":127,"./nb":128,"./nb.js":128,"./ne":129,"./ne.js":129,"./nl":131,"./nl-be":130,"./nl-be.js":130,"./nl.js":131,"./nn":132,"./nn.js":132,"./pa-in":133,"./pa-in.js":133,"./pl":134,"./pl.js":134,"./pt":136,"./pt-br":135,"./pt-br.js":135,"./pt.js":136,"./ro":137,"./ro.js":137,"./ru":138,"./ru.js":138,"./sd":139,"./sd.js":139,"./se":140,"./se.js":140,"./si":141,"./si.js":141,"./sk":142,"./sk.js":142,"./sl":143,"./sl.js":143,"./sq":144,"./sq.js":144,"./sr":146,"./sr-cyrl":145,"./sr-cyrl.js":145,"./sr.js":146,"./ss":147,"./ss.js":147,"./sv":148,"./sv.js":148,"./sw":149,"./sw.js":149,"./ta":150,"./ta.js":150,"./te":151,"./te.js":151,"./tet":152,"./tet.js":152,"./th":153,"./th.js":153,"./tl-ph":154,"./tl-ph.js":154,"./tlh":155,"./tlh.js":155,"./tr":156,"./tr.js":156,"./tzl":157,"./tzl.js":157,"./tzm":159,"./tzm-latn":158,"./tzm-latn.js":158,"./tzm.js":159,"./uk":160,"./uk.js":160,"./ur":161,"./ur.js":161,"./uz":163,"./uz-latn":162,"./uz-latn.js":162,"./uz.js":163,"./vi":164,"./vi.js":164,"./x-pseudo":165,"./x-pseudo.js":165,"./yo":166,"./yo.js":166,"./zh-cn":167,"./zh-cn.js":167,"./zh-hk":168,"./zh-hk.js":168,"./zh-tw":169,"./zh-tw.js":169};s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id=325},333:function(e,t,n){n(229);var s=n(21)(null,n(339),null,null);e.exports=s.exports},334:function(e,t,n){n(226);var s=n(21)(n(177),null,null,null);e.exports=s.exports},335:function(e,t,n){n(228);var s=n(21)(n(178),n(338),null,null);e.exports=s.exports},336:function(e,t,n){n(227);var s=n(21)(n(179),n(337),null,null);e.exports=s.exports},337:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[e._m(0),e._v(" "),n("div",{staticClass:"container",staticStyle:{width:"900px",margin:"0 auto"}},[n("text-input",{on:{inPlay:e.toggleChart}}),e._v(" "),n("br"),e._v(" "),1==e.showChart?n("chart",{attrs:{beginzero:!0,width:300,height:120}}):e._e()],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-bar"},[n("h1",[e._v("RightQuick")])])}]}},338:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"body"},on:{keyup:function(t){e.start(t)}}},[n("div",{attrs:{id:"sentenceContainer"},model:{value:e.givenSentence,callback:function(t){e.givenSentence=t},expression:"givenSentence"}}),e._v(" "),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],staticClass:"text-input",attrs:{spellcheck:"false",autocomplete:"off",id:"inputText",name:"name",rows:"1",cols:"50",autofocus:""},domProps:{value:e.answer},on:{input:function(t){t.target.composing||(e.answer=t.target.value)}}}),e._v(" "),n("div",{staticStyle:{"text-align":"center"},attrs:{id:"enterContainer"}},[e._v("Press enter to start")])])},staticRenderFns:[]}},339:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},345:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=(n(173),n(172));n(174),s.a.$mount("#app")}},[345]);
//# sourceMappingURL=client.b299b676.js.map