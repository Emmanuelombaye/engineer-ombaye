# Engineer Ombaye - Portfolio Website

Modern, professional portfolio website for Emmanuel Ombaye Okari - Computer Scientist, Full-Stack Developer, and AI & Automation Engineer.

## 🚀 Features

- **Modern React + TypeScript + Vite** setup
- **Dark/Light Mode** toggle with system preference detection
- **Responsive Design** - Mobile-first approach
- **40+ Projects** with filtering capabilities
- **Comprehensive Skills Sections** - 16 skill categories
- **WordPress Services** - Dedicated section
- **Contact Form** - Ready for integration
- **GitHub Integration** - Social proof and stats
- **Clean, Maintainable Code** - Well-commented and organized

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header/         # Navigation header with theme toggle
│   ├── Hero/           # Hero section with CTA buttons
│   ├── Skills/         # Skills and expertise sections
│   ├── Services/       # Freelance services
│   ├── WordPress/      # WordPress services section
│   ├── Projects/       # Filterable projects portfolio
│   ├── Testimonials/   # Client testimonials and GitHub stats
│   ├── Contact/        # Contact form and information
│   └── Footer/         # Footer with social links
├── contexts/           # React contexts
│   └── ThemeContext.tsx    # Theme management (dark/light)
├── data/               # Data files
│   ├── personalInfo.ts     # Personal information
│   ├── skillsData.ts       # Skills and categories
│   └── projectsData.ts     # Projects portfolio data
├── App.tsx             # Main app component
├── main.tsx            # React entry point
└── index.css           # Global styles with Tailwind
```

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ⚙️ Configuration

### Personal Information

Edit `src/data/personalInfo.ts` to update:
- Name, profession, education
- Contact information (email, phone)
- GitHub profile
- Value proposition

### Skills

Edit `src/data/skillsData.ts` to:
- Add/remove skills in each category
- Update proficiency levels
- Modify freelancing skill paths

### Projects

Edit `src/data/projectsData.ts` to:
- Add/remove projects
- Update project details
- Change categories and status
- Update GitHub links

### Theme

The theme system is managed in `src/contexts/ThemeContext.tsx`. It automatically:
- Saves theme preference to localStorage
- Detects system preference on first visit
- Provides toggle functionality

## 🎨 Customization

### Colors

Tailwind CSS is configured in `tailwind.config.js`. You can customize:
- Primary colors (blue, purple gradients)
- Dark mode colors
- Component-specific colors

### Styling

- Global styles: `src/index.css`
- Component styles: Inline Tailwind classes
- Custom animations: CSS in component files or index.css

## 📝 Adding New Sections

1. Create a new component in `src/components/[SectionName]/`
2. Add it to `src/App.tsx`
3. Update navigation in `src/components/Header/Header.tsx` if needed

## 🔗 Integration Points

### Contact Form

The contact form in `src/components/Contact/Contact.tsx` currently logs to console. To integrate:

1. **Email Service** (e.g., EmailJS, Formspree, SendGrid)
2. **Backend API** (e.g., Node.js, Python Flask/Django)
3. **Serverless Function** (e.g., Vercel, Netlify Functions)

### GitHub Stats

Update `src/components/Testimonials/Testimonials.tsx` to fetch real GitHub stats using:
- GitHub API
- GitHub Stats API wrapper
- Serverless function

### CV Download

Update the CV download button in `src/components/Contact/Contact.tsx` to:
- Link to actual CV file in `public/` folder
- Use a file hosting service
- Trigger download programmatically

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Netlify

```bash
npm run build
# Deploy `dist` folder
```

### GitHub Pages

```bash
npm run build
# Deploy `dist` folder to gh-pages branch
```

## 📄 License

MIT License - feel free to use this portfolio as a template for your own!

## 👤 Author

**Emmanuel Ombaye Okari**
- Email: manuelombaye@gmail.com
- Phone: 0790063154
- GitHub: [@Emmanuelombaye](https://github.com/Emmanuelombaye)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS