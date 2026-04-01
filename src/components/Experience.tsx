import { useMemo, useState } from 'react'
import { experiences, type ExperienceCategory } from '../data/experience'

const primaryExperienceTitles = ['Cloud Engineer', 'Software Engineer Intern', 'Game Developer']

export default function Experience() {
  const [activeTab, setActiveTab] = useState<ExperienceCategory>('engineer')

  const filtered = useMemo(
    () => experiences.filter((item) => item.category === activeTab),
    [activeTab],
  )

  const featured = filtered.filter((item) => primaryExperienceTitles.includes(item.title))

  return (
    <section id="experience" className="bg-[#f5f0e6] px-4 py-[78px] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-[22px] text-center text-4xl font-bold text-stone-900 sm:text-5xl">Experience</h2>

        <div className="mx-auto mb-[30px] flex w-fit rounded-full border border-[#d8cebc] bg-[#fff6e9] p-1">
          <button
            type="button"
            onClick={() => setActiveTab('engineer')}
            className={`rounded-full px-[18px] py-[6px] text-sm font-medium transition-all ${
              activeTab === 'engineer'
                ? 'bg-stone-900 text-white shadow'
                : 'text-stone-700 hover:bg-[#f0e3cf]'
            }`}
          >
            Software
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('education')}
            className={`rounded-full px-[18px] py-[6px] text-sm font-medium transition-all ${
              activeTab === 'education'
                ? 'bg-stone-900 text-white shadow'
                : 'text-stone-700 hover:bg-[#f0e3cf]'
            }`}
          >
            Education
          </button>
        </div>

        <div className="mx-auto max-w-4xl space-y-[22px]">
          {(activeTab === 'engineer' ? featured : filtered).map((exp) => (
            <article
              key={`${exp.title}-${exp.company}`}
              className="group rounded-xl border border-[#d8cebc] bg-[#fffaf1] p-[22px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
               <div className="mb-[10px] flex items-start gap-[14px]">
                 <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#c8bca8] bg-[#f3e8d5] text-xs font-semibold text-stone-700">
                  {exp.icon ? (
                    <img src={exp.icon} alt={`${exp.company} logo`} className="h-full w-full object-cover" />
                  ) : (
                    exp.iconLabel
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-stone-900">{exp.title}</h3>
                  <div className="flex flex-col text-stone-700 sm:flex-row sm:items-center sm:justify-between">
                    <span>
                      {exp.company} | {exp.location}
                    </span>
                    <span className="text-sm text-stone-500">{exp.period}</span>
                  </div>
                </div>
              </div>

              {exp.inProgress ? (
                <div className="mt-[10px] text-sm text-stone-700">
                  <p className="italic">In progress</p>
                  <p className="mt-1">Current focus: {(exp.focusAreas ?? []).join(' | ')}</p>
                </div>
              ) : (
                <ul className="mt-[14px] space-y-1">
                  {(exp.accomplishments ?? []).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
                      <span className="mt-1 shrink-0 text-amber-700">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {(exp.tags ?? []).length > 0 && (
                <div className="mt-[14px] flex flex-wrap gap-2">
                  {(exp.tags ?? []).map((tag) => (
                    <span key={tag} className="rounded-full bg-[#f0e3cf] px-[10px] py-[2px] text-xs font-medium text-stone-700">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
