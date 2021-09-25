import{u as t}from"./index.41f9e55e.js";import{r as n,M as a,q as s,v as e,P as l,J as o,u as p,f as c,aq as u,B as i,$ as r}from"./modules-vue.76ee07d9.js";import"./modules-element-plus.0711d9f1.js";const d={class:"markdown-body"},k=u('<h1 id="select" tabindex="-1">Select <a class="header-anchor" href="#select" aria-hidden="true">#</a></h1><blockquote><p>When there are plenty of options, use a drop-down menu to display and select desired ones</p></blockquote><h2 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-hidden="true">#</a></h2><h3 id="basic-use" tabindex="-1">Basic Use <a class="header-anchor" href="#basic-use" aria-hidden="true">#</a></h3>',4),g=i("p",null,[r("Set "),i("code",null,"data"),r(" attribute will automatic generate options")],-1),f=i("pre",null,[i("code",{"v-pre":""},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("template")]),i("span",{class:"token punctuation"},">")]),r("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("pro-select")]),r("\n    "),i("span",{class:"token attr-name"},"v-model"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("select"),i("span",{class:"token punctuation"},'"')]),r("\n    "),i("span",{class:"token attr-name"},":data"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("data"),i("span",{class:"token punctuation"},'"')]),r("\n  "),i("span",{class:"token punctuation"},"/>")]),r("\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),r("template")]),i("span",{class:"token punctuation"},">")]),r("\n\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("script")]),i("span",{class:"token punctuation"},">")]),i("span",{class:"token script"},[i("span",{class:"token language-javascript"},[r("\n"),i("span",{class:"token keyword"},"import"),r(),i("span",{class:"token punctuation"},"{"),r(" ref "),i("span",{class:"token punctuation"},"}"),r(),i("span",{class:"token keyword"},"from"),r(),i("span",{class:"token string"},"'vue'"),r("\n\n"),i("span",{class:"token keyword"},"export"),r(),i("span",{class:"token keyword"},"default"),r(),i("span",{class:"token punctuation"},"{"),r("\n  "),i("span",{class:"token function"},"setup"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},")"),r(),i("span",{class:"token punctuation"},"{"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" select "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token string"},"''"),i("span",{class:"token punctuation"},")"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" data "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},"["),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Go'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'go'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'JavaScript'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'javascript'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Python'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'python'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Dart'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'dart'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'V'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'v'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n    "),i("span",{class:"token punctuation"},"]"),i("span",{class:"token punctuation"},")"),r("\n\n    "),i("span",{class:"token keyword"},"return"),r(),i("span",{class:"token punctuation"},"{"),r("\n      select"),i("span",{class:"token punctuation"},","),r("\n      data"),i("span",{class:"token punctuation"},","),r("\n    "),i("span",{class:"token punctuation"},"}"),r("\n  "),i("span",{class:"token punctuation"},"}"),r("\n"),i("span",{class:"token punctuation"},"}"),r("\n")])]),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),r("script")]),i("span",{class:"token punctuation"},">")]),r("\n")])],-1),y=i("h3",{id:"disabled-state",tabindex:"-1"},[r("Disabled State "),i("a",{class:"header-anchor",href:"#disabled-state","aria-hidden":"true"},"#")],-1),h=i("p",null,[r("Set the "),i("code",null,"disabled"),r(" attribute in prop "),i("code",null,"data")],-1),x=i("pre",null,[i("code",{"v-pre":""},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("template")]),i("span",{class:"token punctuation"},">")]),r("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("pro-select")]),r("\n    "),i("span",{class:"token attr-name"},"v-model"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("select1"),i("span",{class:"token punctuation"},'"')]),r("\n    "),i("span",{class:"token attr-name"},":data"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("list"),i("span",{class:"token punctuation"},'"')]),r("\n  "),i("span",{class:"token punctuation"},"/>")]),r("\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),r("template")]),i("span",{class:"token punctuation"},">")]),r("\n\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("script")]),i("span",{class:"token punctuation"},">")]),i("span",{class:"token script"},[i("span",{class:"token language-javascript"},[r("\n"),i("span",{class:"token keyword"},"import"),r(),i("span",{class:"token punctuation"},"{"),r(" ref "),i("span",{class:"token punctuation"},"}"),r(),i("span",{class:"token keyword"},"from"),r(),i("span",{class:"token string"},"'vue'"),r("\n\n"),i("span",{class:"token keyword"},"export"),r(),i("span",{class:"token keyword"},"default"),r(),i("span",{class:"token punctuation"},"{"),r("\n  "),i("span",{class:"token function"},"setup"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},")"),r(),i("span",{class:"token punctuation"},"{"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" select1 "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token string"},"''"),i("span",{class:"token punctuation"},")"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" list "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},"["),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Go'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'go'"),i("span",{class:"token punctuation"},","),r(" disabled"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token boolean"},"true"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'JavaScript'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'javascript'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Python'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'python'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Dart'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'dart'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'V'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'v'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n    "),i("span",{class:"token punctuation"},"]"),i("span",{class:"token punctuation"},")"),r("\n\n    "),i("span",{class:"token keyword"},"return"),r(),i("span",{class:"token punctuation"},"{"),r("\n      select1"),i("span",{class:"token punctuation"},","),r("\n      list"),i("span",{class:"token punctuation"},","),r("\n    "),i("span",{class:"token punctuation"},"}"),r("\n  "),i("span",{class:"token punctuation"},"}"),r("\n"),i("span",{class:"token punctuation"},"}"),r("\n")])]),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),r("script")]),i("span",{class:"token punctuation"},">")]),r("\n")])],-1),v=i("h3",{id:"configure-binding-data-key",tabindex:"-1"},[r("Configure binding data key "),i("a",{class:"header-anchor",href:"#configure-binding-data-key","aria-hidden":"true"},"#")],-1),m=i("p",null,[r("Set "),i("code",null,"config"),r(" attribute. "),i("code",null,"value"),r("- v-model bind key; "),i("code",null,"label"),r("- display key; "),i("code",null,"disabled"),r("- Disabled key; "),i("code",null,"children"),r("- children key")],-1),b=i("pre",null,[i("code",{"v-pre":""},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("template")]),i("span",{class:"token punctuation"},">")]),r("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("pro-select")]),r("\n    "),i("span",{class:"token attr-name"},"v-model"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("select2"),i("span",{class:"token punctuation"},'"')]),r("\n    "),i("span",{class:"token attr-name"},":data"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("data"),i("span",{class:"token punctuation"},'"')]),r("\n    "),i("span",{class:"token attr-name"},":config"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("config"),i("span",{class:"token punctuation"},'"')]),r("\n  "),i("span",{class:"token punctuation"},"/>")]),r("\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),r("template")]),i("span",{class:"token punctuation"},">")]),r("\n\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("script")]),i("span",{class:"token punctuation"},">")]),i("span",{class:"token script"},[i("span",{class:"token language-javascript"},[r("\n"),i("span",{class:"token keyword"},"import"),r(),i("span",{class:"token punctuation"},"{"),r(" ref "),i("span",{class:"token punctuation"},"}"),r(),i("span",{class:"token keyword"},"from"),r(),i("span",{class:"token string"},"'vue'"),r("\n\n"),i("span",{class:"token keyword"},"export"),r(),i("span",{class:"token keyword"},"default"),r(),i("span",{class:"token punctuation"},"{"),r("\n  "),i("span",{class:"token function"},"setup"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},")"),r(),i("span",{class:"token punctuation"},"{"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" select2 "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token string"},"''"),i("span",{class:"token punctuation"},")"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" config "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'label'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'value'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},")"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" data "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},"["),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Go'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'go'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'JavaScript'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'javascript'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Python'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'python'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Dart'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'dart'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'V'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'v'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n    "),i("span",{class:"token punctuation"},"]"),i("span",{class:"token punctuation"},")"),r("\n\n    "),i("span",{class:"token keyword"},"return"),r(),i("span",{class:"token punctuation"},"{"),r("\n      select2"),i("span",{class:"token punctuation"},","),r("\n      config"),i("span",{class:"token punctuation"},","),r("\n      data"),i("span",{class:"token punctuation"},","),r("\n    "),i("span",{class:"token punctuation"},"}"),r("\n  "),i("span",{class:"token punctuation"},"}"),r("\n"),i("span",{class:"token punctuation"},"}"),r("\n")])]),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),r("script")]),i("span",{class:"token punctuation"},">")]),r("\n")])],-1),w=i("h3",{id:"basic-multiple-select",tabindex:"-1"},[r("Basic multiple select "),i("a",{class:"header-anchor",href:"#basic-multiple-select","aria-hidden":"true"},"#")],-1),S=i("p",null,[r("Set "),i("code",null,"multiple"),r(" attribute to enable multiple mode. In this case, the value of v-model will be an array of selected options")],-1),V=i("pre",null,[i("code",{"v-pre":""},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("template")]),i("span",{class:"token punctuation"},">")]),r("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("pro-select")]),r("\n    "),i("span",{class:"token attr-name"},"v-model"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("select3"),i("span",{class:"token punctuation"},'"')]),r("\n    "),i("span",{class:"token attr-name"},":data"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("data"),i("span",{class:"token punctuation"},'"')]),r("\n    "),i("span",{class:"token attr-name"},"multiple"),r("\n  "),i("span",{class:"token punctuation"},"/>")]),r("\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),r("template")]),i("span",{class:"token punctuation"},">")]),r("\n\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("script")]),i("span",{class:"token punctuation"},">")]),i("span",{class:"token script"},[i("span",{class:"token language-javascript"},[r("\n"),i("span",{class:"token keyword"},"import"),r(),i("span",{class:"token punctuation"},"{"),r(" ref "),i("span",{class:"token punctuation"},"}"),r(),i("span",{class:"token keyword"},"from"),r(),i("span",{class:"token string"},"'vue'"),r("\n\n"),i("span",{class:"token keyword"},"export"),r(),i("span",{class:"token keyword"},"default"),r(),i("span",{class:"token punctuation"},"{"),r("\n  "),i("span",{class:"token function"},"setup"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},")"),r(),i("span",{class:"token punctuation"},"{"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" select3 "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},"["),i("span",{class:"token punctuation"},"]"),i("span",{class:"token punctuation"},")"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" data "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},"["),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Go'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'go'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'JavaScript'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'javascript'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Python'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'python'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Dart'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'dart'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n      "),i("span",{class:"token punctuation"},"{"),r(" value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'V'"),i("span",{class:"token punctuation"},","),r(" label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'v'"),r(),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r("\n    "),i("span",{class:"token punctuation"},"]"),i("span",{class:"token punctuation"},")"),r("\n\n    "),i("span",{class:"token keyword"},"return"),r(),i("span",{class:"token punctuation"},"{"),r("\n      select3"),i("span",{class:"token punctuation"},","),r("\n      data"),i("span",{class:"token punctuation"},","),r("\n    "),i("span",{class:"token punctuation"},"}"),r("\n  "),i("span",{class:"token punctuation"},"}"),r("\n"),i("span",{class:"token punctuation"},"}"),r("\n")])]),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),r("script")]),i("span",{class:"token punctuation"},">")]),r("\n")])],-1),j=i("h3",{id:"grouping",tabindex:"-1"},[r("Grouping "),i("a",{class:"header-anchor",href:"#grouping","aria-hidden":"true"},"#")],-1),D=i("p",null,[r("Set "),i("code",null,"children"),r(" in "),i("code",null,"data"),r(" will automatic generate the children options (If there is a multi-layer hierarchies, "),i("code",null,"TreeSelect"),r(" is recommended)")],-1),q=i("pre",null,[i("code",{"v-pre":""},[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("template")]),i("span",{class:"token punctuation"},">")]),r("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("pro-select")]),r("\n    "),i("span",{class:"token attr-name"},"v-model"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("select4"),i("span",{class:"token punctuation"},'"')]),r("\n    "),i("span",{class:"token attr-name"},":data"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),r("data1"),i("span",{class:"token punctuation"},'"')]),r("\n  "),i("span",{class:"token punctuation"},"/>")]),r("\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),r("template")]),i("span",{class:"token punctuation"},">")]),r("\n\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),r("script")]),i("span",{class:"token punctuation"},">")]),i("span",{class:"token script"},[i("span",{class:"token language-javascript"},[r("\n"),i("span",{class:"token keyword"},"import"),r(),i("span",{class:"token punctuation"},"{"),r(" ref "),i("span",{class:"token punctuation"},"}"),r(),i("span",{class:"token keyword"},"from"),r(),i("span",{class:"token string"},"'vue'"),r("\n\n"),i("span",{class:"token keyword"},"export"),r(),i("span",{class:"token keyword"},"default"),r(),i("span",{class:"token punctuation"},"{"),r("\n  "),i("span",{class:"token function"},"setup"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},")"),r(),i("span",{class:"token punctuation"},"{"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" select4 "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token string"},"''"),i("span",{class:"token punctuation"},")"),r("\n    "),i("span",{class:"token keyword"},"const"),r(" data1 "),i("span",{class:"token operator"},"="),r(),i("span",{class:"token function"},"ref"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},"["),i("span",{class:"token punctuation"},"{"),r("\n      label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Popular cities'"),i("span",{class:"token punctuation"},","),r("\n      children"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token punctuation"},"["),i("span",{class:"token punctuation"},"{"),r("\n        value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Shanghai'"),i("span",{class:"token punctuation"},","),r("\n        label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Shanghai'"),r("\n      "),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r(),i("span",{class:"token punctuation"},"{"),r("\n        value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Beijing'"),i("span",{class:"token punctuation"},","),r("\n        label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Beijing'"),r("\n      "),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},"]"),r("\n    "),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r(),i("span",{class:"token punctuation"},"{"),r("\n      label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'City name'"),i("span",{class:"token punctuation"},","),r("\n      children"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token punctuation"},"["),i("span",{class:"token punctuation"},"{"),r("\n        value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Chengdu'"),i("span",{class:"token punctuation"},","),r("\n        label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Chengdu'"),r("\n      "),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r(),i("span",{class:"token punctuation"},"{"),r("\n        value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Shenzhen'"),i("span",{class:"token punctuation"},","),r("\n        label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Shenzhen'"),r("\n      "),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r(),i("span",{class:"token punctuation"},"{"),r("\n        value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Guangzhou'"),i("span",{class:"token punctuation"},","),r("\n        label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Guangzhou'"),r("\n      "),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),r(),i("span",{class:"token punctuation"},"{"),r("\n        value"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Dalian'"),i("span",{class:"token punctuation"},","),r("\n        label"),i("span",{class:"token operator"},":"),r(),i("span",{class:"token string"},"'Dalian'"),r("\n      "),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},"]"),r("\n    "),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},"]"),i("span",{class:"token punctuation"},")"),r("\n\n    "),i("span",{class:"token keyword"},"return"),r(),i("span",{class:"token punctuation"},"{"),r("\n      select4"),i("span",{class:"token punctuation"},","),r("\n      data1"),i("span",{class:"token punctuation"},","),r("\n    "),i("span",{class:"token punctuation"},"}"),r("\n  "),i("span",{class:"token punctuation"},"}"),r("\n"),i("span",{class:"token punctuation"},"}"),r("\n")])]),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),r("script")]),i("span",{class:"token punctuation"},">")]),r("\n")])],-1),G=u('<h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Options</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">binding value</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">data</td><td style="text-align:left;">binding data</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">config</td><td style="text-align:left;">config the key of data</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td><td style="text-align:left;">{ value: ‘value’, label: ‘label’, disabled: ‘disabled’, children: ‘children’ }</td></tr><tr><td style="text-align:left;">multiple</td><td style="text-align:left;">whether multiple-select is activated</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">whether disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">component size</td><td style="text-align:left;">string</td><td style="text-align:left;">medium / small / mini</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">clearable</td><td style="text-align:left;">whether clearable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">collapse-tags</td><td style="text-align:left;">whether to collapse tags to a text when multiple selecting</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">multiple-limit</td><td style="text-align:left;">maximum number of options user can select when multiple is true. No limit when set to 0</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;">the name attribute of select input</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">autocomplete</td><td style="text-align:left;">the autocomplete attribute of select input</td><td style="text-align:left;">string</td><td style="text-align:left;">on /off</td><td style="text-align:left;">off</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">placeholder</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">Select</td></tr><tr><td style="text-align:left;">filterable</td><td style="text-align:left;">whether Select is filterable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">allow-create</td><td style="text-align:left;">whether creating new items is allowed. To use this, <code>filterable</code> must be true</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">filter-method</td><td style="text-align:left;">custom filter method</td><td style="text-align:left;">function</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">remote</td><td style="text-align:left;">whether options are loaded from server</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">remote-method</td><td style="text-align:left;">custom remote search method</td><td style="text-align:left;">function</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">loading</td><td style="text-align:left;">whether Select is loading data from server</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">loading-text</td><td style="text-align:left;">displayed text while loading data from server</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">Loading</td></tr><tr><td style="text-align:left;">no-match-text</td><td style="text-align:left;">displayed text when no data matches the filtering query, you can also use slot <code>empty</code></td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">No matching data</td></tr><tr><td style="text-align:left;">no-data-text</td><td style="text-align:left;">displayed text when there is no options, you can also use slot empty</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">No data</td></tr><tr><td style="text-align:left;">popper-class</td><td style="text-align:left;">custom class name for Select’s dropdown</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">reserve-keyword</td><td style="text-align:left;">when <code>multiple</code> and <code>filter</code> is true, whether to reserve current keyword after selecting an option</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">default-first-option</td><td style="text-align:left;">select first matching option on enter key. Use with <code>filterable</code> or <code>remote</code></td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">popper-append-to-body</td><td style="text-align:left;">whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">automatic-dropdown</td><td style="text-align:left;">for non-filterable Select, this prop decides if the option menu pops up when the input is focused</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">clear-icon</td><td style="text-align:left;">Custom clear icon class</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">el-icon-circle-close</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when the selected value changes</td><td>current selected value</td></tr><tr><td>visible-change</td><td>triggers when the dropdown appears/disappears</td><td>true when it appears, and false otherwise</td></tr><tr><td>remove-tag</td><td>triggers when a tag is removed in multiple mode</td><td>removed tag value</td></tr><tr><td>clear</td><td>triggers when the clear icon is clicked in a clearable Select</td><td>—</td></tr><tr><td>blur</td><td>triggers when Input blurs</td><td>(event: Event)</td></tr><tr><td>focus</td><td>triggers when Input focuses</td><td>(event: Event)</td></tr></tbody></table>',4),P={setup(u,{expose:i}){i({frontmatter:{title:"Select",meta:[{name:"description",content:"When there are plenty of options, use a drop-down menu to display and select desired ones"},{property:"og:title",content:"Select"}]}});t({title:"Select",meta:[{name:"description",content:"When there are plenty of options, use a drop-down menu to display and select desired ones"},{property:"og:title",content:"Select"}]});let r=n(""),P=n([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]),z=n(""),J=n([{value:"Go",label:"go",disabled:!0},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]),C=n(""),U=n({value:"label",label:"value"});P=n([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]);let B=n([]);P=n([{value:"Go",label:"go"},{value:"JavaScript",label:"javascript"},{value:"Python",label:"python"},{value:"Dart",label:"dart"},{value:"V",label:"v"}]);let I=n(""),N=n([{label:"Popular cities",children:[{value:"Shanghai",label:"Shanghai"},{value:"Beijing",label:"Beijing"}]},{label:"City name",children:[{value:"Chengdu",label:"Chengdu"},{value:"Shenzhen",label:"Shenzhen"},{value:"Guangzhou",label:"Guangzhou"},{value:"Dalian",label:"Dalian"}]}]);return(t,n)=>{const u=a("pro-select"),i=a("pro-code");return s(),e("div",d,[k,l(i,null,{description:o((()=>[g])),code:o((()=>[f])),default:o((()=>[l(u,{modelValue:p(r),"onUpdate:modelValue":n[0]||(n[0]=t=>c(r)?r.value=t:r=t),data:p(P)},null,8,["modelValue","data"])])),_:1}),y,l(i,null,{description:o((()=>[h])),code:o((()=>[x])),default:o((()=>[l(u,{modelValue:p(z),"onUpdate:modelValue":n[1]||(n[1]=t=>c(z)?z.value=t:z=t),data:p(J)},null,8,["modelValue","data"])])),_:1}),v,l(i,null,{description:o((()=>[m])),code:o((()=>[b])),default:o((()=>[l(u,{modelValue:p(C),"onUpdate:modelValue":n[2]||(n[2]=t=>c(C)?C.value=t:C=t),data:p(P),config:p(U)},null,8,["modelValue","data","config"])])),_:1}),w,l(i,null,{description:o((()=>[S])),code:o((()=>[V])),default:o((()=>[l(u,{modelValue:p(B),"onUpdate:modelValue":n[3]||(n[3]=t=>c(B)?B.value=t:B=t),data:p(P),multiple:""},null,8,["modelValue","data"])])),_:1}),j,l(i,null,{description:o((()=>[D])),code:o((()=>[q])),default:o((()=>[l(u,{modelValue:p(I),"onUpdate:modelValue":n[4]||(n[4]=t=>c(I)?I.value=t:I=t),data:p(N)},null,8,["modelValue","data"])])),_:1}),G])}}};export{P as default};
