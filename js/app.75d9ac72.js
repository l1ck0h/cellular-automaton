(function(e){function t(t){for(var r,i,a=t[0],u=t[1],l=t[2],s=0,d=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function i(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b995a":"f39d1c4b","chunk-cf9fd38c":"04d1b9db"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=i(e);var l=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}c[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/elementary-cellular-automaton/",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var b=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0493":function(e,t,n){"use strict";n("fcde")},"29c9":function(e,t,n){"use strict";n("499c")},"3b04":function(e,t,n){},"499c":function(e,t,n){},"6d59":function(e,t,n){},8169:function(e,t,n){"use strict";n("b096")},9224:function(e){e.exports=JSON.parse('{"a":"1.1.0"}')},"9cb6":function(e,t,n){"use strict";n("f84a")},b096:function(e,t,n){},c208:function(e,t,n){"use strict";n("6d59")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"el-box el-box--invert",ref:"header"},o={class:"el-center"},i={class:"el-box el-box--invert el-box--padding:s-1",ref:"footer"};function a(e,t,n,a,u,l){var s=Object(r["x"])("HeaderChildren"),b=Object(r["x"])("SketchIn"),d=Object(r["x"])("FooterChildren"),p=Object(r["x"])("Dialogs");return Object(r["q"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("header",c,[Object(r["i"])(s)],512),Object(r["g"])("main",o,[Object(r["i"])(b)]),Object(r["g"])("footer",i,[Object(r["i"])(d)],512),Object(r["i"])(p)],64)}n("3b04"),n("5b09"),n("30fe");var u={class:"header-children el-center"},l={class:"el-cluster el-cluster--justify:space-between",style:{width:"100%"}},s=Object(r["g"])("h1",null,"ECA",-1);function b(e,t,n,c,o,i){var a=Object(r["x"])("Statuses");return Object(r["q"])(),Object(r["f"])("div",u,[Object(r["g"])("div",l,[s,Object(r["i"])(a)])])}var d={id:"statuses",class:"el-cluster"};function p(e,t,n,c,o,i){var a=Object(r["x"])("Status");return Object(r["q"])(),Object(r["f"])("div",d,[Object(r["i"])(a,Object(r["m"])(Object(r["j"])(c.gen)),null,16),Object(r["i"])(a,Object(r["m"])(Object(r["j"])(c.state)),null,16),Object(r["i"])(a,Object(r["m"])(Object(r["j"])(c.rule)),null,16)])}var f,O,j=n("5502"),g=n("1da1"),v=n("ade3"),m=(n("96cf"),n("a4d3"),n("e01a"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0"),n("159b"),n("cb29"),n("a9e3"),Symbol()),h={Gen:"Gen",RuleType:"RuleType",RuleNumber:"RuleNumber",InitialState:"InitialState",OpenDialog:"OpenDialog"},y={UpdateGen:"UpdateGen",UpdateRuleType:"UpdateRuleType",InputRuleNumber:"InputRuleNumber",UpdateInitialState:"UpdateInitialState",OpenDialog:"OpenDialog"},k={ShowModal:"ShowModal",CloseModal:"CloseModal",Sketch:"Sketch"},S=Object(j["a"])({state:{gen:0,ruleType:"random",ruleNumber:"30",initialState:"single",openDialog:"none"},getters:(f={},Object(v["a"])(f,h.Gen,(function(e){return e.gen.toString()})),Object(v["a"])(f,h.RuleType,(function(e){return e.ruleType})),Object(v["a"])(f,h.RuleNumber,(function(e){return e.ruleNumber})),Object(v["a"])(f,h.InitialState,(function(e){return e.initialState})),Object(v["a"])(f,h.OpenDialog,(function(e){return e.openDialog})),f),mutations:(O={},Object(v["a"])(O,y.UpdateGen,(function(e,t){e.gen=t})),Object(v["a"])(O,y.UpdateRuleType,(function(e,t){e.ruleType=t})),Object(v["a"])(O,y.InputRuleNumber,(function(e,t){e.ruleNumber=t})),Object(v["a"])(O,y.UpdateInitialState,(function(e,t){e.initialState=t})),Object(v["a"])(O,y.OpenDialog,(function(e,t){e.openDialog=t})),O),actions:Object(v["a"])({},k.Sketch,(function(e,t){return Object(g["a"])(regeneratorRuntime.mark((function r(){var c,o,i,a,u,l,s,b,d;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return c=e.commit,o=e.state,r.next=3,n.e("chunk-2d0b995a").then(n.t.bind(null,"3425",7));case 3:return r.next=5,r.sent.default;case 5:return i=r.sent,r.next=8,n.e("chunk-cf9fd38c").then(n.bind(null,"5c08"));case 8:return r.next=10,r.sent;case 10:a=r.sent,u=a.create,l=8,new i((function(e){var n=function(t,n){t.forEach((function(t,r){1===t&&e.fill("#00933B").rect(r*l,(n-1)*l,l,l)}))},r=function(){var n=t.clientWidth,r=t.clientHeight;s=Math.floor(n/l),b=Math.floor(r/l)-1,e.createCanvas(n,r).style("display","block").style("cursor","pointer")},i=function(){e.clear(),"random"===o.ruleType&&c(y.InputRuleNumber,Math.floor(256*Math.random()).toString()),d=u(Number(o.ruleNumber),s,o.initialState),n(d.state,d.gen),c(y.UpdateGen,d.gen),e.removeElements(),e.loop()};e.setup=function(){var n;r(),e.createDiv("CLICK/TOUCH HERE TO START!").style("position","absolute").style("color","var(--color-white)").style("text-align","center").style("cursor","pointer"),null===(n=e.select("#".concat(t.id)))||void 0===n||n.mouseClicked(i)},e.draw=function(){if(!d||d.gen>b)return e.noLoop();d=d.generate(),n(d.state,d.gen),c(y.UpdateGen,d.gen)},e.windowResized=function(){setTimeout((function(){e.noLoop(),e.clear(),e.noCanvas(),r(),c(y.UpdateGen,0)}),0)}}),t);case 14:case"end":return r.stop()}}),r)})))()})),modules:{}});function w(e,t,n,c,o,i){return Object(r["q"])(),Object(r["f"])("span",{class:"status el-box el-box--invert el-box--padding:0 nes-text",style:Object(r["n"])(n.highlight?"z-index: var(--zIndex-highlight)":"")},[Object(r["g"])("div",{class:"el-center el-center--gutters:s-1",style:Object(r["n"])(c.clickable?"cursor: pointer":""),onClick:t[0]||(t[0]=function(t){return e.$emit("onclick")})},[Object(r["g"])("div",null,Object(r["y"])(n.title),1),Object(r["g"])("div",null,Object(r["y"])(n.content),1)],4)],4)}var x={name:"Status",emits:["onclick"],props:{title:String,content:String,highlight:Boolean},setup:function(e,t){var n=t.attrs;return{clickable:Object(r["u"])(void 0!==n.onclick)}}},I=(n("0493"),n("6b0d")),R=n.n(I);const C=R()(x,[["render",w],["__scopeId","data-v-7c32be14"]]);var T=C,D={name:"ECA",components:{Status:T},setup:function(){var e=Object(j["b"])(m),t=Object(r["t"])({title:"GEN",content:Object(r["b"])((function(){return e.getters[h.Gen]}))}),n=Object(r["t"])({title:"STATE",content:Object(r["b"])((function(){return e.getters[h.InitialState].toUpperCase()})),highlight:Object(r["b"])((function(){return"state"===e.getters[h.OpenDialog]})),onclick:function(){return e.commit(y.OpenDialog,"state")}}),c=Object(r["t"])({title:"RULE",content:Object(r["b"])((function(){return e.getters[h.RuleNumber]})),highlight:Object(r["b"])((function(){return"rule"===e.getters[h.OpenDialog]})),onclick:function(){return e.commit(y.OpenDialog,"rule")}});return{state:n,gen:t,rule:c}}};const q=R()(D,[["render",p]]);var N=q,_={components:{Statuses:N},name:"FooterChildren"};const U=R()(_,[["render",b]]);var E=U,G={id:"sketchIn",ref:"sketchIn"};function L(e,t,n,c,o,i){return Object(r["q"])(),Object(r["f"])("div",G,null,512)}var A={name:"SketchIn",setup:function(){var e=Object(j["b"])(m),t=Object(r["u"])(null);return Object(r["p"])(Object(g["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.dispatch(k.Sketch,t.value);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))),{sketchIn:t}}};n("9cb6");const M=R()(A,[["render",L],["__scopeId","data-v-415a49b3"]]);var P=M,H={class:"footer-children el-center"},$=Object(r["g"])("small",null,"© 2022 l1ck0h",-1);function z(e,t,n,c,o,i){var a=Object(r["x"])("Links");return Object(r["q"])(),Object(r["f"])("div",H,[Object(r["g"])("small",null,[Object(r["i"])(a,{items:c.linksItems},null,8,["items"]),Object(r["h"])(" version "+Object(r["y"])(c.version),1)]),$])}var B=n("9224"),F=["href"];function J(e,t,n,c,o,i){return Object(r["q"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(n.items,(function(e,t){return Object(r["q"])(),Object(r["f"])(r["a"],{key:t},[Object(r["g"])("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},Object(r["y"])(e.label),9,F),Object(r["h"])(Object(r["y"])(t!==n.items.length-1?" | ":""),1)],64)})),128)}var K={name:"Links",props:{items:Array}};n("fecc");const W=R()(K,[["render",J],["__scopeId","data-v-753b0f6b"]]);var Q=W,V={name:"FooterChildren",components:{Links:Q},setup:function(){var e=Object(r["t"])([{label:"GitHub",url:"https://github.com/l1ck0h/elementary-cellular-automaton"}]);return{linksItems:e,version:B["a"]}}};const X=R()(V,[["render",z]]);var Y=X;function Z(e,t,n,c,o,i){var a=Object(r["x"])("InputRange"),u=Object(r["x"])("Setting"),l=Object(r["x"])("Dialog");return Object(r["q"])(),Object(r["f"])(r["a"],null,["rule"===c.openDialog?(Object(r["q"])(),Object(r["d"])(l,{key:0,onClose:c.close},{default:Object(r["A"])((function(){return[Object(r["i"])(u,Object(r["m"])(Object(r["j"])(c.ruleGroup)),{default:Object(r["A"])((function(){return[Object(r["i"])(a,Object(r["m"])(Object(r["j"])(c.writeIn)),null,16)]})),_:1},16)]})),_:1},8,["onClose"])):Object(r["e"])("",!0),"state"===c.openDialog?(Object(r["q"])(),Object(r["d"])(l,{key:1,onClose:c.close},{default:Object(r["A"])((function(){return[Object(r["i"])(u,Object(r["m"])(Object(r["j"])(c.stateGroup)),null,16)]})),_:1},8,["onClose"])):Object(r["e"])("",!0)],64)}var ee={class:"el-imposter"};function te(e,t,n,c,o,i){return Object(r["q"])(),Object(r["f"])("div",{class:"overlay",onClick:t[2]||(t[2]=Object(r["B"])((function(t){return e.$emit("close")}),["self"]))},[Object(r["g"])("div",ee,[Object(r["g"])("div",{class:"dialog",onClick:t[1]||(t[1]=Object(r["B"])((function(t){return e.$emit("close")}),["self"]))},[Object(r["g"])("i",{class:"nes-icon close is-small",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})}),Object(r["w"])(e.$slots,"default",{},void 0,!0)])])])}var ne={name:"Dialog",emits:["close"]};n("c208");const re=R()(ne,[["render",te],["__scopeId","data-v-10d32732"]]);var ce=re;function oe(e,t,n,c,o,i){return Object(r["q"])(),Object(r["f"])("input",Object(r["l"])({class:"input-range",type:"range"},n.attrs,{onInput:t[0]||(t[0]=function(){return e.oninput&&e.oninput.apply(e,arguments)})}),null,16)}var ie={name:"InputRange",emits:["oninput"],props:{attrs:{type:Object,required:!1}}};const ae=R()(ie,[["render",oe]]);var ue=ae,le=(n("b0c0"),{class:"setting nes-container is-rounded with-title is-dark"}),se={class:"title"},be={class:"el-center"},de={class:"el-box el-box--invert"},pe={class:"el-stack",style:{"--space":"var(--s-1)"}},fe=["name","value","checked"],Oe={style:{cursor:"pointer"}};function je(e,t,n,c,o,i){return Object(r["q"])(),Object(r["f"])("div",le,[Object(r["g"])("span",se,Object(r["y"])(n.title),1),Object(r["g"])("div",be,[Object(r["g"])("div",de,[Object(r["g"])("div",pe,[(Object(r["q"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(n.items,(function(c,o){return Object(r["q"])(),Object(r["f"])("label",{key:o,class:"el-stack"},[Object(r["g"])("input",{type:"radio",class:"nes-radio is-dark",name:n.name,value:c.value,checked:c.checked,onChange:t[0]||(t[0]=function(t){return e.$emit("onchange")})},null,40,fe),Object(r["g"])("span",Oe,Object(r["y"])(c.value),1),c.writeIn?Object(r["w"])(e.$slots,"default",{key:0},void 0,!0):Object(r["e"])("",!0)])})),128))])])])])}var ge={name:"Setting",emits:["onchange"],props:{title:{type:String,required:!0},attention:{type:String,required:!1},name:{type:String,required:!0},items:Array}};n("29c9");const ve=R()(ge,[["render",je],["__scopeId","data-v-cc6705ca"]]);var me=ve,he={name:"Dialogs",components:{Dialog:ce,InputRange:ue,Setting:me},setup:function(){var e=Object(j["b"])(m),t=Object(r["b"])((function(){return e.getters[h.OpenDialog]})),n=function(){return e.commit(y.OpenDialog,"none")},c=Object(r["t"])({title:"RULE",name:"rule-select",items:[{value:"RANDOM",checked:Object(r["b"])((function(){return"random"===e.getters[h.RuleType]}))},{value:"INPUT",checked:Object(r["b"])((function(){return"input"===e.getters[h.RuleType]})),writeIn:!0}],onchange:function(t){var n=t.target.value;e.commit(y.UpdateRuleType,n.toLowerCase())}}),o=Object(r["t"])({attrs:{min:"0",max:"255",disabled:Object(r["b"])((function(){return"random"===e.getters[h.RuleType]})),value:Object(r["b"])((function(){return e.getters[h.RuleNumber]}))},oninput:function(t){return e.commit(y.InputRuleNumber,t.target.value)}}),i=Object(r["t"])({title:"STATE",name:"state-select",items:[{value:"SINGLE",checked:Object(r["b"])((function(){return"single"===e.getters[h.InitialState]}))},{value:"RANDOM",checked:Object(r["b"])((function(){return"random"===e.getters[h.InitialState]})),writeIn:!1}],onchange:function(t){var n=t.target.value;e.commit(y.UpdateInitialState,n.toLowerCase())}});return{openDialog:t,close:n,ruleGroup:c,writeIn:o,stateGroup:i}}};const ye=R()(he,[["render",Z]]);var ke=ye,Se={name:"App",components:{HeaderChildren:E,SketchIn:P,FooterChildren:Y,Dialogs:ke},setup:function(){var e=Object(r["u"])(null),t=document.getElementById("app"),n=Object(r["u"])(null),c=function(e,n,r){return null===t||void 0===t?void 0:t.style.setProperty(e,n,r)},o=function(){var t,r;c("--vh","".concat(.01*window.innerHeight,"px")),c("--space-top","".concat(null===(t=e.value)||void 0===t?void 0:t.clientHeight,"px")),c("--space-bottom","".concat(null===(r=n.value)||void 0===r?void 0:r.clientHeight,"px"))};return Object(r["p"])((function(){window.addEventListener("resize",o),o()})),Object(r["o"])((function(){return window.removeEventListener("resize",o)})),{header:e,footer:n}}};n("8169");const we=R()(Se,[["render",a]]);var xe=we;Object(r["c"])(xe).use(S,m).mount("#app")},dd61:function(e,t,n){},f84a:function(e,t,n){},fcde:function(e,t,n){},fecc:function(e,t,n){"use strict";n("dd61")}});
//# sourceMappingURL=app.75d9ac72.js.map