import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';

interface Project {
  id: number;
  title: string;
  organization: string;
  category: string;
  description: string;
  highlights: string[];
  metricTag: string;
  technologies: string[];
  image: string;
  link: string;
}

const organizationProjects: Project[] = [
  {
    id: 1,
    title: 'Healthcare & Wellness Management System',
    organization: 'LYFnGO Technologies',
    category: 'Web & Mobile Platform',
    description:
      'Comprehensive enterprise healthcare and wellness management system powering synchronized web and mobile modules with automated clinical workflows.',
    highlights: [
      'Developed and maintained healthcare and wellness management modules for web and mobile platforms using React.js and React Native.',
      'Integrated RESTful APIs with Node.js backend, PostgreSQL, and implemented secure authentication, appointment scheduling, and user management features.',
      'Contributed to AI agent implementation to automate healthcare workflows and enhance user interactions within the application.',
      'Developed mobile build automation features to simplify Android and iOS build generation, configuration, and deployment processes.',
      'Collaborated with cross-functional teams to deliver new features, resolve production issues, and optimize application performance.',
    ],
    metricTag: '🤖 AI Workflow Automation & Multi-Platform Sync',
    technologies: ['React.js', 'React Native', 'Node.js', 'PostgreSQL', 'Firebase', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    link: '#contact',
  },
  {
    id: 2,
    title: 'Ayurveda Mobile Application',
    organization: 'LYFnGO Technologies',
    category: 'Cross-Platform Mobile App',
    description:
      'High-performance Ayurvedic consultation and wellness mobile application on iOS and Android with customized treatment plans, tele-consultation, and automated releases.',
    highlights: [
      'Automated CI/CD for a cross-platform React Native app (iOS/Android) with multiple flavor builds and Firebase Functions, reducing deployment time by 45%.',
      'Built 25+ reusable React Native components; managed state with Redux; built 40+ screens across 10+ modules (appointments, consultations, biometric auth).',
      'Implemented Firebase Cloud Messaging achieving 65% open rate and 35% CTR.',
      'Optimized bundle by 52%, reducing app load time from 8.2s down to 3.9s for optimal user experience.',
    ],
    metricTag: '⚡ 45% CI/CD Reduction • 52% Bundle Cut',
    technologies: ['React Native', 'Node.js', 'Redux', 'Firebase', 'FCM', 'REST API', 'CI/CD'],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    link: '#contact',
  },
  {
    id: 3,
    title: 'Inkqubee B2B Enterprise Platform',
    organization: 'Inkqubee',
    category: 'Enterprise Web Application',
    description:
      'Modular B2B web application facilitating vendor relations, transactional workflows, and real-time operations designed with clean architecture principles.',
    highlights: [
      'Designed and developed web applications using React.js, JavaScript, HTML, and CSS.',
      'Collaborated with backend developers to integrate RESTful APIs into frontend applications.',
      'Planned and implemented responsive, user-friendly UI designs based on project requirements.',
      'Developed reusable React components to improve code maintainability, consistency, and unit test validation.',
      'Worked closely with cross-functional teams in an Agile development environment with rigorous code reviews.',
    ],
    metricTag: '🏢 Enterprise B2B Architecture & Modular UI',
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git', 'Agile'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    link: '#contact',
  },
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className="section-title">Organization Projects</h2>
        <p className={styles.sectionSubtitle}>
          Production applications engineered across healthcare, mobile wellness, and enterprise platforms
          with measurable business impact.
        </p>

        {/* Impact & Performance Metrics Ribbon */}
        <div className={styles.metricsRibbon}>
          <div className={styles.metricCard}>
            <span className={styles.metricIcon}>⚡</span>
            <div>
              <div className={styles.metricValue}>
                <span>45</span>%
              </div>
              <div className={styles.metricLabel}>Faster CI/CD Deployments</div>
            </div>
          </div>

          <div className={styles.metricCard}>
            <span className={styles.metricIcon}>🚀</span>
            <div>
              <div className={styles.metricValue}>
                <span>52</span>%
              </div>
              <div className={styles.metricLabel}>Bundle Optimization (8.2s → 3.9s)</div>
            </div>
          </div>

          <div className={styles.metricCard}>
            <span className={styles.metricIcon}>📱</span>
            <div>
              <div className={styles.metricValue}>
                <span>40</span>+
              </div>
              <div className={styles.metricLabel}>Screens Across 10+ Modules</div>
            </div>
          </div>

          <div className={styles.metricCard}>
            <span className={styles.metricIcon}>🔔</span>
            <div>
              <div className={styles.metricValue}>
                <span>65</span>%
              </div>
              <div className={styles.metricLabel}>FCM Open Rate (35% CTR)</div>
            </div>
          </div>
        </div>

        {/* Key Achievement Banner */}
        <div className={styles.achievementBanner}>
          <div className={styles.achievementIcon}>🏆</div>
          <div>
            <div className={styles.achievementTitle}>
              Key Achievement: <span>Google Play Store 16 KB Page-Size Compliance</span>
            </div>
            <p className={styles.achievementDesc}>
              Successfully diagnosed and resolved 16 KB memory page-size compatibility issues across 2 Android
              production applications, ensuring strict compliance with upcoming Google Play Store requirements
              and uncompromised stability.
            </p>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className={styles.projectsGrid}>
          {organizationProjects.map((project, index) => (
            <div
              key={project.id}
              className={styles.projectCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  quality={80}
                  className={styles.projectImage}
                />
                <div className={styles.overlay}>
                  <p className={styles.overlayText}>{project.organization}</p>
                  <Link href="#contact" className="btn btn-primary">
                    Inquire About Project
                  </Link>
                </div>
              </div>

              <div className={styles.projectContent}>
                <div className={styles.badgeRow}>
                  <span className={styles.orgBadge}>🏢 {project.organization}</span>
                  <span className={styles.badge}>{project.category}</span>
                </div>

                <h3>{project.title}</h3>
                <p className={styles.projectSummary}>{project.description}</p>

                <div className={styles.metricsPill}>
                  <span>{project.metricTag}</span>
                </div>

                <ul className={styles.highlightsList}>
                  {project.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewMore}>
          <p>Want to see code samples, architectures, or discuss project implementations?</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="https://www.linkedin.com/in/anuroshanb89"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Connect on LinkedIn
            </Link>
            <Link href="#contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
