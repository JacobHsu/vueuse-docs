import{_ as n}from"./DemoContainer.vue_vue&type=script&setup=true&lang.538fc852.js";import{f as a,r as s,B as t,o as e,c as p,a as o,w as c,F as u,d as r,b as l,e as i}from"./app.5f9bb12a.js";import{_ as k}from"./Note.4d65cb61.js";const d=r("Type anything"),g=o("input",{type:"text",placeholder:"Start typing has no effect here"},null,-1);var h=a({setup(n){const a=s(null);return t((()=>{var n;(null==(n=a.value)?void 0:n.active)||a.value.focus()})),(n,s)=>{const t=k;return e(),p(u,null,[o(t,null,{default:c((()=>[d])),_:1}),o("input",{ref:a,type:"text",placeholder:"Start typing to focus"},null,512),g],64)}}});const v=i('<h1 id="onstarttyping"><a class="header-anchor" href="#onstarttyping" aria-hidden="true">#</a> onStartTyping</h1><p>Fires when users start typing on non-editable elements.</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Start typing to focus<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><div class="language-ts"><div class="highlight-lines"><br><br><br><br><br><br><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><br><br><br><br><br><br><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> onStartTyping <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>\n\n    <span class="token function">onStartTyping</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>input<span class="token punctuation">.</span>value<span class="token punctuation">.</span>active<span class="token punctuation">)</span>\n        input<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      input<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',5),y=i('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token comment">/**\n * Fires when users start typing on non-editable elements.\n *\n * @see /onStartTyping\n * @param callback\n * @param options\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">onStartTyping</span><span class="token punctuation">(</span>\n  <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> KeyboardEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>\n  options<span class="token operator">?</span><span class="token operator">:</span> ConfigurableDocument\n<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/core/onStartTyping/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/onStartTyping/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/onStartTyping/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4),f='{"title":"onStartTyping","description":"","frontmatter":"category Sensors","headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"core/onStartTyping/index.md","lastUpdated":1626320652922}',b={};const _=Object.assign(b,{setup:function(a){return(a,s)=>{const t=n;return e(),p("div",null,[o(t,null,{default:c((()=>[o(h)])),_:1}),v,l("FOOTER_STARTS"),y,l("FOOTER_ENDS")])}}});export default _;export{f as __pageData};