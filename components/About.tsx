import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className="section-title">About Me</h2>
            <p className={styles.intro}>
              Software Developer with <strong>4 years of experience</strong> in designing, developing, and
              maintaining scalable web and mobile applications using the MERN Stack, React Native, and modern
              cloud technologies.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <div className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline>
                  </svg>
                </div>
                <div>
                  <h3>Full Stack & MERN Development</h3>
                  <p>
                    Designing RESTful APIs with JWT authentication, building reusable components, and managing
                    SQL & NoSQL databases (MongoDB, PostgreSQL, MySQL).
                  </p>
                </div>
              </div>

              <div className={styles.highlight}>
                <div className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <h3>Mobile App Engineering</h3>
                  <p>
                    Cross-platform mobile applications with React Native, app signing, store deployment (Google Play &
                    Apple App Store), and FCM notifications.
                  </p>
                </div>
              </div>

              <div className={styles.highlight}>
                <div className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M2 12h20"></path>
                    <circle cx="12" cy="12" r="8"></circle>
                  </svg>
                </div>
                <div>
                  <h3>DevOps & Performance</h3>
                  <p>
                    Automated CI/CD pipelines cutting deployment time by 45%, bundle optimization cutting load times by
                    52%, and strict 16 KB memory compliance.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.bio}>
              <p>
                Over the course of 4 years, I have engineered mission-critical web and mobile solutions for
                enterprises including <strong>LYFnGO Technologies</strong>, <strong>Inkqubee</strong>,{' '}
                <strong>Ijona Technologies</strong>, and <strong>Locuz</strong>.
              </p>
              <p>
                I am deeply passionate about writing clean, maintainable code, adhering to Agile sprint methodologies,
                conducting rigorous code reviews, and delivering high-quality software solutions that exceed user
                expectations.
              </p>
            </div>
          </div>

          <div className={styles.sideColumn}>
            <div className={styles.imageContent}>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                alt="Software Developer Workspace"
                width={400}
                height={340}
                quality={85}
                className={styles.image}
              />
            </div>

            <div className={styles.eduCard}>
              <div className={styles.eduHeader}>
                <span style={{ fontSize: '1.4rem' }}>🎓</span>
                <h3>Education & Certification</h3>
              </div>

              <div className={styles.eduItem}>
                <div className={styles.degree}>Bachelor of Computer Applications (BCA)</div>
                <div className={styles.institution}>Sree Saraswathi Thyagaraja College</div>
                <div className={styles.duration}>📍 Pollachi, Tamil Nadu • 2019 – 2022</div>
              </div>

              <div className={styles.eduItem}>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.35rem' }}>
                  Professional Certification:
                </div>
                <span className={styles.certBadge}>✓ MERN Stack Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
