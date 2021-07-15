import{o as s,c as a,b as n,e}from"./app.5f9bb12a.js";const t='{"title":"useRouteQuery","description":"","frontmatter":"category \'@Router\'","headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"router/useRouteQuery/index.md","lastUpdated":1626320652934}',o={},p=e('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>available in add-on <a href="/router/README.html"><code>@vueuse/router</code></a></p></div><h1 id="useroutequery"><a class="header-anchor" href="#useroutequery" aria-hidden="true">#</a> useRouteQuery</h1><p>Shorthand for reactive route.query</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRouteQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/router&#39;</span>\n\n<span class="token keyword">const</span> search <span class="token operator">=</span> <span class="token function">useRouteQuery</span><span class="token punctuation">(</span><span class="token string">&#39;search&#39;</span><span class="token punctuation">)</span>\n\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>search<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// route.query.search</span>\nsearch<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;foobar&#39;</span> <span class="token comment">// router.replace({ query: { search: &#39;foobar&#39; } })</span>\n</code></pre></div>',5),r=e('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">useRouteQuery</span><span class="token punctuation">(</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token keyword">null</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">useRouteQuery</span><span class="token generic class-name"><span class="token operator">&lt;</span>\n  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> defaultValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> ReactiveRouteOptions<span class="token punctuation">)</span><span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/router/useRouteQuery/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/router/useRouteQuery/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4);o.render=function(e,t,o,c,l,u){return s(),a("div",null,[p,n("FOOTER_STARTS"),r,n("FOOTER_ENDS")])};export default o;export{t as __pageData};