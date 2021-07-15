import{o as n,c as s,b as a,e as t}from"./app.5f9bb12a.js";const p='{"title":"toObserver","description":"","frontmatter":"category \'@RxJS\'","headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"rxjs/toObserver/index.md","lastUpdated":1626320652934}',o={},e=t('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>available in add-on <a href="/rxjs/README.html"><code>@vueuse/rxjs</code></a></p></div><h1 id="toobserver"><a class="header-anchor" href="#toobserver" aria-hidden="true">#</a> toObserver</h1><p>Sugar function to convert a ref in an observer</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useSubscription<span class="token punctuation">,</span> toObserver<span class="token punctuation">,</span> fromEvent<span class="token punctuation">,</span> from <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/rxjs&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> interval <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> mapTo<span class="token punctuation">,</span> takeUntil<span class="token punctuation">,</span> withLatestFrom<span class="token punctuation">,</span> map <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs/operators&#39;</span>\n\n<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> button <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLButtonElement<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>\n\n<span class="token function">useSubscription</span><span class="token punctuation">(</span>\n  <span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>\n      <span class="token function">mapTo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token function">takeUntil</span><span class="token punctuation">(</span><span class="token function">fromEvent</span><span class="token punctuation">(</span>button<span class="token punctuation">,</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token function">withLatestFrom</span><span class="token punctuation">(</span><span class="token function">from</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">startWith</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>total<span class="token punctuation">,</span> curr<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> curr <span class="token operator">+</span> total<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token function">toObserver</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// same as ).subscribe(val =&gt; (count.value = val))</span>\n<span class="token punctuation">)</span>\n</code></pre></div>',5),c=t('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">toObserver</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>value<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> NextObserver<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/rxjs/toObserver/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/rxjs/toObserver/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4);o.render=function(t,p,o,u,r,l){return n(),s("div",null,[e,a("FOOTER_STARTS"),c,a("FOOTER_ENDS")])};export default o;export{p as __pageData};
