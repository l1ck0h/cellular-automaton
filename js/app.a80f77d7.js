(function(e){function t(t){for(var a,i,u=t[0],o=t[1],s=t[2],l=0,b=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==c[o]&&(a=!1)}a&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},c={app:0},r=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b995a":"f39d1c4b","chunk-2d2086a6":"f93a0777"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=c[e]=[t,a]}));t.push(n[2]=a);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,u.nc&&o.setAttribute("nonce",u.nc),o.src=i(e);var s=new Error;r=function(t){o.onerror=o.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",s.name="ChunkLoadError",s.type=a,s.request=r,n[1](s)}c[e]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/elementary-cellular-automaton/",u.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a41":function(e,t,n){},"0a9c":function(e,t,n){"use strict";n("9635")},"0be3":function(e,t,n){},"0d0f":function(e,t,n){"use strict";n("0a41")},"0ddd":function(e,t,n){"use strict";n("2127")},2127:function(e,t,n){},"2f48":function(e,t,n){},"31c8":function(e,t,n){"use strict";n("482d")},3617:function(e,t,n){"use strict";n("2f48")},"382b":function(e,t,n){"use strict";n("534c")},"3f99":function(e,t,n){},4346:function(e,t,n){"use strict";n("8332")},4377:function(e,t,n){"use strict";n("6f79")},"482d":function(e,t,n){},"534c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(e,t,n,c,r,i){var u=Object(a["s"])("Main"),o=Object(a["s"])("Alert");return c.isMobileLandscape?(Object(a["l"])(),Object(a["d"])(o,{key:1})):(Object(a["l"])(),Object(a["d"])(u,{key:0}))}n("2ca0"),n("ac2f"),n("5b09"),n("30fe");function r(e,t,n,c,r,i){var u=Object(a["s"])("Status"),o=Object(a["s"])("Sketch"),s=Object(a["s"])("Menu"),l=Object(a["s"])("RuleDialog");return Object(a["l"])(),Object(a["e"])(a["a"],null,[Object(a["f"])("div",{class:Object(a["i"])(["Main",{"is-hidden":c.isMainHidden}])},[Object(a["g"])(u),Object(a["g"])(o),Object(a["g"])(s)],2),Object(a["g"])(l)],64)}var i=n("5502"),u={class:"Status is-dark"};function o(e,t,n,c,r,i){var o=Object(a["s"])("Gen"),s=Object(a["s"])("Rule"),l=Object(a["s"])("GitHubLink");return Object(a["l"])(),Object(a["e"])("div",u,[Object(a["g"])(o),Object(a["g"])(s),Object(a["g"])(l)])}function s(e,t,n,c,r,i){var u=Object(a["s"])("Text");return Object(a["l"])(),Object(a["d"])(u,{title:"GEN",content:c.gen},null,8,["content"])}var l={class:"Text nes-text"};function d(e,t,n,c,r,i){return Object(a["l"])(),Object(a["e"])("span",l,[Object(a["f"])("div",null,Object(a["t"])(n.title),1),Object(a["f"])("div",null,Object(a["t"])(n.content),1)])}n("a9e3");var b={name:"Text",props:{title:String,content:Number}},f=(n("4346"),n("6b0d")),O=n.n(f);const j=O()(b,[["render",d],["__scopeId","data-v-e0adf5a6"]]);var p=j,v="IsMainHidden",h="Mode",m="Rule",g="Gen",k={name:"Gen",components:{Text:p},setup:function(){var e=Object(i["b"])(),t=Object(a["b"])((function(){return e.getters[g]}));return{gen:t}}};const w=O()(k,[["render",s]]);var M=w;function R(e,t,n,c,r,i){var u=Object(a["s"])("Text");return Object(a["l"])(),Object(a["d"])(u,{title:"RULE",content:c.rule},null,8,["content"])}var S={name:"Rule",components:{Text:p},setup:function(){var e=Object(i["b"])(),t=Object(a["b"])((function(){return e.getters[m]}));return{rule:t}}};const y=O()(S,[["render",R]]);var _=y,E={class:"GitHubLink nes-icon github is-midium",href:"https://github.com/l1ck0h/elementary-cellular-automaton",target:"_blank",rel:"noopener noreferrer"};function x(e,t,n,c,r,i){return Object(a["l"])(),Object(a["e"])("a",E)}var T={name:"GitHubLink"};n("829d");const L=O()(T,[["render",x],["__scopeId","data-v-78608a37"]]);var A=L,C={name:"Status",components:{Gen:M,Rule:_,GitHubLink:A}};n("0a9c");const I=O()(C,[["render",o],["__scopeId","data-v-85d8a154"]]);var D=I,G={class:"Sketch",ref:"sketch"};function H(e,t,n,c,r,i){return Object(a["l"])(),Object(a["e"])("div",G,null,512)}var N=n("1da1"),P=(n("96cf"),"RegisterDialog"),W="ShowModal",U="CloseModal",V="SetMode",q="UpdateRule",J="UpdateGen",$="Sketch",z={name:"Sketch",setup:function(){var e=Object(i["b"])(),t=Object(a["p"])(null);return Object(a["k"])(Object(N["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.dispatch($,{node:t.value,startSelectors:"input[name='state-select']"});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))),{sketch:t}}};n("d0398");const B=O()(z,[["render",H],["__scopeId","data-v-277c31e6"]]);var K=B,Y={class:"Menu-inner"};function F(e,t,n,c,r,i){var u=Object(a["s"])("StateSelect"),o=Object(a["s"])("RuleSelect"),s=Object(a["s"])("Container");return Object(a["l"])(),Object(a["d"])(s,{class:"Menu",title:"ELEMENTARY CELLULAR AUTOMATON"},{default:Object(a["w"])((function(){return[Object(a["f"])("div",Y,[Object(a["g"])(u),Object(a["g"])(o)])]})),_:1})}var Q={class:"nes-container is-rounded with-title is-dark"},X={class:"title"};function Z(e,t,n,c,r,i){return Object(a["l"])(),Object(a["e"])("div",Q,[Object(a["f"])("span",X,Object(a["t"])(n.title),1),Object(a["r"])(e.$slots,"default")])}var ee={name:"Container",props:{title:String}};const te=O()(ee,[["render",Z]]);var ne=te,ae={class:"StateSelect-wrapper"};function ce(e,t,n,c,r,i){var u=Object(a["s"])("Radio"),o=Object(a["s"])("Container");return Object(a["l"])(),Object(a["d"])(o,{title:"STATE SELECT"},{default:Object(a["w"])((function(){return[Object(a["f"])("div",ae,[(Object(a["l"])(!0),Object(a["e"])(a["a"],null,Object(a["q"])(c.items,(function(e){return Object(a["l"])(),Object(a["d"])(u,{key:e.type,name:"state-select",label:e,value:e},null,8,["label","value"])})),128))])]})),_:1})}n("b0c0");var re={class:"Radio"},ie=["name","value","checked"],ue={class:"Radio-label"};function oe(e,t,n,c,r,i){return Object(a["l"])(),Object(a["e"])("label",re,[Object(a["f"])("input",{type:"radio",class:"Radio-input nes-radio is-dark",name:n.name,value:n.value,checked:n.checked,onClick:t[0]||(t[0]=function(){return e.$emit("click")})},null,8,ie),Object(a["f"])("span",ue,Object(a["t"])(n.label),1)])}var se={name:"Radio",emits:["click"],props:{label:String,name:String,value:String,checked:Boolean}};n("31c8");const le=O()(se,[["render",oe],["__scopeId","data-v-01ee26c9"]]);var de=le,be=n("7a88"),fe={name:"StateSelect",components:{Container:ne,Radio:de},setup:function(){var e=Object(a["p"])([be["default"].SINGLE_STATE,be["default"].RANDOM_STATE]);return{items:e}}};n("0ddd");const Oe=O()(fe,[["render",ce],["__scopeId","data-v-69e8ab3f"]]);var je=Oe,pe={class:"RuleSelect-wrapper"};function ve(e,t,n,c,r,i){var u=Object(a["s"])("Radio"),o=Object(a["s"])("Container");return Object(a["l"])(),Object(a["d"])(o,{class:"RuleSelect",title:"RULE SELECT"},{default:Object(a["w"])((function(){return[Object(a["f"])("div",pe,[(Object(a["l"])(!0),Object(a["e"])(a["a"],null,Object(a["q"])(c.items,(function(e){return Object(a["l"])(),Object(a["d"])(u,{key:e.value,name:"rule-select",label:e.value,value:e.value,checked:e.checked,onClick:e.event},null,8,["label","value","checked","onClick"])})),128))])]})),_:1})}n("7db0");var he={name:"RuleSelect",components:{Container:ne,Radio:de},setup:function(){var e=Object(i["b"])(),t=Object(a["p"])([{value:"RANDOM",checked:!0,event:function(){return e.dispatch(V,"random")}},{value:"INPUT",checked:!1,event:function(){return e.dispatch(W)}}]);return e.dispatch(V,t.value.find((function(e){return e.checked})).value),{items:t}}};n("977b");const me=O()(he,[["render",ve],["__scopeId","data-v-9f8bc380"]]);var ge=me,ke={name:"Menu",components:{Container:ne,StateSelect:je,RuleSelect:ge}};n("382b");const we=O()(ke,[["render",F],["__scopeId","data-v-286c330e"]]);var Me=we,Re=function(e){return Object(a["n"])("data-v-443ca278"),e=e(),Object(a["m"])(),e},Se={class:"RuleDialog nes-dialog is-rounded is-dark",ref:"ruleDialog"},ye={class:"nes-field"},_e=Re((function(){return Object(a["f"])("label",null,"RULE",-1)})),Ee={class:"RuleDialog-error nes-text is-error"},xe={class:"RuleDialog-btn-wrapper"};function Te(e,t,n,c,r,i){return Object(a["l"])(),Object(a["e"])("dialog",Se,[Object(a["f"])("div",ye,[_e,Object(a["f"])("input",{type:"text",ref:"inputRule",class:Object(a["i"])(["RuleDialog-input nes-input",c.hasSuccess?"is-dark":"is-error"]),placeholder:"RULE",minlength:"0",maxlength:"3",pattern:"[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",onInvalid:t[0]||(t[0]=function(){return c.errorHandler&&c.errorHandler.apply(c,arguments)})},null,34)]),Object(a["x"])(Object(a["f"])("div",Ee," from 0 to 255 ",512),[[a["u"],!c.hasSuccess]]),Object(a["f"])("div",xe,[Object(a["f"])("button",{type:"button",class:"RuleDialog-btn nes-btn",onClick:t[1]||(t[1]=function(){return c.closeModalWithValidator&&c.closeModalWithValidator.apply(c,arguments)})}," OK ")])],512)}n("d3b7"),n("3ca3"),n("ddb0");var Le={name:"RuleDialog",setup:function(){var e=Object(i["b"])(),t=Object(a["p"])(!0),c=Object(a["p"])(null),r=Object(a["p"])(null),u=function(){return t.value=!1},o=function(){var n=r.value;n.checkValidity()&&(t.value=!0,e.dispatch(U,n.value),n.value="")};return Object(a["k"])(Object(N["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.e("chunk-2d2086a6").then(n.bind(null,"a562"));case 2:return t.next=4,t.sent.default;case 4:a=t.sent,a.registerDialog(c.value),e.dispatch(P,c.value);case 7:case"end":return t.stop()}}),t)})))),{hasSuccess:t,inputRule:r,ruleDialog:c,closeModalWithValidator:o,errorHandler:u}}};n("4377");const Ae=O()(Le,[["render",Te],["__scopeId","data-v-443ca278"]]);var Ce=Ae,Ie={name:"Main",components:{Status:D,Sketch:K,Menu:Me,RuleDialog:Ce},setup:function(){var e=Object(i["b"])(),t=Object(a["b"])((function(){return e.getters[v]}));return{isMainHidden:t}}};n("620e");const De=O()(Ie,[["render",r],["__scopeId","data-v-02489cb2"]]);var Ge=De,He=function(e){return Object(a["n"])("data-v-d6d334a4"),e=e(),Object(a["m"])(),e},Ne={class:"Alert"},Pe=He((function(){return Object(a["f"])("p",{class:"nes-text is-warning"}," Sorry! Please rotate your smartphone from portrait to landscape! ",-1)})),We=[Pe];function Ue(e,t,n,c,r,i){return Object(a["l"])(),Object(a["e"])("div",Ne,We)}var Ve={name:"Alert"};n("0d0f");const qe=O()(Ve,[["render",Ue],["__scopeId","data-v-d6d334a4"]]);var Je=qe,$e={name:"App",components:{Main:Ge,Alert:Je},setup:function(){var e=Object(a["p"])(!0),t=window.screen.orientation,n=function(){e.value=t.type.startsWith("landscape")&&0!==t.angle};return Object(a["k"])((function(){n(),t.addEventListener("change",n)})),Object(a["j"])((function(){return t.removeEventListener("change",n)})),{isMobileLandscape:e}}};n("3617");const ze=O()($e,[["render",c]]);var Be,Ke,Ye=ze,Fe=n("3835"),Qe=n("ade3"),Xe=(n("159b"),n("cb29"),Object(i["a"])({state:{isMainHidden:!1,dialogElem:void 0,mode:"",rule:30,gen:0},getters:(Be={},Object(Qe["a"])(Be,v,(function(e){return e.isMainHidden})),Object(Qe["a"])(Be,h,(function(e){return e.mode})),Object(Qe["a"])(Be,m,(function(e){return e.rule})),Object(Qe["a"])(Be,g,(function(e){return e.gen})),Be),mutations:{isMainHidden:function(e){e.isMainHidden=!e.isMainHidden},registerDialog:function(e,t){e.dialogElem=t},setMode:function(e,t){e.mode=t.toLowerCase()},updateRule:function(e,t){e.rule=Number(""!==t?t:e.rule)},updateGen:function(e,t){e.gen=t}},actions:(Ke={},Object(Qe["a"])(Ke,P,(function(e,t){var n=e.commit;n("registerDialog",t)})),Object(Qe["a"])(Ke,W,(function(e){var t=e.commit,n=e.state;t("isMainHidden"),n.dialogElem.showModal()})),Object(Qe["a"])(Ke,U,(function(e,t){var n=e.commit,a=e.state;n("updateRule",t),n("setMode",t?"input":"random"),n("isMainHidden"),a.dialogElem.close()})),Object(Qe["a"])(Ke,V,(function(e,t){var n=e.commit;n("setMode",t)})),Object(Qe["a"])(Ke,q,(function(e,t){var n=e.commit;n("updateRule",t)})),Object(Qe["a"])(Ke,J,(function(e,t){var n=e.commit;n("updateGen",t)})),Object(Qe["a"])(Ke,$,(function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function a(){var c,r,i,u,o,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return c=e.commit,r=e.state,i=t.node,u=t.startSelectors,o=function(e){var t=2,a=0,o=0,s=void 0,l=function(){return Math.floor(256*Math.random())},d=function(n,a){n.forEach((function(n,c){1===n&&(e.fill("#58f898"),e.rect(c*t,(a-1)*t,t,t))}))},b=function(){var n=i.clientWidth,c=i.clientHeight;return a=n/t,o=e.round(c/t),[n,c]},f=function(){var t=Object(N["a"])(regeneratorRuntime.mark((function t(i){var u,o,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.clear(),t.next=3,Promise.resolve().then(n.bind(null,"7a88"));case 3:return t.next=5,t.sent.default;case 5:u=t.sent,o=i.target.value,"random"===r.mode&&c("updateRule",l()),b=r.rule,s=new u(b,a,o),d(s.state,s.gen),c("updateGen",s.gen),e.loop();case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.setup=function(){var t=b(),n=Object(Fe["a"])(t,2),a=n[0],c=n[1],r=e.createCanvas(a,c);r.style("display","block"),e.selectAll(u).forEach((function(e){return e.mouseClicked(f)}))},e.draw=function(){return!s||s.gen>o?e.noLoop():(s.generate(),s.state.some((function(e){return 1===e}))?(d(s.state,s.gen),void c("updateGen",s.gen)):e.noLoop())},e.windowResized=function(){e.clear(),e.noCanvas();var t=b(),n=Object(Fe["a"])(t,2),a=n[0],r=n[1];e.createCanvas(a,r),c("updateGen",0)}},a.next=5,n.e("chunk-2d0b995a").then(n.t.bind(null,"3425",7));case 5:return a.next=7,a.sent.default;case 7:s=a.sent,new s(o,i);case 9:case"end":return a.stop()}}),a)})))()})),Ke),modules:{}}));Object(a["c"])(Ye).use(Xe).mount("#app")},"620e":function(e,t,n){"use strict";n("3f99")},"6e97":function(e,t,n){},"6f79":function(e,t,n){},"7a88":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n("d4ec"),c=n("bee2"),r=n("ade3"),i=n("d5e4"),u=n("95ac"),o=n("5364"),s=n("9bd1"),l=(n("d3b7"),n("fd87"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("d81d"),n("3ca3"),n("10d1"),n("ddb0"),new WeakMap),d=new WeakMap,b=new WeakMap,f=new WeakMap,O=new WeakMap,j=function(){function e(t,n,c){Object(a["a"])(this,e),Object(i["a"])(this,l,{writable:!0,value:void 0}),Object(i["a"])(this,d,{writable:!0,value:void 0}),Object(i["a"])(this,b,{writable:!0,value:void 0}),Object(i["a"])(this,f,{writable:!0,value:void 0}),Object(i["a"])(this,O,{writable:!0,value:void 0}),Object(s["a"])(this,l,t),Object(s["a"])(this,d,n),Object(s["a"])(this,b,new Int8Array(n)),c===e.RANDOM_STATE?Object(s["a"])(this,b,new Int8Array(Object(o["a"])(this,b).map((function(){return Math.floor(2*Math.random())})))):Object(o["a"])(this,b)[~~(Object(o["a"])(this,d)/2)]=1,Object(s["a"])(this,f,new Int8Array(n)),Object(s["a"])(this,O,1)}return Object(c["a"])(e,[{key:"generate",value:function(){for(var e=Object(o["a"])(this,d);e--;){var t=Object(o["a"])(this,b)[e-1>=0?e-1:Object(o["a"])(this,d)-1],n=Object(o["a"])(this,b)[e],a=Object(o["a"])(this,b)[(e+1)%Object(o["a"])(this,d)],c=Math.pow(2,2)*t+Math.pow(2,1)*n+Math.pow(2,0)*a;Object(o["a"])(this,f)[e]=Object(o["a"])(this,l)>>c&1?1:0}var r=[Object(o["a"])(this,f),Object(o["a"])(this,b)];Object(u["a"])(this,b).value=r[0],Object(u["a"])(this,f).value=r[1],Object(s["a"])(this,O,1+ +Object(o["a"])(this,O))}},{key:"state",get:function(){return Object(o["a"])(this,b)}},{key:"gen",get:function(){return Object(o["a"])(this,O)}}]),e}();Object(r["a"])(j,"SINGLE_STATE","SINGLE"),Object(r["a"])(j,"RANDOM_STATE","RANDOM")},"829d":function(e,t,n){"use strict";n("c9c3")},8332:function(e,t,n){},9635:function(e,t,n){},"977b":function(e,t,n){"use strict";n("0be3")},c9c3:function(e,t,n){},d0398:function(e,t,n){"use strict";n("6e97")}});
//# sourceMappingURL=app.a80f77d7.js.map