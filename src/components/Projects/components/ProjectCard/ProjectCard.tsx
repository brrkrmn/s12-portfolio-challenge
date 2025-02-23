import { Project } from "../../constants";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="w-full tablet:w-[30%] laptop:w-full flex flex-col items-start justify-start gap-4 h-full transition hover:shadow-md p-5 rounded-xl max-w-96 tablet:max-w-full">
      <img className="rounded-lg aspect-video" src={project.image} />
      <h2 className="section-subtitle">{project.title}</h2>
      <p className="section-paragraph">{project.description}</p>
      <ul className="flex items-center justify-start w-full gap-2 mt-auto">
        {project.stack.map((stack, index) => (
          <li
            key={index}
            className="border-small border-main-dark text-main-dark w-20 py-1 px-2 text-xs font-medium rounded-md text-center transition hover:bg-main-dark hover:text-white">
            {stack}
          </li>
        ))}
      </ul>
      <div className="w-full flex items-center justify-between text-main-dark underline">
        {project.links.map(link => (
          <a
            target="_blank"
            href={link.to}
            className="transition hover:text-main-light"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard;