import{_ as n}from"./DemoContainer.vue_vue&type=script&setup=true&lang.538fc852.js";import{f as s,a8 as a,a9 as t,o,c as e,a as p,t as c,u as r,w as l,F as u,E as i,aa as k,d,b as m,e as f}from"./app.5f9bb12a.js";import{_ as h}from"./Note.4d65cb61.js";const y=p("span",{class:"ml-2"},"/",-1),g=p("br",null,null,-1),b=p("br",null,null,-1),v=d("History (limited to 10 records for demo)"),R={class:"code-block mt-4"},w={class:"opacity-50 mr-2 font-mono"},H={class:"font-mono"};var S=s({setup(n){const{inc:s,dec:d,count:m}=a(),{canUndo:f,canRedo:S,history:_,commit:M,undo:T,redo:C}=t(m,{capacity:10});return(n,a)=>{const t=h;return o(),e(u,null,[p("div",null,"Count: "+c(r(m)),1),p("button",{onClick:a[1]||(a[1]=n=>r(s)())}," Increment "),p("button",{onClick:a[2]||(a[2]=n=>r(d)())}," Decrement "),y,p("button",{onClick:a[3]||(a[3]=n=>r(M)())}," Commit "),p("button",{disabled:!r(f),onClick:a[4]||(a[4]=n=>r(T)())}," Undo ",8,["disabled"]),p("button",{disabled:!r(S),onClick:a[5]||(a[5]=n=>r(C)())}," Redo ",8,["disabled"]),g,b,p(t,null,{default:l((()=>[v])),_:1}),p("div",R,[(o(!0),e(u,null,i(r(_),(n=>{return o(),e("div",{key:n.timestamp},[p("span",w,c((s=n.timestamp,k(s).format())),1),p("span",H,"{ value: "+c(n.snapshot)+" }",1)]);var s})),128))])],64)}}});const _=p("h1",{id:""},[p("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),M=f('',23),T=f('',4),C='{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"History Capacity","slug":"history-capacity"},{"level":2,"title":"Related Functions","slug":"related-functions"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"core/useManualRefHistory/index.md","lastUpdated":1626320652926}',x={};const D=Object.assign(x,{setup:function(s){return(s,a)=>{const t=n;return o(),e("div",null,[_,p(t,null,{default:l((()=>[p(S)])),_:1}),M,m("FOOTER_STARTS"),T,m("FOOTER_ENDS")])}}});export default D;export{C as __pageData};