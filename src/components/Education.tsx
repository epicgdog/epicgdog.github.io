export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  San Jose State University
                </h3>
                <p className="text-gray-600">San Jose, CA</p>
              </div>
              <span className="text-gray-500 mt-2 sm:mt-0">Graduation: May 2027</span>
            </div>
            <p className="text-lg text-gray-800 mb-4">
              Bachelor of Science in Computer Science
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>GPA: 3.93, 2x President's Scholar Award</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Coursework: Data Structures and Algorithms, Operating Systems, Network Security</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
