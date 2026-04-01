export default function Education() {
  return (
    <section id="education" className="bg-[#ece2d2] px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold text-stone-900">
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl border border-[#d2c5b0] bg-[#fff8ec] p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  San Jose State University
                </h3>
                  <p className="text-stone-700">San Jose, CA</p>
                </div>
                <span className="mt-2 text-stone-500 sm:mt-0">Graduation: May 2027</span>
              </div>
            <p className="mb-4 text-lg text-stone-800">
              Bachelor of Science in Computer Science
            </p>
            <ul className="space-y-2 text-stone-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>GPA: 3.93, 2x President's Scholar Award</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Coursework: Data Structures and Algorithms, Operating Systems, Network Security</span>
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {['C', 'Java'].map((tag) => (
                <span key={tag} className="rounded-full bg-[#f0e3cf] px-3 py-1 text-xs font-medium text-stone-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
