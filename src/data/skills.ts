import { experiences } from './experience'
import { projects } from './projects'

export const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'Go', 'C', 'Java', 'SQL', 'LuaU', 'JavaScript', 'HTML/CSS'],
  },
  {
    label: 'Frameworks/Libraries',
    items: ['FastAPI', 'LangChain', 'RAG', 'OpenAI API', 'OpenCV', 'SQLAlchemy', 'React/Next.js'],
  },
  {
    label: 'Developer Tools',
    items: ['Linux/Unix', 'Git/GitHub', 'Claude Code', 'MCP', 'Docker', 'Groq', 'AWS Bedrock'],
  },
]

export const marqueeItems = skillGroups.flatMap((group) => group.items)

const educationMappedSkills = new Set(['C', 'Java'])

export function getSkillSources(skill: string): string[] {
  const fromExperience = experiences
    .filter((item) => (item.tags ?? []).includes(skill))
    .map((item) => `${item.title} @ ${item.company}`)

  const fromProjects = projects
    .filter((item) => (item.tags ?? []).includes(skill))
    .map((item) => item.name)

  const sources = [...fromExperience, ...fromProjects]

  if (sources.length > 0) {
    return sources
  }

  if (educationMappedSkills.has(skill)) {
    return ['SJSU']
  }

  return ['SJSU']
}
