# Anuroshan's Portfolio Website

A modern, SEO-optimized portfolio website built with Next.js, React, and TypeScript. Showcasing Full Stack development skills and projects.

## Features

✨ **Modern Design**
- Dark mode with vibrant accent colors
- Smooth animations and transitions
- Fully responsive design (mobile, tablet, desktop)

🚀 **Performance Optimized**
- Next.js 14 with App Router
- Optimized images using Next/Image
- Lazy loading components
- Code splitting and minification

🔍 **SEO Optimized**
- Meta tags and Open Graph support
- Structured data (JSON-LD)
- Sitemap and robots.txt
- Dynamic metadata for all pages
- Semantic HTML

📱 **Responsive & Accessible**
- Mobile-first design approach
- WCAG 2.1 accessibility standards
- Keyboard navigation support
- Focus states and ARIA labels

⚡ **Features**
- Hero section with call-to-action
- About section with highlights
- Skills with proficiency levels
- Projects showcase with filtering
- Work experience timeline
- Contact form
- Social media links
- Smooth scrolling navigation

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Fonts**: Inter from Google Fonts
- **Images**: Unsplash API
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anuroshan/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
anuroshan-portfolio/
├── app/
│   ├── page.tsx          # Main page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Navigation component
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Projects.tsx      # Projects showcase
│   ├── Experience.tsx    # Work experience
│   ├── Contact.tsx       # Contact form
│   ├── Footer.tsx        # Footer
│   └── *.module.css      # Component styles
├── public/
│   ├── robots.txt        # SEO robots file
│   ├── sitemap.xml       # XML sitemap
│   └── favicon.ico       # Site favicon
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Customization

### Update Personal Information
1. Edit `app/layout.tsx` - Update metadata, name, and contact info
2. Edit `components/Hero.tsx` - Update hero section content
3. Edit `components/Contact.tsx` - Update contact methods
4. Edit `components/Footer.tsx` - Update footer links and info

### Update Content
- **Projects**: Edit `components/Projects.tsx`
- **Experience**: Edit `components/Experience.tsx`
- **Skills**: Edit `components/Skills.tsx`
- **About**: Edit `components/About.tsx`

### Colors & Styling
All colors are defined in `app/globals.css` as CSS variables:
```css
:root {
  --primary-dark: #0f172a;
  --accent: #00d9ff;
  --accent-alt: #3b82f6;
  /* ... more variables ... */
}
```

## Building for Production

```bash
npm run build
npm start
```

## SEO Optimization

This portfolio includes several SEO optimizations:

1. **Meta Tags**: Properly configured title, description, and keywords
2. **Open Graph**: Social media preview optimization
3. **Twitter Card**: Custom Twitter sharing
4. **Structured Data**: JSON-LD Person schema
5. **Sitemap**: XML sitemap for search engines
6. **Robots**: Proper robots.txt configuration
7. **Canonical URLs**: Prevents duplicate content issues
8. **Mobile Friendly**: Responsive design and viewport configuration

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Configure environment variables (if needed)
5. Deploy!

```bash
npm run build
vercel
```

### Deploy to Other Platforms

The project can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Heroku
- AWS Amplify
- DigitalOcean

## Performance Metrics

- ⚡ Lighthouse Score: 95+
- 🚀 Core Web Vitals: Optimized
- 📱 Mobile-friendly: Yes
- 🔍 SEO Score: Excellent

## License

This project is open source and available under the MIT License.

## Connect

- 📧 Email: anuroshanb@gmail.com
- 📱 Phone: +91 91501 49825
- 🔗 LinkedIn: [linkedin.com/in/anuroshan](https://linkedin.com/in/anuroshan)
- 🐙 GitHub: [github.com/anuroshan](https://github.com/anuroshan)

## Support

If you find this portfolio template helpful, please give it a star! ⭐

---

Made with ♥ by Anuroshan B
