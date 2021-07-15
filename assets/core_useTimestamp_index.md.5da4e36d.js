import{_ as s}from"./DemoContainer.vue_vue&type=script&setup=true&lang.538fc852.js";import{_ as a}from"./LearnMoreComponents.ac2616c2.js";import{f as n,a5 as t,o as e,c as p,t as o,u as c,a as l,w as r,b as u,e as i}from"./app.5f9bb12a.js";var k=n({setup(s){const a=t();return(s,n)=>(e(),p("div",null,"Timestamp: "+o(c(a)),1))}});const m=i('<h1 id="usetimestamp"><a class="header-anchor" href="#usetimestamp" aria-hidden="true">#</a> useTimestamp</h1><p>Reactive current timestamp</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useTimestamp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">const</span> timestamp <span class="token operator">=</span> <span class="token function">useTimestamp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> offset<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> timestamp<span class="token punctuation">,</span> pause<span class="token punctuation">,</span> resume <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTimestamp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> controls<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="component"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UseTimestamp</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ timestamp, pause, resume }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  Current Time: {{ timestamp }}\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pause()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Pause<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>resume()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Resume<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>UseTimestamp</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',7),d=i('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">TimestampOptions<span class="token operator">&lt;</span>Controls <span class="token keyword">extends</span> <span class="token builtin">boolean</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>\n  <span class="token comment">/**\n   * Expose more controls\n   *\n   * @default false\n   */</span>\n  controls<span class="token operator">?</span><span class="token operator">:</span> Controls\n  <span class="token comment">/**\n   * Offset value adding to the value\n   *\n   * @default 0\n   */</span>\n  offset<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>\n  <span class="token comment">/**\n   * Update interval, or use requestAnimationFrame\n   *\n   * @default requestAnimationFrame\n   */</span>\n  interval<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;requestAnimationFrame&quot;</span> <span class="token operator">|</span> <span class="token builtin">number</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/**\n * Reactive current timestamp.\n *\n * @see /useTimestamp\n * @param options\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">useTimestamp</span><span class="token punctuation">(</span>\n  options<span class="token operator">?</span><span class="token operator">:</span> TimestampOptions<span class="token operator">&lt;</span><span class="token boolean">false</span><span class="token operator">&gt;</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">useTimestamp</span><span class="token punctuation">(</span>options<span class="token operator">:</span> TimestampOptions<span class="token operator">&lt;</span><span class="token boolean">true</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  timestamp<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>\n<span class="token punctuation">}</span> <span class="token operator">&amp;</span> Pausable\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">UseTimestampReturn</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> useTimestamp<span class="token operator">&gt;</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useTimestamp/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useTimestamp/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useTimestamp/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4),g='{"title":"useTimestamp","description":"","frontmatter":"category Animation","headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Component","slug":"component"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"core/useTimestamp/index.md","lastUpdated":1626320652930}',f={};const h=Object.assign(f,{setup:function(n){return(n,t)=>{const o=s,c=a;return e(),p("div",null,[l(o,null,{default:r((()=>[l(k)])),_:1}),m,l(c),u("FOOTER_STARTS"),d,u("FOOTER_ENDS")])}}});export default h;export{g as __pageData};
