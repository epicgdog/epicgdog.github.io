const projects = [
  {
    name: 'EVIncible',
    url: 'https://github.com/brandontautuan/SacHacksVII-BAMG-',
    tech: 'Next.js, Groq, LangGraph.js',
    accomplishments: [
      'Built a dashboard to monitor EV chargers and used AI agents to automate maintenance workflows, reducing labor costs by 4x',
      'Shipped in collaboration with DataPigeon, selected from 4,000+ companies for an AI Summit, to solve EV charger monitoring',
      'Engineered a reasoning agent with full tooling using LangGraph and Groq, surfaced through a Next.js interface',
      'Simulated charger decay with Monte Carlo methods to model real-world behavior before production integration',
    ],
  },
  {
    name: 'AgentClipz',
    url: 'https://github.com/epicgdog/agentclipz',
    tech: 'Python, FFmpeg, Streamlink, Reka AI, Modulate API, Claude Code, Context7 MCP',
    award: 'Best Use of Modulate',
    accomplishments: [
      'Awarded Best Use of Modulate out of 80+ teams for a live-stream clip generator using sentiment analysis',
      'Processed 4-hour live streams via Streamlink and FFmpeg, using chat spikes and Modulate to audit clips',
      'Published Reka AI-captioned Reels to Instagram 2 minutes after the event occurred, securing 1.5K views',
    ],
  },
  {
    name: 'StudyGuard',
    url: 'https://github.com/Nayab-23/SeedHackathon',
    tech: 'Python, FastAPI, OpenCV, OpenAI Whisper, NVIDIA Jetson Orin Nano',
    award: '2nd Overall (15 teams)',
    accomplishments: [
      'Awarded 2nd Overall for a study robot that reloads dynamic DNS to block distractions',
      'Deployed OpenCV on a Jetson Orin Nano to classify current study states, streaming data to a dashboard',
      'Used a Brev-hosted Llama VL model and Whisper STT to unblock study sites on demand after analysis',
      'Created a SQLite dashboard with human-in-the-loop controls to validate or override agent DNS actions',
    ],
  },
  {
    name: 'Liturgy.Display',
    url: 'https://github.com/adover06/liturgy.display',
    tech: 'Python, FastAPI, WebSockets, Tailwind CSS, VOSK Speech Recognition',
    accomplishments: [
      'Built a live scripture display system using speech recognition to automate slide operation with less than 50ms latency',
      'Improved transcription accuracy by 50% by fine-tuning the speech model for liturgical vocabulary',
      'Developed a real-time web interface using Python WebSockets connected to a Vite and Tailwind frontend',
    ],
  },
  {
    name: 'HotSpot',
    url: 'https://github.com/Javacadu/HotSpotHackDavis25',
    tech: 'Next.js, React, Tailwind CSS, Mapbox GL JS, Google Gemini',
    accomplishments: [
      'Created a real-time disaster relief platform to monitor California wildfires with automated resource refreshes every 2 minutes',
      'Built a live geospatial interface with Next.js and Mapbox to visualize wildfire activity and location intelligence',
      'Automated curation of critical resources for affected demographics using Google Gemini and current Census data',
    ],
  },
  {
    name: 'Syll.AI',
    url: 'https://github.com/DanielYRoh/syllabus-scraper',
    tech: 'Next.js, React, Tailwind CSS, Vercel, Supabase, FastAPI, ngrok, Google Gemini',
    accomplishments: [
      'Built a platform that transforms complex syllabi into simplified student-friendly guides',
      'Developed a full-stack Next.js and Supabase application with cloud-backed document handling',
      'Integrated a FastAPI and Gemini backend to extract key details and generate rewritten syllabus content',
    ],
  },
  {
    name: 'sow-agent',
    url: 'https://github.com/epicgdog/sow-agent',
    tech: 'Python, AWS Bedrock, GitHub Actions, FastAPI',
    accomplishments: [
      'Architected a 5-agent AWS Bedrock system automating SOW compliance, generating implementation code',
      'Developed a self-healing QA loop with Amazon Nova, auto-retrying failed agent code generations up to 3 times',
      'Built a Next.js dashboard to execute agents against GitHub repositories, auto-pushing compliant code to PRs',
    ],
  },
  {
    name: 'Schedule-AI',
    url: 'https://github.com/epicgdog/schedule-ai',
    tech: 'Python, FastAPI, React, Turso SQLite, SQLAlchemy, PlaywrightMCP, Groq',
    accomplishments: [
      'Engineered an automated degree planner, scraping 5.3K courses and 200 majors via Playwright and Groq LLMs',
      'Integrated a RAG pipeline using LangChain, Groq, ChromaDB, and embedding models for data retrieval',
      'Built a FastAPI and Turso SQLite backend to generate dynamic 4-year degree roadmaps using junction tables',
      'Parsed user transcripts with Pandas to track degree progress, rendering React roadmaps via bioinformatics tools',
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold text-stone-900">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-[#d8cebc] bg-[#fffaf1] p-6 transition-all hover:border-[#c7bba7] hover:shadow-lg"
            >
              <div className="mb-4 flex aspect-video items-center justify-center rounded-lg border border-dashed border-[#c7bba7] bg-[#f3e8d5] text-sm font-medium text-stone-600">
                {project.name} image placeholder
              </div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-stone-900 transition-colors group-hover:text-amber-700">
                  {project.name}
                </h3>
                <svg className="ml-2 h-5 w-5 shrink-0 text-stone-400 transition-colors group-hover:text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              {project.award && (
                <span className="mb-3 inline-block rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
                  {project.award}
                </span>
              )}
              <p className="mb-4 text-sm text-stone-600">{project.tech}</p>
              <ul className="space-y-2">
                {project.accomplishments.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                    <span className="mt-1 shrink-0 text-amber-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
