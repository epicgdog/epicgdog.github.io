import pacificInHomeCareLogo from '../assets/pacificinhomecare.webp'
import sjsuLogo from '../assets/sjsu.webp'
import sceLogo from '../assets/sce.webp'
import robloxLogo from '../assets/roblox.svg'
import peerConnectionsLogo from '../assets/peerconnections.webp'
import theCoderSchoolLogo from '../assets/thecoderschool.webp'

export type ExperienceCategory = 'engineer' | 'education'

export type ExperienceItem = {
  title: string
  company: string
  icon?: string
  iconLabel: string
  location: string
  period: string
  category: ExperienceCategory
  accomplishments?: string[]
  inProgress?: boolean
  focusAreas?: string[]
  tags?: string[]
}

export const experiences: ExperienceItem[] = [
  {
    title: 'Cloud Engineer',
    company: 'Pacific In Home Care LLC',
    icon: pacificInHomeCareLogo,
    iconLabel: 'PIHC',
    location: 'Remote',
    period: 'Present',
    category: 'engineer',
    inProgress: true,
    focusAreas: ['Microsoft Azure', 'Cloud Security'],
    tags: ['Python', 'Linux/Unix', 'Microsoft Azure', 'Cloud Security'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'SJSU College of Engineering',
    icon: sjsuLogo,
    iconLabel: 'SJSU',
    location: 'San Jose, CA',
    period: 'May 2025 -- Aug. 2025',
    category: 'engineer',
    accomplishments: [
      'Architected a real-time Python and SQLite backend service for monitoring print jobs for 2,000+ users',
      'Ensured 99% uptime for 500+ jobs by automating Pytest checks in GitHub Actions CI/CD pipelines',
      'Reduced memory usage by 65% via Docker consolidation on a bare-metal Linux server',
    ],
    tags: ['Python', 'SQL', 'Docker', 'Linux/Unix', 'Git/GitHub'],
  },
  {
    title: 'Game Developer',
    company: 'Roblox',
    icon: robloxLogo,
    iconLabel: 'ROBLOX',
    location: 'Remote',
    period: 'Aug. 2020 -- Aug. 2023',
    category: 'engineer',
    accomplishments: [
      'Architected an NPC system in LuaU with shared pathfinding, scaling from 100 to 300+ agents under 15ms',
      'Achieved sub-4ms hit registration in a custom FPS system through raycasting and client-side rendering',
      'Authored 100+ DevForum posts with 10+ accepted solutions, strengthening technical communication and debugging',
    ],
    tags: ['LuaU'],
  },
  {
    title: 'Software Developer',
    company: 'Software and Computer Engineering Society (SCE)',
    icon: sceLogo,
    iconLabel: 'SCE',
    location: 'San Jose, CA',
    period: 'Aug. 2024 -- Present',
    category: 'engineer',
    accomplishments: [
      'Developed an inventory management system in Go and React used by 300+ members for snack availability',
      'Implemented auto-generation of welcome images for a Discord bot serving a 3,000-member community',
      'Maintained 99% uptime for an LED LeetCode leaderboard, increasing engagement to 400+ solved problems',
    ],
    tags: ['Go', 'JavaScript', 'React/Next.js'],
  },
  {
    title: 'B.S. Computer Science Student',
    company: 'San Jose State University',
    icon: sjsuLogo,
    iconLabel: 'SJSU',
    location: 'San Jose, CA',
    period: 'Expected Graduation: May 2027',
    category: 'education',
    accomplishments: [
      "GPA: 3.93, 2x President's Scholar Award",
      'Coursework: Data Structures and Algorithms, Operating Systems, Network Security',
      'Focused on systems, cloud, and applied AI through academic and project work',
    ],
    tags: ['C', 'Java'],
  },
  {
    title: 'Peer Mentor',
    company: 'Peer Connections',
    icon: peerConnectionsLogo,
    iconLabel: 'PC',
    location: 'San Jose, CA',
    period: 'Aug. 2025 -- Present',
    category: 'education',
    accomplishments: [
      'Mentored Calculus I workshop students with academic strategies, increasing pass rate by 15%',
      'Directed 5 academic workshops with a 95%+ satisfaction score through strong facilitation',
      'Facilitated 50+ mentoring sessions across 7+ CS/MATH courses',
    ],
    tags: ['C', 'Java'],
  },
  {
    title: 'Lead Instructor',
    company: 'theCoderSchool',
    icon: theCoderSchoolLogo,
    iconLabel: 'TCS',
    location: 'Folsom, CA',
    period: 'Jul. 2025',
    category: 'education',
    accomplishments: [
      'Led a 15-student camp through close collaboration with TAs and parents',
      'Created a 5-game LuaU curriculum adopted as standard training material for future camps',
      'Raised daily quiz scores from 56% to 84% using analogies and a final game gallery walk',
    ],
    tags: ['LuaU'],
  },
]
