import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: 'Anuroshan B | Software Developer — MERN Stack & Mobile Developer',
  description: 'Software Developer with 3.5 years of experience in designing, developing, and maintaining scalable web and mobile applications using React, Next.js, React Native, Node.js, Express.js, MongoDB, and PostgreSQL.',
  keywords: [
    'Software Developer',
    'MERN Stack Developer',
    'React Developer',
    'Next.js Developer',
    'React Native Developer',
    'Node.js Developer',
    'TypeScript',
    'PostgreSQL',
    'MongoDB',
    'Python',
    'Django',
    'Mobile Developer',
    'CI/CD',
    'Coimbatore Developer',
    'Pollachi Developer',
  ],
  authors: [{ name: 'Anuroshan B', url: 'https://anuroshan.dev' }],
  creator: 'Anuroshan B',
  publisher: 'Anuroshan B',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anuroshan.dev',
    title: 'Anuroshan B | Software Developer — MERN Stack Developer',
    description: 'Software Developer with 3.5 years of experience building scalable web and mobile applications with React, Next.js, React Native, and Node.js.',
    siteName: 'Anuroshan Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Anuroshan B - Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anuroshan B | Software Developer',
    description: 'Software Developer with 3.5 years of experience in React, Next.js, React Native, and Node.js',
    creator: '@anuroshan',
  },
  alternates: {
    canonical: 'https://anuroshan.dev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Anuroshan B',
              url: 'https://anuroshan.dev',
              email: 'anuroshanb@gmail.com',
              telephone: '+91-9150149825',
              jobTitle: 'Software Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'LYFnGO Technologies',
              },
              knowsAbout: [
                'React.js',
                'Next.js',
                'React Native',
                'TypeScript',
                'Node.js',
                'Express.js',
                'JavaScript',
                'Python',
                'Django',
                'MongoDB',
                'PostgreSQL',
                'Redux',
                'Firebase',
                'CI/CD',
              ],
              sameAs: [
                'https://github.com/RoshanGit2024',
                'https://www.linkedin.com/in/anuroshanb89',
              ],
              image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop',
            }),
          }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
