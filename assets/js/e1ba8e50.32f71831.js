"use strict";(self.webpackChunkai_agents_lab=self.webpackChunkai_agents_lab||[]).push([[744],{5717:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/ai-agents-lab/docs/intro","docId":"intro","unlisted":false},{"type":"category","label":"Key Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udcd8 What are AI agents?","href":"/ai-agents-lab/docs/key-concepts/what-are-ai-agents","docId":"key-concepts/what-are-ai-agents","unlisted":false},{"type":"link","label":"\ud83d\udcd8 When to use AI agents?","href":"/ai-agents-lab/docs/key-concepts/when-to-use-agents","docId":"key-concepts/when-to-use-agents","unlisted":false},{"type":"link","label":"\ud83d\udcd8 Components of AI agents","href":"/ai-agents-lab/docs/key-concepts/components-of-agents","docId":"key-concepts/components-of-agents","unlisted":false}],"href":"/ai-agents-lab/docs/category/key-concepts"},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udc50 MongoDB Setup","href":"/ai-agents-lab/docs/getting-started/mongodb-setup","docId":"getting-started/mongodb-setup","unlisted":false},{"type":"link","label":"\ud83d\udc50 Setup dev environment","href":"/ai-agents-lab/docs/getting-started/dev-env-setup","docId":"getting-started/dev-env-setup","unlisted":false},{"type":"link","label":"\ud83d\udc50 Setup prerequisites","href":"/ai-agents-lab/docs/getting-started/setup-pre-reqs","docId":"getting-started/setup-pre-reqs","unlisted":false}],"href":"/ai-agents-lab/docs/category/getting-started"},{"type":"category","label":"Create Agent Tools","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udcd8 Lecture notes","href":"/ai-agents-lab/docs/agent-tools/lecture-notes","docId":"agent-tools/lecture-notes","unlisted":false},{"type":"link","label":"\ud83d\udc50 Import data","href":"/ai-agents-lab/docs/agent-tools/import-data","docId":"agent-tools/import-data","unlisted":false},{"type":"link","label":"\ud83d\udc50 Create a vector search index","href":"/ai-agents-lab/docs/agent-tools/create-vector-search-index","docId":"agent-tools/create-vector-search-index","unlisted":false},{"type":"link","label":"\ud83d\udc50 Create agent tools","href":"/ai-agents-lab/docs/agent-tools/create-agent-tools","docId":"agent-tools/create-agent-tools","unlisted":false}],"href":"/ai-agents-lab/docs/category/create-agent-tools"},{"type":"category","label":"Create Agent","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udcd8 Lecture notes","href":"/ai-agents-lab/docs/create-agent/lecture-notes","docId":"create-agent/lecture-notes","unlisted":false},{"type":"link","label":"\ud83d\udc50 Define graph state","href":"/ai-agents-lab/docs/create-agent/define-graph-state","docId":"create-agent/define-graph-state","unlisted":false},{"type":"link","label":"\ud83d\udc50 Instantiate the LLM","href":"/ai-agents-lab/docs/create-agent/instantiate-llm","docId":"create-agent/instantiate-llm","unlisted":false},{"type":"link","label":"\ud83d\udc50 Define graph nodes","href":"/ai-agents-lab/docs/create-agent/define-graph-nodes","docId":"create-agent/define-graph-nodes","unlisted":false},{"type":"link","label":"\ud83d\udc50 Define conditional edges","href":"/ai-agents-lab/docs/create-agent/define-conditional-edges","docId":"create-agent/define-conditional-edges","unlisted":false},{"type":"link","label":"\ud83d\udc50 Build and execute the graph","href":"/ai-agents-lab/docs/create-agent/build-and-execute-graph","docId":"create-agent/build-and-execute-graph","unlisted":false}],"href":"/ai-agents-lab/docs/category/create-agent"},{"type":"category","label":"Add Memory to the Agent","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udcd8 Lecture notes","href":"/ai-agents-lab/docs/adding-memory/lecture-notes","docId":"adding-memory/lecture-notes","unlisted":false},{"type":"link","label":"\ud83d\udc50 Add memory to the agent","href":"/ai-agents-lab/docs/adding-memory/adding-memory","docId":"adding-memory/adding-memory","unlisted":false}],"href":"/ai-agents-lab/docs/category/add-memory-to-the-agent"},{"type":"link","label":"\ud83c\udfaf Summary","href":"/ai-agents-lab/docs/summary","docId":"summary","unlisted":false}]},"docs":{"adding-memory/adding-memory":{"id":"adding-memory/adding-memory","title":"\ud83d\udc50 Add memory to the agent","description":"The final step in this lab is to add conversational message history as a form of memory for the agent.","sidebar":"tutorialSidebar"},"adding-memory/lecture-notes":{"id":"adding-memory/lecture-notes","title":"\ud83d\udcd8 Lecture notes","description":"Checkpoints","sidebar":"tutorialSidebar"},"agent-tools/create-agent-tools":{"id":"agent-tools/create-agent-tools","title":"\ud83d\udc50 Create agent tools","description":"The easiest way to define custom tools for agents in LangChain is using the @tool decorator. The decorator makes tools out of functions by using the function name as the tool name by default, and the function\'s docstring as the tool\'s description.","sidebar":"tutorialSidebar"},"agent-tools/create-vector-search-index":{"id":"agent-tools/create-vector-search-index","title":"\ud83d\udc50 Create a vector search index","description":"To retrieve documents using vector search, you must configure a vector search index on the collection you want to perform vector search against.","sidebar":"tutorialSidebar"},"agent-tools/import-data":{"id":"agent-tools/import-data","title":"\ud83d\udc50 Import data","description":"If you are doing this lab as part of a MongoDB GenAI Developer Day, at this point you should already have the data required for this lab in your MongoDB cluster, so you can skip this step.","sidebar":"tutorialSidebar"},"agent-tools/lecture-notes":{"id":"agent-tools/lecture-notes","title":"\ud83d\udcd8 Lecture notes","description":"About the data","sidebar":"tutorialSidebar"},"create-agent/build-and-execute-graph":{"id":"create-agent/build-and-execute-graph","title":"\ud83d\udc50 Build and execute the graph","description":"Now that we have defined the nodes and edges of the graph, let\'s put the graph together and execute it to ensure that the agent is working as expected.","sidebar":"tutorialSidebar"},"create-agent/define-conditional-edges":{"id":"create-agent/define-conditional-edges","title":"\ud83d\udc50 Define conditional edges","description":"Edges in a LangGraph graph can be fixed or conditional. For conditional edges, we need a routing function to conditionally route the workflow to different nodes.","sidebar":"tutorialSidebar"},"create-agent/define-graph-nodes":{"id":"create-agent/define-graph-nodes","title":"\ud83d\udc50 Define graph nodes","description":"Let\'s define the nodes of the graph. The agent will have two nodes- an agent node and a tool node.","sidebar":"tutorialSidebar"},"create-agent/define-graph-state":{"id":"create-agent/define-graph-state","title":"\ud83d\udc50 Define graph state","description":"Let\'s start by defining the state of the agent\'s graph.","sidebar":"tutorialSidebar"},"create-agent/instantiate-llm":{"id":"create-agent/instantiate-llm","title":"\ud83d\udc50 Instantiate the LLM","description":"Now let\'s instantiate the LLM that will serve as the \\"brain\\" of the agent, and give it access to the tools we defined previously.","sidebar":"tutorialSidebar"},"create-agent/lecture-notes":{"id":"create-agent/lecture-notes","title":"\ud83d\udcd8 Lecture notes","description":"Creating agents using LangGraph","sidebar":"tutorialSidebar"},"getting-started/dev-env-setup":{"id":"getting-started/dev-env-setup","title":"\ud83d\udc50 Setup dev environment","description":"\ud83e\uddb9 If you are doing this lab as part of a MongoDB GenAI Developer Day, you can continue in the Codespace you previously created.","sidebar":"tutorialSidebar"},"getting-started/mongodb-setup":{"id":"getting-started/mongodb-setup","title":"\ud83d\udc50 MongoDB Setup","description":"If you are doing this lab as part of a MongoDB GenAI Developer Day, at this point you should already have a free cluster, so you can skip this step.","sidebar":"tutorialSidebar"},"getting-started/setup-pre-reqs":{"id":"getting-started/setup-pre-reqs","title":"\ud83d\udc50 Setup prerequisites","description":"Fill in any placeholders, select an LLM provider (one of aws, google or microsoft) of your choice, and run the cells under the Step 1: Setup prerequisites section in the notebook.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"|Lab goals|Learn the basics of building AI agents|","sidebar":"tutorialSidebar"},"key-concepts/components-of-agents":{"id":"key-concepts/components-of-agents","title":"\ud83d\udcd8 Components of AI agents","description":"AI agents have four main components: perception, planning and reasoning, tools, and memory.","sidebar":"tutorialSidebar"},"key-concepts/what-are-ai-agents":{"id":"key-concepts/what-are-ai-agents","title":"\ud83d\udcd8 What are AI agents?","description":"An AI agent is a system that uses an LLM to reason through a problem, create a plan to solve the problem, and execute the plan with the help of a set of tools.","sidebar":"tutorialSidebar"},"key-concepts/when-to-use-agents":{"id":"key-concepts/when-to-use-agents","title":"\ud83d\udcd8 When to use AI agents?","description":"AI agents are best suited for complex, multi-step tasks that require integration of multiple capabilities, such as question-answering, analysis, task execution etc. to arrive at the final answer or outcome. An active area of research is to have AI agents learn from their past interactions to build personalized and adaptive experiences.","sidebar":"tutorialSidebar"},"summary":{"id":"summary","title":"\ud83c\udfaf Summary","description":"Congratulations! Following this lab, you have successfully:","sidebar":"tutorialSidebar"}}}}')}}]);