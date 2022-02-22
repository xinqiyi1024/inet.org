import{h as n}from"./app.4529ec83.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u5E8F\u5217\u5316-serializable" tabindex="-1"><a class="header-anchor" href="#\u5E8F\u5217\u5316-serializable" aria-hidden="true">#</a> \u5E8F\u5217\u5316 <code>Serializable</code></h1><h3 id="\u5728java\u4EE3\u7801\u4E2D\u8BBE\u8BA1\u5B9E\u4F53\u7C7B-eneity-\u65F6-\u901A\u5E38\u90FD\u4F1A\u5B9E\u73B0-serializable-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5728java\u4EE3\u7801\u4E2D\u8BBE\u8BA1\u5B9E\u4F53\u7C7B-eneity-\u65F6-\u901A\u5E38\u90FD\u4F1A\u5B9E\u73B0-serializable-\u63A5\u53E3" aria-hidden="true">#</a> \u5728Java\u4EE3\u7801\u4E2D\u8BBE\u8BA1\u5B9E\u4F53\u7C7B <code>eneity</code> \u65F6, \u901A\u5E38\u90FD\u4F1A\u5B9E\u73B0 <code>Serializable</code> \u63A5\u53E3</h3><h3 id="\u7C7B\u4F3C\u8FD9\u6837" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u4F3C\u8FD9\u6837" aria-hidden="true">#</a> \u7C7B\u4F3C\u8FD9\u6837</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>inet<span class="token punctuation">.</span>codebase<span class="token punctuation">.</span>entity</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">TableName</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">IdType</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">TableId</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">LocalDateTime</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">EqualsAndHashCode</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span>experimental<span class="token punctuation">.</span></span><span class="token class-name">Accessors</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
 * \u7528\u6237\u5B9E\u4F53\u7C7B
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 *
 * <span class="token keyword">@author</span> HCY
 * <span class="token keyword">@since</span> 2020-10-13
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@EqualsAndHashCode</span><span class="token punctuation">(</span>callSuper <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Accessors</span><span class="token punctuation">(</span>chain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">&quot;tbl_user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7528\u6237\u5E8F\u53F7
     */</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;user_id&quot;</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span>AUTO<span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> userId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7528\u6237\u59D3\u540D
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7528\u6237\u751F\u65E5
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">LocalDateTime</span> userBirthday<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7528\u6237\u7231\u597D
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> userHabby<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7528\u6237\u8EAB\u4EFD\u8BC1
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> userIdentity<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7528\u6237\u4F4F\u5740
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> userAddress<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><h2 id="serializable\u63A5\u53E3\u7684\u7528\u5904\u662F\u4EC0\u4E48\u5462" tabindex="-1"><a class="header-anchor" href="#serializable\u63A5\u53E3\u7684\u7528\u5904\u662F\u4EC0\u4E48\u5462" aria-hidden="true">#</a> <code>Serializable</code>\u63A5\u53E3\u7684\u7528\u5904\u662F\u4EC0\u4E48\u5462?</h2><p><strong><em>\u4E00\u4E2A\u5C06\u5B9E\u4F53\u7C7B\u5E8F\u5217\u5316\u7684\u63A5\u53E3,\u4E00\u4E2A\u7C7B\u53EA\u6709\u5B9E\u73B0\u4E86<code>Serializable</code> \u63A5\u53E3 , \u5B83\u7684\u5BF9\u8C61\u624D\u80FD\u88AB\u5E8F\u5217\u5316</em></strong></p><h2 id="\u4EC0\u4E48\u662F\u5E8F\u5217\u5316\u5462" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u5E8F\u5217\u5316\u5462" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u5E8F\u5217\u5316\u5462?</h2><p><strong><em>\u5E8F\u5217\u5316\u662F\u5C06\u5BF9\u8C61\u72B6\u6001\u8F6C\u6362\u4E3A\u53EF\u4FDD\u6301\u6216\u4F20\u8F93\u7684\u683C\u5F0F\u7684\u8FC7\u7A0B\u3002</em></strong></p><p><strong><em>\u4E0E\u5E8F\u5217\u5316\u76F8\u5BF9\u7684\u662F\u53CD\u5E8F\u5217\u5316\uFF0C\u5B83\u5C06\u6D41\u8F6C\u6362\u4E3A\u5BF9\u8C61\u3002</em></strong></p><p><strong><em>\u8FD9\u4E24\u4E2A\u8FC7\u7A0B\u7ED3\u5408\u8D77\u6765\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u5B58\u50A8\u548C\u4F20\u8F93\u6570\u636E\u3002</em></strong></p><h2 id="\u4E3A\u4EC0\u4E48\u5B9E\u4F53\u7C7B\u5BF9\u8C61-entity-\u9700\u8981\u5E8F\u5217\u5316" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u5B9E\u4F53\u7C7B\u5BF9\u8C61-entity-\u9700\u8981\u5E8F\u5217\u5316" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u5B9E\u4F53\u7C7B\u5BF9\u8C61 <code>entity</code> \u9700\u8981\u5E8F\u5217\u5316</h2><p><strong><em>\u5C06\u5BF9\u8C61\u8F6C\u6362\u4E3A\u5B57\u8282\u5E8F\u5217\u7684\u8FC7\u7A0B\u79F0\u4E3A\u5BF9\u8C61\u7684\u5E8F\u5217\u5316</em></strong></p><p><strong><em>\u5C06\u5B57\u8282\u5E8F\u5217\u6062\u590D\u4E3A\u5BF9\u8C61\u7684\u8FC7\u7A0B\u79F0\u4E3A\u5BF9\u8C61\u7684\u53CD\u5E8F\u5217\u5316</em></strong></p><h2 id="\u4EC0\u4E48\u60C5\u51B5\u4E0B\u9700\u8981\u4F7F\u7528\u5E8F\u5217\u5316" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u60C5\u51B5\u4E0B\u9700\u8981\u4F7F\u7528\u5E8F\u5217\u5316" aria-hidden="true">#</a> \u4EC0\u4E48\u60C5\u51B5\u4E0B\u9700\u8981\u4F7F\u7528\u5E8F\u5217\u5316</h2><p><strong><em>\u5F53\u6211\u4EEC\u9700\u8981\u628A\u5BF9\u8C61\u7684\u72B6\u6001\u4FE1\u606F\u901A\u8FC7\u7F51\u7EDC\u8FDB\u884C\u4F20\u8F93\uFF0C\u6216\u8005\u9700\u8981\u5C06\u5BF9\u8C61\u7684\u72B6\u6001\u4FE1\u606F\u6301\u4E45\u5316\uFF0C\u4EE5\u4FBF\u5C06\u6765\u4F7F\u7528\u65F6\u90FD\u9700\u8981\u628A\u5BF9\u8C61\u8FDB\u884C\u5E8F\u5217\u5316</em></strong></p><h2 id="\u5B9E\u73B0serializable-\u65F6\u7684\u5E8F\u5217\u8BDDid\u7684\u4E24\u79CD\u751F\u6210\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0serializable-\u65F6\u7684\u5E8F\u5217\u8BDDid\u7684\u4E24\u79CD\u751F\u6210\u7B56\u7565" aria-hidden="true">#</a> \u5B9E\u73B0<code>Serializable</code> \u65F6\u7684\u5E8F\u5217\u8BDDID\u7684\u4E24\u79CD\u751F\u6210\u7B56\u7565</h2><p><strong><em>\u56FA\u5B9A\u76841L (\u5EFA\u8BAE\u8FD9\u4E48\u4F7F\u7528 , \u53EF\u4EE5\u786E\u4FDD\u4EE3\u7801\u4E00\u81F4\u65F6,\u53CD\u5E8F\u5217\u5316\u6210\u529F)</em></strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong><em>\u4E00\u4E2A\u662F\u968F\u673A\u751F\u6210\u4E00\u4E2A\u4E0D\u91CD\u590D\u7684 long \u7C7B\u578B\u6570\u636E\uFF08\u4F5C\u7528\u662F\uFF1A\u901A\u8FC7\u6539\u53D8\u5E8F\u5217\u5316 ID \u53EF\u4EE5\u7528\u6765\u9650\u5236\u67D0\u4E9B\u7528\u6237\u7684\u4F7F\u7528\u3002\uFF09</em></strong></p><h2 id="\u6253\u5F00\u5E8F\u5217\u5316serializable-\u7684\u6E90\u4EE3\u7801-\u53D1\u73B0\u7684\u79D8\u5BC6" tabindex="-1"><a class="header-anchor" href="#\u6253\u5F00\u5E8F\u5217\u5316serializable-\u7684\u6E90\u4EE3\u7801-\u53D1\u73B0\u7684\u79D8\u5BC6" aria-hidden="true">#</a> \u6253\u5F00\u5E8F\u5217\u5316<code>Serializable</code> \u7684\u6E90\u4EE3\u7801,\u53D1\u73B0\u7684\u79D8\u5BC6</h2><p><img src="https://ss.im5i.com/2020/10/13/RVASKLUBYIHKS9A.png" alt="Serializable\u7684\u6E90\u4EE3\u7801"></p><h3 id="\u6211\u4EEC\u53D1\u73B0\u8FD9\u662F\u4E00\u4E2A\u7A7A\u7684\u63A5\u53E3-\u90A3\u4E3A\u4EC0\u4E48\u9700\u8981\u5B9E\u73B0\u4ED6\u5462" tabindex="-1"><a class="header-anchor" href="#\u6211\u4EEC\u53D1\u73B0\u8FD9\u662F\u4E00\u4E2A\u7A7A\u7684\u63A5\u53E3-\u90A3\u4E3A\u4EC0\u4E48\u9700\u8981\u5B9E\u73B0\u4ED6\u5462" aria-hidden="true">#</a> \u6211\u4EEC\u53D1\u73B0\u8FD9\u662F\u4E00\u4E2A\u7A7A\u7684\u63A5\u53E3,\u90A3\u4E3A\u4EC0\u4E48\u9700\u8981\u5B9E\u73B0\u4ED6\u5462?</h3><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> \u89E3\u91CA</span>
<span class="token bold"><span class="token punctuation">**</span><span class="token content"><span class="token italic"><span class="token punctuation">_</span><span class="token content">
\u5F53\u6211\u4EEC\u8BA9\u5B9E\u4F53\u7C7B\u5B9E\u73B0Serializable\u63A5\u53E3\u65F6\uFF0C\u5176\u5B9E\u662F\u5728\u544A\u8BC9JVM\u6B64\u7C7B\u53EF\u88AB\u5E8F\u5217\u5316\uFF0C\u53EF\u88AB\u9ED8\u8BA4\u7684\u5E8F\u5217\u5316\u673A\u5236\u5E8F\u5217\u5316.
\u7136\u540E\uFF0C\u9700\u8981\u8BF4\u660E\u7684\u662F\uFF0C\u5F53\u6211\u4EEC\u5728\u5B9E\u4F53\u7C7B\u58F0\u660E\u5B9E\u73B0Serializable\u63A5\u53E3\u65F6\uFF0C\u518D\u6B21\u8FDB\u884C\u89C2\u5BDF\uFF0C\u4F1A\u53D1\u73B0\u8FD9\u4E9B\u7C7B\u662F\u9700\u8981\u88AB\u8FDC\u7A0B\u8C03\u7528\u7684\u3002\u4E5F\u5C31\u662F\u8BF4\u9700\u8981\u6216\u8005\u53EF\u80FD\u9700\u8981\u88AB\u8FDC\u7A0B\u8C03\u7528\uFF0C\u8FD9\u5C31\u662F\u5E8F\u5217\u5316\u4FBF\u4E8E\u4F20\u8F93\u7684\u7528\u9014\u3002
</span><span class="token punctuation">_</span></span></span><span class="token punctuation">**</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,23);function p(t,c){return e}var r=s(a,[["render",p]]);export{r as default};
