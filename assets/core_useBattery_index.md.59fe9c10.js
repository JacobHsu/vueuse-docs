import{_ as a}from"./DemoContainer.vue_vue&type=script&setup=true&lang.538fc852.js";import{f as e,I as s,J as n,o as t,c as o,t as r,u as p,a as c,w as l,b as i,e as u}from"./app.5f9bb12a.js";import{s as d}from"./utils.8fd68d5f.js";const k={lang:"yaml"};var h=e({setup(a){const e=s(n()),c=d(e);return(a,e)=>(t(),o("pre",k,r(p(c)),1))}});const g=u('<h1 id="usebattery"><a class="header-anchor" href="#usebattery" aria-hidden="true">#</a> useBattery</h1><p>Reactive <a href="https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API" target="_blank" rel="noopener noreferrer">Battery Status API</a>, more often referred to as the Battery API, provides information about the system&#39;s battery charge level and lets you be notified by events that are sent when the battery level or charging status change. This can be used to adjust your app&#39;s resource usage to reduce battery drain when the battery is low, or to save changes before the battery runs out in order to prevent data loss.</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useBattery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> isCharging<span class="token punctuation">,</span> chargingTime<span class="token punctuation">,</span> dischargingTime<span class="token punctuation">,</span> level <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useBattery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><table><thead><tr><th>State</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>charging</td><td><code>Boolean</code></td><td>If the device is currently charging.</td></tr><tr><td>chargingTime</td><td><code>Number</code></td><td>The number of seconds until the device becomes fully charged.</td></tr><tr><td>dischargingTime</td><td><code>Number</code></td><td>The number of seconds before the device becomes fully discharged.</td></tr><tr><td>level</td><td><code>Number</code></td><td>A number between 0 and 1 representing the current charge level.</td></tr></tbody></table><h2 id="use-cases"><a class="header-anchor" href="#use-cases" aria-hidden="true">#</a> Use-cases</h2><p>Our applications normally are not empathetic to battery level, we can make a few adjustments to our applications that will be more friendly to low battery users.</p><ul><li>Trigger a special &quot;dark-mode&quot; battery saver theme settings.</li><li>Stop auto playing videos in news feeds.</li><li>Disable some background workers that are not critical.</li><li>Limit network calls and reduce CPU/Memory consumption.</li></ul><h2 id="component"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UseBattery</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ charging }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  Is Charging: {{ charging }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>UseBattery</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',10),m=u('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">BatteryManager</span> <span class="token keyword">extends</span> <span class="token class-name">EventTarget</span> <span class="token punctuation">{</span>\n  charging<span class="token operator">:</span> <span class="token builtin">boolean</span>\n  chargingTime<span class="token operator">:</span> <span class="token builtin">number</span>\n  dischargingTime<span class="token operator">:</span> <span class="token builtin">number</span>\n  level<span class="token operator">:</span> <span class="token builtin">number</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/**\n * Reactive Battery Status API.\n *\n * @see /useBattery\n * @param options\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">useBattery</span><span class="token punctuation">(</span><span class="token punctuation">{</span> navigator <span class="token punctuation">}</span><span class="token operator">?</span><span class="token operator">:</span> ConfigurableNavigator<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  isSupported<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>\n  charging<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span>\n  chargingTime<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>\n  dischargingTime<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>\n  level<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">UseBatteryReturn</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> useBattery<span class="token operator">&gt;</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useBattery/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useBattery/demo.vue" target="_blank" rel="noopener noreferrer">Demo</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/core/useBattery/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4),b='{"title":"useBattery","description":"","frontmatter":"category Sensors","headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Use-cases","slug":"use-cases"},{"level":2,"title":"Component","slug":"component"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"core/useBattery/index.md","lastUpdated":1626320652922}',y={};const f=Object.assign(y,{setup:function(e){return(e,s)=>{const n=a;return t(),o("div",null,[c(n,null,{default:l((()=>[c(h)])),_:1}),g,i("FOOTER_STARTS"),m,i("FOOTER_ENDS")])}}});export default f;export{b as __pageData};