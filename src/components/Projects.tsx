const projects = [
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
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all block"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              {project.award && (
                <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full mb-3">
                  {project.award}
                </span>
              )}
              <p className="text-sm text-gray-500 mb-4">{project.tech}</p>
              <ul className="space-y-2">
                {project.accomplishments.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-blue-500 mt-1 shrink-0">•</span>
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
