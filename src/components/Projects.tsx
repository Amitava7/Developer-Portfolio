import './Projects.css'

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
    description: 'A real-time social feed with infinite scroll, likes, comments, and user auth.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/Amitava7/social-feed-nextjs',
    demo: 'https://pulsefeeddemo.netlify.app/login',
    image: '/project-previews/social-feed.png',
  },
  {
    title: 'Telemetry Platform',
    description: 'Distributed telemetry ingestion and alerting service with real-time dashboards.',
    tags: ['NestJS', 'Kafka', 'Redis', 'Datadog', 'Docker'],
    github: 'https://github.com/Amitava7/telemetry-nestjs',
    demo: undefined,
    image: '/project-previews/telemetry.jpg',
  },
]

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

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
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <article className="project-card" key={project.title}>
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
                    <GithubIcon /> Repo
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
        ))}
      </div>
    </section>
  )
}
