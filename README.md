# 🌟 Portfolio Website

<div align="center">
  
![Portfolio Banner](https://via.placeholder.com/1200x400/0a0a0a/00d4ff?text=Sayan+Mondal+Portfolio)

[![Live Demo](https://img.shields.io/badge/Live-Demo-00d4ff?style=for-the-badge&logo=vercel)](https://sayanmondal87.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Sayanmondal755089/Portfolio3)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**A modern, responsive portfolio showcasing my journey in AI, ML, and Software Development**

[View Demo](https://sayanmondal87.vercel.app) · [Report Bug](https://github.com/Sayanmondal755089/Portfolio3/issues) · [Request Feature](https://github.com/Sayanmondal755089/Portfolio3/issues)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About

This is my personal portfolio website built with modern web technologies. It showcases my projects, skills, certificates, blog posts, and academic journey. The site features a glassmorphism design with smooth animations and an intuitive user experience.

### 🌐 Live Website
Visit: **[https://sayanmondal87.vercel.app](https://sayanmondal87.vercel.app)**

---

## ✨ Features

- 🎨 **Modern UI/UX** - Glassmorphism design with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🌙 **Dark Theme** - Eye-friendly dark mode design
- ⚡ **Fast Performance** - Optimized for speed and SEO
- 🎭 **Interactive Elements** - Engaging hover effects and transitions
- 📊 **Project Showcase** - Detailed project cards with live demos
- 🎓 **Academic Timeline** - Interactive semester progress tracker with PDF grade sheets
- 📜 **Certificates Gallery** - Organized certification showcase
- 📝 **Blog Section** - Share thoughts and technical articles
- 💼 **Resume Download** - Easy access to downloadable resume
- 📬 **Contact Form** - Direct communication channel

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Libraries & Tools
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## 📸 Screenshots

<details>
<summary>Click to expand screenshots</summary>

### Home Page
![Home](https://sayanmondal87.vercel.app/)

### Projects Section
![Projects](https://sayanmondal87.vercel.app/projects)

### Skills Page
![Skills](https://sayanmondal87.vercel.app/skills)

### Academic Timeline
![Timeline](https://sayanmondal87.vercel.app/SemesterTimeline)

</details>

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/Sayanmondal755089/Portfolio3.git
   cd Portfolio3
```

2. **Install dependencies**
```bash
   npm install
   # or
   yarn install
```

3. **Start development server**
```bash
   npm run dev
   # or
   yarn dev
```

4. **Open in browser**
```
   http://localhost:5173
```

### Build for Production
```bash
npm run build
# or
yarn build
```

The build files will be in the `dist` folder.

---

## 🌐 Deployment

This project is deployed on **Vercel** with automatic deployments from the `main` branch.

**Live Site:** [https://sayanmondal87.vercel.app](https://sayanmondal87.vercel.app)

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Sayanmondal755089/Portfolio3)

### Manual Deployment Steps

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy!

---

## 📁 Project Structure
```
Portfolio3/
├── public/
│   ├── pdfs/              # PDF files (certificates, resume)
│   └── images/            # Static images
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── SemesterTimeline.jsx
│   │   └── ...
│   ├── assets/            # Images, fonts, etc.
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎨 Customization

### Change Colors

Edit the CSS variables in `src/index.css`:
```css
:root {
  --accent: #00d4ff;      /* Primary accent color */
  --muted: #888;          /* Muted text color */
  --bg-primary: #0a0a0a;  /* Background color */
}
```

### Update Content

- **Projects**: Edit `src/pages/Projects.jsx`
- **Skills**: Edit `src/pages/Skills.jsx`
- **About**: Edit `src/pages/About.jsx`
- **Certificates**: Add PDFs to `public/pdfs/`
- **Academic Journey**: Edit `src/pages/SemesterTimeline.jsx`

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📧 Contact

**Sayan Mondal**

- 🌐 Portfolio: **[sayanmondal87.vercel.app](https://sayanmondal87.vercel.app)**
- 🐙 GitHub: [@Sayanmondal755089](https://github.com/Sayanmondal755089)
- 💼 LinkedIn:( https://www.linkedin.com/in/sayan-mondal78/)
- 📧 Email: [sanynmandal@gmail.com)

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel](https://vercel.com/)
- [React Router](https://reactrouter.com/)
- [Font Awesome](https://fontawesome.com/)
- Icons from [Lucide Icons](https://lucide.dev/)

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

Made with ❤️ by [Sayan Mondal](https://github.com/Sayanmondal755089)

**Visit Live:** [sayanmondal87.vercel.app](https://sayanmondal87.vercel.app)

![Visitors](https://api.visitorbadge.io/api/visitors?path=Sayanmondal755089%2FPortfolio3&label=Visitors&countColor=%2300d4ff&style=flat)

</div>
