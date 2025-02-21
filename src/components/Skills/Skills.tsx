import { skills } from "./constants"

const Skills = () => {
  return (
    <section id="skills" className="w-full flex flex-col items-center tablet:items-start justify-center gap-6">
      <h3 className="text-4xl text-foreground font-semibold">
        Skills
      </h3>
      <div className="flex flex-col tablet:flex-row items-center justify-center gap-10 tablet:gap-20">
        {skills.map(skill => (
          <div className="flex flex-col items-start justify-center gap-4 w-full max-w-72 tablet:max-w-full">
            <h2 className="text-main text-2xl font-medium">{skill.title}</h2>
            <p className="text-foreground-secondary text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills