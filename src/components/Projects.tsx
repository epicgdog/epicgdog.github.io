import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-stone-900">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-[#d8cebc] bg-[#fffaf1] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c7bba7] hover:shadow-lg"
            >
              <div className="mb-4 flex aspect-video items-center justify-center rounded-lg border border-dashed border-[#c7bba7] bg-[#f3e8d5] text-sm font-medium text-stone-600 transition group-hover:bg-[#efdfc8]">
                {project.name} image placeholder
              </div>
              <div className="mb-3 flex items-start justify-between">
                <h3 className="text-xl font-semibold text-stone-900 transition-colors group-hover:text-amber-700">
                  {project.name}
                </h3>
                <svg
                  className="ml-2 h-5 w-5 shrink-0 text-stone-400 transition-colors group-hover:text-amber-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              {project.award && (
                <span className="mb-3 inline-block rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
                  {project.award}
                </span>
              )}
              <p className="mb-4 text-sm text-stone-600">{project.tech}</p>
              <ul className="space-y-2">
                {project.accomplishments.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
                    <span className="mt-1 shrink-0 text-amber-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {(project.tags ?? []).length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {(project.tags ?? []).map((tag) => (
                    <span key={tag} className="rounded-full bg-[#f0e3cf] px-3 py-1 text-xs font-medium text-stone-700">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center rounded-full border border-[#c7bba7] bg-[#fff2df] px-5 py-2 text-sm font-medium text-stone-800 transition hover:bg-[#f3e3cd]"
          >
            Show more projects
          </Link>
        </div>
      </div>
    </section>
  )
}
