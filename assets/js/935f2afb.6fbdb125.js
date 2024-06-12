"use strict";(self.webpackChunkai_agents_lab=self.webpackChunkai_agents_lab||[]).push([[581],{5610:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/ai-agents-lab/docs/intro","docId":"intro","unlisted":false},{"type":"category","label":"MongoDB Atlas","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udc50 Create your account","href":"/ai-agents-lab/docs/mongodb-atlas/create-account","docId":"mongodb-atlas/create-account","unlisted":false},{"type":"link","label":"\ud83d\udc50 Deploy a database cluster","href":"/ai-agents-lab/docs/mongodb-atlas/create-cluster","docId":"mongodb-atlas/create-cluster","unlisted":false},{"type":"link","label":"\ud83d\udc50 Get your connection string","href":"/ai-agents-lab/docs/mongodb-atlas/get-connection-string","docId":"mongodb-atlas/get-connection-string","unlisted":false}],"href":"/ai-agents-lab/docs/category/mongodb-atlas"},{"type":"category","label":"Fireworks AI","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udc50 Create an account","href":"/ai-agents-lab/docs/fireworks-ai/create-account","docId":"fireworks-ai/create-account","unlisted":false},{"type":"link","label":"\ud83d\udc50 Create an API key","href":"/ai-agents-lab/docs/fireworks-ai/create-api-key","docId":"fireworks-ai/create-api-key","unlisted":false}],"href":"/ai-agents-lab/docs/category/fireworks-ai"},{"type":"category","label":"Dev Environment","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udc50 Setup dev environment","href":"/ai-agents-lab/docs/dev-env/dev-setup","docId":"dev-env/dev-setup","unlisted":false},{"type":"link","label":"\ud83d\udc50 Setup pre-requisites","href":"/ai-agents-lab/docs/dev-env/setup-pre-reqs","docId":"dev-env/setup-pre-reqs","unlisted":false}],"href":"/ai-agents-lab/docs/category/dev-environment"},{"type":"category","label":"Create Agent Tools","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udc50 Create the agent\'s knowledge base","href":"/ai-agents-lab/docs/agent-tools/knowledge-base","docId":"agent-tools/knowledge-base","unlisted":false},{"type":"link","label":"\ud83d\udc50 Create a vector search index","href":"/ai-agents-lab/docs/agent-tools/create-vector-search-index","docId":"agent-tools/create-vector-search-index","unlisted":false},{"type":"link","label":"\ud83d\udc50 Instantiate chat completion LLM","href":"/ai-agents-lab/docs/agent-tools/chat-completion-llm","docId":"agent-tools/chat-completion-llm","unlisted":false},{"type":"link","label":"\ud83d\udc50 Create agent tools","href":"/ai-agents-lab/docs/agent-tools/create-agent-tools","docId":"agent-tools/create-agent-tools","unlisted":false}],"href":"/ai-agents-lab/docs/category/create-agent-tools"},{"type":"category","label":"Create Agents","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udc50 Create a basic tool-calling agent","href":"/ai-agents-lab/docs/create-agents/tool-calling-agent","docId":"create-agents/tool-calling-agent","unlisted":false},{"type":"link","label":"\ud83d\udc50 Create a ReAct agent","href":"/ai-agents-lab/docs/create-agents/react-agent","docId":"create-agents/react-agent","unlisted":false},{"type":"link","label":"\ud83e\uddb8 Chain of Thought (CoT) prompting","href":"/ai-agents-lab/docs/create-agents/cot-prompting","docId":"create-agents/cot-prompting","unlisted":false},{"type":"link","label":"\ud83e\uddb8 Create a custom agent without using abstractions","href":"/ai-agents-lab/docs/create-agents/agent-without-abstraction","docId":"create-agents/agent-without-abstraction","unlisted":false}],"href":"/ai-agents-lab/docs/category/create-agents"},{"type":"category","label":"Add Memory to Agents","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udc50 Add memory to agents using MongoDB","href":"/ai-agents-lab/docs/adding-memory/adding-memory","docId":"adding-memory/adding-memory","unlisted":false}],"href":"/ai-agents-lab/docs/category/add-memory-to-agents"},{"type":"category","label":"ai-agents","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"what-are-ai-agents","href":"/ai-agents-lab/docs/ai-agents/what-are-ai-agents","docId":"ai-agents/what-are-ai-agents","unlisted":false}]},{"type":"link","label":"\ud83c\udfaf Summary","href":"/ai-agents-lab/docs/summary","docId":"summary","unlisted":false}]},"docs":{"adding-memory/adding-memory":{"id":"adding-memory/adding-memory","title":"\ud83d\udc50 Add memory to agents using MongoDB","description":"The final step in this lab is to add conversational message history as a form of memory for the agent.","sidebar":"tutorialSidebar"},"agent-tools/chat-completion-llm":{"id":"agent-tools/chat-completion-llm","title":"\ud83d\udc50 Instantiate chat completion LLM","description":"Let\'s instantiate the chat completion LLM to use as the \\"brain\\" of our agent and for any of the tools if required.","sidebar":"tutorialSidebar"},"agent-tools/create-agent-tools":{"id":"agent-tools/create-agent-tools","title":"\ud83d\udc50 Create agent tools","description":"The easiest way to define custom tools for agents in LangChain is using the @tool decorator. The decorator makes tools out of functions by using the function name as the tool name by default, and the function\'s docstring as the tool\'s description.","sidebar":"tutorialSidebar"},"agent-tools/create-vector-search-index":{"id":"agent-tools/create-vector-search-index","title":"\ud83d\udc50 Create a vector search index","description":"To retrieve documents from the knowledge base using vector search, you must configure a vector search index on the knowledge base collection.","sidebar":"tutorialSidebar"},"agent-tools/knowledge-base":{"id":"agent-tools/knowledge-base","title":"\ud83d\udc50 Create the agent\'s knowledge base","description":"One of the tools that the AI research agent has access to is a question-answering tool that retrieves information from a knowledge base (MongoDB collection) and uses it to answer questions. But first, we need to create the knowledge base.","sidebar":"tutorialSidebar"},"ai-agents/what-are-ai-agents":{"id":"ai-agents/what-are-ai-agents","title":"what-are-ai-agents","description":"","sidebar":"tutorialSidebar"},"create-agents/agent-without-abstraction":{"id":"create-agents/agent-without-abstraction","title":"\ud83e\uddb8 Create a custom agent without using abstractions","description":"The createtoolcalling_agent method in LangChain makes it easy to create tool-calling agents by abstracting away the invidual steps involved in creating the agent.","sidebar":"tutorialSidebar"},"create-agents/cot-prompting":{"id":"create-agents/cot-prompting","title":"\ud83e\uddb8 Chain of Thought (CoT) prompting","description":"Try out chain of thought prompting with the basic tool-calling agent.","sidebar":"tutorialSidebar"},"create-agents/react-agent":{"id":"create-agents/react-agent","title":"\ud83d\udc50 Create a ReAct agent","description":"Now let\'s try out an agent that uses ReAct prompting using the createreactagent method in LangChain.","sidebar":"tutorialSidebar"},"create-agents/tool-calling-agent":{"id":"create-agents/tool-calling-agent","title":"\ud83d\udc50 Create a basic tool-calling agent","description":"Let\'s start by creating a basic tool-calling agent using the createtoolcalling_agent method in LangChain.","sidebar":"tutorialSidebar"},"dev-env/dev-setup":{"id":"dev-env/dev-setup","title":"\ud83d\udc50 Setup dev environment","description":"You will be working in a Jupyter Notebook throughout this lab. The easiest and recommended way to run the lab notebook is using Google Colab.","sidebar":"tutorialSidebar"},"dev-env/setup-pre-reqs":{"id":"dev-env/setup-pre-reqs","title":"\ud83d\udc50 Setup pre-requisites","description":"Fill in any ``s and run the cells under the Step 1 Setup pre-requisites sections in the notebook.","sidebar":"tutorialSidebar"},"fireworks-ai/create-account":{"id":"fireworks-ai/create-account","title":"\ud83d\udc50 Create an account","description":"In this lab, we will use FireFunction V1, a free and open-source function calling model from Fireworks AI.","sidebar":"tutorialSidebar"},"fireworks-ai/create-api-key":{"id":"fireworks-ai/create-api-key","title":"\ud83d\udc50 Create an API key","description":"If you just created a new account or want to use an existing API key, skip to the last step to copy the API key.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"|Lab goals|Learn the basics of building AI agents|","sidebar":"tutorialSidebar"},"mongodb-atlas/create-account":{"id":"mongodb-atlas/create-account","title":"\ud83d\udc50 Create your account","description":"In this lab, you will learn how to use MongoDB Atlas as a knowledge base as well as a memory provider for AI agents.","sidebar":"tutorialSidebar"},"mongodb-atlas/create-cluster":{"id":"mongodb-atlas/create-cluster","title":"\ud83d\udc50 Deploy a database cluster","description":"Now that you have a MongoDB Atlas account, you can create your first cluster for free.","sidebar":"tutorialSidebar"},"mongodb-atlas/get-connection-string":{"id":"mongodb-atlas/get-connection-string","title":"\ud83d\udc50 Get your connection string","description":"In order to ingest data into your cluster later in the lab, you will need to get the connection string for your cluster.","sidebar":"tutorialSidebar"},"summary":{"id":"summary","title":"\ud83c\udfaf Summary","description":"Congratulations! Following this lab, you have successfully:","sidebar":"tutorialSidebar"}}}')}}]);