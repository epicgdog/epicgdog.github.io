import { projects } from '../data/projects'

export default function AllProjects() {
  return (
    <section className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-3 text-4xl font-bold text-stone-900">All Projects</h1>
        <p className="mb-10 text-stone-600">Comprehensive project list including hackathons, AI systems, and engineering tools.</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-[#d8cebc] bg-[#fffaf1] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c7bba7] hover:shadow-lg"
            >
              <div className="mb-4 flex aspect-video items-center justify-center rounded-lg border border-dashed border-[#c7bba7] bg-[#f3e8d5] text-sm font-medium text-stone-600">
                {project.name} image placeholder
              </div>
              <h3 className="mb-2 text-xl font-semibold text-stone-900 transition-colors group-hover:text-amber-700">{project.name}</h3>
              <p className="mb-4 text-sm text-stone-600">{project.tech}</p>
              <ul className="space-y-2">
                {project.accomplishments.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
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
