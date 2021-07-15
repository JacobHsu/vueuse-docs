import{_ as n}from"./DemoContainer.vue_vue&type=script&setup=true&lang.538fc852.js";import{f as a,r as s,aY as e,o as t,c as o,l as p,v as c,a as l,F as r,w as u,b as i,e as k}from"./app.5f9bb12a.js";var d=a({setup(n){const a=s(""),u=s("");return e(a,u),(n,s)=>(t(),o(r,null,[p(l("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>a.value=n),placeholder:"A",type:"text"},null,512),[[c,a.value]]),p(l("input",{"onUpdate:modelValue":s[2]||(s[2]=n=>u.value=n),placeholder:"B",type:"text"},null,512),[[c,u.value]])],64))}});const f=l("h1",{id:""},[l("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),h=k('<p>biSyncRef</p><p>Two-way refs synchronization.</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> biSyncRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> stop <span class="token operator">=</span> <span class="token function">biSyncRef</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>\n\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// a</span>\n\nb<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>\n\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// foo</span>\n\na<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>\n\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// bar</span>\n</code></pre></div><h2 id="related-functions"><a class="header-anchor" href="#related-functions" aria-hidden="true">#</a> Related Functions</h2><ul><li><code>syncRef</code></li></ul>',6),b=k('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token comment">/**\n * Two-way refs synchronization.\n *\n * @param a\n * @param b\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">biSyncRef</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">R</span> <span class="token keyword">extends</span> Ref<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">R</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token constant">R</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/biSyncRef/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/biSyncRef/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/shared/biSyncRef/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4),g='{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Related Functions","slug":"related-functions"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"shared/biSyncRef/index.md","lastUpdated":1626320652934}',y={};const v=Object.assign(y,{setup:function(a){return(a,s)=>{const e=n;return t(),o("div",null,[f,l(e,null,{default:u((()=>[l(d)])),_:1}),h,i("FOOTER_STARTS"),b,i("FOOTER_ENDS")])}}});export default v;export{g as __pageData};
