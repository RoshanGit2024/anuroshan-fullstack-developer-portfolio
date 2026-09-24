import styles from './Skills.module.css';

const skillCategories = [
  {
    category: 'Frontend Development',
    skills: [
      'React.js',
      'React Native',
      'Next.js',
      'TypeScript',
      'Redux',
      'Tailwind CSS',
      'Material UI',
      'HTML5',
      'CSS3',
      'JavaScript (ES6)',
      'Bootstrap',
      'JSON',
    ],
    icon: '🎨',
  },
  {
    category: 'Backend & APIs',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT Authentication',
      'Python',
      'Django',
      'Error Handling',
      'Payment Gateway Integration',
    ],
    icon: '⚙️',
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'SQL', 'MySQL'],
    icon: '🗄️',
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'Firebase (Auth, FCM, Analytics)',
      'GitHub Actions',
      'CI/CD Automation',
      'Docker',
      'GitLab',
      'Bitbucket',
    ],
    icon: '☁️',
  },
  {
    category: 'Mobile Engineering',
    skills: [
      'React Native',
      'iOS / Android Releases',
      'Google Play Store',
      'Apple App Store',
      'App Signing',
      'Xcode',
      'Debugger Tools',
    ],
    icon: '📱',
  },
  {
    category: 'Testing & Practices',
    skills: [
      'Jest',
      'React Testing Library',
      'Unit Testing',
      'Git & GitHub Workflows',
      'Agile (2-Week Sprints)',
      'Code Review',
      'SEO Performance',
      'Responsive Design',
    ],
    icon: '🧪',
  },
];

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <h2 className="section-title">Technical Skills</h2>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className={styles.skillCard}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{category.icon}</span>
                <h3>{category.category}</h3>
              </div>
              <div className={styles.tagsList}>
                {category.skills.map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.proficiency}>
          <h3>Core Technical Strengths</h3>
          <div className={styles.proficiencyList}>
            <div className={styles.proficiencyItem}>
              <div className={styles.proficiencyHeader}>
                <span>React.js & React Native</span>
                <span className={styles.percent}>95%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className={styles.proficiencyItem}>
              <div className={styles.proficiencyHeader}>
                <span>Node.js, Express.js & REST APIs</span>
                <span className={styles.percent}>92%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '92%' }}></div>
              </div>
            </div>

            <div className={styles.proficiencyItem}>
              <div className={styles.proficiencyHeader}>
                <span>TypeScript & Next.js</span>
                <span className={styles.percent}>90%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className={styles.proficiencyItem}>
              <div className={styles.proficiencyHeader}>
                <span>Databases (MongoDB, PostgreSQL, SQL)</span>
                <span className={styles.percent}>88%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '88%' }}></div>
              </div>
            </div>

            <div className={styles.proficiencyItem}>
              <div className={styles.proficiencyHeader}>
                <span>CI/CD & Mobile Release (Play Store / App Store)</span>
                <span className={styles.percent}>88%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '88%' }}></div>
              </div>
            </div>

            <div className={styles.proficiencyItem}>
              <div className={styles.proficiencyHeader}>
                <span>Python & Django</span>
                <span className={styles.percent}>78%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
