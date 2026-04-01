import { useEffect, useState } from 'react'
import { projects } from '../data/projects'
import agentclipzImage from '../assets/agentclipz.jpg'
import studyguardImage from '../assets/studyguard.png'
import scheduleAIImage from '../assets/scheduleai.png'
import evincibleImage from '../assets/evincible.png'
import openEnvImage from '../assets/openenv.png'
import liturgyDisplayImage from '../assets/liturgydisplay.png'
import hotspotImage from '../assets/hotspot.jpg'
import sowAgentImage from '../assets/sowagent.JPG'
import syllAIImage from '../assets/syllai.JPG'

const projectImages: Record<string, string> = {
  AgentClipz: agentclipzImage,
  StudyGuard: studyguardImage,
  'Schedule-AI': scheduleAIImage,
  EVIncible: evincibleImage,
  'OpenENV Hackathon': openEnvImage,
  'Liturgy.Display': liturgyDisplayImage,
  HotSpot: hotspotImage,
  'sow-agent': sowAgentImage,
  'Syll.AI': syllAIImage,
}

export default function Projects() {
  const [pageIndex, setPageIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  const goToPrevious = () => {
    setPageIndex((page) => (page === 0 ? pageCount - 1 : page - 1))
  }

  const goToNext = () => {
    setPageIndex((page) => (page === pageCount - 1 ? 0 : page + 1))
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

  const pageCount = Math.max(1, Math.ceil(projects.length / visibleCount))

  useEffect(() => {
    setPageIndex((page) => Math.min(page, pageCount - 1))
  }, [pageCount])

  const visibleProjects = Array.from({ length: visibleCount }, (_, offset) => {
    const index = pageIndex * visibleCount + offset
    return projects[index] ?? null
  })

  return (
    <section id="projects" className="px-4 py-[78px] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-[46px] text-center text-4xl font-bold text-stone-900 sm:text-5xl">Projects</h2>

        <div className="mx-auto max-w-6xl">
          <div className="relative">
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-1 top-1/2 z-30 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#c7bba7] bg-[#fff2df]/95 text-stone-800 shadow transition hover:bg-[#f3e3cd]"
              aria-label="Previous project"
            >
              <span className="text-xl leading-none">&#8249;</span>
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-1 top-1/2 z-30 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#c7bba7] bg-[#fff2df]/95 text-stone-800 shadow transition hover:bg-[#f3e3cd]"
              aria-label="Next project"
            >
              <span className="text-xl leading-none">&#8250;</span>
            </button>

            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#f5f0e6] via-[#f5f0e6]/70 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#f5f0e6] via-[#f5f0e6]/70 to-transparent" />

            <div key={pageIndex} className="project-strip grid grid-cols-1 gap-4 px-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleProjects.map((project, index) => {
                if (!project) {
                  return <div key={`empty-${pageIndex}-${index}`} className="rounded-xl p-4" aria-hidden="true" />
                }

                return (
                  <a
                    key={`${project.name}-${pageIndex}-${index}`}
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
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
