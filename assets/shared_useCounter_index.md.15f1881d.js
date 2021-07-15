import{_ as n}from"./DemoContainer.vue_vue&type=script&setup=true&lang.538fc852.js";import{f as s,a8 as a,o as e,c as t,a as o,t as p,u as c,w as r,b as u,e as l}from"./app.5f9bb12a.js";var i=s({setup(n){const{count:s,inc:r,dec:u,set:l,reset:i}=a();return(n,a)=>(e(),t("div",null,[o("p",null,"Count: "+p(c(s)),1),o("button",{onClick:a[1]||(a[1]=n=>c(r)())}," Increment "),o("button",{onClick:a[2]||(a[2]=n=>c(u)())}," Decrement "),o("button",{onClick:a[3]||(a[3]=n=>c(r)(5))}," Increment (+5) "),o("button",{onClick:a[4]||(a[4]=n=>c(u)(5))}," Decrement (-5) "),o("button",{onClick:a[5]||(a[5]=n=>c(l)(100))}," Set (100) "),o("button",{onClick:a[6]||(a[6]=n=>c(i)())}," Reset ")]))}});const k=o("h1",{id:""},[o("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),d=l('<p>useCounter</p><p>Basic counter with utility functions.</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCounter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> count<span class="token punctuation">,</span> inc<span class="token punctuation">,</span> dec<span class="token punctuation">,</span> set<span class="token punctuation">,</span> reset <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div>',4),b=l('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token comment">/**\n * Basic counter with utility functions.\n *\n * @see /useCounter\n * @param [initialValue=0]\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">useCounter</span><span class="token punctuation">(</span>initialValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  count<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>\n  <span class="token function-variable function">inc</span><span class="token operator">:</span> <span class="token punctuation">(</span>delta<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span>\n  <span class="token function-variable function">dec</span><span class="token operator">:</span> <span class="token punctuation">(</span>delta<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span>\n  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span>\n  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span>\n  <span class="token function-variable function">reset</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/useCounter/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/useCounter/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/useCounter/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4),h='{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"shared/useCounter/index.md","lastUpdated":1626320652938}',f={};const m=Object.assign(f,{setup:function(s){return(s,a)=>{const p=n;return e(),t("div",null,[k,o(p,null,{default:r((()=>[o(i)])),_:1}),d,u("FOOTER_STARTS"),b,u("FOOTER_ENDS")])}}});export default m;export{h as __pageData};
