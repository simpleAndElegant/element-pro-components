import{u as t}from"./index.d8452790.js";import{r as n,aj as a,c as s,O as e,x as o,y as l,Q as c,L as p,u,f as i,D as r,z as k,H as d,aq as g,E as m,a1 as f}from"./modules-vue.c8e9452b.js";import"./modules-element-plus.63b2537e.js";const y={class:"markdown-body"},h=g('<h1 id="menu" tabindex="-1">Menu <a class="header-anchor" href="#menu" aria-hidden="true">#</a></h1><blockquote><p>Menu that provides navigation for your website</p></blockquote><h2 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-hidden="true">#</a></h2><h3 id="basic-use" tabindex="-1">Basic Use <a class="header-anchor" href="#basic-use" aria-hidden="true">#</a></h3>',4),x=m("p",null,"By default, the component will generate routes from vue-router",-1),v=m("pre",null,[m("code",{"v-pre":""},[m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"<"),f("template")]),m("span",{class:"token punctuation"},">")]),f("\n  "),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"<"),f("pro-menu")]),f(),m("span",{class:"token attr-name"},"class"),m("span",{class:"token attr-value"},[m("span",{class:"token punctuation attr-equals"},"="),m("span",{class:"token punctuation"},'"'),f("docs-menu"),m("span",{class:"token punctuation"},'"')]),f(),m("span",{class:"token punctuation"},"/>")]),f("\n"),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"</"),f("template")]),m("span",{class:"token punctuation"},">")]),f("\n\n"),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"<"),f("style")]),m("span",{class:"token punctuation"},">")]),m("span",{class:"token style"},[m("span",{class:"token language-css"},[f("\n"),m("span",{class:"token selector"},".docs-menu"),f(),m("span",{class:"token punctuation"},"{"),f("\n  "),m("span",{class:"token property"},"max-height"),m("span",{class:"token punctuation"},":"),f(" 400px"),m("span",{class:"token punctuation"},";"),f("\n  "),m("span",{class:"token property"},"overflow"),m("span",{class:"token punctuation"},":"),f(" auto"),m("span",{class:"token punctuation"},";"),f("\n"),m("span",{class:"token punctuation"},"}"),f("\n")])]),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"</"),f("style")]),m("span",{class:"token punctuation"},">")]),f("\n")])],-1),b=m("h3",{id:"custom-mode",tabindex:"-1"},[f("Custom Mode "),m("a",{class:"header-anchor",href:"#custom-mode","aria-hidden":"true"},"#")],-1),w=m("p",null,[f("Set "),m("code",null,"mode"),f(" attribute to enable custom Mode")],-1),q=m("pre",null,[m("code",{"v-pre":""},[m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"<"),f("template")]),m("span",{class:"token punctuation"},">")]),f("\n  "),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"<"),f("pro-radio-button")]),f("\n    "),m("span",{class:"token attr-name"},"v-model"),m("span",{class:"token attr-value"},[m("span",{class:"token punctuation attr-equals"},"="),m("span",{class:"token punctuation"},'"'),f("mode"),m("span",{class:"token punctuation"},'"')]),f("\n    "),m("span",{class:"token attr-name"},":data"),m("span",{class:"token attr-value"},[m("span",{class:"token punctuation attr-equals"},"="),m("span",{class:"token punctuation"},'"'),f("data"),m("span",{class:"token punctuation"},'"')]),f("\n  "),m("span",{class:"token punctuation"},"/>")]),f("\n  "),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"<"),f("pro-menu")]),f(),m("span",{class:"token attr-name"},":mode"),m("span",{class:"token attr-value"},[m("span",{class:"token punctuation attr-equals"},"="),m("span",{class:"token punctuation"},'"'),f("mode"),m("span",{class:"token punctuation"},'"')]),f(),m("span",{class:"token attr-name"},"class"),m("span",{class:"token attr-value"},[m("span",{class:"token punctuation attr-equals"},"="),m("span",{class:"token punctuation"},'"'),f("docs-menu"),m("span",{class:"token punctuation"},'"')]),f(),m("span",{class:"token punctuation"},"/>")]),f("\n"),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"</"),f("template")]),m("span",{class:"token punctuation"},">")]),f("\n\n"),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"<"),f("script")]),m("span",{class:"token punctuation"},">")]),m("span",{class:"token script"},[m("span",{class:"token language-javascript"},[f("\n"),m("span",{class:"token keyword"},"import"),f(),m("span",{class:"token punctuation"},"{"),f(" ref "),m("span",{class:"token punctuation"},"}"),f(),m("span",{class:"token keyword"},"from"),f(),m("span",{class:"token string"},"'vue'"),f("\n\n"),m("span",{class:"token keyword"},"export"),f(),m("span",{class:"token keyword"},"default"),f(),m("span",{class:"token punctuation"},"{"),f("\n  "),m("span",{class:"token function"},"setup"),m("span",{class:"token punctuation"},"("),m("span",{class:"token punctuation"},")"),f(),m("span",{class:"token punctuation"},"{"),f("\n    "),m("span",{class:"token keyword"},"const"),f(" mode "),m("span",{class:"token operator"},"="),f(),m("span",{class:"token function"},"ref"),m("span",{class:"token punctuation"},"("),m("span",{class:"token string"},"'horizontal'"),m("span",{class:"token punctuation"},")"),f("\n    "),m("span",{class:"token keyword"},"const"),f(" data "),m("span",{class:"token operator"},"="),f(),m("span",{class:"token punctuation"},"["),f("\n      "),m("span",{class:"token punctuation"},"{"),f(" value"),m("span",{class:"token operator"},":"),f(),m("span",{class:"token string"},"'vertical'"),m("span",{class:"token punctuation"},","),f(" label"),m("span",{class:"token operator"},":"),f(),m("span",{class:"token string"},"'Vertical'"),f(),m("span",{class:"token punctuation"},"}"),m("span",{class:"token punctuation"},","),f("\n      "),m("span",{class:"token punctuation"},"{"),f(" value"),m("span",{class:"token operator"},":"),f(),m("span",{class:"token string"},"'horizontal'"),m("span",{class:"token punctuation"},","),f(" label"),m("span",{class:"token operator"},":"),f(),m("span",{class:"token string"},"'Horizontal'"),f(),m("span",{class:"token punctuation"},"}"),m("span",{class:"token punctuation"},","),f("\n    "),m("span",{class:"token punctuation"},"]"),f("\n\n    "),m("span",{class:"token keyword"},"return"),f(),m("span",{class:"token punctuation"},"{"),f("\n      mode"),m("span",{class:"token punctuation"},","),f("\n    "),m("span",{class:"token punctuation"},"}"),f("\n  "),m("span",{class:"token punctuation"},"}"),f("\n"),m("span",{class:"token punctuation"},"}"),f("\n")])]),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"</"),f("script")]),m("span",{class:"token punctuation"},">")]),f("\n")])],-1),z=m("h3",{id:"custom-routes",tabindex:"-1"},[f("Custom routes "),m("a",{class:"header-anchor",href:"#custom-routes","aria-hidden":"true"},"#")],-1),M=m("p",null,[f("Set "),m("code",null,"routes"),f(" attribute to enable custom routes")],-1),_=m("pre",null,[m("code",{"v-pre":""},[m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"<"),f("template")]),m("span",{class:"token punctuation"},">")]),f("\n  "),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"<"),f("pro-menu")]),f(),m("span",{class:"token attr-name"},":routes"),m("span",{class:"token attr-value"},[m("span",{class:"token punctuation attr-equals"},"="),m("span",{class:"token punctuation"},'"'),f("routes"),m("span",{class:"token punctuation"},'"')]),f(),m("span",{class:"token attr-name"},"class"),m("span",{class:"token attr-value"},[m("span",{class:"token punctuation attr-equals"},"="),m("span",{class:"token punctuation"},'"'),f("docs-menu"),m("span",{class:"token punctuation"},'"')]),f(),m("span",{class:"token punctuation"},"/>")]),f("\n"),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"</"),f("template")]),m("span",{class:"token punctuation"},">")]),f("\n\n"),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"<"),f("script")]),m("span",{class:"token punctuation"},">")]),m("span",{class:"token script"},[m("span",{class:"token language-javascript"},[f("\n"),m("span",{class:"token keyword"},"import"),f(),m("span",{class:"token punctuation"},"{"),f(" computed "),m("span",{class:"token punctuation"},"}"),f(),m("span",{class:"token keyword"},"from"),f(),m("span",{class:"token string"},"'vue'"),f("\n"),m("span",{class:"token keyword"},"import"),f(),m("span",{class:"token punctuation"},"{"),f(" useRouter "),m("span",{class:"token punctuation"},"}"),f(),m("span",{class:"token keyword"},"from"),f(),m("span",{class:"token string"},"'vue-router'"),f("\n\n"),m("span",{class:"token keyword"},"export"),f(),m("span",{class:"token keyword"},"default"),f(),m("span",{class:"token punctuation"},"{"),f("\n  "),m("span",{class:"token function"},"setup"),m("span",{class:"token punctuation"},"("),m("span",{class:"token punctuation"},")"),f(),m("span",{class:"token punctuation"},"{"),f("\n    "),m("span",{class:"token keyword"},"const"),f(" router "),m("span",{class:"token operator"},"="),f(),m("span",{class:"token function"},"useRouter"),m("span",{class:"token punctuation"},"("),m("span",{class:"token punctuation"},")"),f("\n    "),m("span",{class:"token keyword"},"const"),f(" routes "),m("span",{class:"token operator"},"="),f(),m("span",{class:"token function"},"computed"),m("span",{class:"token punctuation"},"("),m("span",{class:"token punctuation"},"("),m("span",{class:"token punctuation"},")"),f(),m("span",{class:"token operator"},"=>"),f(),m("span",{class:"token punctuation"},"{"),f("\n      "),m("span",{class:"token keyword"},"const"),f(" _routes "),m("span",{class:"token operator"},"="),f(" router"),m("span",{class:"token punctuation"},"."),f("options"),m("span",{class:"token punctuation"},"."),f("routes\n      "),m("span",{class:"token keyword"},"return"),f(" _routes"),m("span",{class:"token punctuation"},"."),m("span",{class:"token function"},"find"),m("span",{class:"token punctuation"},"("),m("span",{class:"token parameter"},"item"),f(),m("span",{class:"token operator"},"=>"),f(),m("span",{class:"token punctuation"},"{"),f("\n        "),m("span",{class:"token keyword"},"return"),f(" item"),m("span",{class:"token punctuation"},"."),f("path "),m("span",{class:"token operator"},"==="),f(),m("span",{class:"token string"},"'/en-US/components/'"),f("\n      "),m("span",{class:"token punctuation"},"}"),m("span",{class:"token punctuation"},")"),m("span",{class:"token operator"},"?."),f("children "),m("span",{class:"token operator"},"||"),f(),m("span",{class:"token punctuation"},"["),m("span",{class:"token punctuation"},"]"),f("\n    "),m("span",{class:"token punctuation"},"}"),m("span",{class:"token punctuation"},")"),f("\n\n    "),m("span",{class:"token keyword"},"return"),f(),m("span",{class:"token punctuation"},"{"),f("\n      routes"),m("span",{class:"token punctuation"},","),f("\n    "),m("span",{class:"token punctuation"},"}"),f("\n  "),m("span",{class:"token punctuation"},"}"),f("\n"),m("span",{class:"token punctuation"},"}"),f("\n")])]),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"</"),f("script")]),m("span",{class:"token punctuation"},">")]),f("\n")])],-1),j=m("h3",{id:"slots",tabindex:"-1"},[f("Slots "),m("a",{class:"header-anchor",href:"#slots","aria-hidden":"true"},"#")],-1),C=m("div",{class:"tip custom-block"},[m("p",{class:"custom-block-title"},"Tip"),m("p",null,[f("Starting from "),m("code",null,"0.12.0"),f(", the internal menu will be implemented using svgicon by default. If you want to continue to use fonticon, you can use the slot in the following way to achieve")])],-1),S=m("p",null,"How to display the menu content through the default slot",-1),D=m("pre",null,[m("code",{"v-pre":""},[m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"<"),f("template")]),m("span",{class:"token punctuation"},">")]),f("\n  "),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"<"),f("pro-menu")]),f(),m("span",{class:"token attr-name"},":routes"),m("span",{class:"token attr-value"},[m("span",{class:"token punctuation attr-equals"},"="),m("span",{class:"token punctuation"},'"'),f("routes1"),m("span",{class:"token punctuation"},'"')]),f(),m("span",{class:"token attr-name"},"class"),m("span",{class:"token attr-value"},[m("span",{class:"token punctuation attr-equals"},"="),m("span",{class:"token punctuation"},'"'),f("docs-menu"),m("span",{class:"token punctuation"},'"')]),m("span",{class:"token punctuation"},">")]),f("\n    "),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"<"),f("template")]),f(),m("span",{class:"token attr-name"},"#default"),m("span",{class:"token attr-value"},[m("span",{class:"token punctuation attr-equals"},"="),m("span",{class:"token punctuation"},'"'),f("item"),m("span",{class:"token punctuation"},'"')]),m("span",{class:"token punctuation"},">")]),f("\n      "),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"<"),f("pro-link")]),f(),m("span",{class:"token attr-name"},":to"),m("span",{class:"token attr-value"},[m("span",{class:"token punctuation attr-equals"},"="),m("span",{class:"token punctuation"},'"'),f("item.path"),m("span",{class:"token punctuation"},'"')]),m("span",{class:"token punctuation"},">")]),f("\n        "),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"<"),f("i")]),f("\n          "),m("span",{class:"token attr-name"},"v-if"),m("span",{class:"token attr-value"},[m("span",{class:"token punctuation attr-equals"},"="),m("span",{class:"token punctuation"},'"'),f("item.meta?.icon"),m("span",{class:"token punctuation"},'"')]),f("\n          "),m("span",{class:"token attr-name"},":class"),m("span",{class:"token attr-value"},[m("span",{class:"token punctuation attr-equals"},"="),m("span",{class:"token punctuation"},'"'),f("item.meta.icon"),m("span",{class:"token punctuation"},'"')]),f("\n        "),m("span",{class:"token punctuation"},"/>")]),f("\n        "),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"<"),f("span")]),f(),m("span",{class:"token attr-name"},"v-if"),m("span",{class:"token attr-value"},[m("span",{class:"token punctuation attr-equals"},"="),m("span",{class:"token punctuation"},'"'),f("item.meta?.title"),m("span",{class:"token punctuation"},'"')]),m("span",{class:"token punctuation"},">")]),f("\n          {{ item.meta.title }}\n        "),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"</"),f("span")]),m("span",{class:"token punctuation"},">")]),f("\n      "),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"</"),f("pro-link")]),m("span",{class:"token punctuation"},">")]),f("\n    "),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"</"),f("template")]),m("span",{class:"token punctuation"},">")]),f("\n  "),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"</"),f("pro-menu")]),m("span",{class:"token punctuation"},">")]),f("\n"),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"</"),f("template")]),m("span",{class:"token punctuation"},">")]),f("\n\n"),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"<"),f("script")]),m("span",{class:"token punctuation"},">")]),m("span",{class:"token script"},[m("span",{class:"token language-javascript"},[f("\n"),m("span",{class:"token keyword"},"export"),f(),m("span",{class:"token keyword"},"default"),f(),m("span",{class:"token punctuation"},"{"),f("\n  "),m("span",{class:"token function"},"setup"),m("span",{class:"token punctuation"},"("),m("span",{class:"token punctuation"},")"),f(),m("span",{class:"token punctuation"},"{"),f("\n    "),m("span",{class:"token keyword"},"const"),f(" routes1 "),m("span",{class:"token operator"},"="),f(),m("span",{class:"token punctuation"},"["),f("\n      "),m("span",{class:"token punctuation"},"{"),f("\n        path"),m("span",{class:"token operator"},":"),f(),m("span",{class:"token string"},"'/zh-CN/components/menu'"),m("span",{class:"token punctuation"},","),f("\n        meta"),m("span",{class:"token operator"},":"),f(),m("span",{class:"token punctuation"},"{"),f(" title"),m("span",{class:"token operator"},":"),f(),m("span",{class:"token string"},"'FontIcon'"),m("span",{class:"token punctuation"},","),f(" icon"),m("span",{class:"token operator"},":"),f(),m("span",{class:"token string"},"'el-icon-potato-strips'"),f(),m("span",{class:"token punctuation"},"}"),m("span",{class:"token punctuation"},","),f("\n      "),m("span",{class:"token punctuation"},"}"),m("span",{class:"token punctuation"},","),f("\n      "),m("span",{class:"token punctuation"},"{"),f("\n        path"),m("span",{class:"token operator"},":"),f(),m("span",{class:"token string"},"'/zh-CN/components/menu'"),m("span",{class:"token punctuation"},","),f("\n        meta"),m("span",{class:"token operator"},":"),f(),m("span",{class:"token punctuation"},"{"),f(" title"),m("span",{class:"token operator"},":"),f(),m("span",{class:"token string"},"'Development'"),m("span",{class:"token punctuation"},","),f(" icon"),m("span",{class:"token operator"},":"),f(),m("span",{class:"token string"},"'el-icon-cpu'"),f(),m("span",{class:"token punctuation"},"}"),m("span",{class:"token punctuation"},","),f("\n      "),m("span",{class:"token punctuation"},"}"),m("span",{class:"token punctuation"},","),f("\n    "),m("span",{class:"token punctuation"},"]"),f("\n\n    "),m("span",{class:"token keyword"},"return"),f(),m("span",{class:"token punctuation"},"{"),f("\n      routes1"),m("span",{class:"token punctuation"},","),f("\n    "),m("span",{class:"token punctuation"},"}"),f("\n  "),m("span",{class:"token punctuation"},"}"),f("\n"),m("span",{class:"token punctuation"},"}"),f("\n")])]),m("span",{class:"token tag"},[m("span",{class:"token tag"},[m("span",{class:"token punctuation"},"</"),f("script")]),m("span",{class:"token punctuation"},">")]),f("\n")])],-1),N={key:1},U=g('<h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Options</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">routes</td><td style="text-align:left;">current routes</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td><td style="text-align:left;">from <code>vue-router</code></td></tr><tr><td style="text-align:left;">mode</td><td style="text-align:left;">menu display mode</td><td style="text-align:left;">string</td><td style="text-align:left;">horizontal / vertical</td><td style="text-align:left;">vertical</td></tr><tr><td style="text-align:left;">collapse</td><td style="text-align:left;">whether the menu is collapsed (available only in vertical mode)</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">background-color</td><td style="text-align:left;">background color of Menu (hex format)</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">#ffffff</td></tr><tr><td style="text-align:left;">text-color</td><td style="text-align:left;">text color of Menu (hex format)</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">#303133</td></tr><tr><td style="text-align:left;">active-text-color</td><td style="text-align:left;">text color of currently active menu item (hex format)</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">#409EFF</td></tr><tr><td style="text-align:left;">default-openeds</td><td style="text-align:left;">array that contains indexes of currently active sub-menus</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">unique-opened</td><td style="text-align:left;">whether only one sub-menu can be active</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">menu-trigger</td><td style="text-align:left;">how sub-menus are triggered, only works when <code>mode</code> is ‘horizontal’</td><td style="text-align:left;">string</td><td style="text-align:left;">hover / click</td><td style="text-align:left;">hover</td></tr><tr><td style="text-align:left;">collapse-transition</td><td style="text-align:left;">whether to enable the collapse transition</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">true</td></tr></tbody></table><h3 id="slots-1" tabindex="-1">Slots <a class="header-anchor" href="#slots-1" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">-</td><td style="text-align:left;">Control menu display content, parameters { meta, path, redirect }</td></tr></tbody></table>',4),V={setup(g,{expose:m}){m({frontmatter:{title:"Menu",meta:[{name:"description",content:"Menu that provides navigation for your website"},{property:"og:title",content:"Menu"}]}});t({title:"Menu",meta:[{name:"description",content:"Menu that provides navigation for your website"},{property:"og:title",content:"Menu"}]});let f=n("horizontal"),V=[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],F=a(),H=s((()=>{var t;return(null==(t=F.options.routes.find((t=>"/en-US/components/"===t.path)))?void 0:t.children)||[]})),I=[{path:"/zh-CN/components/menu",meta:{title:"FontIcon",icon:"el-icon-potato-strips"}},{path:"/zh-CN/components/menu",meta:{title:"Development",icon:"el-icon-cpu"}}];return(t,n)=>{const a=e("pro-menu"),s=e("pro-code"),g=e("pro-radio-button"),m=e("pro-link");return o(),l("div",y,[h,c(s,null,{description:p((()=>[x])),code:p((()=>[v])),default:p((()=>[c(a,{class:"docs-menu"})])),_:1}),b,c(s,null,{description:p((()=>[w])),code:p((()=>[q])),default:p((()=>[c(g,{modelValue:u(f),"onUpdate:modelValue":n[0]||(n[0]=t=>i(f)?f.value=t:f=t),data:u(V)},null,8,["modelValue","data"]),c(a,{mode:u(f),class:"docs-menu"},null,8,["mode"])])),_:1}),z,c(s,null,{description:p((()=>[M])),code:p((()=>[_])),default:p((()=>[c(a,{routes:u(H),class:"docs-menu"},null,8,["routes"])])),_:1}),j,C,c(s,null,{description:p((()=>[S])),code:p((()=>[D])),default:p((()=>[c(a,{routes:u(I),class:"docs-menu"},{default:p((t=>[c(m,{to:t.path},{default:p((()=>{var n,a;return[(null==(n=t.meta)?void 0:n.icon)?(o(),l("i",{key:0,class:r(t.meta.icon)},null,2)):k("",!0),(null==(a=t.meta)?void 0:a.title)?(o(),l("span",N,d(t.meta.title),1)):k("",!0)]})),_:2},1032,["to"])])),_:1},8,["routes"])])),_:1}),U])}}};export{V as default};
