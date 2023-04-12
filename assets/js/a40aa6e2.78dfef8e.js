"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[75163],{92980:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const i={id:"access-request-dynamic-approval",title:"Access Request Dynamic Approval",pagination_label:"Access Request Dynamic Approval",sidebar_label:"Access Request Dynamic Approval",sidebar_class_name:"accessRequestDynamicApproval",keywords:["event","trigger","access","request","dynamic","approval","available"],description:"Fires after an access request is submitted.",slug:"/docs/event-triggers/triggers/access-request-dynamic-approval",tags:["Event Triggers","Available Event Triggers","Request Response"]},r=void 0,o={unversionedId:"docs/identity-now/event-triggers/available/access-request-dynamic-approval",id:"docs/identity-now/event-triggers/available/access-request-dynamic-approval",title:"Access Request Dynamic Approval",description:"Fires after an access request is submitted.",source:"@site/products/idn/docs/identity-now/event-triggers/available/access-request-dynamic-approval.md",sourceDirName:"docs/identity-now/event-triggers/available",slug:"/docs/event-triggers/triggers/access-request-dynamic-approval",permalink:"/idn/docs/event-triggers/triggers/access-request-dynamic-approval",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/available/access-request-dynamic-approval.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/idn/tags/available-event-triggers"},{label:"Request Response",permalink:"/idn/tags/request-response"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1681312658,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{id:"access-request-dynamic-approval",title:"Access Request Dynamic Approval",pagination_label:"Access Request Dynamic Approval",sidebar_label:"Access Request Dynamic Approval",sidebar_class_name:"accessRequestDynamicApproval",keywords:["event","trigger","access","request","dynamic","approval","available"],description:"Fires after an access request is submitted.",slug:"/docs/event-triggers/triggers/access-request-dynamic-approval",tags:["Event Triggers","Available Event Triggers","Request Response"]},sidebar:"idnDocs",previous:{title:"Available Event Triggers",permalink:"/idn/docs/event-triggers/available"},next:{title:"Access Request Postapproval",permalink:"/idn/docs/event-triggers/triggers/access-request-postapproval"}},l={},c=[{value:"Event Context",id:"event-context",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"event-context"},"Event Context"),(0,s.kt)("p",null,"The Access Request Dynamic Approval event trigger provides a way to route a request to an additional approval step by an identity or a governance group."),(0,s.kt)("p",null,"When an access request is submitted, the Access Request Dynamic Approval trigger does the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Sends data about the access request and expects a response including the ID of an existing identity or workgroup (i.e. governance group) to add to the approval workflow."),(0,s.kt)("li",{parentName:"ul"},"Based on the ID received, an approval task is assigned to the identity or governance group in IdentityNow for a decision as an additional step after other configured approval requirements are met."),(0,s.kt)("li",{parentName:"ul"},"If the new approver is also the target identity for this request, the manager is assigned instead. If the identity has no manager, a random org admin is assigned."),(0,s.kt)("li",{parentName:"ul"},"If the ID of the additional approver is wrong, then a random org admin is assigned."),(0,s.kt)("li",{parentName:"ul"},"You can choose to ",(0,s.kt)("strong",{parentName:"li"},"NOT")," add an additional approver by providing an empty object as the response to the triggered REST request.")),(0,s.kt)("p",null,"You can use this trigger to develop logic outside of IdentityNow\u2019s out-of-the-box offerings to route an approval step to users such as the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The recipient\u2019s department head"),(0,s.kt)("li",{parentName:"ul"},"The recipient\u2019s cost center"),(0,s.kt)("li",{parentName:"ul"},"A security officer"),(0,s.kt)("li",{parentName:"ul"},"A high-risk governance group for highly sensitive roles")),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"This is a ",(0,s.kt)("inlineCode",{parentName:"p"},"REQUEST_RESPONSE")," trigger type. For more information about how to respond to a ",(0,s.kt)("inlineCode",{parentName:"p"},"REQUEST_RESPONSE")," type trigger, see ",(0,s.kt)("a",{parentName:"p",href:"/idn/docs/event-triggers/responding-request-response-trigger"},"responding to a request response type trigger")," . This trigger intercepts newly submitted access requests and allows the subscribing service to add one additional identity or governance group as the last step in the approver list for the access request."),(0,s.kt)("p",null,"The subscribing service will receive the following input from the trigger service."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accessRequestId": "4b4d982dddff4267ab12f0f1e72b5a6d",\n  "requestedFor": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "requestedItems": [\n    {\n      "id": "2c91808b6ef1d43e016efba0ce470904",\n      "name": "Engineering Access",\n      "description": "Engineering Access",\n      "type": "ACCESS_PROFILE",\n      "operation": "Add",\n      "comment": "William needs this access for his day to day job activities."\n    }\n  ],\n  "requestedBy": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1314",\n    "name": "Billy Bob"\n  }\n}\n')),(0,s.kt)("p",null,"The subscribing service can use this information to make a decision about whether to add additional approvers to the access request."),(0,s.kt)("p",null,"To add an identity to the approver list, the subscribing service responds to the event trigger with the following payload:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "2c91808b6ef1d43e016efba0ce470906",\n  "name": "Adam Adams",\n  "type": "IDENTITY"\n}\n')),(0,s.kt)("p",null,"To add a governance group to the approver list, the subscribing service responds to the event trigger with the following payload:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "2c91808b6ef1d43e016efba0ce470907",\n  "name": "Audit Committee",\n  "type": "GOVERNANCE_GROUP"\n}\n')),(0,s.kt)("p",null,"If no identity or group should be added to a particular access request, then the subscribing service responds with the following object:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "",\n  "name": "",\n  "type": ""\n}\n')),(0,s.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,s.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/trigger-types#request-response"},"REQUEST_RESPONSE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/responding-request-response-trigger"},"How to respond to a REQUEST_RESPONSE trigger"))))}p.isMDXComponent=!0}}]);