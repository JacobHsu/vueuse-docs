import{o as n,c as s,b as a,e as t}from"./app.5f9bb12a.js";const o='{"title":"controlledRef","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"peek, lay, untrackedGet, silentSet","slug":"peek-lay-untrackedget-silentset"},{"level":2,"title":"Configurations","slug":"configurations"},{"level":3,"title":"onBeforeChange()","slug":"onbeforechange"},{"level":3,"title":"onChanged()","slug":"onchanged"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"shared/controlledRef/index.md","lastUpdated":1626320652934}',e={},p=t('<h1 id="controlledref"><a class="header-anchor" href="#controlledref" aria-hidden="true">#</a> controlledRef</h1><p>Fine-grained controls over ref and its reactivity. (Vue 3 Only)</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p><a href="/shared/controlledRef/"><code>controlledRef</code></a>uses <a href="/shared/extendRef/"><code>extendRef</code></a>to provide two extra functions <a href="/shared/get/"><code>get</code></a>and <a href="/shared/set/"><code>set</code></a>to have better control over when it should track/trigger the reactivity.</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> controlledRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">controlledRef</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> doubled <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> num<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>\n\n<span class="token comment">// just like normal ref</span>\nnum<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">42</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 42</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubled<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 84</span>\n\n<span class="token comment">// set value without triggering the reactivity</span>\nnum<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 30</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubled<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 84 (doesn&#39;t update)</span>\n\n<span class="token comment">// get value without tracking the reactivity</span>\n<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 30</span>\n\nnum<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">50</span> <span class="token comment">// watch effect wouldn&#39;t be triggered since it collected nothing.</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubled<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 100 (updated again since it&#39;s a reactive set)</span>\n</code></pre></div><h3 id="peek-lay-untrackedget-silentset"><a class="header-anchor" href="#peek-lay-untrackedget-silentset" aria-hidden="true">#</a> <code>peek</code>, <code>lay</code>, <code>untrackedGet</code>, <code>silentSet</code></h3><p>We also provide some shorthands for doing the get/set without track/triggering the reactivity system. The following lines are equivalent.</p><div class="language-ts"><pre><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">controlledRef</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><div class="language-ts"><pre><code><span class="token comment">// getting</span>\nfoo<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\nfoo<span class="token punctuation">.</span><span class="token function">untrackedGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nfoo<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// an alias for `untrackedGet`</span>\n</code></pre></div><div class="language-ts"><pre><code><span class="token comment">// setting</span>\nfoo<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\nfoo<span class="token punctuation">.</span><span class="token function">silentSet</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span>\nfoo<span class="token punctuation">.</span><span class="token function">lay</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span> <span class="token comment">// an alias for `silentSet`</span>\n</code></pre></div><h2 id="configurations"><a class="header-anchor" href="#configurations" aria-hidden="true">#</a> Configurations</h2><h3 id="onbeforechange"><a class="header-anchor" href="#onbeforechange" aria-hidden="true">#</a> <code>onBeforeChange()</code></h3><p><code>onBeforeChange</code> option is offered to give control over if a new value should be accepted. For example:</p><div class="language-ts"><pre><code><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token function">controlledRef</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token function">onBeforeChange</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// disallow changes larger then ±5 in one operation</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>value <span class="token operator">-</span> oldValue<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span>\n      <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token comment">// returning `false` to dismiss the change</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nnum<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">1</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 1</span>\n\nnum<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">6</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 1 (change been dismissed)</span>\n</code></pre></div><h3 id="onchanged"><a class="header-anchor" href="#onchanged" aria-hidden="true">#</a> <code>onChanged()</code></h3><p><code>onChanged</code> option offers a similar functionally as Vue&#39;s <code>watch</code> but being synchronoused with less overhead compare to <code>watch</code>.</p><div class="language-ts"><pre><code><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token function">controlledRef</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token function">onChanged</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div>',17),c=t('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ControlledRefOptions<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>\n  <span class="token comment">/**\n   * Callback function before the ref changing.\n   *\n   * Returning `false` to dismiss the change.\n   */</span>\n  onBeforeChange<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> oldValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token builtin">boolean</span>\n  <span class="token comment">/**\n   * Callback function after the ref changed\n   *\n   * This happends synchronously, with less overhead compare to `watch`\n   */</span>\n  onChanged<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> oldValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/**\n * Explicitly define the deps of computed.\n *\n * @param source\n * @param fn\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">controlledRef</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>\n  initial<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>\n  options<span class="token operator">?</span><span class="token operator">:</span> ControlledRefOptions<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> ShallowUnwrapRef<span class="token operator">&lt;</span><span class="token punctuation">{</span>\n  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span>tracking<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span>\n  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> triggering<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n  <span class="token function-variable function">untrackedGet</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span>\n  <span class="token function-variable function">silentSet</span><span class="token operator">:</span> <span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n  <span class="token function-variable function">peek</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span>\n  <span class="token function-variable function">lay</span><span class="token operator">:</span> <span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n<span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span>\n  Ref<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/controlledRef/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/controlledRef/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4);e.render=function(t,o,e,l,u,i){return n(),s("div",null,[p,a("FOOTER_STARTS"),c,a("FOOTER_ENDS")])};export default e;export{o as __pageData};