"use strict";(self.webpackChunkai_agents_lab=self.webpackChunkai_agents_lab||[]).push([[528],{7435:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=o(4848),s=o(8453);const r={},a="\ud83d\udc50 Import data",i={id:"agent-tools/import-data",title:"\ud83d\udc50 Import data",description:"The MongoDB learning assistant has two tools- a vector search tool to retrieve information to answer questions about MongoDB, and another tool to get the content of articles in our Developer Center for summarization.",source:"@site/docs/50-agent-tools/3-import-data.mdx",sourceDirName:"50-agent-tools",slug:"/agent-tools/import-data",permalink:"/ai-agents-lab/docs/agent-tools/import-data",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-agents-lab/blob/main/docs/50-agent-tools/3-import-data.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 Running Jupyter Notebooks in Google Colab",permalink:"/ai-agents-lab/docs/agent-tools/jupyter-notebooks"},next:{title:"\ud83d\udc50 Create a vector search index",permalink:"/ai-agents-lab/docs/agent-tools/create-vector-search-index"}},c={},l=[];function d(t){const e={code:"code",em:"em",h1:"h1",header:"header",p:"p",strong:"strong",...(0,s.R)(),...t.components},{Screenshot:o}=e;return o||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Screenshot",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"-import-data",children:"\ud83d\udc50 Import data"})}),"\n",(0,n.jsx)(e.p,{children:"The MongoDB learning assistant has two tools- a vector search tool to retrieve information to answer questions about MongoDB, and another tool to get the content of articles in our Developer Center for summarization."}),"\n",(0,n.jsxs)(e.p,{children:["Let's import the data required by these tools into two MongoDB collections. This is as simple as making a ",(0,n.jsx)(e.code,{children:"GET"})," request to a serverless function that we have created for you."]}),"\n",(0,n.jsxs)(e.p,{children:["Run the cells under the ",(0,n.jsx)(e.strong,{children:"Step 3: Import data"})," section in the notebook to import the data required by our agent's tools, into MongoDB collections."]}),"\n",(0,n.jsxs)(e.p,{children:["To verify that the data has been imported into your MongoDB cluster, navigate to the ",(0,n.jsx)(e.strong,{children:"Overview"})," page in the Atlas UI. In the ",(0,n.jsx)(e.strong,{children:"Clusters section"}),", select the cluster you just created and click ",(0,n.jsx)(e.strong,{children:"Browse collections"}),"."]}),"\n",(0,n.jsx)(o,{url:"https://cloud.mongodb.com",src:"img/screenshots/50-agent-tools/3-import-data/1-browse-collections.png",alt:"Browse collections"}),"\n",(0,n.jsxs)(e.p,{children:["Ensure that you see a database called ",(0,n.jsx)(e.em,{children:"mongodb_agents_lab"}),", and two collections namely ",(0,n.jsx)(e.em,{children:"chunked_articles"})," and ",(0,n.jsx)(e.em,{children:"full_articles"})," under it. Note the number and format of documents in both the collections."]}),"\n",(0,n.jsx)(o,{url:"https://cloud.mongodb.com",src:"img/screenshots/50-agent-tools/3-import-data/2-chunked-collection.png",alt:"Chunked collection"}),"\n",(0,n.jsx)(o,{url:"https://cloud.mongodb.com",src:"img/screenshots/50-agent-tools/3-import-data/3-full-collection.png",alt:"Full collection"})]})}function h(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},8453:(t,e,o)=>{o.d(e,{R:()=>a,x:()=>i});var n=o(6540);const s={},r=n.createContext(s);function a(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);