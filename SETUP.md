# Portfolio Setup Guide

## Quick Start (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio live!

---

## Configuration

### Update Your Information

#### Step 1: Edit `app/layout.tsx`
Replace the following with your information:
- `title`: Your portfolio title
- `description`: Brief description
- `keywords`: Relevant keywords
- `openGraph.url`: Your domain
- `openGraph.images`: Your image URL
- In the JSON-LD section:
  - `name`: Your full name
  - `email`: Your email
  - `telephone`: Your phone
  - `jobTitle`: Your job title
  - `sameAs`: Your social media links

#### Step 2: Edit Hero Section (`components/Hero.tsx`)
- Update the title and subtitle
- Change the description
- Update statistics (years, projects, technologies)
- Update social media links

#### Step 3: Edit About Section (`components/About.tsx`)
- Update the intro text
- Modify highlights to match your experience
- Update bio content

#### Step 4: Edit Skills (`components/Skills.tsx`)
Update skill categories and proficiency levels according to your expertise.

#### Step 5: Edit Projects (`components/Projects.tsx`)
Update the `projects` array with your own projects:
```typescript
{
  id: 1,
  title: 'Your Project Title',
  description: 'Project description',
  technologies: ['Tech1', 'Tech2'],
  image: 'https://images.unsplash.com/...', // or your own image
  link: 'https://github.com/...',
  category: 'Web App',
}
```

#### Step 6: Edit Experience (`components/Experience.tsx`)
Update the `experiences` array with your work history.

#### Step 7: Edit Contact (`components/Contact.tsx`)
- Update contact methods (email, phone, location)
- Configure form submission handler

#### Step 8: Edit Footer (`components/Footer.tsx`)
- Update social media links
- Modify footer content

### Update Images

All images are from Unsplash API. You can:

1. **Use different random images**: Update the image URLs
2. **Use your own images**: Upload to your server and update URLs
3. **Keep current images**: They're already optimized

Example: Replace image URL in Hero section
```tsx
<Image
  src="YOUR_IMAGE_URL_HERE"
  alt="Description"
  width={400}
  height={400}
/>
```

### Update Colors & Styling

Edit `app/globals.css` to customize colors:

```css
:root {
  --primary-dark: #0f172a;      /* Main background */
  --accent: #00d9ff;             /* Primary accent - cyan */
  --accent-alt: #3b82f6;         /* Secondary accent - blue */
  --text-primary: #f1f5f9;       /* Main text color */
  --text-secondary: #cbd5e1;     /* Secondary text */
  --text-muted: #94a3b8;         /* Muted text */
  --border: #1e293b;             /* Border color */
}
```

---

## Customization Guide

### Add New Sections

1. Create new component: `components/MySection.tsx`
2. Create styles: `components/MySection.module.css`
3. Import in `app/page.tsx`
4. Add to navigation if needed

### Modify Component Styles

All component styles use CSS Modules for scoping. Edit `.module.css` files:

```css
.myClass {
  color: var(--accent);
  transition: all 0.3s ease;
}
```

### Update Navigation Links

Edit `components/Navigation.tsx` `navLinks` array:

```tsx
const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];
```

---

## SEO Optimization

### Verify SEO Setup

1. Check `app/layout.tsx` for metadata
2. Verify `public/robots.txt` exists
3. Verify `public/sitemap.xml` exists
4. Test Open Graph meta tags

### Test SEO

Use these tools:
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Meta Tags Debugger](https://metatags.io/)

### Add Analytics (Optional)

1. Create Google Analytics account
2. Get your GA ID
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=your_ga_id_here
   ```
4. Implement analytics script

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

### Deploy to Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy!

### Deploy to Other Platforms

Ensure your platform supports:
- Node.js 18+
- Environment variables
- Static file serving

Build command: `npm run build`
Start command: `npm start`

---

## Environment Variables

Create `.env.local` file:

```bash
NEXT_PUBLIC_DOMAIN=https://yourdomain.com
```

### Optional Variables

```bash
# Email Service (for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Other Services
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

---

## Contact Form Setup

### Option 1: EmailJS (Recommended)

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for free account
3. Create email service
4. Add template
5. Get your IDs
6. Add to `.env.local`
7. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
8. Update `Contact.tsx` with EmailJS integration

### Option 2: Backend API

Create your own backend endpoint and update the form submission handler.

### Option 3: Third-party Services

- Formspree
- Basin
- Getform
- Webhook services

---

## Performance Optimization

### Already Optimized For:

✅ Image optimization (Next/Image)
✅ Code splitting
✅ CSS modules
✅ Lazy loading
✅ Responsive images
✅ Font optimization

### Further Optimization:

1. Enable compression: `vercel.json`
2. Add caching headers
3. Minify CSS/JS
4. Use CDN for images
5. Implement service workers

---

## Troubleshooting

### Port 3000 Already in Use

```bash
npm run dev -- -p 3001
```

### Images Not Loading

1. Check image URL is accessible
2. Verify `next.config.js` has correct domains
3. Check browser console for CORS errors

### Styles Not Applied

1. Ensure CSS Module import is correct
2. Check for conflicting global styles
3. Verify CSS variable names

### Build Errors

```bash
npm cache clean --force
rm -rf .next node_modules
npm install
npm run build
```

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [SEO Best Practices](https://developers.google.com/search)

---

## Support & Questions

If you have questions or need help:

1. Check the [Next.js Docs](https://nextjs.org/docs)
2. Review the project's README.md
3. Check component comments
4. Test in development mode

---

Happy coding! 🚀

If this portfolio template was helpful, please consider sharing it or giving it a star on GitHub!
