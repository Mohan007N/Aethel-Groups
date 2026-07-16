import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Target, Eye, Sparkles, Shield, Users, BookOpen,
  Heart, Code2, Globe, Smartphone, Brain, Cloud, GraduationCap,
  Linkedin, ArrowUpRight
} from 'lucide-react'

import { PageWrapper, FadeIn, StaggerContainer, staggerItem } from '../components/AnimationWrappers'
import './About.css'

const focusAreas = [
  { icon: <Code2 size={20} />, label: 'Software Engineering' },
  { icon: <Globe size={20} />, label: 'Web Technologies' },
  { icon: <Smartphone size={20} />, label: 'Mobile Applications' },
  { icon: <Brain size={20} />, label: 'Artificial Intelligence' },
  { icon: <Cloud size={20} />, label: 'Cloud Solutions' },
  { icon: <GraduationCap size={20} />, label: 'Academic Project Development' },
]

const coreValues = [
  { icon: <Sparkles size={20} />, title: 'Innovation', description: 'Exploring new technologies and creative approaches to solve complex challenges.' },
  { icon: <Shield size={20} />, title: 'Integrity', description: 'Operating with transparency, honesty, and ethical standards in everything we do.' },
  { icon: <Target size={20} />, title: 'Quality', description: 'Delivering reliable, well-tested, and maintainable technology solutions.' },
  { icon: <Users size={20} />, title: 'Collaboration', description: 'Working closely with clients and teams to achieve shared goals.' },
  { icon: <BookOpen size={20} />, title: 'Continuous Learning', description: 'Staying updated with the latest tools, frameworks, and industry practices.' },
  { icon: <Heart size={20} />, title: 'Customer Success', description: 'Measuring our success through the impact we create for our clients.' },
]

export default function About() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="page-hero" id="about-hero">
        <div className="container">
          <FadeIn>
            <div className="page-hero-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1>About Aethel Groups</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>A technology-focused software company dedicated to building scalable and impactful digital solutions.</p>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" id="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <FadeIn direction="left">
              <div className="mission-card">
                <div className="mission-card__icon-wrapper">
                  <Target size={24} />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To empower businesses and students through innovative technology solutions
                  that solve real-world challenges.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="mission-card">
                <div className="mission-card__icon-wrapper mission-card__icon-wrapper--alt">
                  <Eye size={24} />
                </div>
                <h3>Our Vision</h3>
                <p>
                  To become a trusted technology partner known for delivering high-quality
                  software products and impactful digital experiences.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section section--alt" id="company-overview">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <span className="section-label">Company Overview</span>
              <h2 className="section-title">What We Focus On</h2>
              <p className="section-description">
                Aethel Groups operates across multiple domains in software development and technology consulting.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="focus-areas-grid">
            {focusAreas.map((area) => (
              <motion.div key={area.label} variants={staggerItem} className="focus-area-card">
                <div className="focus-area-card__icon">{area.icon}</div>
                <span className="focus-area-card__label">{area.label}</span>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" id="core-values">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <span className="section-label">Our Principles</span>
              <h2 className="section-title">Core Values</h2>
              <p className="section-description">
                The principles that guide every decision and project we undertake.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid-3 values-grid">
            {coreValues.map((value) => (
              <motion.div key={value.title} variants={staggerItem} className="card value-card">
                <div className="card-icon">{value.icon}</div>
                <h3 className="card-title">{value.title}</h3>
                <p className="card-description">{value.description}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section section--alt" id="about-founders">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Our Leadership</span>
            <h2 className="section-title">Meet Our Founders</h2>
            <p className="section-description">
              Leading Aethel Groups with a clear vision to deliver high-quality, impactful technology solutions.
            </p>
          </div>
          <div className="about-founders-grid">
            <FadeIn direction="left" className="about-founder-card">
              <div className="about-founder-card__portrait-wrapper">
                <div className="about-founder-card__portrait">
                  <img src="/images/mohana_krishnan.jpg" alt="Mohana Krishnan N" className="about-founder-card__img" />
                </div>
              </div>
              <div className="about-founder-card__info">
                <h3 className="about-founder-card__name">Mohana Krishnan N</h3>
                <p className="about-founder-card__title">Founder & CEO, Aethel Groups</p>
                <p className="about-founder-card__bio">
                  Passionate technology entrepreneur focused on building innovative software
                  solutions and creating meaningful digital experiences through technology.
                  Leading Aethel Groups with a vision to deliver high-quality, impactful
                  technology products for businesses and students.
                </p>
                <div className="about-founder-card__tags">
                  <span>AI & ML Systems</span>
                  <span>Product Architecture</span>
                  <span>Full-Stack Web</span>
                </div>
                <a
                  href="https://www.linkedin.com/company/aethel-groups/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-founder-card__linkedin"
                >
                  <Linkedin size={16} />
                  <span>Connect</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </FadeIn>

            <FadeIn direction="right" className="about-founder-card">
              <div className="about-founder-card__portrait-wrapper">
                <div className="about-founder-card__portrait">
                  <img src="/images/monishwaran.jpg" alt="Monishwaran" className="about-founder-card__img" />
                </div>
              </div>
              <div className="about-founder-card__info">
                <h3 className="about-founder-card__name">Monishwaran</h3>
                <p className="about-founder-card__title">Co-Founder & COO, Aethel Groups</p>
                <p className="about-founder-card__bio">
                  Co-founder driving operational excellence and technical delivery. Dedicated to engineering robust architectures, scaling infrastructure, and fostering strong collaborative ecosystems for successful project delivery.
                </p>
                <div className="about-founder-card__tags">
                  <span>Cloud & DevOps</span>
                  <span>System Optimization</span>
                  <span>Technical Delivery</span>
                </div>
                <a
                  href="https://www.linkedin.com/in/monishwaran-k-ba0a1230b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-founder-card__linkedin"
                >
                  <Linkedin size={16} />
                  <span>Connect</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </PageWrapper>
  )
}
