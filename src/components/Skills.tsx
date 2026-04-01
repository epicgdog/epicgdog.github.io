import { useMemo, useState } from 'react'
import { getSkillSources, marqueeItems } from '../data/skills'

type SkillHover = {
  skill: string
  x: number
  y: number
} | null

export default function Skills() {
  const [hovered, setHovered] = useState<SkillHover>(null)

  const sources = useMemo(() => {
    if (!hovered) return []
    return getSkillSources(hovered.skill)
  }, [hovered])

  return (
    <section id="skills" className="bg-[#efe6d8] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-stone-900">Technical Skills</h2>

        <div className="relative mb-4 overflow-hidden rounded-2xl border border-[#d7cbb7] bg-[#fff9ee] py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#fff9ee] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#fff9ee] to-transparent" />

          <div className="skills-marquee flex w-max gap-3 px-4">
            {[...marqueeItems, ...marqueeItems].map((skill, index) => (
              <button
                key={`${skill}-${index}`}
                type="button"
                className="skill-pill rounded-full border border-[#d8ccb8] bg-[#f6ecdd] px-4 py-2 text-sm font-medium text-stone-700"
                onMouseMove={(event) =>
                  setHovered({ skill, x: event.clientX + 16, y: event.clientY + 16 })
                }
                onMouseEnter={(event) =>
                  setHovered({ skill, x: event.clientX + 16, y: event.clientY + 16 })
                }
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered({ skill, x: 40, y: 40 })}
                onBlur={() => setHovered(null)}
                aria-label={`Skill ${skill}`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-stone-600">Hover a skill to see where it is used.</p>
      </div>

      {hovered && (
        <div
          className="pointer-events-none fixed z-[60] w-72 rounded-xl border border-[#d8cebc] bg-[#fff7ea] p-3 shadow-xl"
          style={{ left: hovered.x, top: hovered.y }}
        >
          <p className="text-sm font-semibold text-stone-900">{hovered.skill}</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-stone-500">Appears in</p>
          <ul className="mt-2 space-y-1 text-sm text-stone-700">
            {sources.map((source) => (
              <li key={source} className="flex items-start gap-2">
                <span className="mt-1 text-amber-700">•</span>
                <span>{source}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
