# Allah-u-Abha Rodrigues - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Machine Learning Engineer and Software Developer. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Framer Motion animations and interactive components
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **SEO Ready**: Meta tags, structured data, and accessibility features
- **Type Safe**: Written in TypeScript for better development experience

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Turbopack (Next.js)
- **Deployment**: Vercel

## 📋 Sections

1. **Hero**: Introduction with typewriter effect and current focus
2. **About**: Skills, stats, and community involvement
3. **Experience**: Professional history and education
4. **Portfolio**: Featured projects with live demos and source code
5. **Internet Presence**: Blog posts and documentation
6. **Contact**: Contact form with embedded map

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/allahu-rodrigues/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 🎨 Customization

### Personal Information

Update the profile information in `lib/constants.ts`:

```typescript
export const profile = {
  name: "Your Name",
  email: "your.email@example.com",
  // ... other details
};
```

### Styling

The design system uses CSS custom properties defined in `app/globals.css`. Key colors:

- `--accent`: Primary accent color (purple)
- `--background`: Background color
- `--foreground`: Text color

### Content

- **Projects**: Update the projects array in `components/projects/index.tsx`
- **Blog Posts**: Modify `profile.blogPosts` in `lib/constants.ts`
- **Experience**: Update `profile.experience` and `profile.education`

## 📁 Project Structure

```
portfolio/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── hero/           # Hero section
│   ├── about/          # About section
│   ├── experience/     # Experience section
│   ├── projects/       # Projects section
│   ├── contact/        # Contact section
│   └── navigation/     # Navigation
├── lib/                # Utilities and constants
│   ├── constants.ts    # Site data and configuration
│   └── utils.ts        # Helper functions
└── public/             # Static assets
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/allahu-rodrigues/portfolio/issues).

## 📧 Contact

Allah-u-Abha Rodrigues - [allahu.rodrigues@gmail.com](mailto:allahu.rodrigues@gmail.com)

Project Link: [https://github.com/allahu-rodrigues/portfolio](https://github.com/allahu-rodrigues/portfolio)

---

Made with ❤️ and TypeScript
