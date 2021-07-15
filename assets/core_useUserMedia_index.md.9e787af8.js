import{_ as s}from"./DemoContainer.vue_vue&type=script&setup=true&lang.538fc852.js";import{f as n,r as a,V as e,aJ as t,aK as o,o as p,c,a as r,u as l,t as i,F as u,E as k,w as d,b as v,e as f}from"./app.5f9bb12a.js";const m={class:"flex flex-col gap-4 text-center"};var g=n({setup(s){const n=a(),{videoInputs:d}=e({requestPermissions:!0,onUpdated(){var s;d.value.find((s=>s.deviceId===n.value))||(n.value=null==(s=d.value[0])?void 0:s.deviceId)}}),v=a(),{stream:f,enabled:g}=t({videoDeviceId:n});return o((()=>{v.value&&(v.value.srcObject=f.value)})),(s,a)=>(p(),c("div",m,[r("div",null,[r("button",{onClick:a[1]||(a[1]=s=>g.value=!l(g))},i(l(g)?"Stop":"Start"),1)]),r("div",null,[(p(!0),c(u,null,k(l(d),(s=>(p(),c("div",{key:s.deviceId,class:["px-2 py-1 cursor-pointer",{"text-primary":n.value===s.deviceId}],onClick:a=>n.value=s.deviceId},i(s.label),11,["onClick"])))),128))]),r("div",null,[r("video",{ref:v,muted:"",autoplay:"",controls:"",class:"h-100 w-auto"},null,512)])]))}});const h=f('<h1 id="useusermedia"><a class="header-anchor" href="#useusermedia" aria-hidden="true">#</a> useUserMedia</h1><p>Reactive <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia" target="_blank" rel="noopener noreferrer"><code>mediaDevices.getUserMedia</code></a> streaming.</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useUserMedia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> stream<span class="token punctuation">,</span> start <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useUserMedia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><div class="language-ts"><pre><code><span class="token keyword">const</span> video <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;video&#39;</span><span class="token punctuation">)</span>\n\n<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// preview on a video element</span>\n  video<span class="token punctuation">.</span>srcObject <span class="token operator">=</span> stream<span class="token punctuation">.</span>value\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="devices"><a class="header-anchor" href="#devices" aria-hidden="true">#</a> Devices</h3><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useUserMedia<span class="token punctuation">,</span> useDevicesList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span>\n  videoInputs<span class="token operator">:</span> cameras<span class="token punctuation">,</span>\n  audioInputs<span class="token operator">:</span> microphones<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDevicesList</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  requestPermissions<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> currentCamera <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> cameras<span class="token punctuation">.</span>value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">?.</span>deviceId<span class="token punctuation">)</span>\n<span class="token keyword">const</span> currentMicrophone <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> microphones<span class="token punctuation">.</span>value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">?.</span>deviceId<span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> stream <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useUserMedia</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  videoDeviceId<span class="token operator">:</span> currentCamera<span class="token punctuation">,</span>\n  audioDeviceId<span class="token operator">:</span> currentMicrophone<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="related"><a class="header-anchor" href="#related" aria-hidden="true">#</a> Related</h2><ul><li><code>useDevicesList</code></li><li><code>usePermission</code></li></ul>',9),b=f('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">UseUserMediaOptions</span> <span class="token keyword">extends</span> <span class="token class-name">ConfigurableNavigator</span> <span class="token punctuation">{</span>\n  <span class="token comment">/**\n   * If the stream is enabled\n   * @default false\n   */</span>\n  enabled<span class="token operator">?</span><span class="token operator">:</span> MaybeRef<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span>\n  <span class="token comment">/**\n   * Recreate stream when the input devices id changed\n   *\n   * @default true\n   */</span>\n  autoSwitch<span class="token operator">?</span><span class="token operator">:</span> MaybeRef<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span>\n  <span class="token comment">/**\n   * The device id of video input\n   *\n   * When passing with `undefined` the default device will be used.\n   * Pass `false` or &quot;none&quot; to disabled video input\n   *\n   * @default undefined\n   */</span>\n  videoDeviceId<span class="token operator">?</span><span class="token operator">:</span> MaybeRef<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token boolean">false</span> <span class="token operator">|</span> <span class="token string">&quot;none&quot;</span><span class="token operator">&gt;</span>\n  <span class="token comment">/**\n   * The device id of audi input\n   *\n   * When passing with `undefined` the default device will be used.\n   * Pass `false` or &quot;none&quot; to disabled audi input\n   *\n   * @default undefined\n   */</span>\n  audioDeviceId<span class="token operator">?</span><span class="token operator">:</span> MaybeRef<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token boolean">false</span> <span class="token operator">|</span> <span class="token string">&quot;none&quot;</span><span class="token operator">&gt;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/**\n * Reactive `mediaDevices.getUserMedia` streaming\n *\n * @see /useUserMedia\n * @param options\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">useUserMedia</span><span class="token punctuation">(</span>options<span class="token operator">?</span><span class="token operator">:</span> UseUserMediaOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  isSupported<span class="token operator">:</span> <span class="token builtin">boolean</span>\n  stream<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>MediaStream <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span>\n  <span class="token function-variable function">start</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>MediaStream <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span>\n  <span class="token function-variable function">stop</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n  <span class="token function-variable function">restart</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>MediaStream <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span>\n  videoDeviceId<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token boolean">false</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span>\n  audioDeviceId<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token boolean">false</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span>\n  enabled<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span>\n  autoSwitch<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">UseUserMediaReturn</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> useUserMedia<span class="token operator">&gt;</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useUserMedia/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useUserMedia/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useUserMedia/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4),y='{"title":"useUserMedia","description":"","frontmatter":"category Sensors","headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Devices","slug":"devices"},{"level":2,"title":"Related","slug":"related"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"core/useUserMedia/index.md","lastUpdated":1626320652930}',w={};const _=Object.assign(w,{setup:function(n){return(n,a)=>{const e=s;return p(),c("div",null,[r(e,null,{default:d((()=>[r(g)])),_:1}),h,v("FOOTER_STARTS"),b,v("FOOTER_ENDS")])}}});export default _;export{y as __pageData};
