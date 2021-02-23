import{r as n,b as t,o as a,c as s,d as e,w as o,u as l,i as c,e as p,a as u}from"./app.0c69c073.js";const k=e("h1",{id:"checkbox"},[e("a",{class:"header-anchor",href:"#checkbox","aria-hidden":"true"},"#"),p(" Checkbox")],-1),i=e("blockquote",null,[e("p",null,"封装多选框组")],-1),r=e("h2",{id:"使用"},[e("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),p(" 使用")],-1),d=e("ul",null,[e("li",null,"基础用法")],-1),g=e("p",null,[p("使用 "),e("code",null,"pro-checkbox"),p("，并传入 data 数据，自动生成选项")],-1),f=e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),p("template")]),e("span",{class:"token punctuation"},">")]),p("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),p("pro-checkbox")]),p("\n    "),e("span",{class:"token attr-name"},"v-model"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),p("checkbox"),e("span",{class:"token punctuation"},'"')]),p("\n    "),e("span",{class:"token attr-name"},":data"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),p("data"),e("span",{class:"token punctuation"},'"')]),p("\n  "),e("span",{class:"token punctuation"},"/>")]),p("\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),p("template")]),e("span",{class:"token punctuation"},">")]),p("\n\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),p("script")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token script"},[e("span",{class:"token language-javascript"},[p("\n"),e("span",{class:"token keyword"},"import"),p(),e("span",{class:"token punctuation"},"{"),p(" ref "),e("span",{class:"token punctuation"},"}"),p(),e("span",{class:"token keyword"},"from"),p(),e("span",{class:"token string"},"'vue'"),p("\n\n"),e("span",{class:"token keyword"},"export"),p(),e("span",{class:"token keyword"},"default"),p(),e("span",{class:"token punctuation"},"{"),p("\n  "),e("span",{class:"token function"},"setup"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),p(),e("span",{class:"token punctuation"},"{"),p("\n    "),e("span",{class:"token keyword"},"const"),p(" checkbox "),e("span",{class:"token operator"},"="),p(),e("span",{class:"token function"},"ref"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},")"),p("\n    "),e("span",{class:"token keyword"},"const"),p(" data "),e("span",{class:"token operator"},"="),p(),e("span",{class:"token function"},"ref"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"["),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'Go'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'go'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'JavaScript'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'javascript'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'Python'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'python'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'Dart'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'dart'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'V'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'v'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n    "),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},")"),p("\n\n    "),e("span",{class:"token keyword"},"return"),p(),e("span",{class:"token punctuation"},"{"),p("\n      checkbox"),e("span",{class:"token punctuation"},","),p("\n      data"),e("span",{class:"token punctuation"},","),p("\n    "),e("span",{class:"token punctuation"},"}"),p("\n  "),e("span",{class:"token punctuation"},"}"),p("\n"),e("span",{class:"token punctuation"},"}"),p("\n")])]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),p("script")]),e("span",{class:"token punctuation"},">")]),p("\n")])],-1),v=e("ul",null,[e("li",null,"控制不可选项目")],-1),y=e("p",null,[p("将传入 data 数据中的某项设置为 "),e("code",null,"disabled: true"),p(" 即可")],-1),b=e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),p("template")]),e("span",{class:"token punctuation"},">")]),p("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),p("pro-checkbox")]),p("\n    "),e("span",{class:"token attr-name"},"v-model"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),p("checkbox1"),e("span",{class:"token punctuation"},'"')]),p("\n    "),e("span",{class:"token attr-name"},":data"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),p("list"),e("span",{class:"token punctuation"},'"')]),p("\n  "),e("span",{class:"token punctuation"},"/>")]),p("\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),p("template")]),e("span",{class:"token punctuation"},">")]),p("\n\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),p("script")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token script"},[e("span",{class:"token language-javascript"},[p("\n"),e("span",{class:"token keyword"},"import"),p(),e("span",{class:"token punctuation"},"{"),p(" ref "),e("span",{class:"token punctuation"},"}"),p(),e("span",{class:"token keyword"},"from"),p(),e("span",{class:"token string"},"'vue'"),p("\n\n"),e("span",{class:"token keyword"},"export"),p(),e("span",{class:"token keyword"},"default"),p(),e("span",{class:"token punctuation"},"{"),p("\n  "),e("span",{class:"token function"},"setup"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),p(),e("span",{class:"token punctuation"},"{"),p("\n    "),e("span",{class:"token keyword"},"const"),p(" checkbox1 "),e("span",{class:"token operator"},"="),p(),e("span",{class:"token function"},"ref"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},")"),p("\n    "),e("span",{class:"token keyword"},"const"),p(" list "),e("span",{class:"token operator"},"="),p(),e("span",{class:"token function"},"ref"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"["),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'Go'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'go'"),e("span",{class:"token punctuation"},","),p(" disabled"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token boolean"},"true"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'JavaScript'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'javascript'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'Python'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'python'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'Dart'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'dart'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'V'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'v'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n    "),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},")"),p("\n\n    "),e("span",{class:"token keyword"},"return"),p(),e("span",{class:"token punctuation"},"{"),p("\n      checkbox1"),e("span",{class:"token punctuation"},","),p("\n      list"),e("span",{class:"token punctuation"},","),p("\n    "),e("span",{class:"token punctuation"},"}"),p("\n  "),e("span",{class:"token punctuation"},"}"),p("\n"),e("span",{class:"token punctuation"},"}"),p("\n")])]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),p("script")]),e("span",{class:"token punctuation"},">")]),p("\n")])],-1),x=e("ul",null,[e("li",null,"配置绑定数据键值")],-1),h=e("p",null,[p("通过 config 配置数据键值。"),e("code",null,"value"),p("- v-model 绑定的键值、"),e("code",null,"label"),p("-显示键值、"),e("code",null,"disabled"),p("-控制不可选的键值、"),e("code",null,"name"),p("-原生 name 的键值")],-1),m=e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),p("template")]),e("span",{class:"token punctuation"},">")]),p("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),p("pro-checkbox")]),p("\n    "),e("span",{class:"token attr-name"},"v-model"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),p("checkbox2"),e("span",{class:"token punctuation"},'"')]),p("\n    "),e("span",{class:"token attr-name"},":data"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),p("data"),e("span",{class:"token punctuation"},'"')]),p("\n    "),e("span",{class:"token attr-name"},":config"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),p("config"),e("span",{class:"token punctuation"},'"')]),p("\n  "),e("span",{class:"token punctuation"},"/>")]),p("\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),p("template")]),e("span",{class:"token punctuation"},">")]),p("\n\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),p("script")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token script"},[e("span",{class:"token language-javascript"},[p("\n"),e("span",{class:"token keyword"},"import"),p(),e("span",{class:"token punctuation"},"{"),p(" ref "),e("span",{class:"token punctuation"},"}"),p(),e("span",{class:"token keyword"},"from"),p(),e("span",{class:"token string"},"'vue'"),p("\n\n"),e("span",{class:"token keyword"},"export"),p(),e("span",{class:"token keyword"},"default"),p(),e("span",{class:"token punctuation"},"{"),p("\n  "),e("span",{class:"token function"},"setup"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),p(),e("span",{class:"token punctuation"},"{"),p("\n    "),e("span",{class:"token keyword"},"const"),p(" checkbox2 "),e("span",{class:"token operator"},"="),p(),e("span",{class:"token function"},"ref"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},")"),p("\n    "),e("span",{class:"token keyword"},"const"),p(" config "),e("span",{class:"token operator"},"="),p(),e("span",{class:"token function"},"ref"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'label'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'value'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),p("\n    "),e("span",{class:"token keyword"},"const"),p(" data "),e("span",{class:"token operator"},"="),p(),e("span",{class:"token function"},"ref"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"["),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'Go'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'go'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'JavaScript'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'javascript'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'Python'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'python'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'Dart'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'dart'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'V'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'v'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n    "),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},")"),p("\n\n    "),e("span",{class:"token keyword"},"return"),p(),e("span",{class:"token punctuation"},"{"),p("\n      checkbox2"),e("span",{class:"token punctuation"},","),p("\n      config"),e("span",{class:"token punctuation"},","),p("\n      data"),e("span",{class:"token punctuation"},","),p("\n    "),e("span",{class:"token punctuation"},"}"),p("\n  "),e("span",{class:"token punctuation"},"}"),p("\n"),e("span",{class:"token punctuation"},"}"),p("\n")])]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),p("script")]),e("span",{class:"token punctuation"},">")]),p("\n")])],-1),w=e("ul",null,[e("li",null,"按钮样式")],-1),V=e("p",null,[p("使用 "),e("code",null,"pro-checkbox-button"),p(" 显示按钮样式的多选框组")],-1),_=e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),p("template")]),e("span",{class:"token punctuation"},">")]),p("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),p("pro-checkbox-button")]),p("\n    "),e("span",{class:"token attr-name"},"v-model"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),p("checkboxbutton"),e("span",{class:"token punctuation"},'"')]),p("\n    "),e("span",{class:"token attr-name"},":data"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),p("data"),e("span",{class:"token punctuation"},'"')]),p("\n  "),e("span",{class:"token punctuation"},"/>")]),p("\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),p("template")]),e("span",{class:"token punctuation"},">")]),p("\n\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),p("script")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token script"},[e("span",{class:"token language-javascript"},[p("\n"),e("span",{class:"token keyword"},"import"),p(),e("span",{class:"token punctuation"},"{"),p(" ref "),e("span",{class:"token punctuation"},"}"),p(),e("span",{class:"token keyword"},"from"),p(),e("span",{class:"token string"},"'vue'"),p("\n\n"),e("span",{class:"token keyword"},"export"),p(),e("span",{class:"token keyword"},"default"),p(),e("span",{class:"token punctuation"},"{"),p("\n  "),e("span",{class:"token function"},"setup"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),p(),e("span",{class:"token punctuation"},"{"),p("\n    "),e("span",{class:"token keyword"},"const"),p(" checkboxbutton "),e("span",{class:"token operator"},"="),p(),e("span",{class:"token function"},"ref"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},")"),p("\n    "),e("span",{class:"token keyword"},"const"),p(" data "),e("span",{class:"token operator"},"="),p(),e("span",{class:"token function"},"ref"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"["),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'Go'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'go'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'JavaScript'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'javascript'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'Python'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'python'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'Dart'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'dart'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n      "),e("span",{class:"token punctuation"},"{"),p(" value"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'V'"),e("span",{class:"token punctuation"},","),p(" label"),e("span",{class:"token operator"},":"),p(),e("span",{class:"token string"},"'v'"),p(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),p("\n    "),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},")"),p("\n\n    "),e("span",{class:"token keyword"},"return"),p(),e("span",{class:"token punctuation"},"{"),p("\n      checkboxbutton"),e("span",{class:"token punctuation"},","),p("\n      data"),e("span",{class:"token punctuation"},","),p("\n    "),e("span",{class:"token punctuation"},"}"),p("\n  "),e("span",{class:"token punctuation"},"}"),p("\n"),e("span",{class:"token punctuation"},"}"),p("\n")])]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),p("script")]),e("span",{class:"token punctuation"},">")]),p("\n")])],-1),j=u('<h2 id="配置"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选值</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">绑定值</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">data</td><td style="text-align:left;">绑定数据</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">config</td><td style="text-align:left;">配置绑定数据键值</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">{ value: &#39;value&#39;, label: &#39;label&#39;, disabled: &#39;disabled&#39;, name: &#39;name&#39; }</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">尺寸</td><td style="text-align:left;">string</td><td style="text-align:left;">medium / small / mini</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">是否禁用</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">min</td><td style="text-align:left;">可被勾选的的最小数量</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">max</td><td style="text-align:left;">可被勾选的的最大数量</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">text-color</td><td style="text-align:left;">按钮形式激活时的文本颜色</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">#ffffff</td></tr><tr><td style="text-align:left;">fill</td><td style="text-align:left;">按钮形式激活时的填充色和边框色</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">#409EFF</td></tr></tbody></table>',2),P='{"title":"Checkbox","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用","slug":"使用"},{"level":2,"title":"配置","slug":"配置"}],"relativePath":"components/Checkbox.md","lastUpdated":1614046701654}',S={};const q=Object.assign(S,{expose:[],setup:function(p){let u=n([]),P=n([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]),S=n([]),q=n([{value:"Go",label:"go",disabled:!0},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]),D=n([]),G=n({value:"label",label:"value"});P=n([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]);let J=n([]);return P=n([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]),(n,p)=>{const T=t("pro-checkbox"),C=t("pro-code"),U=t("pro-checkbox-button");return a(),s("div",null,[k,i,r,d,e(C,null,{description:o((()=>[g])),code:o((()=>[f])),default:o((()=>[e(T,{modelValue:l(u),"onUpdate:modelValue":p[1]||(p[1]=n=>c(u)?u.value=n:u=n),data:l(P)},null,8,["modelValue","data"])])),_:1}),v,e(C,null,{description:o((()=>[y])),code:o((()=>[b])),default:o((()=>[e(T,{modelValue:l(S),"onUpdate:modelValue":p[2]||(p[2]=n=>c(S)?S.value=n:S=n),data:l(q)},null,8,["modelValue","data"])])),_:1}),x,e(C,null,{description:o((()=>[h])),code:o((()=>[m])),default:o((()=>[e(T,{modelValue:l(D),"onUpdate:modelValue":p[3]||(p[3]=n=>c(D)?D.value=n:D=n),data:l(P),config:l(G)},null,8,["modelValue","data","config"])])),_:1}),w,e(C,null,{description:o((()=>[V])),code:o((()=>[_])),default:o((()=>[e(U,{modelValue:l(J),"onUpdate:modelValue":p[4]||(p[4]=n=>c(J)?J.value=n:J=n),data:l(P)},null,8,["modelValue","data"])])),_:1}),j])}}});export default q;export{P as __pageData};
