<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

<h1>Asisten Sebaya</h1>

<p>
  <strong>AI-Powered Homework Helper Platform</strong>
</p>

<p>
A modern, intelligent homework assistance service powered by Google Gemini AI, featuring a beautiful neumorphism design and real-time chat capabilities.
</p>

[![Build Status](https://img.shields.io/github/actions/workflow/status/IRedDragonICY/asistensebaya/ci.yml?branch=main&style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/IRedDragonICY/asistensebaya/actions)
[![License](https://img.shields.io/github/license/IRedDragonICY/asistensebaya?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![Version](https://img.shields.io/github/package-json/v/IRedDragonICY/asistensebaya?style=for-the-badge&logo=semanticrelease&logoColor=white)](package.json)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge&logo=git&logoColor=white)](CONTRIBUTING.md)
[![Code of Conduct](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=for-the-badge&logo=open-source-initiative&logoColor=white)](CODE_OF_CONDUCT.md)

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.16-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Google AI](https://img.shields.io/badge/Google%20Gemini-AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

[Live Demo](https://ai.studio/apps/drive/1UJIemgPrOrIKnDqw92NnMenEVFAFT3b9) • [Report Bug](https://github.com/IRedDragonICY/asistensebaya/issues/new?template=bug_report.md) • [Request Feature](https://github.com/IRedDragonICY/asistensebaya/issues/new?template=feature_request.md)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Development](#development)
  - [Available Scripts](#available-scripts)
  - [Code Style](#code-style)
  - [Testing](#testing)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

---

## Overview

**Asisten Sebaya** is a cutting-edge homework assistance platform that leverages the power of Google's Gemini AI to provide intelligent, real-time academic support to students. Built with modern web technologies and featuring a stunning neumorphism design, the platform offers an intuitive and engaging user experience.

### Key Highlights

- **AI-Powered Assistance**: Integration with Google Gemini for intelligent homework help
- **Modern UI/UX**: Beautiful neumorphism design with smooth animations
- **Real-time Chat**: Interactive AI chat widget for instant support
- **Responsive Design**: Fully responsive across all devices
- **Type-Safe**: Built with TypeScript for enhanced code quality
- **Performance Optimized**: Lightning-fast with Vite bundler

---

## Features

### Core Features

- **Intelligent Chat Interface**
  - Real-time AI-powered responses
  - Context-aware conversation handling
  - Typing indicators and smooth animations
  - Message history management

- **User Authentication**
  - Secure login and registration system
  - Protected routes and session management
  - User profile management

- **Dynamic Landing Page**
  - Hero section with compelling CTAs
  - Live statistics dashboard
  - Feature showcase
  - Customer testimonials
  - Affiliate program section

- **Interactive Components**
  - Purchase notifications
  - Animated UI elements with Framer Motion
  - Lucide React icons integration
  - Smooth page transitions

### Design Features

- **Neumorphism Theme**: Modern, elegant design language
- **Dark Mode**: Eye-friendly dark color scheme
- **Responsive Layout**: Mobile-first design approach
- **Accessibility**: WCAG 2.1 compliant components

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|-----------|---------|---------|
| [React](https://reactjs.org/) | 19.2.0 | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.8.2 | Type safety |
| [Vite](https://vitejs.dev/) | 6.2.0 | Build tool |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.16 | Styling |
| [Framer Motion](https://www.framer.com/motion/) | 12.23.24 | Animations |
| [Lucide React](https://lucide.dev/) | 0.548.0 | Icons |

### AI & Backend

| Technology | Version | Purpose |
|-----------|---------|---------|
| [@google/genai](https://ai.google.dev/) | 1.28.0 | Google Gemini AI integration |

### Development Tools

- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing
- **ESLint**: Code linting
- **Prettier**: Code formatting

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/IRedDragonICY/asistensebaya.git
   cd asistensebaya
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   or with yarn:

   ```bash
   yarn install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the root directory:

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your configuration:

   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

### Environment Configuration

#### Obtaining a Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated key to your `.env.local` file

#### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Google Gemini API key | Yes |

---

## Usage

### Development Server

Start the development server with hot-reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build the application for production:

```bash
npm run build
```

The optimized files will be generated in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Basic Usage Example

```typescript
import { GeminiService } from './services/geminiService';

// Initialize the service
const gemini = new GeminiService(import.meta.env.VITE_GEMINI_API_KEY);

// Send a message
const response = await gemini.sendMessage('Help me with calculus homework');
console.log(response);
```

---

## Project Structure

```
asistensebaya/
├── .github/                  # GitHub configuration
│   ├── ISSUE_TEMPLATE/      # Issue templates
│   └── workflows/           # GitHub Actions workflows
├── components/              # React components
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Landing hero section
│   ├── ChatWidget.tsx      # AI chat interface
│   ├── LoginPage.tsx       # Login page
│   ├── RegisterPage.tsx    # Registration page
│   ├── FeaturesSection.tsx # Features showcase
│   ├── StatsSection.tsx    # Statistics display
│   ├── TestimonialsSection.tsx # Customer testimonials
│   ├── AffiliateSection.tsx    # Affiliate program
│   ├── Footer.tsx          # Page footer
│   └── PurchaseNotification.tsx # Purchase alerts
├── services/               # Service layer
│   └── geminiService.ts   # Google Gemini AI integration
├── public/                # Static assets
├── App.tsx                # Main application component
├── index.tsx              # Application entry point
├── index.css              # Global styles
├── index.html             # HTML template
├── types.ts               # TypeScript type definitions
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies
├── README.md              # Project documentation
├── LICENSE                # License file
├── CODE_OF_CONDUCT.md     # Code of conduct
├── CONTRIBUTING.md        # Contributing guidelines
└── SECURITY.md            # Security policy
```

---

## Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Run TypeScript type checking |

### Code Style

This project follows strict code quality standards:

- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb configuration with React hooks
- **Prettier**: Enforced code formatting
- **Git Hooks**: Pre-commit hooks for code quality

### Testing

```bash
# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

### Git Workflow

We follow the [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) branching model:

- `main`: Production-ready code
- `develop`: Development branch
- `feature/*`: Feature branches
- `hotfix/*`: Hotfix branches
- `release/*`: Release branches

---

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/IRedDragonICY/asistensebaya)

1. Click the "Deploy" button above
2. Configure environment variables
3. Deploy!

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/IRedDragonICY/asistensebaya)

### Docker

```bash
# Build image
docker build -t asistensebaya .

# Run container
docker run -p 3000:3000 -e VITE_GEMINI_API_KEY=your_key asistensebaya
```

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure environment variables
4. Ensure proper routing configuration for SPA

---

## Roadmap

- [ ] **Phase 1: Core Features** (Q1 2025)
  - [x] AI chat integration
  - [x] User authentication
  - [x] Responsive design
  - [ ] Payment integration
  - [ ] User dashboard

- [ ] **Phase 2: Enhanced Features** (Q2 2025)
  - [ ] Multi-language support
  - [ ] Advanced AI models
  - [ ] File upload support
  - [ ] Collaborative features
  - [ ] Mobile application

- [ ] **Phase 3: Scale & Optimize** (Q3 2025)
  - [ ] Performance optimization
  - [ ] Analytics dashboard
  - [ ] A/B testing
  - [ ] SEO optimization
  - [ ] CDN integration

See the [open issues](https://github.com/IRedDragonICY/asistensebaya/issues) for a full list of proposed features and known issues.

---

## Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

### Quick Start for Contributors

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your PR adheres to our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Security

Security is a top priority. If you discover a security vulnerability, please follow our [Security Policy](SECURITY.md).

**Please do not report security vulnerabilities through public GitHub issues.**

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Asisten Sebaya

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) for providing the AI capabilities
- [React Team](https://reactjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- All our [contributors](https://github.com/IRedDragonICY/asistensebaya/graphs/contributors)

---

## Contact

**Project Maintainer**: [IRedDragonICY](https://github.com/IRedDragonICY)

- **GitHub**: [@IRedDragonICY](https://github.com/IRedDragonICY)
- **Issues**: [GitHub Issues](https://github.com/IRedDragonICY/asistensebaya/issues)
- **Discussions**: [GitHub Discussions](https://github.com/IRedDragonICY/asistensebaya/discussions)

**Project Link**: [https://github.com/IRedDragonICY/asistensebaya](https://github.com/IRedDragonICY/asistensebaya)

---

<div align="center">

Made with ❤️ by the Asisten Sebaya Team

**[⬆ back to top](#table-of-contents)**

</div>
