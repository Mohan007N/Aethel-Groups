import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Briefcase, Code2, Palette, Brain, Cloud, GraduationCap, Send
} from 'lucide-react'
import { PageWrapper, FadeIn, StaggerContainer, staggerItem } from '../components/AnimationWrappers'
import './Careers.css'

const futureRoles = [
  { icon: <Code2 size={20} />, title: 'Software Developers', description: 'Full-stack, backend, and frontend engineers working with modern tech stacks.' },
  { icon: <Palette size={20} />, title: 'UI/UX Designers', description: 'Designers who create intuitive and visually compelling digital experiences.' },
  { icon: <Brain size={20} />, title: 'AI Engineers', description: 'Engineers working on machine learning, NLP, and intelligent systems.' },
  { icon: <Cloud size={20} />, title: 'Cloud Engineers', description: 'Infrastructure specialists managing scalable cloud environments.' },
  { icon: <GraduationCap size={20} />, title: 'Students & Interns', description: 'Aspiring technologists looking for hands-on industry experience.' },
]

export default function Careers() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="page-hero" id="careers-hero">
        <div className="container">
          <FadeIn>
            <div className="page-hero-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Careers</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1>Careers at Aethel Groups</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>
              Join us in building innovative software solutions and shaping the future through technology.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section" id="current-openings">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <span className="section-label">Open Positions</span>
              <h2 className="section-title">Current Openings</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="no-openings-card">
              <div className="no-openings-card__icon">
                <Briefcase size={28} />
              </div>
              <h3>Currently No Active Openings</h3>
              <p>
                We don't have any active job openings at the moment, but we're always interested
                in connecting with talented individuals. Check back soon or reach out through
                our contact page.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Future Opportunities */}
      <section className="section section--alt" id="future-opportunities">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <span className="section-label">Future Opportunities</span>
              <h2 className="section-title">We Welcome Connections From</h2>
              <p className="section-description">
                While we may not have openings right now, we're always looking to connect
                with talented professionals across these areas.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="future-roles-grid">
            {futureRoles.map((role) => (
              <motion.div key={role.title} variants={staggerItem} className="card future-role-card">
                <div className="card-icon">{role.icon}</div>
                <h3 className="card-title">{role.title}</h3>
                <p className="card-description">{role.description}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section" id="careers-cta">
        <div className="container">
          <FadeIn>
            <div className="careers-cta-block">
              <h2>Interested in Working With Us?</h2>
              <p>
                We'd love to hear from you. Reach out through our contact page to introduce
                yourself and share your background.
              </p>
              <Link to="/contact" className="btn btn--primary btn--lg" id="careers-contact-link">
                Get in Touch
                <Send size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}
