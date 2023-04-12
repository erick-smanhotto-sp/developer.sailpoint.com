"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[86404],{80781:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var r=o(87462),i=(o(67294),o(3905)),n=o(52991),a=o(53438);const s={id:"workflows",title:"Workflows",description:"Workflows",custom_edit_url:null},l=void 0,c={unversionedId:"api/beta/workflows",id:"api/beta/workflows",title:"Workflows",description:"Workflows",source:"@site/products/idn/api/beta/workflows.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/workflows",permalink:"/idn/api/beta/workflows",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"workflows",title:"Workflows",description:"Workflows",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Submit Account Selections",permalink:"/idn/api/beta/submit-account-selection"},next:{title:"Create Workflow",permalink:"/idn/api/beta/create-workflow"}},d={},m=[],p={toc:m};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Workflows allow administrators to create custom automation scripts directly within IdentityNow.  These automation scripts respond to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/docs/event-triggers#how-to-get-started-with-event-triggers"},"event triggers")," and perform a series of actions to perform tasks that are either too cumbersome or not available in the IdentityNow UI.  Workflows can be configured via a graphical user interface within IdentityNow, or by creating and uploading a JSON formatted script to the Workflow service.  The Workflows API collection provides the necessary functionality to create, manage, and test your workflows via REST."),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/workflows/workflow-basics.html"},"Creating and Managing Workflows")," for more information about how to build workflows in the visual builder in the IdentityNow UI."),(0,i.kt)(n.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}u.isMDXComponent=!0},52991:(e,t,o)=>{o.d(t,{Z:()=>g});var r=o(67294),i=o(86010),n=o(53438),a=o(39960),s=o(13919),l=o(95999);const c="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:o}=e;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",c)},o)}function u(e){let{href:t,icon:o,title:n,description:a}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:n},o," ",n),a&&r.createElement("p",{className:(0,i.Z)("text--truncate",m),title:a},a))}function f(e){let{item:t}=e;const o=(0,n.Wl)(t);return o?r.createElement(u,{href:o,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function w(e){let{item:t}=e;const o=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:o,title:t.label,description:i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(w,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const o=(0,n.jA)();return r.createElement(g,{items:o.items,className:t})}function g(e){const{items:t,className:o}=e;if(!t)return r.createElement(k,e);const a=(0,n.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",o)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}}}]);