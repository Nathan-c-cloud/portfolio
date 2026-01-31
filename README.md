# Personal Portfolio - Ismaël AÏHOU

Modern professional portfolio with advanced animations and custom design system.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-ff0055)

## 🚀 Live Demo

🌐 [View Portfolio](https://ineaihou.dev)

## ✨ Features

### 🎨 Design & UX
- **Modern design** with dark mode by default
- **Smooth animations** with Framer Motion
- **Responsive** on all screens (mobile, tablet, desktop)
- **Interactive particles** in background
- **Colored particle trail** following mouse movement
- **Reading progress bar**

### 📱 Sections
- **Hero** - Introduction with spectacular entrance animations
- **About** - Professional journey and goals
- **Projects** - Project showcase with interactive cards
- **Skills** - Tech stack with animated icons and glow effects
- **Contact** - Social media links and contact form

### 🎭 Animations
- Glassmorphism on header on scroll
- Animated gradient on main title
- Multi-layer glow effects on skills
- Project cards with spectacular hover effects
- Buttons with shine effect and scale animations
- Colored particle trail following cursor

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Static typing for code safety
- **Tailwind CSS v3** - Utility-first CSS framework
- **Framer Motion** - Animation library

### Design System
- **Devicon** - Official technology icons
- **Lucide React** - Modern and consistent icons
- **Custom CSS Variables** - Custom theme

### Deployment
- **Vercel** - Optimized deployment platform for Next.js
- **Custom Domain** - DNS configuration with Namecheap/OVH

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nathan-c-cloud/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run in development mode**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Build & Deployment

### Local build
```bash
npm run build
npm start
```

### Deploy on Vercel
1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Configure custom domain
4. Auto-deploy on every push

## 📂 Project Structure

```
portfolio/
├── public/              # Static files (images, CV, etc.)
│   ├── cv.pdf
│   └── images/
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── layout.tsx  # Main layout
│   │   ├── page.tsx    # Home page
│   │   └── globals.css # Global styles
│   ├── components/     # React components
│   │   ├── layout/     # Header, Footer
│   │   ├── sections/   # Hero, About, Projects, Skills, Contact
│   │   └── ui/         # Reusable components
│   ├── lib/           # Utilities and data
│   │   └── data/      # Projects and skills data
│   └── types/         # TypeScript types
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.ts
```

## 🎨 Customization

### Update personal information

**Projects** - Edit `src/lib/data/projects.ts`
```typescript
export const projects: Project[] = [
  {
    title: 'My Project',
    description: 'Description...',
    tags: ['React', 'TypeScript'],
    // ...
  }
];
```

**Skills** - Edit `src/lib/data/skills.ts`
```typescript
export const skillsByCategory = {
  development: ['Java', 'TypeScript', ...],
  // ...
};
```

**Contact information** - Edit sections `Hero.tsx`, `About.tsx`, `Contact.tsx`

### Modify theme

Edit `src/app/globals.css` to change colors:
```css
:root {
  --accent-primary: #00d9ff;
  --accent-secondary: #7c3aed;
  /* ... */
}
```

## 📝 To-Do

- [ ] Add more real projects
- [ ] Integrate functional contact form (EmailJS, Formspree)
- [ ] Add Blog section (optional)
- [ ] Optimize images with next/image
- [ ] Add unit tests

## 🤝 Contributing

This portfolio is a personal project. Feel free to use it as inspiration for your own!

## 📄 License

MIT License - Free to use with attribution

## 👤 Author

**Ismaël AÏHOU**
- Portfolio: [ineaihou.dev](https://ineaihou.dev)
- GitHub: [@Nathan-c-cloud](https://github.com/Nathan-c-cloud)
- LinkedIn: [ismael-aihou](https://linkedin.com/in/ismael-aihou)

---

⭐ Feel free to star the repo if you find the project interesting!

Developed with ❤️ by Ismaël AÏHOU
