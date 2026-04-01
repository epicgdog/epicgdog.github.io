import discordLogo from '../assets/discord.svg'
import robloxLogo from '../assets/roblox.svg'

const experiences = [
  {
    title: 'Peer Mentor',
    company: 'Peer Connections',
    iconLabel: 'PC',
    location: 'San Jose, CA',
    period: 'Aug. 2025 -- Present',
    accomplishments: [
      'Mentored Calculus I workshop students with academic strategies, increasing pass rate by 15%',
      'Directed 5 academic workshops with a 95%+ satisfaction score through clear presentation and facilitation',
      'Facilitated 50+ mentoring and tutoring sessions across 7+ CS and MATH courses to strengthen problem-solving skills',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Software and Computer Engineering Society (SCE)',
    icon: discordLogo,
    iconLabel: 'SCE',
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
    iconLabel: 'SJSU',
    location: 'San Jose, CA',
    period: 'May 2025 -- Aug. 2025',
    accomplishments: [
      'Architected a real-time Python and SQLite backend service for monitoring print jobs for over 2,000+ people',
      'Ensured 99% uptime for 500+ jobs by automating Pytest unit tests within GitHub Actions CI/CD pipelines',
      'Reduced memory usage by 65% via Docker consolidation to streamline deployment on a bare-metal Linux server',
    ],
  },
  {
    title: 'Game Developer',
    company: 'Roblox',
    icon: robloxLogo,
    iconLabel: 'Roblox',
    location: 'Remote',
    period: 'Aug. 2020 -- Aug. 2023',
    accomplishments: [
      'Architected an NPC system in LuaU with shared pathfinding, scaling from 100 to 300+ agents under 15ms',
      'Achieved sub-4ms hit registration in a custom FPS system through raycasting and client-side rendering',
      'Authored 100+ Roblox DevForum posts with 10+ accepted solutions, demonstrating strong communication and debugging skills',
    ],
  },
  {
    title: 'Lead Instructor',
    company: 'theCoderSchool',
    iconLabel: 'TCS',
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
    <section id="experience" className="bg-[#f1e9db] px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold text-stone-900">
          Experience
        </h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-[#d8cebc] bg-[#fffaf1] p-6 pl-10"
            >
              <div className="mb-2 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#c8bca8] bg-[#f3e8d5]">
                  {exp.icon ? (
                    <img src={exp.icon} alt={`${exp.company} icon`} className="h-7 w-7" />
                  ) : (
                    <span className="text-xs font-semibold text-stone-700">{exp.iconLabel}</span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-stone-900">
                  {exp.title}
                  </h3>
                  <div className="flex flex-col text-stone-700 sm:flex-row sm:items-center sm:justify-between">
                    <span>{exp.company} | {exp.location}</span>
                    <span className="mt-1 text-sm text-stone-500 sm:mt-0">{exp.period}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.accomplishments.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700">
                    <span className="mt-1.5 shrink-0 text-amber-700">•</span>
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
