(function(e){function t(t){for(var r,i,o=t[0],u=t[1],l=t[2],s=0,d=[];s<o.length;s++)i=o[s],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);b&&b(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},c={app:0},a=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b995a":"f39d1c4b"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(e);var l=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}c[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/elementary-cellular-automaton/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var b=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0493":function(e,t,n){"use strict";n("fcde")},"29c9":function(e,t,n){"use strict";n("499c")},"3b04":function(e,t,n){},"499c":function(e,t,n){},"6d59":function(e,t,n){},8169:function(e,t,n){"use strict";n("b096")},9224:function(e){e.exports=JSON.parse('{"a":"1.1.0"}')},"9cb6":function(e,t,n){"use strict";n("f84a")},b096:function(e,t,n){},c208:function(e,t,n){"use strict";n("6d59")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"el-box el-box--invert",ref:"header"},a={class:"el-center"},i={class:"el-box el-box--invert el-box--padding:s-1",ref:"footer"};function o(e,t,n,o,u,l){var s=Object(r["x"])("HeaderChildren"),b=Object(r["x"])("SketchIn"),d=Object(r["x"])("FooterChildren"),p=Object(r["x"])("Dialogs");return Object(r["q"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("header",c,[Object(r["i"])(s)],512),Object(r["g"])("main",a,[Object(r["i"])(b)]),Object(r["g"])("footer",i,[Object(r["i"])(d)],512),Object(r["i"])(p)],64)}n("3b04"),n("5b09"),n("30fe");var u={class:"header-children el-center"},l={class:"el-cluster el-cluster--justify:space-between",style:{width:"100%"}},s=Object(r["g"])("h1",null,"ECA",-1);function b(e,t,n,c,a,i){var o=Object(r["x"])("Statuses");return Object(r["q"])(),Object(r["f"])("div",u,[Object(r["g"])("div",l,[s,Object(r["i"])(o)])])}var d={id:"statuses",class:"el-cluster"};function p(e,t,n,c,a,i){var o=Object(r["x"])("Status");return Object(r["q"])(),Object(r["f"])("div",d,[Object(r["i"])(o,Object(r["m"])(Object(r["j"])(c.gen)),null,16),Object(r["i"])(o,Object(r["m"])(Object(r["j"])(c.state)),null,16),Object(r["i"])(o,Object(r["m"])(Object(r["j"])(c.rule)),null,16)])}var f,O,j=n("5502"),g=n("1da1"),v=n("ade3"),m=(n("96cf"),n("a4d3"),n("e01a"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0"),n("159b"),n("cb29"),n("a9e3"),n("d4ec")),h=n("bee2"),y=(n("d81d"),n("fd87"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),function(){function e(t,n,r,c){Object(m["a"])(this,e),this._rule=t,this._pattern=n,this._state=r,this._spaceSize=r.length,this._gen=c}return Object(h["a"])(e,[{key:"generate",value:function(){var t=this,n=this._state.map((function(e,n){var r,c;switch(t._pattern){case"periodic":r=function(e){return e>0?e-1:t._spaceSize-1},c=function(e){return(e+1)%t._spaceSize};break;case"reflective":r=function(e){return e>0?e-1:e},c=function(e){return e+1!==t._spaceSize?(e+1)%t._spaceSize:e};break}var a=t._state[r(n)],i=e,o=t._state[c(n)],u=Math.pow(2,2)*a+Math.pow(2,1)*i+Math.pow(2,0)*o;return t._rule>>u&1?1:0}));return this._state=n,this._gen++,new e(this._rule,this._pattern,this._state,this._gen)}},{key:"state",get:function(){return this._state}},{key:"gen",get:function(){return this._gen}}]),e}()),k=function(e,t,n,r){var c=new Int8Array(t);switch(n){case"single":c[~~(t/2)]=1;break;case"random":c=c.map((function(){return Math.floor(2*Math.random())}));break}return new y(e,r||"periodic",c,1)},S=Symbol(),w={Gen:"Gen",RuleType:"RuleType",RuleNumber:"RuleNumber",InitialState:"InitialState",OpenDialog:"OpenDialog"},I={UpdateGen:"UpdateGen",UpdateRuleType:"UpdateRuleType",InputRuleNumber:"InputRuleNumber",UpdateInitialState:"UpdateInitialState",OpenDialog:"OpenDialog"},_={ShowModal:"ShowModal",CloseModal:"CloseModal",Sketch:"Sketch"},x=Object(j["a"])({state:{gen:0,ruleType:"random",ruleNumber:"30",initialState:"single",openDialog:"none"},getters:(f={},Object(v["a"])(f,w.Gen,(function(e){return e.gen.toString()})),Object(v["a"])(f,w.RuleType,(function(e){return e.ruleType})),Object(v["a"])(f,w.RuleNumber,(function(e){return e.ruleNumber})),Object(v["a"])(f,w.InitialState,(function(e){return e.initialState})),Object(v["a"])(f,w.OpenDialog,(function(e){return e.openDialog})),f),mutations:(O={},Object(v["a"])(O,I.UpdateGen,(function(e,t){e.gen=t})),Object(v["a"])(O,I.UpdateRuleType,(function(e,t){e.ruleType=t})),Object(v["a"])(O,I.InputRuleNumber,(function(e,t){e.ruleNumber=t})),Object(v["a"])(O,I.UpdateInitialState,(function(e,t){e.initialState=t})),Object(v["a"])(O,I.OpenDialog,(function(e,t){e.openDialog=t})),O),actions:Object(v["a"])({},_.Sketch,(function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function r(){var c,a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return c=e.commit,a=e.state,r.next=3,n.e("chunk-2d0b995a").then(n.t.bind(null,"3425",7));case 3:return r.next=5,r.sent.default;case 5:i=r.sent,new i((function(e){var n,r,i,o=8,u=function(t,n){t.forEach((function(t,r){1===t&&e.fill("#00933B").rect(r*o,(n-1)*o,o,o)}))},l=function(){var c=t.clientWidth,a=t.clientHeight;n=Math.floor(c/o),r=Math.floor(a/o)-1,e.createCanvas(c,a).style("display","block").style("cursor","pointer")},s=function(){e.clear(),"random"===a.ruleType&&c(I.InputRuleNumber,Math.floor(256*Math.random()).toString()),i=k(Number(a.ruleNumber),n,a.initialState),u(i.state,i.gen),c(I.UpdateGen,i.gen),e.removeElements(),e.loop()};e.setup=function(){var n;l(),e.createDiv("CLICK/TOUCH HERE TO START!").style("position","absolute").style("color","var(--color-white)").style("text-align","center").style("cursor","pointer"),null===(n=e.select("#".concat(t.id)))||void 0===n||n.mouseClicked(s)},e.draw=function(){if(!i||i.gen>r)return e.noLoop();i=i.generate(),u(i.state,i.gen),c(I.UpdateGen,i.gen)},e.windowResized=function(){setTimeout((function(){e.noLoop(),e.clear(),e.noCanvas(),l(),c(I.UpdateGen,0)}),0)}}),t);case 7:case"end":return r.stop()}}),r)})))()})),modules:{}});function R(e,t,n,c,a,i){return Object(r["q"])(),Object(r["f"])("span",{class:"status el-box el-box--invert el-box--padding:0 nes-text",style:Object(r["n"])(n.highlight?"z-index: var(--zIndex-highlight)":"")},[Object(r["g"])("div",{class:"el-center el-center--gutters:s-1",style:Object(r["n"])(c.clickable?"cursor: pointer":""),onClick:t[0]||(t[0]=function(t){return e.$emit("onclick")})},[Object(r["g"])("div",null,Object(r["y"])(n.title),1),Object(r["g"])("div",null,Object(r["y"])(n.content),1)],4)],4)}var C={name:"Status",emits:["onclick"],props:{title:String,content:String,highlight:Boolean},setup:function(e,t){var n=t.attrs;return{clickable:Object(r["u"])(void 0!==n.onclick)}}},T=(n("0493"),n("6b0d")),D=n.n(T);const q=D()(C,[["render",R],["__scopeId","data-v-7c32be14"]]);var N=q,M={name:"ECA",components:{Status:N},setup:function(){var e=Object(j["b"])(S),t=Object(r["t"])({title:"GEN",content:Object(r["b"])((function(){return e.getters[w.Gen]}))}),n=Object(r["t"])({title:"STATE",content:Object(r["b"])((function(){return e.getters[w.InitialState].toUpperCase()})),highlight:Object(r["b"])((function(){return"state"===e.getters[w.OpenDialog]})),onclick:function(){return e.commit(I.OpenDialog,"state")}}),c=Object(r["t"])({title:"RULE",content:Object(r["b"])((function(){return e.getters[w.RuleNumber]})),highlight:Object(r["b"])((function(){return"rule"===e.getters[w.OpenDialog]})),onclick:function(){return e.commit(I.OpenDialog,"rule")}});return{state:n,gen:t,rule:c}}};const U=D()(M,[["render",p]]);var E=U,G={components:{Statuses:E},name:"FooterChildren"};const A=D()(G,[["render",b]]);var L=A,P={id:"sketchIn",ref:"sketchIn"};function z(e,t,n,c,a,i){return Object(r["q"])(),Object(r["f"])("div",P,null,512)}var H={name:"SketchIn",setup:function(){var e=Object(j["b"])(S),t=Object(r["u"])(null);return Object(r["p"])(Object(g["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.dispatch(_.Sketch,t.value);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))),{sketchIn:t}}};n("9cb6");const $=D()(H,[["render",z],["__scopeId","data-v-415a49b3"]]);var B=$,F={class:"footer-children el-center"},J=Object(r["g"])("small",null,"© 2022 l1ck0h",-1);function K(e,t,n,c,a,i){var o=Object(r["x"])("Links");return Object(r["q"])(),Object(r["f"])("div",F,[Object(r["g"])("small",null,[Object(r["i"])(o,{items:c.linksItems},null,8,["items"]),Object(r["h"])(" version "+Object(r["y"])(c.version),1)]),J])}var W=n("9224"),Q=["href"];function V(e,t,n,c,a,i){return Object(r["q"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(n.items,(function(e,t){return Object(r["q"])(),Object(r["f"])(r["a"],{key:t},[Object(r["g"])("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},Object(r["y"])(e.label),9,Q),Object(r["h"])(Object(r["y"])(t!==n.items.length-1?" | ":""),1)],64)})),128)}var X={name:"Links",props:{items:Array}};n("fecc");const Y=D()(X,[["render",V],["__scopeId","data-v-753b0f6b"]]);var Z=Y,ee={name:"FooterChildren",components:{Links:Z},setup:function(){var e=Object(r["t"])([{label:"GitHub",url:"https://github.com/l1ck0h/elementary-cellular-automaton"}]);return{linksItems:e,version:W["a"]}}};const te=D()(ee,[["render",K]]);var ne=te;function re(e,t,n,c,a,i){var o=Object(r["x"])("InputRange"),u=Object(r["x"])("Setting"),l=Object(r["x"])("Dialog");return Object(r["q"])(),Object(r["f"])(r["a"],null,["rule"===c.openDialog?(Object(r["q"])(),Object(r["d"])(l,{key:0,onClose:c.close},{default:Object(r["A"])((function(){return[Object(r["i"])(u,Object(r["m"])(Object(r["j"])(c.ruleGroup)),{default:Object(r["A"])((function(){return[Object(r["i"])(o,Object(r["m"])(Object(r["j"])(c.writeIn)),null,16)]})),_:1},16)]})),_:1},8,["onClose"])):Object(r["e"])("",!0),"state"===c.openDialog?(Object(r["q"])(),Object(r["d"])(l,{key:1,onClose:c.close},{default:Object(r["A"])((function(){return[Object(r["i"])(u,Object(r["m"])(Object(r["j"])(c.stateGroup)),null,16)]})),_:1},8,["onClose"])):Object(r["e"])("",!0)],64)}var ce={class:"el-imposter"};function ae(e,t,n,c,a,i){return Object(r["q"])(),Object(r["f"])("div",{class:"overlay",onClick:t[2]||(t[2]=Object(r["B"])((function(t){return e.$emit("close")}),["self"]))},[Object(r["g"])("div",ce,[Object(r["g"])("div",{class:"dialog",onClick:t[1]||(t[1]=Object(r["B"])((function(t){return e.$emit("close")}),["self"]))},[Object(r["g"])("i",{class:"nes-icon close is-small",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})}),Object(r["w"])(e.$slots,"default",{},void 0,!0)])])])}var ie={name:"Dialog",emits:["close"]};n("c208");const oe=D()(ie,[["render",ae],["__scopeId","data-v-10d32732"]]);var ue=oe;function le(e,t,n,c,a,i){return Object(r["q"])(),Object(r["f"])("input",Object(r["l"])({class:"input-range",type:"range"},n.attrs,{onInput:t[0]||(t[0]=function(){return e.oninput&&e.oninput.apply(e,arguments)})}),null,16)}var se={name:"InputRange",emits:["oninput"],props:{attrs:{type:Object,required:!1}}};const be=D()(se,[["render",le]]);var de=be,pe=(n("b0c0"),{class:"setting nes-container is-rounded with-title is-dark"}),fe={class:"title"},Oe={class:"el-center"},je={class:"el-box el-box--invert"},ge={class:"el-stack",style:{"--space":"var(--s-1)"}},ve=["name","value","checked"],me={style:{cursor:"pointer"}};function he(e,t,n,c,a,i){return Object(r["q"])(),Object(r["f"])("div",pe,[Object(r["g"])("span",fe,Object(r["y"])(n.title),1),Object(r["g"])("div",Oe,[Object(r["g"])("div",je,[Object(r["g"])("div",ge,[(Object(r["q"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(n.items,(function(c,a){return Object(r["q"])(),Object(r["f"])("label",{key:a,class:"el-stack"},[Object(r["g"])("input",{type:"radio",class:"nes-radio is-dark",name:n.name,value:c.value,checked:c.checked,onChange:t[0]||(t[0]=function(t){return e.$emit("onchange")})},null,40,ve),Object(r["g"])("span",me,Object(r["y"])(c.value),1),c.writeIn?Object(r["w"])(e.$slots,"default",{key:0},void 0,!0):Object(r["e"])("",!0)])})),128))])])])])}var ye={name:"Setting",emits:["onchange"],props:{title:{type:String,required:!0},attention:{type:String,required:!1},name:{type:String,required:!0},items:Array}};n("29c9");const ke=D()(ye,[["render",he],["__scopeId","data-v-cc6705ca"]]);var Se=ke,we={name:"Dialogs",components:{Dialog:ue,InputRange:de,Setting:Se},setup:function(){var e=Object(j["b"])(S),t=Object(r["b"])((function(){return e.getters[w.OpenDialog]})),n=function(){return e.commit(I.OpenDialog,"none")},c=Object(r["t"])({title:"RULE",name:"rule-select",items:[{value:"RANDOM",checked:Object(r["b"])((function(){return"random"===e.getters[w.RuleType]}))},{value:"INPUT",checked:Object(r["b"])((function(){return"input"===e.getters[w.RuleType]})),writeIn:!0}],onchange:function(t){var n=t.target.value;e.commit(I.UpdateRuleType,n.toLowerCase())}}),a=Object(r["t"])({attrs:{min:"0",max:"255",disabled:Object(r["b"])((function(){return"random"===e.getters[w.RuleType]})),value:Object(r["b"])((function(){return e.getters[w.RuleNumber]}))},oninput:function(t){return e.commit(I.InputRuleNumber,t.target.value)}}),i=Object(r["t"])({title:"STATE",name:"state-select",items:[{value:"SINGLE",checked:Object(r["b"])((function(){return"single"===e.getters[w.InitialState]}))},{value:"RANDOM",checked:Object(r["b"])((function(){return"random"===e.getters[w.InitialState]})),writeIn:!1}],onchange:function(t){var n=t.target.value;e.commit(I.UpdateInitialState,n.toLowerCase())}});return{openDialog:t,close:n,ruleGroup:c,writeIn:a,stateGroup:i}}};const Ie=D()(we,[["render",re]]);var _e=Ie,xe={name:"App",components:{HeaderChildren:L,SketchIn:B,FooterChildren:ne,Dialogs:_e},setup:function(){var e=Object(r["u"])(null),t=document.getElementById("app"),n=Object(r["u"])(null),c=function(e,n,r){return null===t||void 0===t?void 0:t.style.setProperty(e,n,r)},a=function(){var t,r;c("--vh","".concat(.01*window.innerHeight,"px")),c("--space-top","".concat(null===(t=e.value)||void 0===t?void 0:t.clientHeight,"px")),c("--space-bottom","".concat(null===(r=n.value)||void 0===r?void 0:r.clientHeight,"px"))};return Object(r["p"])((function(){window.addEventListener("resize",a),a()})),Object(r["o"])((function(){return window.removeEventListener("resize",a)})),{header:e,footer:n}}};n("8169");const Re=D()(xe,[["render",o]]);var Ce=Re;Object(r["c"])(Ce).use(x,S).mount("#app")},dd61:function(e,t,n){},f84a:function(e,t,n){},fcde:function(e,t,n){},fecc:function(e,t,n){"use strict";n("dd61")}});
//# sourceMappingURL=app.2c3902ac.js.map