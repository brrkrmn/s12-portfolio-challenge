import { skills } from "./constants"

const Skills = () => {
  return (
    <section id="skills" className="w-full flex flex-col items-center tablet:items-start justify-center gap-6">
      <h3 className="section-title">
        Skills
      </h3>
      <div className="flex flex-col tablet:flex-row items-center justify-center gap-10 tablet:gap-20">
        {skills.map(skill => (
          <div className="flex flex-col items-start justify-center gap-4 w-full max-w-96 tablet:max-w-full">
            <h2 className="section-subtitle">{skill.title}</h2>
            <p className="section-paragraph">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills