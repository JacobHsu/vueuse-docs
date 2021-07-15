import{_ as n}from"./DemoContainer.vue_vue&type=script&setup=true&lang.538fc852.js";import{f as s,G as a,o as e,c as t,a as o,w as p,t as c,u as r,s as l,H as i,d as u,b as k,e as d}from"./app.5f9bb12a.js";import{_ as h}from"./Note.4d65cb61.js";const m={lang:"json",class:"ml-2"};var y=s({setup(n){const{state:s,isReady:k,execute:d}=a((()=>i.get("https://jsonplaceholder.typicode.com/todos/1").then((n=>n.data))),{},{delay:2e3,resetOnExecute:!1});return(n,a)=>{const i=h;return e(),t("div",null,[o(i,null,{default:p((()=>[u("Ready: "+c(r(k).toString()),1)])),_:1}),o("pre",m,c(r(l).dump(r(s))),1),o("button",{onClick:a[1]||(a[1]=n=>r(d)(2e3))}," Execute ")])}}});const g=o("h1",{id:""},[o("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),f=d('<p>useAsyncState</p><p>Reactive async state. Will not block your setup function and will trigger changes once the promise is ready.</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-ts"><pre><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useAsyncState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> ready <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAsyncState</span><span class="token punctuation">(</span>\n  axios\n    <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;https://jsonplaceholder.typicode.com/todos/1&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>t <span class="token operator">=&gt;</span> t<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span>\n</code></pre></div>',4),b=d('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AsyncStateOptions</span> <span class="token punctuation">{</span>\n  <span class="token comment">/**\n   * Delay for executing the promise. In milliseconds.\n   *\n   * @default 0\n   */</span>\n  delay<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>\n  <span class="token comment">/**\n   * Excute the promise right after the function is invoked.\n   * Will apply the delay if any.\n   *\n   * When set to false, you will need to execute it manually.\n   *\n   * @default true\n   */</span>\n  immediate<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n  <span class="token comment">/**\n   * Callback when error is caught.\n   */</span>\n  onError<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> Error<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n  <span class="token comment">/**\n   * Sets the state to initialState before executing the promise.\n   *\n   * This can be useful when calling the execute function more than once (for\n   * example, to refresh data). When set to false, the current state remains\n   * unchanged until the promise resolves.\n   *\n   * @default true\n   */</span>\n  resetOnExecute<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/**\n * Reactive async state. Will not block your setup function and will triggers changes once\n * the promise is ready.\n *\n * @see /useAsyncState\n * @param promise         The promise / async function to be resolved\n * @param initialState    The initial state, used until the first evaluation finishes\n * @param options\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">useAsyncState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>\n  promise<span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  initialState<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>\n  options<span class="token operator">?</span><span class="token operator">:</span> AsyncStateOptions\n<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  state<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>\n  isReady<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span>\n  error<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>\n    <span class="token operator">|</span> <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token builtin">string</span>\n        message<span class="token operator">:</span> <span class="token builtin">string</span>\n        stack<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>\n      <span class="token punctuation">}</span>\n    <span class="token operator">|</span> <span class="token keyword">undefined</span>\n  <span class="token operator">&gt;</span>\n  <span class="token function-variable function">execute</span><span class="token operator">:</span> <span class="token punctuation">(</span>delay<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">UseAsyncStateReturn</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> useAsyncState<span class="token operator">&gt;</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useAsyncState/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useAsyncState/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useAsyncState/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4),_='{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"core/useAsyncState/index.md","lastUpdated":1626320652922}',v={};const S=Object.assign(v,{setup:function(s){return(s,a)=>{const c=n;return e(),t("div",null,[g,o(c,null,{default:p((()=>[o(y)])),_:1}),f,k("FOOTER_STARTS"),b,k("FOOTER_ENDS")])}}});export default S;export{_ as __pageData};
