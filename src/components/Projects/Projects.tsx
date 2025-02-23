import ProjectCard from "./components/ProjectCard/ProjectCard"
import { projects } from "./constants"

const Projects = () => {
  return (
    <section id="projects" className="w-full flex flex-col items-center tablet:items-start justify-center gap-6">
      <h2 className="section-title">Projects</h2>
      <div className="w-full flex flex-col tablet:flex-row items-center justify-between laptop:gap-14">
        {projects.map(project => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects