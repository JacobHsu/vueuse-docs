import{o as n,c as s,e as a}from"./app.5f9bb12a.js";const t='{"title":"Ecosystem","description":"","frontmatter":{},"relativePath":"ecosystem.md","lastUpdated":1626320652930}',e={},o=a('<h1 id="ecosystem"><a class="header-anchor" href="#ecosystem" aria-hidden="true">#</a> Ecosystem</h1><p>When developmenting VueUse, we extract the tools we are using into separate projects that can be used standalone from time to time.</p><h2 align="center"><a href="https://github.com/vueuse/vue-demi" target="_blank"><img src="https://github.com/vueuse/vue-demi/raw/master/assets/banner.png" alt="vue-demi" width="500"></a></h2><p>Vue Demi is a tool for library authors to create composable libraries that works for Vue 2 and 3 isomorphically just like VueUse. It has been wildly adapted for many popular libraries like <a href="https://github.com/vuelidate/vuelidate" target="_blank" rel="noopener noreferrer"><code>vuelidate</code></a> and <a href="https://github.com/posva/vue-promised" target="_blank" rel="noopener noreferrer"><code>vue-promised</code></a>.</p><h2 align="center"><a href="https://github.com/vueuse/vue-chemistry" target="_blank"><img src="https://github.com/vueuse/vue-chemistry/raw/main/res/hero.png" alt="vue-chemistry" width="500"></a></h2><p>Vue Chemisty utilizes the <a href="/shared/reactify/"><code>reactify</code></a>function and apply it to the common JavaScript APIs, which enables you the pure reactive programming experience. For example:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> set <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chemistry&#39;</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> console <span class="token keyword">from</span> <span class="token string">&#39;vue-chemistry/console&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> sqrt<span class="token punctuation">,</span> pow<span class="token punctuation">,</span> sum <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chemistry/math&#39;</span>\n\n<span class="token comment">//      _________</span>\n<span class="token comment">// c = √ a² + b²</span>\n<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token function">pow</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">pow</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// 5</span>\n\n<span class="token function">set</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// shorthand for a.value = 5</span>\n<span class="token function">set</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// 13</span>\n</code></pre></div>',7);e.render=function(a,t,e,p,c,u){return n(),s("div",null,[o])};export default e;export{t as __pageData};
