const experiences = [
  {
    title: 'Software Developer',
    company: 'Software and Computer Engineering Society (SCE)',
    location: 'San Jose, CA',
    period: 'Aug. 2024 -- Present',
    accomplishments: [
      'Developed an inventory management system in Go and React used by 300+ members for snack availability',
      'Implemented auto-generate of welcome images for a Discord Bot with JavaScript for a 3000-member server',
      'Maintained 99% uptime for LED Leetcode leaderboard, increasing engagement with over 400+ problems solved',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'SJSU College of Engineering',
    location: 'San Jose, CA',
    period: 'May 2025 -- Aug. 2025',
    accomplishments: [
      'Architected a real-time Python and SQLite backend service for monitoring print jobs for over 2,000+ people',
      'Ensured 99% uptime for 500+ jobs by automating Pytest unit tests within GitHub Actions CI/CD pipelines',
      'Reduced memory usage by 65% via Docker consolidation to streamline deployment on a bare-metal Linux server',
    ],
  },
  {
    title: 'Lead Instructor',
    company: 'theCoderSchool',
    location: 'Folsom, CA',
    period: 'Jul. 2025',
    accomplishments: [
      'Fostered multi-functional collaboration with TAs and parents to successfully lead a 15-student camp',
      'Created a 5-game LuaU curriculum with slides now adopted as standard training material for future camps',
      'Raised daily quiz scores from 56% to 84% via relatable analogies and hosting a final game gallery walk',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-gray-200"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500" />
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600">
                  <span>{exp.company} | {exp.location}</span>
                  <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.accomplishments.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <span className="text-blue-500 mt-1.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
