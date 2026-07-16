# Aethel Groups

> A modern, professional corporate website for **Aethel Groups** — built with React + Vite and a Python serverless backend (Vercel) for contact form handling via the Resend email API.

---

## 🌐 Overview

Aethel Groups is a full-stack corporate web application featuring an enterprise-grade UI with smooth animations, multi-page navigation, and a functional backend that sends contact form enquiries via [Resend](https://resend.com). The platform showcases **10 service lines** spanning custom software, web & mobile development, AI, cloud, data analytics, business intelligence, hardware prototyping, UI/UX design, and academic project support.

---

## 🗂️ Project Structure

```
Aethel Groups/
├── api/                      # Unified Python FastAPI Backend (Vercel & Local)
│   ├── main.py               # FastAPI application (CORS, Resend integration)
│   └── requirements.txt      # Python dependencies for the backend
├── public/                   # Static assets (favicon, images)
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── AnimationWrappers.jsx
│   │   ├── Footer.jsx / .css
│   │   ├── HeroVisual.jsx / .css
│   │   └── Navbar.jsx / .css
│   ├── pages/                # Page-level components
│   │   ├── Home.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Services.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── Careers.jsx / .css
│   │   └── Team.jsx / .css
│   ├── App.jsx               # Root component & routing
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles & design tokens
├── index.html                # HTML shell
├── vite.config.js            # Vite config (includes /api proxy for local dev)
├── vercel.json               # Vercel deployment config
├── package.json              # Frontend dependencies & scripts
└── start-dev.bat             # One-click dev launcher (Windows)
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI framework |
| [Vite 6](https://vitejs.dev/) | Build tool & dev server |
| [React Router v6](https://reactrouter.com/) | Client-side routing |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide React](https://lucide.dev/) | Icon library |
| [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) | Scroll-triggered animations |
| Vanilla CSS | Styling & design system |

### Backend (Unified — FastAPI on Vercel & Local Dev)
| Technology | Purpose |
|---|---|
| Python 3.12 | Runtime |
| [FastAPI](https://fastapi.tiangolo.com/) | REST API framework |
| [Uvicorn](https://www.uvicorn.org/) | ASGI server |
| [Resend](https://resend.com/) | Transactional email API |
| [Pydantic](https://docs.pydantic.dev/) | Request validation |
| [python-dotenv](https://github.com/theskumar/python-dotenv) | Environment config |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ and npm
- A [Resend](https://resend.com) account and API key

---

### 1. Frontend Setup

```bash
# Install dependencies
npm install

# Start the development server (runs on http://localhost:3000)
npm run dev
```

The Vite dev server automatically proxies `/api/*` requests to `http://localhost:8000`, so the contact form works seamlessly in development.

---

### 2. Backend Setup (Local Dev — Optional)

If you want to test the contact form locally, you can run the FastAPI server:

```bash
cd api

# Create and activate a virtual environment
python -m venv venv
venv\Scripts\activate   # Windows

# Install dependencies
pip install -r requirements.txt
```

Create a `.env` file inside `api/` (or the root directory):

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
RECIPIENT_EMAIL=your@email.com
```

Start the API server:

```bash
python main.py
# Or: uvicorn main:app --reload
# API available at http://localhost:8000
```

---

### 3. One-Click Start (Windows)

Run `start-dev.bat` to launch both the frontend and backend simultaneously:

```bat
start-dev.bat
```

---

## ☁️ Deployment (Vercel)

The project is configured for Vercel out-of-the-box:

1. **Frontend** — Vite builds to `dist/`, served as a static SPA with SPA fallback routing.
2. **Backend** — `api/main.py` is deployed as a FastAPI serverless application, with Vercel routing `/api/*` to it.

### Environment Variables (set in Vercel dashboard)

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Your Resend API key |
| `RECIPIENT_EMAIL` | Email address to receive contact enquiries |

> **Never commit `.env` files** — always set secrets via the Vercel dashboard.

---

## 📦 Frontend Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |

---

## 📄 Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, services overview, stats, process, FAQ, and CTA |
| `/about` | About | Company story, mission, values, and founder |
| `/services` | Services | Detailed service offerings (10 service lines) |
| `/team` | Team | Leadership and open positions |
| `/careers` | Careers | Future opportunities and culture |
| `/contact` | Contact | Contact form (connected to serverless backend) |

### 🛠️ Service Lines

| # | Service | Highlights |
|---|---|---|
| 1 | Custom Software Development | Enterprise apps, automation |
| 2 | Web Development | React, Next.js, SPAs |
| 3 | Mobile App Development | Flutter, React Native |
| 4 | Artificial Intelligence | ML, NLP, AI tools |
| 5 | Cloud & DevOps | AWS, Docker, CI/CD |
| 6 | Data Analytics | Pandas, Power BI, ETL pipelines |
| 7 | Business Analytics | KPI dashboards, forecasting, BI |
| 8 | Small-Scale Hardware Projects | Arduino, Raspberry Pi, IoT |
| 9 | UI/UX Design | Figma, design systems |
| 10 | Academic & College Projects | Final year projects, demos |

---

## 📧 Contact Form Flow

```
User fills form → POST /api/contact → api/main.py (FastAPI on Vercel)
                                          ↓
                                   Resend Email API
                                          ↓
                              mohankrishnan4099@gmail.com
```

The form validates name, email, and message on both the client and server side, and returns user-friendly error messages.

---

## 📝 License

This project is proprietary. All rights reserved © Aethel Groups.
