import{_ as a}from"./DemoContainer.vue_vue&type=script&setup=true&lang.538fc852.js";import{r as s,Y as n,az as e,aX as t,f as o,o as p,c as r,a as c,w as l,l as u,v as i,u as d,b as k,F as g,d as h,e as f}from"./app.5f9bb12a.js";import{_ as m}from"./Note.4d65cb61.js";const v=h(" Text content for QRCode ");var _=o({setup(a){const o=s("https://vueuse.org"),h=function(a,o){const p=s(a),r=s("");return n(p,(async a=>{p.value&&e&&(r.value=await t.toDataURL(a,o))}),{immediate:!0}),r}(o,{errorCorrectionLevel:"H",margin:3});return(a,s)=>{const n=m;return p(),r(g,null,[c(n,null,{default:l((()=>[v])),_:1}),u(c("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>o.value=a),type:"text"},null,512),[[i,o.value]]),o.value?(p(),r("img",{key:0,class:"mt-6 mb-2 rounded border",src:d(h),alt:"QR Code"},null,8,["src"])):k("v-if",!0)],64)}}});const R=f('',10),b=f('',4),y='{"title":"useQRCode","description":"","frontmatter":"category \'@Integrations\'","headers":[{"level":2,"title":"Install","slug":"install"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"integrations/useQRCode/index.md","lastUpdated":1626320652934}',C={};const T=Object.assign(C,{setup:function(s){return(s,n)=>{const e=a;return p(),r("div",null,[c(e,null,{default:l((()=>[c(_)])),_:1}),R,k("FOOTER_STARTS"),b,k("FOOTER_ENDS")])}}});export default T;export{y as __pageData};