import{_ as s}from"./DemoContainer.vue_vue&type=script&setup=true&lang.538fc852.js";import{f as n,aE as a,o as e,c as t,a as o,w as p,l,v as c,u as r,ag as u,F as i,d as k,b as d,e as m}from"./app.5f9bb12a.js";import{_ as g}from"./Note.4d65cb61.js";const h=k("Title");var f=n({setup(s){const n=a(null);return(s,a)=>{const k=g;return e(),t(i,null,[o(k,null,{default:p((()=>[h])),_:1}),l(o("input",{"onUpdate:modelValue":a[1]||(a[1]=s=>u(n)?n.value=s:null),type:"text"},null,512),[[c,r(n)]])],64)}}});const T=m('<h1 id="usetitle"><a class="header-anchor" href="#usetitle" aria-hidden="true">#</a> useTitle</h1><p>Reactive document title.</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useTitle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">useTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>title<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// print current title</span>\ntitle<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span> <span class="token comment">// change current title</span>\n</code></pre></div><p>Set initial title immediately</p><div class="language-js"><pre><code><span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">useTitle</span><span class="token punctuation">(</span><span class="token string">&#39;New Title&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><p>Pass a <code>ref</code> and the title will be updated when the source ref changes</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useTitle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token operator">!</span>messages<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token string">&#39;No message&#39;</span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>messages<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> new messages</span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">useTitle</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span> <span class="token comment">// document title will match with the ref &quot;title&quot;</span>\n</code></pre></div>',8),v=m('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">UseTitleOptions</span> <span class="token keyword">extends</span> <span class="token class-name">ConfigurableDocument</span> <span class="token punctuation">{</span>\n  <span class="token comment">/**\n   * Observe `document.title` changes using MutationObserve\n   *\n   * @default false\n   */</span>\n  observe<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/**\n * Reactive document title.\n *\n * @see /useTitle\n * @param newTitle\n * @param options\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">useTitle</span><span class="token punctuation">(</span>\n  newTitle<span class="token operator">?</span><span class="token operator">:</span> MaybeRef<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n  options<span class="token operator">?</span><span class="token operator">:</span> UseTitleOptions\n<span class="token punctuation">)</span><span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useTitle/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useTitle/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useTitle/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4),_='{"title":"useTitle","description":"","frontmatter":"category Browser","headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"core/useTitle/index.md","lastUpdated":1626320652930}',y={};const w=Object.assign(y,{setup:function(n){return(n,a)=>{const l=s;return e(),t("div",null,[o(l,null,{default:p((()=>[o(f)])),_:1}),T,d("FOOTER_STARTS"),v,d("FOOTER_ENDS")])}}});export default w;export{_ as __pageData};