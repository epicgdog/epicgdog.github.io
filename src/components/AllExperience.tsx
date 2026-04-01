import { experiences } from '../data/experience'

export default function AllExperience() {
  return (
    <section className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-3 text-4xl font-bold text-stone-900">All Experience</h1>
        <p className="mb-10 text-stone-600">Full timeline across engineering roles, mentorship, and instruction.</p>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <article key={`${exp.title}-${exp.company}`} className="rounded-xl border border-[#d8cebc] bg-[#fffaf1] p-6">
              <div className="mb-3 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#c8bca8] bg-[#f3e8d5] text-xs font-semibold text-stone-700">
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
      </div>
    </section>
  )
}
