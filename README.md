# Graeme Fox - Academic Portfolio

A modern, responsive academic portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Accessible**: Follows web accessibility best practices
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Navigation bar with smooth scrolling
│   ├── Header.tsx       # Hero section with profile info
│   ├── About.tsx        # About section with research focus
│   ├── Publications.tsx # Publications list grouped by year
│   ├── Achievements.tsx # Awards, grants, conferences, press
│   └── Footer.tsx       # Contact information and footer
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles with Tailwind

docs/                   # GitHub Pages deployment folder
```

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful, customizable icons

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 GitHub Pages Deployment

This site is configured for GitHub Pages deployment:

1. **Automatic Deployment**: Push to the `main` branch triggers automatic deployment via GitHub Actions
2. **Manual Setup**: 
   - Go to your repository Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select `main` branch and `/docs` folder
   - Your site will be available at `https://yourusername.github.io/repository-name`

## 📝 Customization

### Adding Your Profile Image
Replace `docs/profile.jpg` with your own profile image (recommended size: 512x512px)

### Updating Content
- **Personal Info**: Edit `src/components/Header.tsx` and `src/components/Footer.tsx`
- **About Section**: Modify `src/components/About.tsx`
- **Publications**: Update the publications array in `src/components/Publications.tsx`
- **Achievements**: Edit `src/components/Achievements.tsx`

### Styling
- Global styles: `src/index.css`
- Component-specific styles: Inline Tailwind classes
- Custom colors and spacing: `tailwind.config.js`

## 🎨 Design Features

- **Gradient Headers**: Beautiful gradient backgrounds
- **Hover Effects**: Smooth transitions and micro-interactions
- **Responsive Grid**: Adapts to different screen sizes
- **Typography**: Carefully chosen font weights and spacing
- **Color System**: Consistent color palette throughout
- **Icons**: Lucide React icons for visual enhancement

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

**Graeme Fox**  
Research Fellow Bioinformatician  
DeepSEQ, The University of Nottingham  
📧 graeme.fox@nottingham.ac.uk

---

Built with ❤️ using React, TypeScript, and Tailwind CSS