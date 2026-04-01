export type ProjectItem = {
  name: string
  url: string
  tech: string
  award?: string
  accomplishments: string[]
  tags?: string[]
}

export const projects: ProjectItem[] = [
  {
    name: 'AgentClipz',
    url: 'https://github.com/epicgdog/agentclipz',
    tech: 'Python, FFmpeg, Streamlink, Reka AI, Modulate API, Claude Code, Context7 MCP',
    award: 'Best Use of Modulate (80+ teams)',
    accomplishments: [
      'Built a live-stream clip generator that combines sentiment analysis with chat spikes',
      'Processed 4-hour streams with Streamlink and FFmpeg to find and score highlight moments',
      'Published Reka-captioned reels within 2 minutes of live events, driving 1.5K views',
    ],
    tags: ['Python', 'MCP', 'Claude Code'],
  },
  {
    name: 'StudyGuard',
    url: 'https://github.com/Nayab-23/SeedHackathon',
    tech: 'Python, FastAPI, OpenCV, OpenAI Whisper, NVIDIA Jetson Orin Nano',
    award: '2nd Overall (15 teams)',
    accomplishments: [
      'Built a study robot that dynamically updates DNS rules to block distractions',
      'Deployed OpenCV on Jetson Orin Nano to classify study states and stream telemetry to a dashboard',
      'Used Whisper and a vision-language model to safely unblock sites with human-in-the-loop review',
    ],
    tags: ['Python', 'FastAPI', 'OpenCV', 'OpenAI API'],
  },
  {
    name: 'Schedule-AI',
    url: 'https://github.com/epicgdog/schedule-ai',
    tech: 'Python, FastAPI, React, Turso SQLite, SQLAlchemy, PlaywrightMCP, Groq',
    accomplishments: [
      'Engineered an automated degree planner by scraping 5.3K courses and 200 majors',
      'Integrated a RAG pipeline using LangChain, Groq, ChromaDB, and embeddings',
      'Built a FastAPI + Turso backend to generate dynamic 4-year roadmaps',
    ],
    tags: ['Python', 'FastAPI', 'React/Next.js', 'SQLAlchemy', 'LangChain', 'RAG', 'Groq'],
  },
  {
    name: 'EVIncible',
    url: 'https://github.com/brandontautuan/SacHacksVII-BAMG-',
    tech: 'Next.js, Groq, LangGraph.js',
    accomplishments: [
      'Built an EV charger monitoring dashboard with AI agents that cut maintenance labor cost by 4x',
      'Collaborated with DataPigeon to prototype operations tooling for real charger monitoring',
      'Engineered a reasoning agent with LangGraph and Groq to automate maintenance workflows',
    ],
    tags: ['React/Next.js', 'Groq'],
  },
  {
    name: 'OpenENV Hackathon',
    url: 'https://github.com/mathewrolf1/OpenENV-Hackathon',
    tech: 'Python, OpenEnv, FastAPI, Slippi Dolphin, libmelee, PyTorch, PPO',
    accomplishments: [
      'Built a real-time RL system that connected OpenEnv and FastAPI to Slippi Dolphin through libmelee',
      'Designed a two-phase pipeline: fast physics-sim pretraining, then Dolphin fine-tuning with PPO',
      'Implemented competitive reward shaping and controller abstractions for robust Fox agent training',
    ],
    tags: ['Python', 'OpenAI API'],
  },
  {
    name: 'sow-agent',
    url: 'https://github.com/epicgdog/sow-agent',
    tech: 'Python, AWS Bedrock, GitHub Actions, FastAPI',
    accomplishments: [
      'Architected a 5-agent Bedrock system to automate SOW compliance and generate implementation code',
      'Built a self-healing QA loop with retries for failed generations',
      'Integrated repo workflows to auto-open compliant pull requests',
    ],
    tags: ['Python', 'FastAPI', 'AWS Bedrock', 'Git/GitHub'],
  },
  {
    name: 'Liturgy.Display',
    url: 'https://github.com/adover06/liturgy.display',
    tech: 'Python, FastAPI, WebSockets, Tailwind CSS, VOSK',
    accomplishments: [
      'Built live scripture display with speech-driven slide control',
      'Improved recognition quality for liturgical vocabulary via model tuning',
      'Delivered a real-time frontend over WebSockets for live operation',
    ],
    tags: ['Python', 'FastAPI', 'HTML/CSS'],
  },
  {
    name: 'HotSpot',
    url: 'https://github.com/Javacadu/HotSpotHackDavis25',
    tech: 'Next.js, React, Tailwind CSS, Mapbox GL JS, Google Gemini',
    accomplishments: [
      'Created a wildfire relief platform with near real-time updates',
      'Built geospatial visualization flows for incident awareness',
      'Automated resource curation using Gemini and census data',
    ],
    tags: ['React/Next.js', 'HTML/CSS'],
  },
  {
    name: 'Syll.AI',
    url: 'https://github.com/DanielYRoh/syllabus-scraper',
    tech: 'Next.js, React, Tailwind CSS, Supabase, FastAPI, Gemini',
    accomplishments: [
      'Transformed complex syllabi into simplified student guides',
      'Built full-stack processing pipeline with cloud storage',
      'Integrated AI extraction and rewrite workflows for key deadlines and tasks',
    ],
    tags: ['React/Next.js', 'FastAPI', 'HTML/CSS'],
  },
]

export const featuredProjects = projects.filter((project) => Boolean(project.award))
