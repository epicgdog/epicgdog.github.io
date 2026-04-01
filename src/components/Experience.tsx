import { Link } from 'react-router-dom'
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
    <section id="experience" className="bg-[#f1e9db] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-center text-3xl font-bold text-stone-900">Experience</h2>

        <div className="mx-auto mb-8 flex w-fit rounded-full border border-[#d8cebc] bg-[#fff6e9] p-1">
          <button
            type="button"
            onClick={() => setActiveTab('engineer')}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              activeTab === 'engineer'
                ? 'bg-stone-900 text-white shadow'
                : 'text-stone-700 hover:bg-[#f0e3cf]'
            }`}
          >
            Engineer
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('education')}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              activeTab === 'education'
                ? 'bg-stone-900 text-white shadow'
                : 'text-stone-700 hover:bg-[#f0e3cf]'
            }`}
          >
            Education
          </button>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          {(activeTab === 'engineer' ? featured : filtered).map((exp) => (
            <article
              key={`${exp.title}-${exp.company}`}
              className="group rounded-xl border border-[#d8cebc] bg-[#fffaf1] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-3 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c8bca8] bg-[#f3e8d5] text-xs font-semibold text-stone-700">
                  {exp.iconLabel}
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
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
                  <p className="font-semibold">In progress</p>
                  <p className="mt-1">Current focus: {(exp.focusAreas ?? []).join(' | ')}</p>
                </div>
              ) : (
                <ul className="mt-4 space-y-2">
                  {(exp.accomplishments ?? []).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-stone-700">
                      <span className="mt-1.5 shrink-0 text-amber-700">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {(exp.tags ?? []).length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {(exp.tags ?? []).map((tag) => (
                    <span key={tag} className="rounded-full bg-[#f0e3cf] px-3 py-1 text-xs font-medium text-stone-700">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/experience"
            className="inline-flex items-center rounded-full border border-[#c7bba7] bg-[#fff2df] px-5 py-2 text-sm font-medium text-stone-800 transition hover:bg-[#f3e3cd]"
          >
            Show more experiences
          </Link>
        </div>
      </div>
    </section>
  )
}
