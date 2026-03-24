import AnimateIn from './AnimateIn'
import './Projects.css'
import { GitHubIcon, ExternalIcon } from './icons'

interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  image?: string
}

const projects: Project[] = [
  {
    title: 'Social Media Feed',
    description: 'A real-time social feed with infinite scroll, picture uploads, likes, comments, and user auth.',
    tags: ['Next.js', 'Cloudinary', 'MongoDb', 'Redis'],
    github: 'https://github.com/Amitava7/socialFeed-nextjs',
    demo: 'https://pulsefeeddemo.netlify.app/login',
    image: '/project-previews/socialFeed.png',
  },
  {
    title: 'Gym Buddy',
    description: "A mobile app to track your excersize progress.",
    tags: ['React Native', 'Andriod', 'iOS', 'Typescript'],
    github: 'https://github.com/Amitava7/GymBuddy',
    demo: 'https://appetize.io/app/b_pkrdydr7cyqf5skjcth7lbz2re',
    image: '/project-previews/gymBuddy.png',
  },
  {
    title: 'LogStream',
    description: 'Real-time log aggregation, alerting, and visualization platform built with RabbitMQ message queuing.',
    tags: ['ReactJs', 'NodeJS', 'Postgres', 'RabbitMQ'],
    github: 'https://github.com/Amitava7/LogStream',
    demo: undefined,
    image: '/project-previews/logStream.png',
  },
]


function ImagePlaceholder({ title }: { title: string }) {
  return (
    <div className="project-image-placeholder" aria-hidden>
      <span>{title[0]}</span>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <AnimateIn>
        <h2 className="projects-title">Projects</h2>
      </AnimateIn>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <AnimateIn delay={i * 0.12} className="project-card-wrapper" key={project.title}>
            <article className="project-card">
              <div className="project-preview">
                {project.image
                  ? <img src={project.image} alt={project.title} className="project-img" draggable={false} />
                  : <ImagePlaceholder title={project.title} />
                }
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`${project.title} GitHub`}>
                      <GitHubIcon /> Repo
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link project-link--demo" aria-label={`${project.title} live demo`}>
                      <ExternalIcon /> Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
