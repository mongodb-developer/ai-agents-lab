"use strict";(self.webpackChunkai_agents_lab=self.webpackChunkai_agents_lab||[]).push([[881],{9239:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=s(4848),o=s(8453);s(1179);const r={},a="\ud83d\udc50 Create agent tools",i={id:"agent-tools/create-agent-tools",title:"\ud83d\udc50 Create agent tools",description:"The easiest way to define custom tools for agents in LangChain is using the @tool decorator. The decorator makes tools out of functions by using the function name as the tool name by default, and the function's docstring as the tool's description.",source:"@site/docs/60-agent-tools/5-create-agent-tools.mdx",sourceDirName:"60-agent-tools",slug:"/agent-tools/create-agent-tools",permalink:"/ai-agents-lab/docs/agent-tools/create-agent-tools",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/ai-agents-lab/blob/main/docs/60-agent-tools/5-create-agent-tools.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Instantiate chat completion LLM",permalink:"/ai-agents-lab/docs/agent-tools/chat-completion-llm"},next:{title:"\ud83e\uddb8 Use web search to supplement the knowledge base",permalink:"/ai-agents-lab/docs/agent-tools/add-web-search"}},c={},l=[];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-create-agent-tools",children:"\ud83d\udc50 Create agent tools"}),"\n",(0,t.jsxs)(n.p,{children:["The easiest way to define custom tools for agents in LangChain is using the ",(0,t.jsx)(n.code,{children:"@tool"})," decorator. The decorator makes tools out of functions by using the function name as the tool name by default, and the function's docstring as the tool's description."]}),"\n",(0,t.jsx)(n.p,{children:"We want the AI research agent to have access to the following tools:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"get_paper_metadata_arxiv"}),": Fetches a list of research papers from Arxiv, given a topic"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"get_paper_summary_from_arxiv"}),": Fetches the summary for a single research paper, given a paper ID"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"answer_questions_about_topics"}),": Answer questions about a given topic based on information in the agent's knowledge base"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Fill in any ",(0,t.jsx)(n.code,{children:"<CODE_BLOCK_N>"})," placeholders and run the cells under the ",(0,t.jsx)(n.strong,{children:"Step 6: Create agent tools"})," section in the notebook to create tools for the agent to use."]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"get_paper_metadata_arxiv"})," tool has been defined for you. Use this as inspiration to create the other two tools. The tool names and docstrings have been written out for you. All you have to do is code up the tool logic."]}),(0,t.jsxs)(n.p,{children:["Similarly, use the sample test for the ",(0,t.jsx)(n.code,{children:"get_paper_metadata_arxiv"})," tool to test out the other tools."]})]}),"\n",(0,t.jsx)(n.p,{children:"The answers for code blocks in this section are as follows:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_9"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'doc = ArxivLoader(query=id, load_max_docs=1).get_summaries_as_docs()\nif len(doc) == 0:\n    return "No summary found for this paper."\nreturn doc[0].page_content\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_10"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'MongoDBAtlasVectorSearch.from_connection_string(\n    connection_string=MONGODB_URI,\n    namespace=DB_NAME + "." + COLLECTION_NAME,\n    embedding=embedding_model,\n    index_name=ATLAS_VECTOR_SEARCH_INDEX_NAME,\n    text_key="abstract",\n)\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_11"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"context = vector_store.similarity_search_with_score(query=query)\ncontext = [doc for doc, score in context if score > 0.8]\nreturn context\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_12"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'retrieve = {\n    "context": RunnableLambda(get_context)\n    | (lambda docs: "\\n\\n".join([d.page_content for d in docs])),\n    "question": RunnablePassthrough(),\n}\n# Defining the chat prompt\ntemplate = """Answer the question based only on the following context. IF NO CONTEXT IS PROVIDED, SAY I DO NOT KNOW: \\\n{context}\n\nQuestion: {question}\n"""\nprompt = ChatPromptTemplate.from_template(template)\n# Parse output as a string\nparse_output = StrOutputParser()\n# Retrieval chain\nretrieval_chain = retrieve | prompt | llm | parse_output\n\nanswer = retrieval_chain.invoke(query)\n\nreturn answer\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_13"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'get_paper_summary_from_arxiv.invoke("1808.09236")\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_14"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'get_paper_summary_from_arxiv.invoke("808.09236")\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_15"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'answer_questions_about_topics.invoke("Partial cubes")\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CODE_BLOCK_16"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Answer"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'answer_questions_about_topics.invoke("Tree of Thoughts")\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1179:(e,n,s)=>{s.d(n,{A:()=>a});s(6540);var t=s(4848);function o(e){const n=e.url||"http://localhost:3000";return(0,t.jsxs)("div",{className:"browser container",children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"column left",children:[(0,t.jsx)("span",{className:"dot",style:{background:"#ED594A"}}),(0,t.jsx)("span",{className:"dot",style:{background:"#FDD800"}}),(0,t.jsx)("span",{className:"dot",style:{background:"#5AC05A"}})]}),(0,t.jsx)("div",{className:"column middle",children:(0,t.jsx)("input",{type:"text",value:n})}),(0,t.jsx)("div",{className:"column right",children:(0,t.jsxs)("div",{style:{float:"right"},children:[(0,t.jsx)("span",{className:"bar"}),(0,t.jsx)("span",{className:"bar"}),(0,t.jsx)("span",{className:"bar"})]})})]}),(0,t.jsx)("div",{className:"content",children:e.children})]})}var r=s(8180);function a(e){return(0,t.jsx)(o,{...e,children:(0,t.jsx)("img",{src:(0,r.A)(e.src),alt:e.alt})})}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var t=s(6540);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);