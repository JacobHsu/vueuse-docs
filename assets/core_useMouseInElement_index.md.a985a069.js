import{_ as n}from"./DemoContainer.vue_vue&type=script&setup=true&lang.538fc852.js";import{x as s,y as a,o as e,c as t,k as p,f as o,r as l,I as c,ad as r,a as u,t as k,u as i,F as d,w as g,b as m,e as b}from"./app.5f9bb12a.js";import{s as h}from"./utils.8fd68d5f.js";const f={},v=p("data-v-8edd2ed0");s("data-v-8edd2ed0");const y={class:"el"};a();const _=v(((n,s)=>(e(),t("div",y))));f.render=_,f.__scopeId="data-v-8edd2ed0";const w={lang:"yaml"};var I=o({setup(n){const s=l(null),a=c(r(s)),p=h(a);return(n,a)=>(e(),t(d,null,[u(f,{ref:s},null,512),u("pre",w,k(i(p)),1)],64))}});const E=b('<h1 id="usemouseinelement"><a class="header-anchor" href="#usemouseinelement" aria-hidden="true">#</a> useMouseInElement</h1><p>Reactive mouse position related to an element</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-html"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted"> </div><br><br><br><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>target<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Hello world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useMouseInElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> isOutside <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMouseInElement</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> isOutside <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="component"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UseMouseInElement</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ elementX, elementY, isOutside }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  x: {{ elementX }}\n  y: {{ elementY }}\n  Is Outside: {{ isOutside }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>UseMouseInElement</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',6),T=b('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">MouseInElementOptions</span> <span class="token keyword">extends</span> <span class="token class-name">MouseOptions</span> <span class="token punctuation">{</span>\n  handleOutside<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/**\n * Reactive mouse position related to an element.\n *\n * @see /useMouseInElement\n * @param target\n * @param options\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">useMouseInElement</span><span class="token punctuation">(</span>\n  target<span class="token operator">?</span><span class="token operator">:</span> MaybeElementRef<span class="token punctuation">,</span>\n  options<span class="token operator">?</span><span class="token operator">:</span> MouseInElementOptions\n<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  x<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>\n  y<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>\n  sourceType<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>MouseSourceType<span class="token operator">&gt;</span>\n  elementX<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>\n  elementY<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>\n  elementPositionX<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>\n  elementPositionY<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>\n  elementHeight<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>\n  elementWidth<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>\n  isOutside<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span>\n  <span class="token function-variable function">stop</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">UseMouseInElementReturn</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span>\n  <span class="token keyword">typeof</span> useMouseInElement\n<span class="token operator">&gt;</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useMouseInElement/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useMouseInElement/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useMouseInElement/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4),R='{"title":"useMouseInElement","description":"","frontmatter":"category Sensors","headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Component","slug":"component"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"core/useMouseInElement/index.md","lastUpdated":1626320652926}',M={};const x=Object.assign(M,{setup:function(s){return(s,a)=>{const p=n;return e(),t("div",null,[u(p,null,{default:g((()=>[u(I)])),_:1}),E,m("FOOTER_STARTS"),T,m("FOOTER_ENDS")])}}});export default x;export{R as __pageData};