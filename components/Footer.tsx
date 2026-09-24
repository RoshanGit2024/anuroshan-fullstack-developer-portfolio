import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/RoshanGit2024', icon: 'GH' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anuroshanb89', icon: 'LI' },
    { name: 'Email', url: 'mailto:anuroshanb@gmail.com', icon: '✉️' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Anuroshan</h3>
            <p>Software Developer — MERN Stack & Mobile Developer building scalable applications.</p>
            <div className={styles.social}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={styles.socialLink}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Connect</h4>
            <p>
              <strong>Email:</strong>
              <br />
              <a href="mailto:anuroshanb@gmail.com">anuroshanb@gmail.com</a>
            </p>
            <p>
              <strong>Phone:</strong>
              <br />
              <a href="tel:+919150149825">+91 91501 49825</a>
            </p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>
            &copy; {currentYear} Anuroshan B. All rights reserved. | Built with{' '}
            <span className={styles.heart}>♥</span> using Next.js
          </p>

        </div>
      </div>
    </footer>
  );
}
