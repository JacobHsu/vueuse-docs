import{_ as e}from"./DemoContainer.vue_vue&type=script&setup=true&lang.538fc852.js";import{_ as a}from"./LearnMoreComponents.ac2616c2.js";import{f as s,au as n,o as t,c as r,a as o,w as p,F as u,E as c,u as l,t as i,d as g,b as d,e as k}from"./app.5f9bb12a.js";import{_ as f}from"./Note.4d65cb61.js";const h=g(" Preferred Languages: ");var m=s({setup(e){const a=n();return(e,s)=>{const n=f;return t(),r(u,null,[o(n,{class:"mb-2"},{default:p((()=>[h])),_:1}),o("div",null,[(t(!0),r(u,null,c(l(a),(e=>(t(),r("code",{key:e,class:"mr-2"},i(e),1)))),128))])],64)}}});const _=k('<h1 id="usepreferredlanguages"><a class="header-anchor" href="#usepreferredlanguages" aria-hidden="true">#</a> usePreferredLanguages</h1><p>Reactive <a href="https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/languages" target="_blank" rel="noopener noreferrer">Navigator Languages</a>. It provides web developers with information about the user&#39;s preferred languages. For example, this may be useful to adjust the language of the user interface based on the user&#39;s preferred languages in order to provide better experience.</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> usePreferredLanguages <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">const</span> languages <span class="token operator">=</span> <span class="token function">usePreferredLanguages</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="component"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UsePreferredLanguages</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ languages }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  Preferred Languages: {{ languages }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>UsePreferredLanguages</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',6),v=k('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token comment">/**\n * Reactive Navigator Languages.\n *\n * @see /usePreferredLanguages\n * @param options\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">usePreferredLanguages</span><span class="token punctuation">(</span>\n  options<span class="token operator">?</span><span class="token operator">:</span> ConfigurableWindow\n<span class="token punctuation">)</span><span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token keyword">readonly</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/core/usePreferredLanguages/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/usePreferredLanguages/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/usePreferredLanguages/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4),b='{"title":"usePreferredLanguages","description":"","frontmatter":"category Browser","headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Component","slug":"component"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"core/usePreferredLanguages/index.md","lastUpdated":1626320652926}',P={};const y=Object.assign(P,{setup:function(s){return(s,n)=>{const u=e,c=a;return t(),r("div",null,[o(u,null,{default:p((()=>[o(m)])),_:1}),_,o(c),d("FOOTER_STARTS"),v,d("FOOTER_ENDS")])}}});export default y;export{b as __pageData};