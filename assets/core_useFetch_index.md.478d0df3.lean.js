import{_ as n}from"./DemoContainer.vue_vue&type=script&setup=true&lang.538fc852.js";import{o as s,c as a,a as t,f as e,r as o,Q as p,a1 as c,I as r,w as l,l as u,v as i,u as k,t as h,b as d,d as f,e as g}from"./app.5f9bb12a.js";import{_ as m}from"./Note.4d65cb61.js";import{_ as y}from"./checkmark.86d45fcb.js";import{s as b}from"./utils.8fd68d5f.js";const w={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},F=t("path",{d:"M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16zm23.15 7.75L8.25 6.85a12 12 0 0 1 16.9 16.9zM8.24 25.16a12 12 0 0 1-1.4-16.89l16.89 16.89a12 12 0 0 1-15.49 0z",fill:"currentColor"},null,-1);var v={name:"carbon-error",render:function(n,t){return s(),a("svg",w,[F])}};const T=f("The following URLs can be used to test different features of useFetch"),R=t("div",{class:"mt-2"},[f(" Normal Request: "),t("code",null," https://httpbin.org/get ")],-1),q=t("div",null,[f(" Abort Request: "),t("code",null," https://httpbin.org/delay/10 ")],-1),x=t("div",null,[f(" Response Error: "),t("code",null," http://httpbin.org/status/500 ")],-1),U={class:"ml-2"},_={lang:"yaml"};var A=e({setup(n){const e=o("https://httpbin.org/get"),f=o(!1),g=p(f),{data:w,error:F,abort:A,statusCode:C,isFetching:O,isFinished:S,canAbort:P,execute:B}=c(e,{refetch:f}).get(),E=b(r({isFinished:S,isFetching:O,canAbort:P,statusCode:C,error:F,data:w}));return(n,o)=>{const p=m,c=y,r=v;return s(),a("div",null,[t("div",null,[t(p,null,{default:l((()=>[T])),_:1}),R,q,x]),u(t("input",{"onUpdate:modelValue":o[1]||(o[1]=n=>e.value=n),type:"text"},null,512),[[i,e.value]]),t("button",{onClick:o[2]||(o[2]=(...n)=>k(B)&&k(B)(...n))}," Execute "),t("button",{onClick:o[3]||(o[3]=(...n)=>k(g)&&k(g)(...n))},[f.value?(s(),a(c,{key:0})):(s(),a(r,{key:1})),t("span",U,h(f.value?"Refetch On":"Refetch Off"),1)]),k(P)?(s(),a("button",{key:0,class:"orange",onClick:o[4]||(o[4]=(...n)=>k(A)&&k(A)(...n))}," Abort ")):d("v-if",!0),t("pre",_,h(k(E)),1)])}}});const C=g('',30),O=g('',4),S='{"title":"useFetch","description":"","frontmatter":"category Browser","headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Refetching on URL change","slug":"refetching-on-url-change"},{"level":3,"title":"Prevent request from firing immediately","slug":"prevent-request-from-firing-immediately"},{"level":3,"title":"Aborting a request","slug":"aborting-a-request"},{"level":3,"title":"Intercepting a request","slug":"intercepting-a-request"},{"level":3,"title":"Setting the request method and return type","slug":"setting-the-request-method-and-return-type"},{"level":3,"title":"Creating a custom instance","slug":"creating-a-custom-instance"},{"level":3,"title":"Events","slug":"events"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"core/useFetch/index.md","lastUpdated":1626320652926}',P={};const B=Object.assign(P,{setup:function(e){return(e,o)=>{const p=n;return s(),a("div",null,[t(p,null,{default:l((()=>[t(A)])),_:1}),C,d("FOOTER_STARTS"),O,d("FOOTER_ENDS")])}}});export default B;export{S as __pageData};