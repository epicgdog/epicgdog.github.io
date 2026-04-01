import { projects } from '../data/projects'
import agentclipzImage from '../assets/agentclipz.jpg'
import studyguardImage from '../assets/studyguard.png'
import scheduleAIImage from '../assets/scheduleai.png'
import evincibleImage from '../assets/evincible.png'
import openEnvImage from '../assets/openenv.png'
import liturgyDisplayImage from '../assets/liturgydisplay.png'
import hotspotImage from '../assets/hotspot.jpg'
import sowAgentImage from '../assets/sowagent.JPG'
import syllAIImage from '../assets/syllai.JPG'

const projectImages: Record<string, string> = {
  AgentClipz: agentclipzImage,
  StudyGuard: studyguardImage,
  'Schedule-AI': scheduleAIImage,
  EVIncible: evincibleImage,
  'OpenENV Hackathon': openEnvImage,
  'Liturgy.Display': liturgyDisplayImage,
  HotSpot: hotspotImage,
  'sow-agent': sowAgentImage,
  'Syll.AI': syllAIImage,
}

export default function AllProjects() {
  return (
    <section className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-3 text-4xl font-bold text-stone-900">All Projects</h1>
        <p className="mb-10 text-stone-600">Comprehensive project list including hackathons, AI systems, and engineering tools.</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-[#d8cebc] bg-[#fffaf1] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c7bba7] hover:shadow-lg"
            >
              {projectImages[project.name] ? (
                <div className="mb-4 overflow-hidden rounded-lg border border-[#c7bba7] bg-[#f3e8d5]">
                  <img
                    src={projectImages[project.name]}
                    alt={`${project.name} project`}
                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              ) : (
                <div className="mb-4 flex aspect-video items-center justify-center rounded-lg border border-dashed border-[#c7bba7] bg-[#f3e8d5] text-sm font-medium text-stone-600">
                  {project.name} image placeholder
                </div>
              )}
              <h3 className="mb-2 text-xl font-semibold text-stone-900 transition-colors group-hover:text-amber-700">{project.name}</h3>
              <p className="mb-4 text-sm text-stone-600">{project.tech}</p>
              <ul className="space-y-2">
                {project.accomplishments.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
                    <span className="mt-1 shrink-0 text-amber-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {(project.tags ?? []).length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {(project.tags ?? []).map((tag) => (
                    <span key={tag} className="rounded-full bg-[#f0e3cf] px-3 py-1 text-xs font-medium text-stone-700">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
