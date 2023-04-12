"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[31584],{15713:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var r=i(87462),s=(i(67294),i(3905));const n={id:"event-triggers",title:"Event Triggers",pagination_label:"Event Triggers",sidebar_label:"Event Triggers",sidebar_position:3,sidebar_class_name:"eventTriggers",keywords:["event","triggers","webhooks"],description:"The result of any action performed in a service is called an event. Services like IdentityNow constantly generate events like an update to a setting or the completion of an account aggregation.",slug:"/docs/event-triggers",tags:["Event Triggers"]},o=void 0,a={unversionedId:"docs/identity-now/event-triggers/event-triggers",id:"docs/identity-now/event-triggers/event-triggers",title:"Event Triggers",description:"The result of any action performed in a service is called an event. Services like IdentityNow constantly generate events like an update to a setting or the completion of an account aggregation.",source:"@site/products/idn/docs/identity-now/event-triggers/index.md",sourceDirName:"docs/identity-now/event-triggers",slug:"/docs/event-triggers",permalink:"/idn/docs/event-triggers",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/index.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1681312658,formattedLastUpdatedAt:"Apr 12, 2023",sidebarPosition:3,frontMatter:{id:"event-triggers",title:"Event Triggers",pagination_label:"Event Triggers",sidebar_label:"Event Triggers",sidebar_position:3,sidebar_class_name:"eventTriggers",keywords:["event","triggers","webhooks"],description:"The result of any action performed in a service is called an event. Services like IdentityNow constantly generate events like an update to a setting or the completion of an account aggregation.",slug:"/docs/event-triggers",tags:["Event Triggers"]},sidebar:"idnDocs",previous:{title:"IdentityNow Rule Utility",permalink:"/idn/docs/rules/rule-utility"},next:{title:"Trigger Types",permalink:"/idn/docs/event-triggers/trigger-types"}},g={},d=[{value:"What Are Triggers",id:"what-are-triggers",level:2},{value:"How Are Triggers Different from APIs",id:"how-are-triggers-different-from-apis",level:2},{value:"When to Use Triggers",id:"when-to-use-triggers",level:2},{value:"How to Get Started With Event Triggers",id:"how-to-get-started-with-event-triggers",level:2}],l={toc:d};function c(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"what-are-triggers"},"What Are Triggers"),(0,s.kt)("p",null,"The result of any action performed in a service is called an ",(0,s.kt)("strong",{parentName:"p"},"event"),". Services like IdentityNow constantly generate events like an update to a setting or the completion of an account aggregation. Most events a service generates are of little value to clients, so services create event triggers, also known as web hooks, that allow clients to subscribe to specific events they are interested in. Similar to news letters or RSS feeds, each subscription tells the service what event a client is interested in and where to send the client the notification."),(0,s.kt)("h2",{id:"how-are-triggers-different-from-apis"},"How Are Triggers Different from APIs"),(0,s.kt)("p",null,"The biggest difference between event triggers and APIs is how data is accessed. Requesting data with an API is an active process, but receiving data from an event trigger is a passive process. Clients who want to get the latest data with an API must initiate the request. Clients who subscribe to an event trigger do not need to initiate a request. They are notified when the event occurs. This is similar to keeping up with the latest world news on the internet. You can initiate the request for data by opening a news website in your browser, or you can subscribe to a mail list to receive the latest news as it happens."),(0,s.kt)("h2",{id:"when-to-use-triggers"},"When to Use Triggers"),(0,s.kt)("p",null,"It is best to use event triggers when you need to react to an event in real-time. Although you can set up a polling mechanism using APIs, polling uses more bandwidth and resources, and if you poll too quickly, you can reach an API's rate limits. Event triggers use less bandwidth, they do not affect your API rate limit, and they are as close as you can get to real-time. However, event triggers have downsides to consider. They must be accessible from the public internet so the trigger service knows where to send the notification, and they can be harder to configure and operate than APIs are."),(0,s.kt)("h2",{id:"how-to-get-started-with-event-triggers"},"How to Get Started With Event Triggers"),(0,s.kt)("p",null,"Event triggers require different setup and testing steps than APIs do, so you should follow each document to better understand event triggers and the necessary steps to configure one. If this is your first time using event triggers, then you should use the ",(0,s.kt)("a",{parentName:"p",href:"/idn/docs/event-triggers/preparing-subscriber-service#webhook-testing-service"},"webhook testing service")," as you follow along."))}c.isMDXComponent=!0}}]);