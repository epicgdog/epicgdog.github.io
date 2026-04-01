const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'Go', 'C', 'Java', 'SQL', 'LuaU', 'JavaScript', 'HTML/CSS'],
  },
  {
    label: 'Frameworks/Libraries',
    items: ['FastAPI', 'LangChain', 'RAG', 'OpenAI API', 'OpenCV', 'SQLAlchemy', 'React/Next.js'],
  },
  {
    label: 'Developer Tools',
    items: ['Linux/Unix', 'Git/GitHub', 'Claude Code', 'MCP', 'Docker', 'Groq', 'AWS Bedrock'],
  },
]

const marqueeItems = [...skillGroups.flatMap((group) => group.items)]

export default function Skills() {
  return (
    <section id="skills" className="bg-[#efe6d8] px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold text-stone-900">
          Technical Skills
        </h2>
        <div className="relative mb-8 overflow-hidden rounded-2xl border border-[#d7cbb7] bg-[#fff9ee] py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#fff9ee] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#fff9ee] to-transparent" />
          <div className="skills-marquee flex w-max gap-3 px-4">
            {[...marqueeItems, ...marqueeItems].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="skill-pill rounded-full border border-[#d8ccb8] bg-[#f6ecdd] px-4 py-2 text-sm font-medium text-stone-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.label} className="rounded-xl border border-[#d8ccb8] bg-[#fff9ee] p-6">
              <h3 className="mb-4 text-lg font-semibold text-stone-900">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full bg-[#f2e7d4] px-3 py-1 text-sm text-stone-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
