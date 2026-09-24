import styles from './Experience.module.css';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'LYFnGO Technologies',
    location: 'Coimbatore, Tamil Nadu',
    duration: 'Apr 2025 – Present',
    type: 'Full-time',
    description: [
      'Developed scalable web applications using React.js, TypeScript, Next.js, Node.js, Express.js, Python, Django and MongoDB.',
      'Designed and implemented RESTful APIs with JWT-based authentication.',
      'Built reusable React components, improving code maintainability and development efficiency.',
      'Integrated third-party APIs, including payment gateways and notification services.',
      'Published and maintained production releases on both Google Play Store and Apple App Store, managing build generation, app signing, versioning, and deployment.',
      'Managed source code using Git and GitHub with structured feature branching and pull request workflows.',
      'Reduced deployment time by 45% by automating CI/CD workflows for Android mobile app and web application.',
      'Fixed production issues, optimized application performance, and improved application security.',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Next.js',
      'Node.js',
      'Express.js',
      'Python',
      'Django',
      'MongoDB',
      'React Native',
      'Firebase',
      'CI/CD',
    ],
  },
  {
    id: 2,
    title: 'Junior Software Engineer',
    company: 'Inkqubee',
    location: 'Bengaluru, Karnataka',
    duration: 'Sep 2024 – Feb 2025',
    type: 'Full-time',
    description: [
      'Designed and developed web applications using React.js, JavaScript, HTML, and CSS.',
      'Collaborated with backend developers to integrate RESTful APIs into frontend applications.',
      'Planned and implemented responsive, user-friendly UI designs based on project requirements.',
      'Developed reusable React components to improve code maintainability and consistency.',
      'Performed unit testing, debugging, and feature validation before production deployment.',
      'Conducted code reviews and followed coding standards to ensure clean and scalable code.',
      'Worked closely with cross-functional teams in an Agile development environment.',
      'Used Git for version control and collaborated using feature branches and pull requests.',
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git', 'Agile'],
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Ijona Technologies',
    location: 'Bengaluru, Karnataka',
    duration: 'Apr 2024 – Aug 2024',
    type: 'Contract',
    description: [
      'Developed reusable React.js components and frontend libraries to improve development efficiency and maintainability.',
      'Built responsive and user-friendly web interfaces compatible across modern browsers and devices.',
      'Optimized application performance by improving component rendering and frontend architecture.',
      'Maintained clean, modular, and reusable code following industry best practices.',
    ],
    technologies: ['React.js', 'JavaScript', 'CSS3', 'Component Libraries', 'Frontend Architecture'],
  },
  {
    id: 4,
    title: 'Software Developer Trainee (Contractor)',
    company: 'Locuz',
    location: 'Bengaluru, Karnataka',
    duration: 'Sep 2022 – Nov 2023',
    type: 'Contract',
    description: [
      'Developed and maintained web applications using React.js, delivering responsive and interactive user interfaces.',
      'Collaborated with backend developers to integrate RESTful APIs into frontend applications.',
      'Gained hands-on experience with Node.js, Express.js, and MongoDB while supporting full-stack development activities.',
      'Assisted in debugging, testing, and enhancing application features to improve functionality and performance.',
      'Participated in Agile development processes, including sprint planning, daily stand-ups, and code reviews.',
      'Used Git for version control and collaborated with team members through feature branches and pull requests.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git'],
  },
];

export default function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <h2 className="section-title">Work Experience</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <div className={styles.dot}></div>
                {index !== experiences.length - 1 && <div className={styles.line}></div>}
              </div>

              <div className={styles.timelineContent}>
                <div className={styles.card}>
                  <div className={styles.header}>
                    <div>
                      <h3>{exp.title}</h3>
                      <p className={styles.company}>{exp.company}</p>
                    </div>
                    <span
                      className={`${styles.badge} ${
                        exp.type.toLowerCase().includes('full')
                          ? styles.fulltime
                          : styles.contract
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <div className={styles.meta}>
                    <span>📍 {exp.location}</span>
                    <span>📅 {exp.duration}</span>
                  </div>

                  <ul className={styles.description}>
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <div className={styles.technologies}>
                    {exp.technologies.map((tech) => (
                      <span key={tech} className={styles.tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
