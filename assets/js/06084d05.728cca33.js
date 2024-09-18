"use strict";(self.webpackChunkai_agents_lab=self.webpackChunkai_agents_lab||[]).push([[5876],{1274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(4848),s=n(8453);const r={},a="\ud83e\uddb9 Use web search to supplement the knowledge base",c={id:"agent-tools/add-web-search",title:"\ud83e\uddb9 Use web search to supplement the knowledge base",description:"The knowledge base we created has limited information. Use web search to broaden the scope of the answerquestionsabout_topics tool.",source:"@site/docs/60-agent-tools/6-add-web-search.mdx",sourceDirName:"60-agent-tools",slug:"/agent-tools/add-web-search",permalink:"/ai-agents-lab/docs/agent-tools/add-web-search",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-agents-lab/blob/main/docs/60-agent-tools/6-add-web-search.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Create agent tools",permalink:"/ai-agents-lab/docs/agent-tools/create-agent-tools"},next:{title:"Create Agents",permalink:"/ai-agents-lab/docs/category/create-agents"}},i={},l=[];function d(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"-use-web-search-to-supplement-the-knowledge-base",children:"\ud83e\uddb9 Use web search to supplement the knowledge base"})}),"\n",(0,o.jsxs)(t.p,{children:["The knowledge base we created has limited information. Use web search to broaden the scope of the ",(0,o.jsx)(t.code,{children:"answer_questions_about_topics"})," tool."]}),"\n",(0,o.jsxs)(t.p,{children:["Fill in any ",(0,o.jsx)(t.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,o.jsx)(t.strong,{children:"\ud83e\uddb9 Use web search to get information"})," section in the notebook to use DuckDuckGo search if the information required to answer a particular question is not present in the knowledge base."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"CODE_BLOCK_17"})}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Answer"}),(0,o.jsx)("div",{children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"context = vector_store.similarity_search_with_score(query=query)\ncontext = [doc for doc, score in context if score > 0.8]\nif len(context) == 0:\n    search = DuckDuckGoSearchRun()\n    result = search.run(query)\n    context = [Document(page_content=result)]\nreturn context\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var o=n(6540);const s={},r=o.createContext(s);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);