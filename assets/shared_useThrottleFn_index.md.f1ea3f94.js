import{_ as e}from"./DemoContainer.vue_vue&type=script&setup=true&lang.538fc852.js";import{f as n,r as a,o as s,c as t,a as o,w as r,t as l,d as c,ba as p,b as u,e as i}from"./app.5f9bb12a.js";import{_ as d}from"./Note.4d65cb61.js";const h=c("Delay is set to 1000ms for this demo.");var k=n({setup(e){const n=a(0),c=a(0),u=p((()=>{n.value+=1}),1e3),i=()=>{c.value+=1,u()};return(e,a)=>{const p=d;return s(),t("div",null,[o("button",{onClick:i}," Smash me! "),o(p,null,{default:r((()=>[h])),_:1}),o("p",null,"Button clicked: "+l(c.value),1),o("p",null,"Event handler called: "+l(n.value),1)])}}});const m=o("h1",{id:""},[o("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),f=i('<p>useThrottleFn</p><p>Throttle execution of a function. Especially useful for rate limiting execution of handlers on events like resize and scroll.</p><blockquote><p>Throttle is a spring that throws balls: after a ball flies out it needs some time to shrink back, so it cannot throw any more balls unless it&#39;s ready.</p></blockquote><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useThrottleFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">const</span> throttledFn <span class="token operator">=</span> <span class="token function">useThrottleFn</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// do something, it will be called at most 1 time per second</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n\ndocument<span class="token punctuation">.</span><span class="token function">addEventLisenter</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> throttledFn<span class="token punctuation">)</span>\n</code></pre></div><h2 id="related-functions"><a class="header-anchor" href="#related-functions" aria-hidden="true">#</a> Related Functions</h2><ul><li><code>useThrottle</code></li><li><code>useThrottleFn</code></li><li><code>useDebounce</code></li><li><code>useDebounceFn</code></li></ul><h2 id="recommended-reading"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended Reading</h2><ul><li><a href="https://redd.one/blog/debounce-vs-throttle" target="_blank" rel="noopener noreferrer"><strong>Debounce vs Throttle</strong>: Definitive Visual Guide</a></li></ul>',9),g=i('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token comment">/**\n * Throttle execution of a function. Especially useful for rate limiting\n * execution of handlers on events like resize and scroll.\n *\n * @param   fn             A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,\n *                                    to `callback` when the throttled-function is executed.\n * @param   ms             A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.\n *\n * @return  A new, throttled, function.\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">useThrottleFn</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> FunctionArgs<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>\n  fn<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>\n  ms<span class="token operator">?</span><span class="token operator">:</span> MaybeRef<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n  trailing<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/useThrottleFn/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/useThrottleFn/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/useThrottleFn/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4),b='{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Related Functions","slug":"related-functions"},{"level":2,"title":"Recommended Reading","slug":"recommended-reading"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"shared/useThrottleFn/index.md","lastUpdated":1626320652938}',v={};const T=Object.assign(v,{setup:function(n){return(n,a)=>{const l=e;return s(),t("div",null,[m,o(l,null,{default:r((()=>[o(k)])),_:1}),f,u("FOOTER_STARTS"),g,u("FOOTER_ENDS")])}}});export default T;export{b as __pageData};