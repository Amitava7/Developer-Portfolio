import './Skills.css'

const skills = [
  { name: 'TypeScript', icon: '/skill-icons/typescript.svg' },
  { name: 'React', icon: '/skill-icons/react.svg' },
  { name: 'Node.js', icon: '/skill-icons/nodejs.svg' },
  { name: 'NestJS', icon: '/skill-icons/nestjs.svg' },
  { name: 'GraphQL', icon: '/skill-icons/graphql.svg' },
  { name: 'PostgreSQL', icon: '/skill-icons/postgresql.svg' },
  { name: 'MongoDB', icon: '/skill-icons/mongodb.svg' },
  { name: 'Redis', icon: '/skill-icons/redis.svg' },
  { name: 'Docker', icon: '/skill-icons/docker.svg' },
  { name: 'AWS', icon: '/skill-icons/aws.svg' },
  { name: 'Kafka', icon: '/skill-icons/kafka.svg' },
  { name: 'GitHub Actions', icon: '/skill-icons/github-actions.svg' },
  { name: 'Jest', icon: '/skill-icons/jest.svg' },
  { name: 'Datadog', icon: '/skill-icons/datadog.svg' },
  { name: 'Always Learning', icon: '/skill-icons/comingSoon.svg' },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">Tech Stack</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div className="skill-card" key={skill.name}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" draggable={false} />
            <span className="skill-label">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
