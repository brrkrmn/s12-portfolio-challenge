import { useLangContext } from "../../context/LangContext";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import { getProjects } from "./constants";

const Projects = () => {
  const translations = useLangContext().translations.projects;
  const projects = getProjects(translations);

  return (
    <section id="projects" className="w-full flex flex-col items-center tablet:items-start justify-center gap-6">
      <h2 className="section-title">{translations.title}</h2>
      <div className="w-full flex flex-col tablet:flex-row items-center justify-between laptop:gap-14">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects