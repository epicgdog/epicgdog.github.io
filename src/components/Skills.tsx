const skills = {
  Languages: ['Python', 'Go', 'C', 'Java', 'SQL', 'LuaU', 'JavaScript', 'HTML/CSS'],
  'Frameworks/Libraries': ['FastAPI', 'LangChain', 'RAG', 'OpenAI API', 'OpenCV', 'SQLAlchemy', 'React/Next.js'],
  'Developer Tools': ['Linux/Unix', 'Git/GitHub', 'Claude Code', 'MCP', 'Docker', 'Groq', 'AWS Bedrock'],
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
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
