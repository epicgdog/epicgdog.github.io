import { useState } from 'react'
import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'
import agentclipzImage from '../assets/agentclipz.jpg'
import studyguardImage from '../assets/studyguard.jpg'

const projectImages: Record<string, string> = {
  AgentClipz: agentclipzImage,
  StudyGuard: studyguardImage,
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const activeProject = featuredProjects[activeIndex]

  const goToPrevious = () => {
    setDirection('prev')
    setActiveIndex((index) => (index === 0 ? featuredProjects.length - 1 : index - 1))
  }

  const goToNext = () => {
    setDirection('next')
    setActiveIndex((index) => (index === featuredProjects.length - 1 ? 0 : index + 1))
  }

  return (
    <section id="projects" className="px-4 py-[78px] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-[46px] text-center text-3xl font-bold text-stone-900">Featured Projects</h2>

        <div className="mx-auto max-w-4xl">
          <div className="mb-[14px] flex items-center justify-between">
            <button
              type="button"
              onClick={goToPrevious}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#c7bba7] bg-[#fff2df] text-stone-800 transition hover:bg-[#f3e3cd]"
              aria-label="Previous project"
            >
              <span className="text-xl leading-none">&#8249;</span>
            </button>
            <p className="text-sm text-stone-600">
              {activeIndex + 1} / {featuredProjects.length}
            </p>
            <button
              type="button"
              onClick={goToNext}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#c7bba7] bg-[#fff2df] text-stone-800 transition hover:bg-[#f3e3cd]"
              aria-label="Next project"
            >
              <span className="text-xl leading-none">&#8250;</span>
            </button>
          </div>

          <a
            key={`${activeProject.name}-${activeIndex}`}
            href={activeProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card group block rounded-xl border border-[#d8cebc] bg-[#fffaf1] p-[22px] transition-all duration-300 hover:-translate-y-1 hover:border-[#c7bba7] hover:shadow-lg ${direction === 'next' ? 'project-card-next' : 'project-card-prev'}`}
          >
            {projectImages[activeProject.name] ? (
              <div className="mb-[14px] overflow-hidden rounded-lg border border-[#c7bba7] bg-[#f3e8d5]">
                <img
                  src={projectImages[activeProject.name]}
                  alt={`${activeProject.name} project`}
                  className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
            ) : (
              <div className="mb-[14px] flex aspect-video items-center justify-center rounded-lg border border-dashed border-[#c7bba7] bg-[#f3e8d5] text-sm font-medium text-stone-600 transition group-hover:bg-[#efdfc8]">
                {activeProject.name} image placeholder
              </div>
            )}

            <div className="mb-[10px] flex items-start justify-between">
              <h3 className="text-xl font-semibold text-stone-900 transition-colors group-hover:text-amber-700">
                {activeProject.name}
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

            {activeProject.award && (
              <span className="mb-[10px] inline-block rounded-full bg-amber-100 px-[6px] py-[2px] text-xs font-medium text-amber-800">
                {activeProject.award}
              </span>
            )}

            <p className="mb-[14px] text-sm text-stone-600">{activeProject.tech}</p>
            <ul className="space-y-2">
              {activeProject.accomplishments.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
                  <span className="mt-1 shrink-0 text-amber-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {(activeProject.tags ?? []).length > 0 && (
              <div className="mt-[14px] flex flex-wrap gap-2">
                {(activeProject.tags ?? []).map((tag) => (
                  <span key={tag} className="rounded-full bg-[#f0e3cf] px-[10px] py-[2px] text-xs font-medium text-stone-700">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </a>
        </div>

        <div className="mt-[30px] text-center">
          <Link
            to="/projects"
            className="inline-flex items-center rounded-full border border-[#c7bba7] bg-[#fff2df] px-[18px] py-[6px] text-sm font-medium text-stone-800 transition hover:bg-[#f3e3cd]"
          >
            Show more projects
          </Link>
        </div>
      </div>
    </section>
  )
}
