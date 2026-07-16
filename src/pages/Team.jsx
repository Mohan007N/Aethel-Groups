import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Users, UserPlus, ArrowUpRight, Linkedin, Award, Zap, ShieldCheck, Target } from 'lucide-react'
import { PageWrapper, FadeIn, StaggerContainer, staggerItem } from '../components/AnimationWrappers'
import './Team.css'

const openPositions = [
  { title: 'Full-Stack Developer', dept: 'Engineering', desc: 'Build scalable React apps and robust Node.js backends.' },
  { title: 'UI/UX Designer', dept: 'Design', desc: 'Design stunning user interfaces and clean user journeys.' },
  { title: 'AI & Data Engineer', dept: 'AI Solutions', desc: 'Implement machine learning models and intelligent automations.' }
]

const philosophies = [
  {
    icon: <Zap size={20} />,
    title: 'Excellence in Execution',
    desc: 'We don\'t just write code; we architect solutions that are clean, performant, and built to scale.'
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Trust & Transparency',
    desc: 'Honest communication, predictable timelines, and rigorous quality standards at every milestone.'
  },
  {
    icon: <Award size={20} />,
    title: 'Innovation-First',
    desc: 'Constantly adopting state-of-the-art frameworks, AI tools, and architectures to keep you ahead.'
  }
]

export default function Team() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="page-hero" id="team-hero">
        <div className="container">
          <FadeIn>
            <div className="page-hero-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Team</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1>Meet Our Team</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>The visionaries, engineers, and builders behind Aethel Groups' industry-grade solutions.</p>
          </FadeIn>
        </div>
      </section>

      {/* Founders */}
      <section className="section" id="team-founder">
        <div className="container">
          <FadeIn>
            <div className="section-header section-header--center">
              <span className="section-label">Leadership</span>
              <h2 className="section-title">The Founders</h2>
              <p className="section-description">
                Guiding Aethel Groups with a combined focus on technological innovation, structural excellence, and operational delivery.
              </p>
            </div>
          </FadeIn>
          <div className="team-founders-grid">
            <FadeIn delay={0.1}>
              <div className="team-founder-card">
                <div className="team-founder-card__portrait-wrapper">
                  <div className="team-founder-card__portrait">
                    <img src="/images/mohana_krishnan.jpg" alt="Mohana Krishnan N" className="team-founder-card__img" />
                  </div>
                </div>
                <div className="team-founder-card__info">
                  <h3 className="team-founder-card__name">Mohana Krishnan N</h3>
                  <p className="team-founder-card__role">Founder & CEO</p>
                  <p className="team-founder-card__bio">
                    Passionate technology entrepreneur focused on building innovative software solutions and creating meaningful digital experiences through technology. Leading Aethel Groups with a vision to deliver high-quality, impactful technology products for businesses and students.
                  </p>
                  <div className="team-founder-card__tags">
                    <span>AI & ML Systems</span>
                    <span>Product Architecture</span>
                    <span>Full-Stack Web</span>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/aethel-groups/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-founder-card__linkedin"
                  >
                    <Linkedin size={16} />
                    <span>Connect</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="team-founder-card">
                <div className="team-founder-card__portrait-wrapper">
                  <div className="team-founder-card__portrait">
                    <img src="/images/monishwaran.jpg" alt="Monishwaran" className="team-founder-card__img" />
                  </div>
                </div>
                <div className="team-founder-card__info">
                  <h3 className="team-founder-card__name">Monishwaran</h3>
                  <p className="team-founder-card__role">Co-Founder & COO</p>
                  <p className="team-founder-card__bio">
                    Co-founder driving operational excellence and technical delivery. Dedicated to engineering robust architectures, scaling infrastructure, and fostering strong collaborative ecosystems for successful project delivery.
                  </p>
                  <div className="team-founder-card__tags">
                    <span>Cloud & DevOps</span>
                    <span>System Optimization</span>
                    <span>Technical Delivery</span>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/monishwaran-k-ba0a1230b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-founder-card__linkedin"
                  >
                    <Linkedin size={16} />
                    <span>Connect</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Philosophy / Values */}
      <section className="section section--alt" id="team-philosophy">
        <div className="container">
          <div className="team-philosophy-box">
            <div className="grid-3">
              {philosophies.map((philo, idx) => (
                <FadeIn key={philo.title} delay={idx * 0.1} className="philosophy-item">
                  <div className="philosophy-item__icon">
                    {philo.icon}
                  </div>
                  <h4 className="philosophy-item__title">{philo.title}</h4>
                  <p className="philosophy-item__desc">{philo.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Growing Team */}
      <section className="section" id="growing-team">
        <div className="container">
          <FadeIn>
            <div className="section-header section-header--center">
              <span className="section-label">Grow With Us</span>
              <h2 className="section-title">Join Our Talent Pipeline</h2>
              <p className="section-description">
                We are always looking for passionate builders, developers, and designers to help build the future of software and small-scale electronics.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid-3 team-coming-grid">
            {openPositions.map((pos) => (
              <motion.div key={pos.title} variants={staggerItem} className="team-placeholder-card">
                <div className="team-placeholder-card__icon">
                  <UserPlus size={22} />
                </div>
                <h4 className="team-placeholder-card__title">{pos.title}</h4>
                <p className="team-placeholder-card__dept">{pos.dept}</p>
                <p className="team-placeholder-card__desc">{pos.desc}</p>
                <Link to="/careers" className="team-placeholder-card__link">
                  <span>Explore Role</span>
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>
          <FadeIn>
            <div className="team-join-cta">
              <p>Ready to make an impact? Share your details with us.</p>
              <Link to="/careers" className="btn btn--secondary" id="team-view-careers">
                View Open Positions
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}
