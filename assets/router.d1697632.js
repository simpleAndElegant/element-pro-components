import{u as n}from"./index.e657b745.js";import{k as s,l as a,m as t,u as o}from"./modules-vue.7b886bc4.js";import"./modules-element-plus.4f915924.js";const e={class:"markdown-body"},p=t("h1",{id:"router-and-menu",tabindex:"-1"},[o("Router and Menu "),t("a",{class:"header-anchor",href:"#router-and-menu","aria-hidden":"true"},"#")],-1),c=t("p",null,[o("By default, layout-related components will automatically obtain the required routes information from "),t("code",null,"vue-router")],-1),u=t("h2",{id:"format",tabindex:"-1"},[o("Format "),t("a",{class:"header-anchor",href:"#format","aria-hidden":"true"},"#")],-1),l=t("p",null,[o("Compared with the vue-router type, only the "),t("code",null,"meta"),o(" attribute is extended")],-1),r=t("div",{class:"language-ts"},[t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token keyword"},"interface"),o(),t("span",{class:"token class-name"},"IRouteMeta"),o(),t("span",{class:"token keyword"},"extends"),o(),t("span",{class:"token class-name"},"RouteMeta"),o(),t("span",{class:"token punctuation"},"{"),o("\n  title"),t("span",{class:"token operator"},"?"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token builtin"},"string"),o(),t("span",{class:"token comment"},"// Show menu title"),o("\n  icon"),t("span",{class:"token operator"},"?"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token builtin"},"string"),o(),t("span",{class:"token comment"},"// Show menu icon"),o("\n  hidden"),t("span",{class:"token operator"},"?"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token builtin"},"boolean"),o(),t("span",{class:"token comment"},"// Whether to display in the menu, does not affect the router jump"),o("\n  keepAlive"),t("span",{class:"token operator"},"?"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token builtin"},"boolean"),o(),t("span",{class:"token comment"},"// Whether to keepAlive"),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n")])])],-1),i=t("p",null,"refer router",-1),k=t("div",{class:"language-ts"},[t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token keyword"},"import"),o(" BaseLayout "),t("span",{class:"token keyword"},"from"),o(),t("span",{class:"token string"},"'../layout/Layout.vue'"),o("\n"),t("span",{class:"token keyword"},"import"),o(),t("span",{class:"token keyword"},"type"),o(),t("span",{class:"token punctuation"},"{"),o(" IRouteRecordRaw "),t("span",{class:"token punctuation"},"}"),o(),t("span",{class:"token keyword"},"from"),o(),t("span",{class:"token string"},"'/@src/index'"),o("\n\n"),t("span",{class:"token keyword"},"const"),o(" routes"),t("span",{class:"token operator"},":"),o(" IRouteRecordRaw"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),o(),t("span",{class:"token operator"},"="),o(),t("span",{class:"token punctuation"},"["),o("\n  "),t("span",{class:"token punctuation"},"{"),o("\n    path"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'/dev/'"),t("span",{class:"token punctuation"},","),o("\n    redirect"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'/dev/Layout'"),t("span",{class:"token punctuation"},","),o("\n    component"),t("span",{class:"token operator"},":"),o(" BaseLayout"),t("span",{class:"token punctuation"},","),o("\n    meta"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o(" title"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'Development'"),t("span",{class:"token punctuation"},","),o(" icon"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'el-icon-edit'"),o(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n    children"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"["),o("\n      "),t("span",{class:"token punctuation"},"{"),o("\n        path"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'/dev/Layout'"),t("span",{class:"token punctuation"},","),o("\n        "),t("span",{class:"token function-variable function"},"component"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token keyword"},"import"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'../views/Layout.vue'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),o("\n        meta"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o(" title"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'Layout'"),o(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n      "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n      "),t("span",{class:"token punctuation"},"{"),o("\n        path"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'/dev/Table'"),t("span",{class:"token punctuation"},","),o("\n        "),t("span",{class:"token function-variable function"},"component"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token keyword"},"import"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'../views/Table.vue'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),o("\n        meta"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o(" title"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'Table'"),o(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n      "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n      "),t("span",{class:"token punctuation"},"{"),o("\n        path"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'/dev/Form'"),t("span",{class:"token punctuation"},","),o("\n        "),t("span",{class:"token function-variable function"},"component"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token keyword"},"import"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'../views/Form.vue'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),o("\n        meta"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o(" title"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'Form'"),o(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n      "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n      "),t("span",{class:"token punctuation"},"{"),o("\n        path"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'/dev/Crud'"),t("span",{class:"token punctuation"},","),o("\n        "),t("span",{class:"token function-variable function"},"component"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token keyword"},"import"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'../views/Crud.vue'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),o("\n        meta"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o(" title"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'Crud'"),o(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n      "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n    "),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),o("\n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n"),t("span",{class:"token punctuation"},"]"),o("\n\n"),t("span",{class:"token keyword"},"export"),o(),t("span",{class:"token keyword"},"default"),o(" routes\n")])])],-1),d=t("h3",{id:"use-icon",tabindex:"-1"},[o("Use icon "),t("a",{class:"header-anchor",href:"#use-icon","aria-hidden":"true"},"#")],-1),m=t("p",null,[o("The Icon render as a components, so you can define as any icon component. example: "),t("code",null,"@element-plus/icons")],-1),h=t("h4",{id:"use-%40element-plus%2Ficons",tabindex:"-1"},[o("Use @element-plus/icons "),t("a",{class:"header-anchor",href:"#use-%40element-plus%2Ficons","aria-hidden":"true"},"#")],-1),g=t("ul",null,[t("li",null,"Install")],-1),y=t("div",{class:"language-"},[t("pre",null,[t("code",{"v-pre":""},"yarn add @element-plus/icons\n# or\nnpm install @element-plus/icons\n")])],-1),f=t("ul",null,[t("li",null,[t("strong",null,"Globally register"),o(" requires icon components")])],-1),v=t("div",{class:"language-js"},[t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token keyword"},"import"),o(),t("span",{class:"token punctuation"},"{"),o(" Edit"),t("span",{class:"token punctuation"},","),o(" House"),t("span",{class:"token punctuation"},","),o(" TakeawayBox "),t("span",{class:"token punctuation"},"}"),o(),t("span",{class:"token keyword"},"from"),o(),t("span",{class:"token string"},"'@element-plus/icons'"),o("\n\napp"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"component"),t("span",{class:"token punctuation"},"("),o("Edit"),t("span",{class:"token punctuation"},"."),o("name"),t("span",{class:"token punctuation"},","),o(" Edit"),t("span",{class:"token punctuation"},")"),o("\n")])])],-1),w=t("ul",null,[t("li",null,"Custom icon")],-1),b=t("div",{class:"language-js"},[t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token punctuation"},"{"),o("\n  name"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'admin'"),t("span",{class:"token punctuation"},","),o("\n  path"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'/admin'"),t("span",{class:"token punctuation"},","),o("\n  component"),t("span",{class:"token operator"},":"),o(" Layout"),t("span",{class:"token punctuation"},","),o("\n  meta"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o(" title"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'Admin'"),t("span",{class:"token punctuation"},","),o(" icon"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'edit'"),o(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n")])])],-1),R=t("h2",{id:"dynamic-routing",tabindex:"-1"},[o("Dynamic Routing "),t("a",{class:"header-anchor",href:"#dynamic-routing","aria-hidden":"true"},"#")],-1),x=t("p",null,[o("Components can only obtain the original routing information defined in "),t("code",null,"vue-router"),o(", and cannot obtain dynamically added routes. When using asynchronously generated dynamic routes, although you can pass prop ​​to the component through "),t("code",null,"routes"),o(", it is more recommended to dynamically increase it through the following methods. Just keep "),t("code",null,"router.options.routes"),o(" the same as the final dynamically added routes")],-1),L=t("div",{class:"language-js"},[t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token keyword"},"const"),o(" newRoute "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token punctuation"},"{"),o("\n  name"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'admin'"),t("span",{class:"token punctuation"},","),o("\n  path"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'/admin'"),t("span",{class:"token punctuation"},","),o("\n  component"),t("span",{class:"token operator"},":"),o(" Layout"),t("span",{class:"token punctuation"},","),o("\n  meta"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o(" title"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'Admin'"),o(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n  children"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"["),o("\n    "),t("span",{class:"token punctuation"},"{"),o("\n      path"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'settings'"),t("span",{class:"token punctuation"},","),o("\n      component"),t("span",{class:"token operator"},":"),o(" AdminSettings"),t("span",{class:"token punctuation"},","),o("\n      meta"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o(" title"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'Settings'"),o(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n    "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n  "),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),o("\n"),t("span",{class:"token punctuation"},"}"),o("\nrouter"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"addRoute"),t("span",{class:"token punctuation"},"("),o("newRoute"),t("span",{class:"token punctuation"},")"),o("\nrouter"),t("span",{class:"token punctuation"},"."),o("options"),t("span",{class:"token punctuation"},"."),o("routes"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),o("newRoute"),t("span",{class:"token punctuation"},")"),o("\n")])])],-1),j=t("h2",{id:"auth-routing",tabindex:"-1"},[o("Auth Routing "),t("a",{class:"header-anchor",href:"#auth-routing","aria-hidden":"true"},"#")],-1),M=t("p",null,"The current component does not support auth routing, you need to manually add",-1),A=t("p",null,[o("Example: by "),t("a",{href:"#dynamic-routing"},"Dynamic Routing"),o(", remove routing information that does not have access rights when generating or adding routes")],-1),C=t("p",null,[o("Or: use "),t("code",null,"router.beforeEach"),o(" to check routing information")],-1),F=t("p",null,"Of course you can also combine the two way",-1),T={setup(t,{expose:o}){o({frontmatter:{title:"Router and Menu",meta:[{name:"description",content:"How to configure the route and menu of the element-pro-components component library"},{property:"og:title",content:"Router and Menu"}]}});return n({title:"Router and Menu",meta:[{name:"description",content:"How to configure the route and menu of the element-pro-components component library"},{property:"og:title",content:"Router and Menu"}]}),(n,t)=>(s(),a("div",e,[p,c,u,l,r,i,k,d,m,h,g,y,f,v,w,b,R,x,L,j,M,A,C,F]))}};export{T as default};
