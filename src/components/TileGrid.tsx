import { ProjectTile } from './ProjectTile'
import type { Project } from '@/data/projects'

export function TileGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project) => (
        <ProjectTile key={project.id} {...project} />
      ))}
    </div>
  )
}
