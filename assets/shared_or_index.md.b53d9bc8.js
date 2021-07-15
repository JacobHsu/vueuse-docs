import{o as n,c as a,b as s,e}from"./app.5f9bb12a.js";const t='{"title":"or","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Related Functions","slug":"related-functions"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"shared/or/index.md","lastUpdated":1626320652938}',o={},p=e('<h1 id="or"><a class="header-anchor" href="#or" aria-hidden="true">#</a> or</h1><p><code>OR</code> conditions for refs.</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> or <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n\n<span class="token function">whenever</span><span class="token punctuation">(</span><span class="token function">or</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;either a or b is truthy!&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="related-functions"><a class="header-anchor" href="#related-functions" aria-hidden="true">#</a> Related Functions</h2><ul><li><code>and</code></li><li><code>not</code></li><li><code>whenever</code></li></ul>',6),c=e('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token comment">/**\n * `OR` conditions for refs.\n *\n * @see /or\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">or</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> MaybeRef<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> ComputedRef<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/or/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/or/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4);o.render=function(e,t,o,r,l,u){return n(),a("div",null,[p,s("FOOTER_STARTS"),c,s("FOOTER_ENDS")])};export default o;export{t as __pageData};