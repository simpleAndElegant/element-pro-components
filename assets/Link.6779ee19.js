import{u as n}from"./index.41f9e55e.js";import{M as a,q as t,v as s,P as o,J as e,aq as c,B as p,$ as l}from"./modules-vue.76ee07d9.js";import"./modules-element-plus.0711d9f1.js";const u={class:"markdown-body"},k=c('<h1 id="link" tabindex="-1">Link <a class="header-anchor" href="#link" aria-hidden="true">#</a></h1><blockquote><p>根据链接信息生成合适的标签</p></blockquote><h2 id="%E4%BD%BF%E7%94%A8" tabindex="-1">使用 <a class="header-anchor" href="#%E4%BD%BF%E7%94%A8" aria-hidden="true">#</a></h2><h3 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" tabindex="-1">基础用法 <a class="header-anchor" href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95" aria-hidden="true">#</a></h3>',4),i=p("pre",null,[p("code",{"v-pre":""},[p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),l("template")]),p("span",{class:"token punctuation"},">")]),l("\n  "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),l("pro-link")]),l(),p("span",{class:"token attr-name"},"class"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),l("docs-link"),p("span",{class:"token punctuation"},'"')]),p("span",{class:"token punctuation"},">")]),l("普通文本"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),l("pro-link")]),p("span",{class:"token punctuation"},">")]),l("\n  "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),l("pro-link")]),l("\n    "),p("span",{class:"token attr-name"},"to"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),l("/zh-CN/guide/"),p("span",{class:"token punctuation"},'"')]),l("\n    "),p("span",{class:"token attr-name"},"class"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),l("docs-link"),p("span",{class:"token punctuation"},'"')]),l("\n  "),p("span",{class:"token punctuation"},">")]),l("快速上手"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),l("pro-link")]),p("span",{class:"token punctuation"},">")]),l("\n  "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),l("pro-link")]),l("\n    "),p("span",{class:"token attr-name"},"to"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),l("https://github.com/tolking/element-pro-components#readme"),p("span",{class:"token punctuation"},'"')]),l("\n    "),p("span",{class:"token attr-name"},"class"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),l("docs-link"),p("span",{class:"token punctuation"},'"')]),l("\n  "),p("span",{class:"token punctuation"},">")]),l("github"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),l("pro-link")]),p("span",{class:"token punctuation"},">")]),l("\n"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),l("template")]),p("span",{class:"token punctuation"},">")]),l("\n\n"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),l("style")]),p("span",{class:"token punctuation"},">")]),p("span",{class:"token style"},[p("span",{class:"token language-css"},[l("\n"),p("span",{class:"token selector"},".docs-link"),l(),p("span",{class:"token punctuation"},"{"),l("\n  "),p("span",{class:"token property"},"display"),p("span",{class:"token punctuation"},":"),l(" block"),p("span",{class:"token punctuation"},";"),l("\n  "),p("span",{class:"token property"},"margin-bottom"),p("span",{class:"token punctuation"},":"),l(" 10px"),p("span",{class:"token punctuation"},";"),l("\n"),p("span",{class:"token punctuation"},"}"),l("\n")])]),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),l("style")]),p("span",{class:"token punctuation"},">")]),l("\n\n"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),l("script")]),p("span",{class:"token punctuation"},">")]),p("span",{class:"token script"},[p("span",{class:"token language-javascript"},[l("\n"),p("span",{class:"token keyword"},"export"),l(),p("span",{class:"token keyword"},"default"),l(),p("span",{class:"token punctuation"},"{"),p("span",{class:"token punctuation"},"}"),l("\n")])]),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),l("script")]),p("span",{class:"token punctuation"},">")]),l("\n")])],-1),r=l("普通文本"),d=l("快速上手"),h=l("github"),g=c('<h3 id="%E9%85%8D%E7%BD%AE" tabindex="-1">配置 <a class="header-anchor" href="#%E9%85%8D%E7%BD%AE" aria-hidden="true">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>to</td><td>链接地址</td><td>string / undefind</td><td>-</td><td>-</td></tr></tbody></table>',2),m={setup(c,{expose:p}){p({frontmatter:{title:"Link",meta:[{name:"description",content:"根据链接信息生成合适的标签"},{property:"og:title",content:"Link"}]}});return n({title:"Link",meta:[{name:"description",content:"根据链接信息生成合适的标签"},{property:"og:title",content:"Link"}]}),(n,c)=>{const p=a("pro-link"),l=a("pro-code");return t(),s("div",u,[k,o(l,null,{code:e((()=>[i])),default:e((()=>[o(p,{class:"docs-link"},{default:e((()=>[r])),_:1}),o(p,{to:"/zh-CN/guide/",class:"docs-link"},{default:e((()=>[d])),_:1}),o(p,{to:"https://github.com/tolking/element-pro-components#readme",class:"docs-link"},{default:e((()=>[h])),_:1})])),_:1}),g])}}};export{m as default};
