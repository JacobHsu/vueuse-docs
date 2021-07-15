import{o as a,c as s,b as e,e as n}from"./app.5f9bb12a.js";const t='{"title":"useRouteHash","description":"","frontmatter":"category \'@Router\'","headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"router/useRouteHash/index.md","lastUpdated":1626320652934}',o={},p=n('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>available in add-on <a href="/router/README.html"><code>@vueuse/router</code></a></p></div><h1 id="useroutehash"><a class="header-anchor" href="#useroutehash" aria-hidden="true">#</a> useRouteHash</h1><p>Shorthand for reactive route.hash</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRouteHash <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/router&#39;</span>\n\n<span class="token keyword">const</span> search <span class="token operator">=</span> <span class="token function">useRouteHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>search<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// route.hash</span>\nsearch<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;foobar&#39;</span> <span class="token comment">// router.replace({ hash: &#39;foobar&#39; })</span>\n</code></pre></div>',5),r=n('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">useRouteHash</span><span class="token punctuation">(</span>\n  defaultValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> mode<span class="token punctuation">,</span> route<span class="token punctuation">,</span> router <span class="token punctuation">}</span><span class="token operator">?</span><span class="token operator">:</span> ReactiveRouteOptions\n<span class="token punctuation">)</span><span class="token operator">:</span> WritableComputedRef<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/router/useRouteHash/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/router/useRouteHash/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4);o.render=function(n,t,o,c,u,l){return a(),s("div",null,[p,e("FOOTER_STARTS"),r,e("FOOTER_ENDS")])};export default o;export{t as __pageData};