import{_ as s}from"./DemoContainer.vue_vue&type=script&setup=true&lang.538fc852.js";import{f as n,a4 as a,a5 as e,D as t,o,c as p,a as l,w as c,u as r,t as u,F as i,d as k,b as d,e as m}from"./app.5f9bb12a.js";import{_ as h}from"./Note.4d65cb61.js";import{_ as v}from"./BooleanDisplay.vue_vue&type=script&setup=true&lang.eaf6a217.js";const f=k(" For demonstraction purpose, the idle timout is set to "),g=l("b",null,"5s",-1),b=k(" in this demo (default 1min). "),_={class:"mb-2"},I=k(" Idle: "),y=k("Inactive: "),T={class:"text-primary"};var w=n({setup(s){const{idle:n,lastActive:k}=a(5e3),d=e(),m=t((()=>Math.floor((d.value-k.value)/1e3)));return(s,a)=>{const e=h,t=v;return o(),p(i,null,[l(e,{class:"mb-2"},{default:c((()=>[f,g,b])),_:1}),l("div",_,[I,l(t,{value:r(n)},null,8,["value"])]),l("div",null,[y,l("b",T,u(r(m))+"s",1)])],64)}}});const S=m('<h1 id="useidle"><a class="header-anchor" href="#useidle" aria-hidden="true">#</a> useIdle</h1><p>Tracks whether the user is being inactive.</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useIdle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> idle<span class="token punctuation">,</span> lastActive <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useIdle</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token comment">// 5 min</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>idle<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// true or false</span>\n</code></pre></div><h2 id="component"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UseIdle</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ isIdle }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:timeout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5 * 60 * 1000<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  Is Idle: {{ isIdle }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>UseIdle</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',6),x=m('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IdleOptions</span>\n  <span class="token keyword">extends</span> <span class="token class-name">ConfigurableWindow</span><span class="token punctuation">,</span>\n    ConfigurableEventFilter <span class="token punctuation">{</span>\n  <span class="token comment">/**\n   * Event names that listen to for detected user activity\n   *\n   * @default [&#39;mousemove&#39;, &#39;mousedown&#39;, &#39;resize&#39;, &#39;keydown&#39;, &#39;touchstart&#39;, &#39;wheel&#39;]\n   */</span>\n  events<span class="token operator">?</span><span class="token operator">:</span> WindowEventName<span class="token punctuation">[</span><span class="token punctuation">]</span>\n  <span class="token comment">/**\n   * Listen for document visibility change\n   *\n   * @default true\n   */</span>\n  listenForVisibilityChange<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n  <span class="token comment">/**\n   * Initial state of the ref idle\n   *\n   * @default false\n   */</span>\n  initialState<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">UseIdleReturn</span> <span class="token punctuation">{</span>\n  idle<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span>\n  lastActive<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/**\n * Tracks whether the user is being inactive.\n *\n * @see /useIdle\n * @param timeout default to 1 minute\n * @param options IdleOptions\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">useIdle</span><span class="token punctuation">(</span>\n  timeout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>\n  options<span class="token operator">?</span><span class="token operator">:</span> IdleOptions\n<span class="token punctuation">)</span><span class="token operator">:</span> UseIdleReturn\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useIdle/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useIdle/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useIdle/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4),A='{"title":"useIdle","description":"","frontmatter":"category Sensors","headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Component","slug":"component"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"core/useIdle/index.md","lastUpdated":1626320652926}',C={};const D=Object.assign(C,{setup:function(n){return(n,a)=>{const e=s;return o(),p("div",null,[l(e,null,{default:c((()=>[l(w)])),_:1}),S,d("FOOTER_STARTS"),x,d("FOOTER_ENDS")])}}});export default D;export{A as __pageData};
