"use strict";(self.webpackChunkai_agents_lab=self.webpackChunkai_agents_lab||[]).push([[142],{9871:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=t(4848),o=t(8453);const s={},r="\ud83d\udc50 Create a basic tool-calling agent",i={id:"create-agents/tool-calling-agent",title:"\ud83d\udc50 Create a basic tool-calling agent",description:"Let's start by creating a basic tool-calling agent using the createtoolcalling_agent method in LangChain.",source:"@site/docs/60-create-agents/2-tool-calling-agent.mdx",sourceDirName:"60-create-agents",slug:"/create-agents/tool-calling-agent",permalink:"/ai-agents-lab/docs/create-agents/tool-calling-agent",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-agents-lab/blob/main/docs/60-create-agents/2-tool-calling-agent.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 Tools, libraries, and concepts",permalink:"/ai-agents-lab/docs/create-agents/concepts"},next:{title:"\ud83d\udc50 Create a ReAct agent",permalink:"/ai-agents-lab/docs/create-agents/react-agent"}},c={},l=[];function g(e){const n={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"-create-a-basic-tool-calling-agent",children:"\ud83d\udc50 Create a basic tool-calling agent"}),"\n",(0,a.jsxs)(n.p,{children:["Let's start by creating a basic tool-calling agent using the ",(0,a.jsx)(n.code,{children:"create_tool_calling_agent"})," method in LangChain."]}),"\n",(0,a.jsxs)(n.p,{children:["Fill in any ",(0,a.jsx)(n.code,{children:"<CODE_BLOCK>"}),"s and run the cells under the ",(0,a.jsx)(n.strong,{children:"Step 7: Create a basic tool-calling agent"})," section in the notebook to create a basic tool-calling agent."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Skip over the ",(0,a.jsx)(n.strong,{children:"\ud83e\uddb8 CoT prompting"})," section for now. Come back to it if time permits."]})}),"\n",(0,a.jsx)(n.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"CODE_BLOCK_15"})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Answer"}),(0,a.jsx)("div",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'f"""Answer the following questions as best you can.\nYou can answer directly if the user is greeting you or similar.\nOtherwise, you have access to the following tools:\n\n{render_text_description(tools)}\n"""\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"CODE_BLOCK_16"})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Answer"}),(0,a.jsx)("div",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'prompt = ChatPromptTemplate.from_messages(\n    [\n        ("system", system_message),\n        ("human", "{input}"),\n        MessagesPlaceholder("agent_scratchpad"),\n    ]\n)\n\nagent = create_tool_calling_agent(llm, tools, prompt)\n\nagent_executor = AgentExecutor(\n    agent=agent, tools=tools, verbose=True, handle_parsing_errors=True\n)\n'})})})]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var a=t(6540);const o={},s=a.createContext(o);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);