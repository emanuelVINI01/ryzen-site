# 🚀 RyzenHosting — Institutional Web Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-12.1.6-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-17.0.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-4.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-1.7-319795?style=for-the-badge&logo=chakraui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-5.3-0055FF?style=for-the-badge&logo=framer&logoColor=white)

</div>

---

## 📌 Project Overview / Sobre o Projeto

**RyzenHosting** is a modern institutional web platform created for a game hosting and cloud infrastructure service. It showcases various hosting solutions, including Minecraft servers, VPS Gaming, Dedicated Servers, Web Hosting, and App deployment services, complete with dynamic pricing tables, customer reviews, and interactive feature highlights.

---

## 📜 Origin Story & Legacy Note / História e Legado

> 🌟 **Milestone Project:** Originally built in **2022 when the author was 12 years old**, this project marks the developer's early milestone and first hands-on experience with Next.js, React, and TypeScript.
> 
> Preserved as part of a personal developer portfolio, it showcases early initiative in web development, entrepreneurship, and continuous code evolution.

---

## ✨ Features / Funcionalidades

- 🎮 **Game & Cloud Hosting Showcase:** Dedicated landing pages for Minecraft, VPS, Dedicated Servers, Web Hosting, and Applications.
- ⚡ **Interactive Pricing & Plan Switcher:** Dynamic time-period selection (Monthly / Quarterly / Semi-annual) with smooth UI updates.
- 🎨 **Modern Design System:** Built with Chakra UI, supporting dynamic light/dark theme modes, clean typography, and responsive layouts.
- 🌀 **Fluid Animations:** Smooth micro-interactions powered by Framer Motion and AOS (Animate On Scroll).
- 💬 **Testimonials & Trust:** Integrated customer evaluations, statistics, and Discord widget integration (`@widgetbot/crate`).

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 12](https://nextjs.org/)
- **UI Library:** [Chakra UI](https://chakra-ui.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Animation:** Framer Motion & AOS (Animate on Scroll)
- **Icons:** React Icons & Chakra UI Icons
- **Package Manager:** Yarn

---

## 📂 Project Structure

```
ryzen-site/
├── pages/                  # Next.js Pages & Custom Routes
│   ├── index.tsx           # Homepage
│   ├── minecraft.tsx       # Minecraft Hosting
│   ├── minecraftgaming.tsx # High Performance Minecraft
│   ├── vps.tsx             # VPS Servers
│   ├── vpsgaming.tsx       # Gaming VPS Servers
│   ├── dedicated.tsx       # Dedicated Servers
│   ├── apps.tsx            # Application Hosting
│   ├── web.tsx             # Web Hosting
│   ├── serviceterms.tsx    # Terms of Service
│   └── privacypolicy.tsx   # Privacy Policy
├── src/
│   ├── components/         # Reusable UI Components
│   ├── data/               # Centralized Data (Plans, Testimonials)
│   ├── types/              # TypeScript Definitions
│   └── theme.ts            # Custom Chakra UI Theme
└── public/                 # Static Assets & Images
```

---

## 🚀 Getting Started / Como Executar

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v16+ recommended) and [Yarn](https://yarnpkg.com/) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ryzen-site.git
   cd ryzen-site
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Run the development server:**
   ```bash
   yarn dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 🏗️ Architecture & Refactoring Notes

This repository underwent a modernization refactoring to elevate code quality while preserving its original design:
- **Separation of Concerns:** Extracted static data from UI components into central data stores (`src/data/plans.ts`).
- **Strict Typing:** Introduced comprehensive TypeScript interfaces (`src/types/index.ts`).
- **Reactivity Fixes:** Replaced direct DOM mutations with idiomatic React state management (`useState`).
- **Code Cleanup:** Streamlined imports, removed dead code, and organized component structures.

---

## 📄 License

This project is preserved for personal archival and portfolio demonstration. All rights reserved.
