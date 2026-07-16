import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef, useState, useEffect } from 'react'
import {
  ArrowRight, Code2, Brain, Cloud, Globe, Smartphone, GraduationCap,
  Palette, Lightbulb, Target, PenTool, Rocket, TestTube2, Send,
  ChevronRight, Layers, Zap, Shield, Users, Star,
  Sparkles, HeartHandshake, MousePointer2, BarChart3, Cpu, Database,
  Bot, BookOpen, LineChart, Cog, MessageCircle, CloudCog, Landmark, ShieldCheck
} from 'lucide-react'
import { PageWrapper, FadeIn, ScrollProgress, AnimatedCounter } from '../components/AnimationWrappers'
import './Home.css'

/* ─── Typewriter hook ─── */
function useTypewriter(words, typeSpeed = 90, deleteSpeed = 50, pauseMs = 2200) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  useEffect(() => {
    const current = words[wordIdx]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplay(current.slice(0, display.length + 1))
        if (display.length + 1 === current.length) setTimeout(() => setIsDeleting(true), pauseMs)
      } else {
        setDisplay(current.slice(0, display.length - 1))
        if (display.length - 1 === 0) { setIsDeleting(false); setWordIdx((wordIdx + 1) % words.length) }
      }
    }, isDeleting ? deleteSpeed : typeSpeed)
    return () => clearTimeout(timeout)
  }, [display, isDeleting, wordIdx, words, typeSpeed, deleteSpeed, pauseMs])
  return display
}

/* ─── Data ─── */
const heroWords = ['Digital Solutions', 'AI Applications', 'Cloud Platforms', 'Web Experiences', 'Mobile Apps']

const stats = [
  { n: 2, s: '+', label: 'Projects Delivered', icon: <Rocket size={20} />, color: '#2563EB', bg: '#EFF6FF', gradient: 'linear-gradient(135deg, #2563EB, #3B82F6)' },
  { n: 5, s: '+', label: 'Active Clients', icon: <Users size={20} />, color: '#7C3AED', bg: '#F5F3FF', gradient: 'linear-gradient(135deg, #7C3AED, #A78BFA)' },
  { n: 99, s: '%', label: 'Client Satisfaction', icon: <Star size={20} />, color: '#059669', bg: '#ECFDF5', gradient: 'linear-gradient(135deg, #059669, #34D399)' },
  { n: 10, s: '+', label: 'Services Offered', icon: <Layers size={20} />, color: '#EA580C', bg: '#FFF7ED', gradient: 'linear-gradient(135deg, #EA580C, #FB923C)' },
]

const whyChoose = [
  { icon: <Zap size={22} />, title: 'Fast Delivery', desc: 'Agile sprints with 2-4 week MVPs and regular milestone updates.', pct: 95, color: '#2563EB' },
  { icon: <Shield size={22} />, title: 'Secure & Scalable', desc: 'Enterprise-grade security with cloud-native scalable architecture.', pct: 98, color: '#059669' },
  { icon: <Star size={22} />, title: 'Quality First', desc: 'Rigorous testing, code reviews, and CI/CD-driven quality assurance.', pct: 99, color: '#7C3AED' },
  { icon: <HeartHandshake size={22} />, title: 'Dedicated Support', desc: '24-hour response time with dedicated project managers.', pct: 100, color: '#EA580C' },
]

const services = [
  {
    icon: <Code2 />,
    title: 'Custom Software Development',
    desc: 'Tailored enterprise applications, internal business tools, and process automation platforms built to solve your unique workflow challenges and scale with your growth.',
    color: '#2563EB', bg: '#EFF6FF',
    logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg']
  },
  {
    icon: <Globe />,
    title: 'Web Development',
    desc: 'High-performance websites, progressive web apps (PWAs), and full-stack web platforms built with React, Next.js, and modern front-end/back-end tooling.',
    color: '#059669', bg: '#ECFDF5',
    logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg']
  },
  {
    icon: <Smartphone />,
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile applications for iOS and Android using Flutter and React Native to deliver rich, smooth, and engaging user experiences.',
    color: '#7C3AED', bg: '#F5F3FF',
    logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg']
  },
  {
    icon: <Brain />,
    title: 'AI & Machine Learning Solutions',
    desc: 'Intelligent automation, predictive modeling, clustering, and decision intelligence systems using modern frameworks and custom-trained model pipelines.',
    color: '#8B5CF6', bg: '#F5F3FF',
    logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg']
  },
  {
    icon: <Bot />,
    title: 'Generative AI Solutions',
    desc: 'Deploy intelligent LLM applications, custom chatbots, and automatic content systems powered by state-of-the-art foundation models.',
    color: '#7C3AED', bg: '#F5F3FF',
    logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg']
  },
  {
    icon: <Brain />,
    title: 'Agentic AI Development',
    desc: 'Design autonomous AI agents capable of reasoning, planning, and executing complex multi-step workflows with minimal human oversight.',
    color: '#0891B2', bg: '#ECFEFF',
    logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg']
  },
  {
    icon: <ShieldCheck />,
    title: 'MLOps & LLMOps',
    desc: 'Establish reliable pipelines for deploying, monitoring, testing, and scaling machine learning models and LLMs in production environments.',
    color: '#059669', bg: '#ECFDF5',
    logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg']
  },
  {
    icon: <Cloud />,
    title: 'Cloud Solutions & DevOps',
    desc: 'Deploy scale-ready, secure, and resilient cloud architectures. Streamline software releases using Docker, Kubernetes, and optimized CI/CD pipelines.',
    color: '#0891B2', bg: '#ECFEFF',
    logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg']
  },
  {
    icon: <LineChart />,
    title: 'Data & Business Analytics',
    desc: 'End-to-end data engineering pipelines, sales forecasting, KPI dashboards, and business intelligence reporting to drive data-centric decisions.',
    color: '#0A66C2', bg: '#EFF6FF',
    logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg']
  },
  {
    icon: <Cpu />,
    title: 'Small-Scale Hardware & IoT',
    desc: 'Connected hardware prototypes, smart sensing systems, and embedded firmware using microcontrollers like Arduino, Raspberry Pi, and ESP32.',
    color: '#B45309', bg: '#FFFBEB',
    logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg']
  },
  {
    icon: <GraduationCap />,
    title: 'Academic & Research Projects',
    desc: 'Industry-standard project guidance, final-year engineering projects, and research prototypes across software and electronics domains for students.',
    color: '#4F46E5', bg: '#EEF2FF',
    logos: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg']
  },
]

const processSteps = [
  { icon: <Lightbulb />, title: 'Discovery', desc: 'Understanding your vision, goals, and challenges.', quote: 'Every great solution starts with listening.', color: '#2563EB', bg: '#EFF6FF' },
  { icon: <Target />, title: 'Strategy', desc: 'Defining the roadmap, technologies, and architecture.', quote: 'A clear plan ensures predictable delivery.', color: '#7C3AED', bg: '#F5F3FF' },
  { icon: <PenTool />, title: 'Design', desc: 'Creating intuitive interfaces and user experiences.', quote: "Design isn't how it looks — it's how it works.", color: '#EA580C', bg: '#FFF7ED' },
  { icon: <Code2 />, title: 'Build', desc: 'Writing robust, scalable, and clean code.', quote: 'Craftsmanship in every line.', color: '#059669', bg: '#ECFDF5' },
  { icon: <TestTube2 />, title: 'Test', desc: 'Ensuring quality through thorough testing.', quote: 'Ship with confidence, not hope.', color: '#0891B2', bg: '#ECFEFF' },
  { icon: <Rocket />, title: 'Launch', desc: 'Deploying and continuously improving.', quote: 'The launch is just the beginning.', color: '#DC2626', bg: '#FEF2F2' },
]

const techStack = [
  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Vercel', logo: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
  { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
]

const faqs = [
  { q: 'What services does Aethel Groups offer?', a: 'We offer a wide range of services including Custom Software, Web & Mobile App Development, AI & Machine Learning, Cloud & DevOps, Data Analytics, Small-scale Hardware & IoT prototypes, and Academic Project guidance.' },
  { q: 'Do you offer Data Analytics and Business Intelligence?', a: 'Yes. We build full analytics pipelines, interactive dashboards (Power BI, Tableau), statistical models, KPI tracking systems, and sales forecasting tools using Python, Pandas, and SQL.' },
  { q: 'What hardware projects do you work on?', a: 'We develop IoT devices, embedded systems, and sensor-driven prototypes using Arduino and Raspberry Pi — ideal for academic final-year projects, smart home systems, and industrial monitoring solutions.' },
  { q: 'How do you structure a project timeline?', a: 'Timelines vary by scope. Small projects/MVPs typically take 2-4 weeks, while larger enterprise platforms take 8-12 weeks. We work in sprints to ensure transparency and deliver regular updates.' },
  { q: 'Do you offer support for students and academic research?', a: 'Yes! We actively support students, interns, and academic researchers by helping build industry-level software prototypes, final-year engineering projects, and providing technical training.' },
  { q: 'Do you provide maintenance and updates after launch?', a: 'Absolutely. We offer flexible post-launch support packages including performance monitoring, feature expansions, dependency updates, and security patch application.' },
]

/* ─── Stats Section ─── */
function StatsSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.92, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1])

  return (
    <section className="ch-stats" id="impact-stats" ref={ref}>
      <motion.div className="container ch-stats__inner" style={{ scale, opacity }}>
        {stats.map((s) => (
          <div key={s.label} className="ch-stat" style={{ '--accent': s.color, '--accent-bg': s.bg, '--accent-gradient': s.gradient }}>
            <div className="ch-stat__icon-ring">
              <div className="ch-stat__icon">{s.icon}</div>
            </div>
            <div className="ch-stat__num"><AnimatedCounter target={s.n} suffix={s.s} duration={2000} /></div>
            <div className="ch-stat__label">{s.label}</div>
            <div className="ch-stat__bar"><div className="ch-stat__bar-fill" /></div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

/* ─── Why Choose Us ─── */
function WhyChooseUs() {
  return (
    <section className="section why-section" id="why-choose-us">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-label">Why Aethel Groups</span>
            <h2 className="section-title">Built Different. Built Better.</h2>
            <p className="section-description">We combine technical expertise with a client-first approach to deliver solutions that exceed expectations.</p>
          </div>
        </FadeIn>
        <div className="why-grid">
          <div className="why-grid__visual">
            <FadeIn direction="left">
              <div className="why-orbit">
                <div className="why-orbit__center">
                  <Sparkles size={28} />
                  <span>Aethel</span>
                </div>
                <div className="why-orbit__ring why-orbit__ring--1" />
                <div className="why-orbit__ring why-orbit__ring--2" />
                <div className="why-orbit__ring why-orbit__ring--3" />
                {[{ Icon: Zap, a: 0 }, { Icon: Shield, a: 90 }, { Icon: Star, a: 180 }, { Icon: HeartHandshake, a: 270 }].map((item, i) => (
                  <div key={i} className={`why-orbit__node why-orbit__node--${i + 1}`} style={{ '--color': whyChoose[i].color }}>
                    <item.Icon size={16} />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          <div className="why-grid__cards">
            {whyChoose.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08} direction="right">
                <div className="why-card" style={{ '--wc-color': item.color }}>
                  <div className="why-card__icon">{item.icon}</div>
                  <div className="why-card__content">
                    <h4 className="why-card__title">{item.title}</h4>
                    <p className="why-card__desc">{item.desc}</p>
                    <div className="why-card__progress">
                      <div className="why-card__progress-bar">
                        <motion.div
                          className="why-card__progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        />
                      </div>
                      <span className="why-card__progress-val">{item.pct}%</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Services Section ─── */
function ServicesSection() {
  return (
    <section className="section services-preview-section" id="services-preview">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-label">What We Build</span>
            <h2 className="section-title">Services We Offer</h2>
            <p className="section-description">From custom enterprise applications and AI solutions to interactive data analytics and small-scale hardware prototyping — we build technology that drives growth.</p>
          </div>
        </FadeIn>
        <div className="services-preview-grid">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.07}>
              <div className="card card--hover svc-card" style={{ '--svc-color': s.color, '--svc-bg': s.bg }}>
                <div className="svc-card__header">
                  <div className="card-icon svc-card__icon" style={{ background: s.bg, color: s.color }}>{s.icon}</div>
                  <div className="svc-card__logos">
                    {s.logos.map((logo, li) => (
                      <img key={li} src={logo} alt="" className="svc-card__logo" loading="lazy" />
                    ))}
                  </div>
                </div>
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__desc">{s.desc}</p>
                <Link to="/services" className="svc-card__link">Learn More <ChevronRight size={14} /></Link>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <div style={{ textAlign: 'center' }}>
            <Link to="/services" className="btn btn--secondary btn--lg" id="home-view-all-services">
              View All Services <ChevronRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─── Scroll Process ─── */
function ScrollProcess() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="section scroll-process-section" id="our-process" ref={sectionRef}>
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-label">Our Journey Together</span>
            <h2 className="section-title">How We Bring Ideas to Life</h2>
            <p className="section-description">A structured, transparent journey from concept to deployment.</p>
          </div>
        </FadeIn>
        <div className="scroll-process">
          <div className="scroll-process__rail" />
          <div className="scroll-process__rail-track">
            <motion.div className="scroll-process__rail-fill" style={{ height: lineHeight }} />
          </div>
          {processSteps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.08} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className={`pcard pcard--${i % 2 === 0 ? 'left' : 'right'}`} style={{ '--accent': step.color, '--accent-bg': step.bg }}>
                <div className="pcard__body">
                  <div className="pcard__num">Step {String(i + 1).padStart(2, '0')}</div>
                  <div className="pcard__icon">{step.icon}</div>
                  <h3 className="pcard__title">{step.title}</h3>
                  <p className="pcard__desc">{step.desc}</p>
                  <p className="pcard__quote">"{step.quote}"</p>
                </div>
                <div className="pcard__dot"><div className="pcard__dot-inner" /></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Tech Stack Marquee ─── */
function TechStackMarquee() {
  return (
    <section className="techstack-section" id="tech-stack">
      <div className="container">
        <FadeIn>
          <p className="techstack-section__title">Technologies & Tools We Work With</p>
        </FadeIn>
      </div>
      <div className="techstack-wrapper">
        <div className="techstack-track">
          {[...techStack, ...techStack, ...techStack].map((t, i) => (
            <div key={i} className="techstack-item">
              <img src={t.logo} alt={t.name} className="techstack-item__logo" loading="lazy" />
              <span className="techstack-item__name">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="techstack-wrapper techstack-wrapper--reverse">
        <div className="techstack-track techstack-track--reverse">
          {[...techStack, ...techStack, ...techStack].reverse().map((t, i) => (
            <div key={i} className="techstack-item">
              <img src={t.logo} alt={t.name} className="techstack-item__logo" loading="lazy" />
              <span className="techstack-item__name">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ Section ─── */
function FAQSection() {
  const [open, setOpen] = useState(null)
  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-label">Common Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
        </FadeIn>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className={`faq-item${open === i ? ' faq-item--open' : ''}`}>
                <button className="faq-question" onClick={() => setOpen(open === i ? null : i)} id={`faq-${i}`}>
                  <span>{faq.q}</span>
                  <span className="faq-chevron"><ChevronRight size={18} /></span>
                </button>
                <div className="faq-answer-wrapper">
                  <p className="faq-answer">{faq.a}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════
   HOME PAGE
   ════════════════════════════════════════ */
export default function Home() {
  const typed = useTypewriter(heroWords, 90, 50, 2200)
  const ctaRef = useRef(null)
  const { scrollYProgress: ctaScroll } = useScroll({ target: ctaRef, offset: ['start end', 'end start'] })
  const ctaY = useTransform(ctaScroll, [0, 1], [60, -60])
  const ctaScale = useTransform(ctaScroll, [0, 0.5], [0.95, 1])

  return (
    <PageWrapper>
      <ScrollProgress />

      {/* ═══ HERO ═══ */}
      <section className="ch ch-hero" id="hero-section">
        <div className="ch-hero__bg">
          <div className="ch-hero__grid" />
          <div className="ch-hero__orb ch-hero__orb--1" />
          <div className="ch-hero__orb ch-hero__orb--2" />
          <div className="ch-hero__orb ch-hero__orb--3" />
          {[...Array(8)].map((_, i) => <div key={i} className={`ch-hero__particle ch-hero__particle--${i + 1}`} />)}
        </div>

        <div className="container ch-hero__inner">
          <div className="ch-hero__content">
            <motion.div className="ch-hero__badge" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <span className="ch-hero__badge-dot" />
              <span>Building What Matters</span>
            </motion.div>

            <motion.h1 className="ch-hero__title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
              Transforming Ideas
              <br />Into Powerful{' '}
              <span className="ch-hero__accent">{typed}<span className="ch-hero__cursor">|</span></span>
            </motion.h1>

            <motion.p className="ch-hero__sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              We build scalable software, AI-powered applications, cloud platforms,
              and academic innovation — for businesses, startups, and students.
            </motion.p>

            <motion.div className="ch-hero__cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
              <Link to="/contact" className="btn btn--primary btn--lg btn--glow" id="hero-start-project">
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn--secondary btn--lg" id="hero-explore-services">
                Our Services <ChevronRight size={18} />
              </Link>
            </motion.div>
          </div>

          <motion.div className="ch-hero__visual" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 1 }}>
            {/* Code Terminal */}
            <div className="hero-terminal">
              <div className="hero-terminal__header">
                <div className="hero-terminal__dots">
                  <span className="hero-terminal__dot hero-terminal__dot--red" />
                  <span className="hero-terminal__dot hero-terminal__dot--yellow" />
                  <span className="hero-terminal__dot hero-terminal__dot--green" />
                </div>
                <span className="hero-terminal__title">aethel — main.tsx</span>
                <div className="hero-terminal__tabs">
                  <span className="hero-terminal__tab hero-terminal__tab--active">main.tsx</span>
                  <span className="hero-terminal__tab">api.py</span>
                </div>
              </div>
              <div className="hero-terminal__body">
                <div className="hero-terminal__line"><span className="ht-ln">1</span><span className="ht-kw">import</span> {`{ `}<span className="ht-fn">buildSolution</span>{` }`} <span className="ht-kw">from</span> <span className="ht-str">'@aethel/core'</span></div>
                <div className="hero-terminal__line"><span className="ht-ln">2</span><span className="ht-kw">import</span> {`{ `}<span className="ht-fn">deploy</span>{` }`} <span className="ht-kw">from</span> <span className="ht-str">'@aethel/cloud'</span></div>
                <div className="hero-terminal__line"><span className="ht-ln">3</span></div>
                <div className="hero-terminal__line"><span className="ht-ln">4</span><span className="ht-kw">const</span> <span className="ht-var">project</span> = <span className="ht-kw">await</span> <span className="ht-fn">buildSolution</span>{'({'}</div>
                <div className="hero-terminal__line"><span className="ht-ln">5</span>{'  '}<span className="ht-prop">stack</span>{': ['}<span className="ht-str">'React'</span>{', '}<span className="ht-str">'Python'</span>{', '}<span className="ht-str">'AI'</span>{'],'}  </div>
                <div className="hero-terminal__line"><span className="ht-ln">6</span>{'  '}<span className="ht-prop">quality</span>{': '}<span className="ht-num">100</span>,</div>
                <div className="hero-terminal__line"><span className="ht-ln">7</span>{'  '}<span className="ht-prop">scalable</span>{': '}<span className="ht-bool">true</span>,</div>
                <div className="hero-terminal__line"><span className="ht-ln">8</span>{'})' }</div>
                <div className="hero-terminal__line"><span className="ht-ln">9</span></div>
                <div className="hero-terminal__line"><span className="ht-ln">10</span><span className="ht-kw">await</span> <span className="ht-fn">deploy</span>(<span className="ht-var">project</span>) <span className="ht-cmt">{'// 🚀 shipped!'}</span></div>
                <div className="hero-terminal__cursor-line"><span className="ht-ln">11</span><span className="hero-terminal__blink">│</span></div>
              </div>
              <div className="hero-terminal__status">
                <span className="hero-terminal__status-dot" />
                <span>Build successful</span>
                <span className="hero-terminal__status-sep">·</span>
                <span>0 errors</span>
                <span className="hero-terminal__status-sep">·</span>
                <span>deployed</span>
              </div>
            </div>

            {/* Floating metric badges */}
            <motion.div className="hero-badge-float hero-badge-float--1" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
              <Star size={14} /> <span>99% Satisfaction</span>
            </motion.div>
            <motion.div className="hero-badge-float hero-badge-float--2" animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
              <Zap size={14} /> <span>Fast Delivery</span>
            </motion.div>
            <motion.div className="hero-badge-float hero-badge-float--3" animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
              <Shield size={14} /> <span>Secure & Scalable</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="ch-hero__scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
            <MousePointer2 size={18} />
          </motion.div>
          <span>Scroll to explore our story</span>
        </motion.div>
      </section>

      {/* ═══ TECH STACK MARQUEE ═══ */}
      <TechStackMarquee />

      {/* ═══ STATS ═══ */}
      <StatsSection />

      {/* ═══ WHY CHOOSE US ═══ */}
      <WhyChooseUs />

      {/* ═══ SERVICES ═══ */}
      <ServicesSection />

      {/* ═══ PROCESS ═══ */}
      <ScrollProcess />

      {/* ═══ FAQ ═══ */}
      <FAQSection />

      {/* ═══ CTA ═══ */}
      <section className="section ch-cta-section" id="cta-section" ref={ctaRef}>
        <div className="container">
          <motion.div style={{ y: ctaY, scale: ctaScale }}>
            <div className="ch-cta__block">
              <div className="ch-cta__bg" />
              <div className="ch-cta__grid-overlay" />
              {[...Array(6)].map((_, i) => <div key={i} className={`ch-cta__float ch-cta__float--${i + 1}`} />)}
              <div className="ch-cta__content">
                <FadeIn>
                  <span className="ch-cta__label">Let's Build Together</span>
                  <h2 className="ch-cta__title">
                    Have an Idea?<br />
                    <span className="ch-cta__title-accent">Let's Make It Happen.</span>
                  </h2>
                  <p className="ch-cta__text">
                    From early-stage concepts to production-ready platforms — we partner with
                    businesses, startups, and students to deliver solutions that drive real impact.
                  </p>
                  <div className="ch-cta__actions">
                    <Link to="/contact" className="btn btn--cta-primary btn--lg" id="cta-contact-us">
                      Start Your Project <ArrowRight size={16} />
                    </Link>
                    <Link to="/contact" className="btn btn--cta-outline btn--lg" id="cta-consultation">
                      Book a Free Consultation <ChevronRight size={16} />
                    </Link>
                  </div>
                  <p className="ch-cta__subtext">No commitment required · Free initial consultation · Response within 24 hours</p>
                </FadeIn>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
