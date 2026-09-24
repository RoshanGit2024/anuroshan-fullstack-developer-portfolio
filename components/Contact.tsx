'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import styles from './Contact.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real application, send to your backend
      console.log('Form data:', formData);

      setMessage('Thank you for your message! I will get back to you soon.');
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactMethods = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'anuroshanb@gmail.com',
      link: 'mailto:anuroshanb@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 91501 49825',
      link: 'tel:+919150149825',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Pollachi / Coimbatore, Tamil Nadu',
      link: '#',
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'linkedin.com/in/anuroshanb89',
      link: 'https://www.linkedin.com/in/anuroshanb89',
    },
  ];

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className="section-title">Get In Touch</h2>

        <p className={styles.intro}>
          I'm always interested in hearing about new projects and opportunities. Whether you have a question
          or just want to say hi, feel free to reach out!
        </p>

        <div className={styles.content}>
          <div className={styles.contactMethods}>
            <h3>Contact Information</h3>

            <div className={styles.methodsList}>
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={styles.methodItem}
                >
                  <span className={styles.methodIcon}>{method.icon}</span>
                  <div className={styles.methodContent}>
                    <p className={styles.methodLabel}>{method.label}</p>
                    <p className={styles.methodValue}>{method.value}</p>
                  </div>
                  <span className={styles.arrow}>→</span>
                </a>
              ))}
            </div>

            <div className={styles.availability}>
              <div className={styles.statusDot}></div>
              <div>
                <p className={styles.availabilityLabel}>Availability</p>
                <p className={styles.availabilityText}>Open to new projects and opportunities</p>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project inquiry"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project..."
              />
            </div>

            {message && (
              <div className={`${styles.alert} ${styles[status]}`} role="alert">
                {message}
              </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
