import{_ as n}from"./DemoContainer.vue_vue&type=script&setup=true&lang.538fc852.js";import{f as a,r as s,aZ as t,o as e,c as o,l as p,v as c,a as l,w as r,t as u,d as k,b as i,e as d}from"./app.5f9bb12a.js";import{_ as h}from"./Note.4d65cb61.js";const b=k("Delay is set to 1000ms for this demo.");var g=a({setup(n){const a=s(""),k=s(0);return t(a,(()=>{k.value+=1}),{debounce:1e3}),(n,s)=>{const t=h;return e(),o("div",null,[p(l("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>a.value=n),placeholder:"Try to type anything...",type:"text"},null,512),[[c,a.value]]),l(t,null,{default:r((()=>[b])),_:1}),l("p",null,"Input: "+u(a.value),1),l("p",null,"Times Updated: "+u(k.value),1)])}}});const m=d('<h1 id="debouncedwatch"><a class="header-anchor" href="#debouncedwatch" aria-hidden="true">#</a> debouncedWatch</h1><p>Debounced watch</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Similar to <code>watch</code>, but offering an extra option <code>debounce</code> which will be applied to the callback function.</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> debouncedWatch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token function">debouncedWatch</span><span class="token punctuation">(</span>\n  source<span class="token punctuation">,</span>\n  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;changed!&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> debounce<span class="token operator">:</span> <span class="token number">500</span> <span class="token punctuation">}</span>\n<span class="token punctuation">)</span>\n</code></pre></div><p>It&#39;s essentially a shorthand for the following code:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> watchWithFilter<span class="token punctuation">,</span> debounceFilter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token function">watchWithFilter</span><span class="token punctuation">(</span>\n  source<span class="token punctuation">,</span>\n  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;changed!&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    eventFilter<span class="token operator">:</span> <span class="token function">debounceFilter</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span>\n</code></pre></div>',7),f=d('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">DebouncedWatchOptions<span class="token operator">&lt;</span>Immediate<span class="token operator">&gt;</span></span>\n  <span class="token keyword">extends</span> <span class="token class-name">WatchOptions<span class="token operator">&lt;</span>Immediate<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>\n  debounce<span class="token operator">?</span><span class="token operator">:</span> MaybeRef<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">debouncedWatch</span><span class="token generic class-name"><span class="token operator">&lt;</span>\n  <span class="token constant">T</span> <span class="token keyword">extends</span> Readonly<span class="token operator">&lt;</span>WatchSource<span class="token operator">&lt;</span><span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n  Immediate <span class="token keyword">extends</span> Readonly<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token boolean">false</span>\n<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>\n  sources<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>\n  cb<span class="token operator">:</span> WatchCallback<span class="token operator">&lt;</span>MapSources<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> MapOldSources<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> Immediate<span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>\n  options<span class="token operator">?</span><span class="token operator">:</span> DebouncedWatchOptions<span class="token operator">&lt;</span>Immediate<span class="token operator">&gt;</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> WatchStopHandle\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">debouncedWatch</span><span class="token generic class-name"><span class="token operator">&lt;</span>\n  <span class="token constant">T</span><span class="token punctuation">,</span>\n  Immediate <span class="token keyword">extends</span> Readonly<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token boolean">false</span>\n<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>\n  source<span class="token operator">:</span> WatchSource<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n  cb<span class="token operator">:</span> WatchCallback<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> Immediate <span class="token keyword">extends</span> <span class="token class-name"><span class="token boolean">true</span></span> <span class="token operator">?</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">:</span> <span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n  options<span class="token operator">?</span><span class="token operator">:</span> DebouncedWatchOptions<span class="token operator">&lt;</span>Immediate<span class="token operator">&gt;</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> WatchStopHandle\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">debouncedWatch</span><span class="token generic class-name"><span class="token operator">&lt;</span>\n  <span class="token constant">T</span> <span class="token keyword">extends</span> object<span class="token punctuation">,</span>\n  Immediate <span class="token keyword">extends</span> Readonly<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token boolean">false</span>\n<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>\n  source<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>\n  cb<span class="token operator">:</span> WatchCallback<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> Immediate <span class="token keyword">extends</span> <span class="token class-name"><span class="token boolean">true</span></span> <span class="token operator">?</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">:</span> <span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n  options<span class="token operator">?</span><span class="token operator">:</span> DebouncedWatchOptions<span class="token operator">&lt;</span>Immediate<span class="token operator">&gt;</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> WatchStopHandle\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/debouncedWatch/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/debouncedWatch/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/debouncedWatch/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4),y='{"title":"debouncedWatch","description":"","frontmatter":"category Watch","headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"shared/debouncedWatch/index.md","lastUpdated":1626320652934}',w={};const T=Object.assign(w,{setup:function(a){return(a,s)=>{const t=n;return e(),o("div",null,[l(t,null,{default:r((()=>[l(g)])),_:1}),m,i("FOOTER_STARTS"),f,i("FOOTER_ENDS")])}}});export default T;export{y as __pageData};
