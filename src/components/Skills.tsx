import { motion } from 'framer-motion'
import AnimateIn from './AnimateIn'
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
  { name: 'RabbitMQ', icon: '/skill-icons/rabbitmq.svg' },
  { name: 'Always Learning', icon: '/skill-icons/comingSoon.svg' },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <AnimateIn>
        <h2 className="skills-title">Tech Stack</h2>
      </AnimateIn>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            className="skill-card"
            key={skill.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.04 }}
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon" draggable={false} />
            <span className="skill-label">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
