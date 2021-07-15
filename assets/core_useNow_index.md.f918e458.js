import{_ as s}from"./DemoContainer.vue_vue&type=script&setup=true&lang.538fc852.js";import{_ as n}from"./LearnMoreComponents.ac2616c2.js";import{f as a,an as t,o as e,c as o,t as p,u as c,a as r,w as l,b as u,e as k}from"./app.5f9bb12a.js";var i=a({setup(s){const n=t();return(s,a)=>(e(),o("div",null,"Now: "+p(c(n)),1))}});const d=k('<h1 id="usenow"><a class="header-anchor" href="#usenow" aria-hidden="true">#</a> useNow</h1><p>Reactive current Date instance.</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useNow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">const</span> now <span class="token operator">=</span> <span class="token function">useNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> now<span class="token punctuation">,</span> pause<span class="token punctuation">,</span> resume <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useNow</span><span class="token punctuation">(</span><span class="token punctuation">{</span> controls<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="component"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UseNow</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ now, pause, resume }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  Now: {{ now }}\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pause()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Pause<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>resume()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Resume<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>UseNow</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',7),g=k('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">UseNowOptions<span class="token operator">&lt;</span>Controls <span class="token keyword">extends</span> <span class="token builtin">boolean</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>\n  <span class="token comment">/**\n   * Expose more controls\n   *\n   * @default false\n   */</span>\n  controls<span class="token operator">?</span><span class="token operator">:</span> Controls\n  <span class="token comment">/**\n   * Update interval, or use requestAnimationFrame\n   *\n   * @default requestAnimationFrame\n   */</span>\n  interval<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;requestAnimationFrame&quot;</span> <span class="token operator">|</span> <span class="token builtin">number</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/**\n * Reactive current Date instance.\n *\n * @see /useNow\n * @param options\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">useNow</span><span class="token punctuation">(</span>options<span class="token operator">?</span><span class="token operator">:</span> UseNowOptions<span class="token operator">&lt;</span><span class="token boolean">false</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> Ref<span class="token operator">&lt;</span>Date<span class="token operator">&gt;</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">useNow</span><span class="token punctuation">(</span>options<span class="token operator">:</span> UseNowOptions<span class="token operator">&lt;</span><span class="token boolean">true</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  now<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>Date<span class="token operator">&gt;</span>\n<span class="token punctuation">}</span> <span class="token operator">&amp;</span> Pausable\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">UseNowReturn</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> useNow<span class="token operator">&gt;</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useNow/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useNow/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useNow/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4),m='{"title":"useNow","description":"","frontmatter":"category Animation","headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Component","slug":"component"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"core/useNow/index.md","lastUpdated":1626320652926}',w={};const h=Object.assign(w,{setup:function(a){return(a,t)=>{const p=s,c=n;return e(),o("div",null,[r(p,null,{default:l((()=>[r(i)])),_:1}),d,r(c),u("FOOTER_STARTS"),g,u("FOOTER_ENDS")])}}});export default h;export{m as __pageData};