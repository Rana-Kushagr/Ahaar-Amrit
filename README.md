# 🌿 Ahaar Amrit (आहार अमृत)

> **स्वस्थ भारत, विकसित भारत**  
> *Personalized nutrition and Ayurvedic wellness — harmonizing modern nutritional science with traditional Indian food wisdom.*

[![Live App](https://img.shields.io/badge/Live%20Demo-Amrit%20Nutrition%20Hub-emerald?style=for-the-badge&logo=vercel)](https://id-preview--c5d1c522-5bb9-4d58-a073-ba2daad0a6d4.lovable.app)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TanStack Router](https://img.shields.io/badge/TanStack-Router%20%26%20Start-FF4154?style=for-the-badge&logo=react-query)](https://tanstack.com/router)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 🌟 Overview

**Ahaar Amrit (आहार अमृत)** is an advanced holistic nutrition and wellness platform specifically crafted for Indian dietary habits, lifestyles, and bodies. While Western diet charts often overlook Indian staples, spices, and cooking traditions, Ahaar Amrit bridges the gap by uniting **evidence-based modern nutritional science** with **authentic Ayurvedic wellness principles** (*Ahara*, *Vihara*, and *Prakriti*).

Whether your goal is muscle building, metabolic wellness, fat loss, digestive harmony, or exploring regional culinary heritage, Ahaar Amrit provides personalized, sustainable, and culturally resonant wellness guidance.

---

## 🚀 Key Features

### 1. 🧘‍♂️ Ayurvedic Dosha & Prakriti Assessment
- **In-depth Diagnostic Quiz**: Evaluate physical attributes, metabolic tendencies (*Agni*), digestion patterns, and behavioral traits to determine your dominant Doshas (**Vata**, **Pitta**, **Kapha**).
- **Personalized Dosha Recommendations**: Receive tailored dietary adjustments, balancing herbs, and daily seasonal rhythms (*Ritucharya* and *Dinacharya*).

### 2. 🥗 Precision Nutrition Planner
- **Targeted Macro & Micronutrient Distribution**: Customized calorie and macronutrient targets based on age, gender, body metrics, and lifestyle.
- **Indian Meal Blueprints**: Breakfast, lunch, evening snack, and dinner meal plans featuring whole lentils, traditional grains (millets, red rice, oats), fresh seasonal produce, and healthy fats.
- **Dietary Preferences**: Full support for Vegetarian, Vegan, Eggetarian, and Non-Vegetarian preferences.

### 3. 📊 Swasthya & Daily Wellness Dashboard
- **Hydration Tracker**: Real-time water intake tracking with optimal hydration goals.
- **Calorie & Macro Tracking**: Visual breakdown of carbs, proteins, fats, and fiber intake.
- **Holistic Daily Habits**: Track mind-body wellness habits, herbal infusions, sunlight exposure, and restful sleep.
- **Streaks & Progress**: Motivational streak counter to keep daily health journeys consistent.

### 4. 🍳 Recipe Studio
- **Curated Indian Recipes**: Diverse collection of nutrient-dense recipes ranging from traditional Ayurvedic preparation methods to modern high-protein twists.
- **Nutritional & Dosha Profiles**: Detailed calories, macros, preparation time, and Dosha-suitability badges for every dish.
- **Custom Filters**: Filter by cuisine, cooking time, dietary restrictions, and meal types.

### 5. 🗺️ Regional Heritage Explorer
- **Diverse Culinary Traditions**: Explore healthy, time-tested recipes and superfoods from **North, South, East, West, and Central India**.
- **Ingredient Spotlight**: Discover indigenous millets (Ragi, Jowar, Bajra), cold-pressed oils, wild greens, and restorative spices.

### 6. 🎓 Ahaar Academy
- **Nutrition Literacy**: Bite-sized educational modules on glycemic indices, gut health, micronutrient absorption, and balanced plate design.
- **Ayurvedic Wisdom Deconstructed**: Clear explanations of *Rasas* (the 6 tastes), *Virya* (thermal effect), *Vipaka* (post-digestive effect), and incompatible food combinations (*Viruddha Ahara*).
- **Myth Busting**: Demystifying common food myths surrounding carbs, fats, fasting, and supplements.

### 7. 🏆 Wellness Challenges
- **Interactive Habit Challenges**: Join 7-day and 21-day guided wellness challenges (e.g., Sattvic Living, Mindful Eating, Sugar Detox, Hydration Mastery).
- **Milestone Rewards**: Track completed days, reflect on daily energy levels, and earn accomplishment badges.

### 8. 🤖 AyurChat AI Assistant
- **On-Demand Wellness Guidance**: Ask questions regarding Indian ingredients, natural digestive remedies, food substitutions, or recipe ideas.
- **Culturally Contextualized**: Conversational answers tailored specifically to traditional Indian wellness and modern nutritional science.

---

## 🎨 Design Philosophy & UX

- **Calming Nature Aesthetics**: Rich botanical dark greens, warm terracotta accents, and soft golden ambient lighting.
- **Distraction-Free Typography**: Clean Hindi & English brand typography (**आहार अमृत** / **Ahaar Amrit**).
- **Dynamic Scroll Animations**: GPU-accelerated reveals and top reading progress ribbon with intelligent scroll-journey re-triggering.
- **Responsive & Accessible**: Seamless fluid layouts across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Core UI library with modern declarative rendering |
| **[TypeScript](https://www.typescriptlang.org/)** | Strict type safety and predictable data structures |
| **[TanStack Start & Router](https://tanstack.com/router)** | Modern file-based routing and full-stack capabilities |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | High-performance, modern utility styling |
| **[Radix UI](https://www.radix-ui.com/)** | Accessible, unstyled UI primitives (dialogs, tabs, accordions, etc.) |
| **[Lucide React](https://lucide.dev/)** | Crisp, lightweight icons |
| **[Recharts](https://recharts.org/)** | Responsive, composable data charts for health metrics |
| **[Sonner](https://sonner.emilkowal.ski/)** | Clean toast notifications |
| **[Vite](https://vitejs.dev/)** | Lightning-fast development server and optimized bundler |

---

## 📁 Project Structure

```text
Ahaar-Amrit/
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── onboarding/        # Multi-step profile setup wizard
│   │   ├── ui/                # Radix UI design system primitives
│   │   ├── AyurChatWidget.tsx # Floating AI wellness assistant
│   │   ├── DoshaQuiz.tsx      # Prakriti assessment quiz
│   │   ├── DoshaResult.tsx    # Dosha outcome visualization
│   │   ├── Navbar.tsx         # Responsive application navigation
│   │   ├── ScrollProgress.tsx # Top reading progress bar
│   │   └── ScrollReveal.tsx   # Viewport-aware scroll animation wrapper
│   ├── lib/                   # Business logic, helpers, and algorithms
│   │   ├── dosha.ts           # Prakriti scoring calculation
│   │   ├── nutrition-plan.ts  # Calorie, macro, and meal generator
│   │   ├── profile.ts         # User profile state & local persistence
│   │   └── utils.ts           # Styling & class helpers
│   ├── routes/                # File-based application routes
│   │   ├── __root.tsx         # Root app layout & global providers
│   │   ├── index.tsx          # Homepage with hero & interactive previews
│   │   ├── dashboard.tsx      # Daily Swasthya dashboard & habit tracking
│   │   ├── dosha.tsx          # Ayurvedic Prakriti overview
│   │   ├── dosha-quiz.tsx     # Full Dosha questionnaire
│   │   ├── nutrition-plan.tsx # Tailored Indian nutrition plan
│   │   ├── recipe-studio.tsx  # Recipe catalog & preparation details
│   │   ├── regional-explorer.tsx # Regional Indian heritage foods
│   │   ├── ahaar-academy.tsx  # Nutrition & Ayurveda learning center
│   │   ├── wellness-challenge.tsx # Habit challenges & milestones
│   │   └── profile.tsx        # Profile review & preferences
│   ├── styles.css             # Design tokens, gradients & ambient lighting
│   └── routeTree.gen.ts       # Auto-generated TanStack route tree
├── public/                    # Static assets, icons, and graphics
├── package.json               # Dependencies and build scripts
└── vite.config.ts             # Vite & TanStack configuration
```

---
 

---

## 🌐 Live Deployment & Lovable Integration

- **Live Web App**:  https://ahaar-amrit.lovable.app
- 

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  <b>आहार अमृत — पोषण, परंपरा, और स्वास्थ्य का संगम।</b><br>
  <i>Built with ❤️ for a healthier, nourished India.</i>
</p>
