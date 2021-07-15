import{o as n,c as s,e as a}from"./app.5f9bb12a.js";const t='{"title":"Components","description":"","frontmatter":{},"headers":[{"level":2,"title":"Install","slug":"install"}],"relativePath":"guide/components.md","lastUpdated":1626320652930}',p={},o=a('<h1 id="components"><a class="header-anchor" href="#components" aria-hidden="true">#</a> Components</h1><p>In v5.0, we introduced a new package <code>@vueuse/components</code> providing renderless component style usage of composable functions.</p><p>For example of <a href="/core/onClickOutside/"><code>onClickOutside</code></a> instead of</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> onClickOutside <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">close</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* ... */</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">onClickOutside</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> close<span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    Click Outside of Me\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>You can now use it in the component way:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> OnClickOutside <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/components&#39;</span>\n\n<span class="token keyword">function</span> <span class="token function">close</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* ... */</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OnClickOutside</span> <span class="token attr-name">@trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>close<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n      Click Outside of Me\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>OnClickOutside</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>Similarly, you can also access return values with <code>v-slot</code>:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UseMouse</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ x, y }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  x: {{ x }}\n  y: {{ y }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>UseMouse</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UseDark</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ isDark, toggleDark }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggleDark()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    Is Dark: {{ isDark }}\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>UseDark</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="install"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-bash"><pre><code>$ <span class="token function">npm</span> i @vueuse/core @vueuse/components\n</code></pre></div><p>Refer to each function&#39;s documentation for the detailed usage of component style.</p>',12);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};