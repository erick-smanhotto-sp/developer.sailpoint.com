"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[84848],{50537:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=a(87462),s=(a(67294),a(3905)),r=a(52991),i=a(53438);const o={id:"password-management",title:"Password Management",description:"Password Management",custom_edit_url:null},l=void 0,p={unversionedId:"api/v3/password-management",id:"api/v3/password-management",title:"Password Management",description:"Password Management",source:"@site/products/idn/api/v3/password-management.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/password-management",permalink:"/idn/api/v3/password-management",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"password-management",title:"Password Management",description:"Password Management",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Patch OAuth Client",permalink:"/idn/api/v3/patch-oauth-client"},next:{title:"Query Password Info",permalink:"/idn/api/v3/query-password-info"}},c={},d=[],u={toc:d};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Use this API to implement password management functionality.",(0,s.kt)("br",{parentName:"p"}),"\n","With this functionality in place, users can manage their identity passwords for all their applications."),(0,s.kt)("p",null,"In IdentityNow, users can select their names in the upper right corner of the page and use the drop-down menu to select Password Manager.\nPassword Manager lists the user's identity's applications, possibly grouped to share passwords.\nUsers can then select 'Change Password' to update their passwords. "),(0,s.kt)("p",null,"Grouping passwords allows users to update their passwords more broadly, rather than requiring them to update each password individually.\nPassword Manager may list the applications and sources in the following groups:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Password Group: This refers to a group of applications that share a password.\nFor example, a user can use the same password for Google Drive, Google Mail, and YouTube.\nUpdating the password for the password group updates the password for all its included applications.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Multi-Application Source: This refers to a source with multiple applications that share a password.\nFor example, a user can have a source, G Suite, that includes the Google Calendar, Google Drive, and Google Mail applications.\nUpdating the password for the multi-application source updates the password for all its included applications. ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Applications: These are applications that do not share passwords with other applications."))),(0,s.kt)("p",null,"An organization may require some authentication for users to update their passwords.\nUsers may be required to answer security questions or use a third-party authenticator before they can confirm their updates. "),(0,s.kt)("p",null,"Refer to ",(0,s.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/user-help/accounts/passwords.html"},"Managing Passwords")," for more information about password management."),(0,s.kt)(r.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0},52991:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(67294),s=a(86010),r=a(53438),i=a(39960),o=a(13919),l=a(95999);const p="cardContainer_fWXF",c="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:a}=e;return n.createElement(i.Z,{href:t,className:(0,s.Z)("card padding--lg",p)},a)}function m(e){let{href:t,icon:a,title:r,description:i}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,s.Z)("text--truncate",c),title:r},a," ",r),i&&n.createElement("p",{className:(0,s.Z)("text--truncate",d),title:i},i))}function h(e){let{item:t}=e;const a=(0,r.Wl)(t);return a?n.createElement(m,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function w(e){let{item:t}=e;const a=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:a,title:t.label,description:s?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(w,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const a=(0,r.jA)();return n.createElement(y,{items:a.items,className:t})}function y(e){const{items:t,className:a}=e;if(!t)return n.createElement(f,e);const i=(0,r.MN)(t);return n.createElement("section",{className:(0,s.Z)("row",a)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}}}]);