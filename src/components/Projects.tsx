import { type WheelEventHandler, useEffect, useState } from 'react'
import { projects } from '../data/projects'
import agentclipzImage from '../assets/agentclipz.jpg'
import studyguardImage from '../assets/studyguard.jpg'

const projectImages: Record<string, string> = {
  AgentClipz: agentclipzImage,
  StudyGuard: studyguardImage,
}

export default function Projects() {
  const [startIndex, setStartIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  const goToPrevious = () => {
    setStartIndex((index) => (index === 0 ? projects.length - 1 : index - 1))
  }

  const goToNext = () => {
    setStartIndex((index) => (index === projects.length - 1 ? 0 : index + 1))
  }

  const handleGalleryWheel: WheelEventHandler<HTMLDivElement> = (event) => {
    if (Math.abs(event.deltaY) < 10) return
    if (event.deltaY > 0) {
      goToNext()
    } else {
      goToPrevious()
    }
  }

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1280) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const visibleProjects = Array.from({ length: visibleCount }, (_, offset) => {
    const index = (startIndex + offset) % projects.length
    return projects[index]
  })

  return (
    <section id="projects" className="px-4 py-[78px] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-[46px] text-center text-4xl font-bold text-stone-900 sm:text-5xl">Projects</h2>

        <div className="mx-auto max-w-6xl" onWheel={handleGalleryWheel}>
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
              {startIndex + 1} / {projects.length}
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

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <a
                key={`${project.name}-${startIndex}-${index}`}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card group block rounded-xl border border-[#d8cebc] bg-[#fffaf1] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#c7bba7] hover:shadow-lg"
              >
                {projectImages[project.name] ? (
                  <div className="mb-3 overflow-hidden rounded-lg border border-[#c7bba7] bg-[#f3e8d5]">
                    <img
                      src={projectImages[project.name]}
                      alt={`${project.name} project`}
                      className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : (
                  <div className="mb-3 flex aspect-video items-center justify-center rounded-lg border border-dashed border-[#c7bba7] bg-[#f3e8d5] text-xs font-medium text-stone-600 transition group-hover:bg-[#efdfc8]">
                    {project.name}
                  </div>
                )}

                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-stone-900 transition-colors group-hover:text-amber-700">
                    {project.name}
                  </h3>
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-stone-400 transition-colors group-hover:text-amber-700"
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
                  <span className="mb-2 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-medium text-amber-800">
                    {project.award}
                  </span>
                )}

                <p className="mb-2 text-xs text-stone-600">{project.tech}</p>
                <ul className="space-y-1.5">
                  {project.accomplishments.slice(0, 2).map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-xs text-stone-700">
                      <span className="mt-1 shrink-0 text-amber-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {(project.tags ?? []).length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {(project.tags ?? []).map((tag) => (
                      <span key={tag} className="rounded-full bg-[#f0e3cf] px-2 py-0.5 text-[11px] font-medium text-stone-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {Array.from({ length: projects.length }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setStartIndex(index)}
                className={`h-1.5 w-6 rounded-full transition ${index === startIndex ? 'bg-stone-700' : 'bg-[#d8cebc] hover:bg-[#c7bba7]'}`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
