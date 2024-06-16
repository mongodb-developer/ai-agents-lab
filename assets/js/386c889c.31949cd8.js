"use strict";(self.webpackChunkai_agents_lab=self.webpackChunkai_agents_lab||[]).push([[51],{2890:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var o=a(4848),s=a(8453);const t={},i="\ud83d\udcd8 Tools, libraries, and concepts",r={id:"agent-tools/concepts",title:"\ud83d\udcd8 Tools, libraries, and concepts",description:"Here is a quick overview of tools, libraries and concepts that you will come across in this section of the lab:",source:"@site/docs/60-agent-tools/1-concepts.mdx",sourceDirName:"60-agent-tools",slug:"/agent-tools/concepts",permalink:"/ai-agents-lab/docs/agent-tools/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-agents-lab/blob/main/docs/60-agent-tools/1-concepts.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Agent Tools",permalink:"/ai-agents-lab/docs/category/create-agent-tools"},next:{title:"\ud83d\udc50 Create the agent's knowledge base",permalink:"/ai-agents-lab/docs/agent-tools/knowledge-base"}},l={},c=[{value:"datasets",id:"datasets",level:2},{value:"ArxivLoader",id:"arxivloader",level:2},{value:"PyMongo",id:"pymongo",level:2},{value:"LangChain integrations",id:"langchain-integrations",level:2},{value:"LangChain Expression Language (LCEL)",id:"langchain-expression-language-lcel",level:2},{value:"RunnableLambda",id:"runnablelambda",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"-tools-libraries-and-concepts",children:"\ud83d\udcd8 Tools, libraries, and concepts"}),"\n",(0,o.jsx)(n.p,{children:"Here is a quick overview of tools, libraries and concepts that you will come across in this section of the lab:"}),"\n",(0,o.jsx)(n.h2,{id:"datasets",children:(0,o.jsx)(n.a,{href:"https://huggingface.co/docs/datasets/en/index",children:"datasets"})}),"\n",(0,o.jsx)(n.p,{children:"Library used to download a dataset of Arxiv papers from Hugging Face."}),"\n",(0,o.jsx)(n.h2,{id:"arxivloader",children:(0,o.jsx)(n.a,{href:"https://python.langchain.com/v0.2/docs/integrations/document_loaders/arxiv/",children:"ArxivLoader"})}),"\n",(0,o.jsx)(n.p,{children:"Document loader class in LangChain that used to load research papers from Arxiv.org as LangChain Document objects."}),"\n",(0,o.jsx)(n.h2,{id:"pymongo",children:(0,o.jsx)(n.a,{href:"https://pymongo.readthedocs.io/en/stable/",children:"PyMongo"})}),"\n",(0,o.jsx)(n.p,{children:"Python driver for MongoDB. Used to connect to MongoDB databases, delete and insert documents into a MongoDB collection."}),"\n",(0,o.jsx)(n.h2,{id:"langchain-integrations",children:"LangChain integrations"}),"\n",(0,o.jsxs)(n.p,{children:["Standalone ",(0,o.jsx)(n.code,{children:"langchain-{provider}"})," packages for improved versioning, dependency management and testing. You will come across the following in this lab:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://python.langchain.com/v0.2/docs/integrations/providers/mongodb_atlas/",children:"langchain-mongodb"}),": Used to create a MongoDB Atlas vector store and also to store and retrieve chat message history from MongoDB"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://python.langchain.com/v0.2/docs/integrations/platforms/huggingface/",children:"langchain-huggingface"}),": To access open-source embedding models from HuggingFace"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://python.langchain.com/v0.2/docs/integrations/providers/fireworks/",children:"langchain-fireworks"}),": To use Firework AI's chat completion models"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"langchain-expression-language-lcel",children:(0,o.jsx)(n.a,{href:"https://python.langchain.com/v0.1/docs/expression_language/",children:"LangChain Expression Language (LCEL)"})}),"\n",(0,o.jsx)(n.p,{children:"LCEL provides a declarative way to chain together prompts, data processing steps, calls to LLMs, and tools. Each unit in a chain is called a Runnable and can be invoked, streamed and transformed on its own."}),"\n",(0,o.jsx)(n.h2,{id:"runnablelambda",children:(0,o.jsx)(n.a,{href:"https://api.python.langchain.com/en/latest/runnables/langchain_core.runnables.base.RunnableLambda.html",children:"RunnableLambda"})}),"\n",(0,o.jsx)(n.p,{children:"RunnableLambda converts any arbitrary Python function into a LangChain Runnable."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>r});var o=a(6540);const s={},t=o.createContext(s);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);