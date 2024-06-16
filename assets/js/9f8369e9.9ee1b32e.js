"use strict";(self.webpackChunkai_agents_lab=self.webpackChunkai_agents_lab||[]).push([[996],{6513:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=s(4848),t=s(8453);const r={},i="\ud83d\udc50 Add memory to agents using MongoDB",a={id:"adding-memory/adding-memory",title:"\ud83d\udc50 Add memory to agents using MongoDB",description:"The final step in this lab is to add conversational message history as a form of memory for the agent.",source:"@site/docs/80-adding-memory/2-adding-memory.mdx",sourceDirName:"80-adding-memory",slug:"/adding-memory/adding-memory",permalink:"/ai-agents-lab/docs/adding-memory/adding-memory",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-agents-lab/blob/main/docs/80-adding-memory/2-adding-memory.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 Tools, libraries, and concepts",permalink:"/ai-agents-lab/docs/adding-memory/concepts"},next:{title:"\ud83c\udfaf Summary",permalink:"/ai-agents-lab/docs/summary"}},d={},c=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"-add-memory-to-agents-using-mongodb",children:"\ud83d\udc50 Add memory to agents using MongoDB"}),"\n",(0,o.jsx)(n.p,{children:"The final step in this lab is to add conversational message history as a form of memory for the agent."}),"\n",(0,o.jsx)(n.p,{children:"Message history in this case will be stored in and retrieved from a MongoDB collection."}),"\n",(0,o.jsxs)(n.p,{children:["Fill in any ",(0,o.jsx)(n.code,{children:"<CODE_BLOCK>"}),"s and run the cells under the ",(0,o.jsx)(n.strong,{children:"Step 9: Add memory to agents using MongoDB"})," section in the notebook to add memory to the basic tool calling agent we created previously."]}),"\n",(0,o.jsx)(n.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"CODE_BLOCK_22"})}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"Answer"}),(0,o.jsx)("div",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'return MongoDBChatMessageHistory(\n    MONGODB_URI, session_id, database_name=DB_NAME, collection_name="history"\n)\n'})})})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"CODE_BLOCK_23"})}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"Answer"}),(0,o.jsx)("div",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'MessagesPlaceholder("chat_history")\n'})})})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"CODE_BLOCK_24"})}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"Answer"}),(0,o.jsx)("div",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'RunnableWithMessageHistory(\n    agent_executor,\n    get_message_history,\n    input_messages_key="input",\n    history_messages_key="chat_history",\n)\n'})})})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"CODE_BLOCK_25"})}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"Answer"}),(0,o.jsx)("div",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'agent_with_chat_history.invoke(\n    {"input": "What is the title of the first paper you found?"},\n    config={"configurable": {"session_id": "my-session"}},\n)\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var o=s(6540);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);