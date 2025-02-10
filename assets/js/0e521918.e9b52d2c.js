"use strict";(self.webpackChunkai_agents_lab=self.webpackChunkai_agents_lab||[]).push([[366],{4367:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(4848),i=t(8453);const r={},s="\ud83d\udcd8 Lecture notes",a={id:"adding-memory/lecture-notes",title:"\ud83d\udcd8 Lecture notes",description:"Checkpoints",source:"@site/docs/50-adding-memory/1-lecture-notes.mdx",sourceDirName:"50-adding-memory",slug:"/adding-memory/lecture-notes",permalink:"/ai-agents-lab/docs/adding-memory/lecture-notes",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-agents-lab/blob/main/docs/50-adding-memory/1-lecture-notes.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add Memory to the Agent",permalink:"/ai-agents-lab/docs/category/add-memory-to-the-agent"},next:{title:"\ud83d\udc50 Add memory to the agent",permalink:"/ai-agents-lab/docs/adding-memory/adding-memory"}},c={},d=[{value:"Checkpoints",id:"checkpoints",level:2},{value:"Thread IDs",id:"thread-ids",level:2},{value:"Persisting checkpoints in MongoDB",id:"persisting-checkpoints-in-mongodb",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"-lecture-notes",children:"\ud83d\udcd8 Lecture notes"})}),"\n",(0,o.jsx)(n.h2,{id:"checkpoints",children:"Checkpoints"}),"\n",(0,o.jsx)(n.p,{children:"Checkpoints in LangGraph are a snapshot of the graph state. This is how AI applications built using LangGraph persist short-term and long-term memory."}),"\n",(0,o.jsx)(n.h2,{id:"thread-ids",children:"Thread IDs"}),"\n",(0,o.jsx)(n.p,{children:"Thread IDs are unique IDs assigned to memory checkpoints in LangGraph, allowing it to distinguish between conversation threads, facilitate human-in-the loop workflows and allow users to review and debug graph executions."}),"\n",(0,o.jsx)(n.h2,{id:"persisting-checkpoints-in-mongodb",children:"Persisting checkpoints in MongoDB"}),"\n",(0,o.jsx)(n.p,{children:"In this lab, you will persist the short-term memory of the agent in MongoDB. To do this, compile the agent's graph with the MongoDB checkpointer available in our LangGraph integration as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"from langgraph.checkpoint.mongodb import MongoDBSaver\ncheckpointer = MongoDBSaver(mongodb_client)\napp = graph.compile(checkpointer=checkpointer)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Refer to ",(0,o.jsx)(n.a,{href:"https://langchain-ai.github.io/langgraph/how-tos/persistence_mongodb/",children:"this"})," documentation to learn more about the MongoDB checkpointer for LangGraph."]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);