import{o as s,c as n,b as a,e}from"./app.5f9bb12a.js";const t='{"title":"useSubscription","description":"","frontmatter":"category \'@RxJS\'","headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"rxjs/useSubscription/index.md","lastUpdated":1626320652934}',o={},p=e('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>available in add-on <a href="/rxjs/README.html"><code>@vueuse/rxjs</code></a></p></div><h1 id="usesubscription"><a class="header-anchor" href="#usesubscription" aria-hidden="true">#</a> useSubscription</h1><p>Uses subscriptions without worry about unsubscribing to it or memory leaks.</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useSubscription <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/rxjs&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> interval <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs&#39;</span>\n\n<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n\n<span class="token comment">// useSubscription call unsubscribe method before unmount the component</span>\n<span class="token function">useSubscription</span><span class="token punctuation">(</span>\n  <span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      count<span class="token punctuation">.</span>value<span class="token operator">++</span>\n      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n</code></pre></div>',5),c=e('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">useSubscription</span><span class="token punctuation">(</span>subscription<span class="token operator">:</span> Unsubscribable<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/rxjs/useSubscription/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/rxjs/useSubscription/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4);o.render=function(e,t,o,u,r,i){return s(),n("div",null,[p,a("FOOTER_STARTS"),c,a("FOOTER_ENDS")])};export default o;export{t as __pageData};
