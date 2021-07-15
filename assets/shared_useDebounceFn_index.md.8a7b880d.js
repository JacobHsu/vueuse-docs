import{_ as e}from"./DemoContainer.vue_vue&type=script&setup=true&lang.538fc852.js";import{f as n,r as a,o as s,c as t,a as o,w as r,t as c,F as p,d as u,b5 as l,b as i,e as d}from"./app.5f9bb12a.js";import{_ as k}from"./Note.4d65cb61.js";const h=u("Delay is set to 1000ms for this demo.");var m=n({setup(e){const n=a(0),u=a(0),i=l((()=>{n.value+=1}),1e3),d=()=>{u.value+=1,i()};return(e,a)=>{const l=k;return s(),t(p,null,[o("button",{onClick:d}," Smash me! "),o(l,null,{default:r((()=>[h])),_:1}),o("p",null,"Button clicked: "+c(u.value),1),o("p",null,"Event handler called: "+c(n.value),1)],64)}}});const b=o("h1",{id:""},[o("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),f=d('<p>useDebounceFn</p><p>Debounce execution of a function.</p><blockquote><p>Debounce is an overloaded waiter: if you keep asking him your requests will be ignored until you stop and give him some time to think about your latest inquiry.</p></blockquote><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useDebounceFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">const</span> debouncedFn <span class="token operator">=</span> <span class="token function">useDebounceFn</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// do something</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n\ndocument<span class="token punctuation">.</span><span class="token function">addEventLisenter</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> debouncedFn<span class="token punctuation">)</span>\n</code></pre></div><h2 id="related-functions"><a class="header-anchor" href="#related-functions" aria-hidden="true">#</a> Related Functions</h2><ul><li><code>useThrottle</code></li><li><code>useThrottleFn</code></li><li><code>useDebounce</code></li><li><code>useDebounceFn</code></li></ul><h2 id="recommended-reading"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended Reading</h2><ul><li><a href="https://redd.one/blog/debounce-vs-throttle" target="_blank" rel="noopener noreferrer"><strong>Debounce vs Throttle</strong>: Definitive Visual Guide</a></li></ul>',9),g=d('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token comment">/**\n * Debounce execution of a function.\n *\n * @param  fn          A function to be executed after delay milliseconds debounced.\n * @param  ms          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.\n *\n * @return A new, debounce, function.\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">useDebounceFn</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> FunctionArgs<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>\n  fn<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>\n  ms<span class="token operator">?</span><span class="token operator">:</span> MaybeRef<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/useDebounceFn/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/useDebounceFn/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/useDebounceFn/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4),v='{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Related Functions","slug":"related-functions"},{"level":2,"title":"Recommended Reading","slug":"recommended-reading"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"shared/useDebounceFn/index.md","lastUpdated":1626320652938}',_={};const D=Object.assign(_,{setup:function(n){return(n,a)=>{const c=e;return s(),t("div",null,[b,o(c,null,{default:r((()=>[o(m)])),_:1}),f,i("FOOTER_STARTS"),g,i("FOOTER_ENDS")])}}});export default D;export{v as __pageData};
