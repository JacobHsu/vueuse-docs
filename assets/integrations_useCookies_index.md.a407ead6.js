import{o as n,c as s,b as a,e as o}from"./app.5f9bb12a.js";const e='{"title":"useCookies","description":"","frontmatter":"category \'@Integrations\'","headers":[{"level":2,"title":"Install","slug":"install"},{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Common usage","slug":"common-usage"},{"level":3,"title":"SSR support (Nuxt plugin example)","slug":"ssr-support-nuxt-plugin-example"},{"level":2,"title":"Options","slug":"options"},{"level":3,"title":"dependencies (optional)","slug":"dependencies-optional"},{"level":3,"title":"options (optional)","slug":"options-optional"},{"level":3,"title":"cookies (optional)","slug":"cookies-optional"},{"level":2,"title":"createCookies([req])","slug":"createcookies-req"},{"level":2,"title":"Type Declarations","slug":"type-declarations"},{"level":2,"title":"Source","slug":"source"}],"relativePath":"integrations/useCookies/index.md","lastUpdated":1626320652934}',t={},p=o('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>available in add-on <a href="/integrations/README.html"><code>@vueuse/integrations</code></a></p></div><h1 id="usecookies"><a class="header-anchor" href="#usecookies" aria-hidden="true">#</a> useCookies</h1><p>wrapper for <a href="https://www.npmjs.com/package/universal-cookie" target="_blank" rel="noopener noreferrer"><code>universal-cookie</code></a>.</p><h2 id="install"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-bash"><pre><code><span class="token function">npm</span> i universal-cookie\n</code></pre></div><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="common-usage"><a class="header-anchor" href="#common-usage" aria-hidden="true">#</a> Common usage</h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>locale<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>: {{ cookies.get(&#39;locale&#39;) }}\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>{{ cookies.getAll() }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cookies.set(<span class="token punctuation">&#39;</span>locale<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>ru-RU<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Russian<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cookies.set(<span class="token punctuation">&#39;</span>locale<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>en-US<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>English<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> useCookies <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/integrations/useCookies&#39;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> cookies <span class="token operator">=</span> <span class="token function">useCookies</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;locale&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        cookies<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="ssr-support-nuxt-plugin-example"><a class="header-anchor" href="#ssr-support-nuxt-plugin-example" aria-hidden="true">#</a> SSR support (<a href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noopener noreferrer">Nuxt</a> plugin example)</h3><div class="language-ts"><pre><code><span class="token comment">// universal-cookies.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createCookies <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/integrations/useCookies&#39;</span>\n\n<span class="token keyword">let</span> useUniversalCookies\n\n<span class="token keyword">const</span> <span class="token function-variable function">cookiesPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> req <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  useUniversalCookies <span class="token operator">=</span> <span class="token function">createCookies</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> cookiesPlugin\n\n<span class="token keyword">export</span> <span class="token punctuation">{</span> useUniversalCookies <span class="token punctuation">}</span> <span class="token comment">// now import and call useUniversalCookies instead of useCookies</span>\n</code></pre></div><h2 id="options"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><p>Access and modify cookies using vue composition-api.</p><blockquote><p>By default, you should use it inside <code>setup()</code>, but this function also works anywhere else.</p></blockquote><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> get<span class="token punctuation">,</span> getAll<span class="token punctuation">,</span> set<span class="token punctuation">,</span> remove<span class="token punctuation">,</span> addChangeListener<span class="token punctuation">,</span> removeChangeListener <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCookies</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;cookie-name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> doNotParse<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> autoUpdateDependencies<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="dependencies-optional"><a class="header-anchor" href="#dependencies-optional" aria-hidden="true">#</a> <code>dependencies</code> (optional)</h3><p>Let you optionally specify a list of cookie names your component depend on or that should trigger a re-render. If unspecified, it will render on every cookie change.</p><h3 id="options-optional"><a class="header-anchor" href="#options-optional" aria-hidden="true">#</a> <code>options</code> (optional)</h3><ul><li><code>doNotParse</code> (boolean = false): do not convert the cookie into an object no matter what. <strong>Passed as default value to <a href="/shared/get/"><code>get</code></a><code>getAll</code> methods.</strong></li><li><code>autoUpdateDependencies</code> (boolean = false): automatically add cookie names ever provided to <a href="/shared/get/"><code>get</code></a>method. If <strong>true</strong> then you don&#39;t need to care about provided <code>dependencies</code>.</li></ul><h3 id="cookies-optional"><a class="header-anchor" href="#cookies-optional" aria-hidden="true">#</a> <code>cookies</code> (optional)</h3><p>Let you provide a <code>universal-cookie</code> instance (creates a new instance by default)</p><blockquote><p>Info about methods available in the <a href="https://www.npmjs.com/package/universal-cookie#api---cookies-class" target="_blank" rel="noopener noreferrer">universal-cookie api docs</a></p></blockquote><h2 id="createcookies-req"><a class="header-anchor" href="#createcookies-req" aria-hidden="true">#</a> <code>createCookies([req])</code></h2><p>Create a <code>universal-cookie</code> instance using request (default is window.document.cookie) and returns <a href="/integrations/useCookies/"><code>useCookies</code></a>function with provided universal-cookie instance</p><ul><li>req (object): Node&#39;s <a href="https://nodejs.org/api/http.html#http_class_http_incomingmessage" target="_blank" rel="noopener noreferrer">http.IncomingMessage</a> request object</li></ul>',24),c=o('<h2 id="type-declarations"><a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a> Type Declarations</h2><div class="language-typescript"><pre><code><span class="token comment">/// &lt;reference types=&quot;node&quot; /&gt;</span>\n<span class="token comment">/**\n * Creates a new {@link useCookies} function\n * @param {Object} req - incoming http request (for SSR)\n * @see https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie universal-cookie\n * @description Creates universal-cookie instance using request (default is window.document.cookie) and returns {@link useCookies} function with provided universal-cookie instance\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">createCookies</span><span class="token punctuation">(</span>req<span class="token operator">?</span><span class="token operator">:</span> IncomingMessage<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span>\n  dependencies<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    doNotParse<span class="token punctuation">,</span>\n    autoUpdateDependencies<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    doNotParse<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>\n    autoUpdateDependencies<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">/**\n   * Reactive get cookie by name. If **autoUpdateDependencies = true** then it will update watching dependencies\n   */</span>\n  get<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> CookieGetOptions <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span>\n  <span class="token comment">/**\n   * Reactive get all cookies\n   */</span>\n  getAll<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T_1</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>options<span class="token operator">?</span><span class="token operator">:</span> CookieGetOptions <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T_1</span>\n  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span>\n    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n    value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>\n    options<span class="token operator">?</span><span class="token operator">:</span> CookieSetOptions <span class="token operator">|</span> <span class="token keyword">undefined</span>\n  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n  <span class="token function-variable function">remove</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> CookieSetOptions <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n  <span class="token function-variable function">addChangeListener</span><span class="token operator">:</span> <span class="token punctuation">(</span>callback<span class="token operator">:</span> CookieChangeListener<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n  <span class="token function-variable function">removeChangeListener</span><span class="token operator">:</span> <span class="token punctuation">(</span>callback<span class="token operator">:</span> CookieChangeListener<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/**\n * Reactive methods to work with cookies (use {@link createCookies} method instead if you are using SSR)\n * @param {string[]|null|undefined} dependencies - array of watching cookie&#39;s names. Pass empty array if don&#39;t want to watch cookies changes.\n * @param {Object} options\n * @param {boolean} options.doNotParse - don&#39;t try parse value as JSON\n * @param {boolean} options.autoUpdateDependencies - automatically update watching dependencies\n * @param {Object} cookies - universal-cookie instance\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">useCookies</span><span class="token punctuation">(</span>\n  dependencies<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    doNotParse<span class="token punctuation">,</span>\n    autoUpdateDependencies<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    doNotParse<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>\n    autoUpdateDependencies<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  cookies<span class="token operator">?</span><span class="token operator">:</span> Cookie\n<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token comment">/**\n   * Reactive get cookie by name. If **autoUpdateDependencies = true** then it will update watching dependencies\n   */</span>\n  get<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> CookieGetOptions <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span>\n  <span class="token comment">/**\n   * Reactive get all cookies\n   */</span>\n  getAll<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T_1</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>options<span class="token operator">?</span><span class="token operator">:</span> CookieGetOptions <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T_1</span>\n  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span>\n    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n    value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>\n    options<span class="token operator">?</span><span class="token operator">:</span> CookieSetOptions <span class="token operator">|</span> <span class="token keyword">undefined</span>\n  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n  <span class="token function-variable function">remove</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> CookieSetOptions <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n  <span class="token function-variable function">addChangeListener</span><span class="token operator">:</span> <span class="token punctuation">(</span>callback<span class="token operator">:</span> CookieChangeListener<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n  <span class="token function-variable function">removeChangeListener</span><span class="token operator">:</span> <span class="token punctuation">(</span>callback<span class="token operator">:</span> CookieChangeListener<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="source"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2><p><a href="https://github.com/vueuse/vueuse/blob/main/packages/integrations/useCookies/index.ts" target="_blank" rel="noopener noreferrer">Source</a> • <a href="https://github.com/vueuse/vueuse/blob/main/packages/integrations/useCookies/index.md" target="_blank" rel="noopener noreferrer">Docs</a></p>',4);t.render=function(o,e,t,l,i,r){return n(),s("div",null,[p,a("FOOTER_STARTS"),c,a("FOOTER_ENDS")])};export default t;export{e as __pageData};
