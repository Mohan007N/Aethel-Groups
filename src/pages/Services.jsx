import { Link } from 'react-router-dom'
import {
  ArrowRight, Code2, Globe, Smartphone, Brain, Cloud, LineChart, Cpu,
  GraduationCap, CheckCircle2, Bot, ShieldCheck
} from 'lucide-react'
import { PageWrapper, FadeIn } from '../components/AnimationWrappers'
import './Services.css'

const services = [
  {
    icon: <Code2 size={24} />,
    title: 'Custom Software Development',
    description: 'Tailored enterprise applications, internal business tools, and process automation platforms built to solve your unique workflow challenges and scale with your growth.',
    highlights: ['Enterprise Solutions', 'Internal Business Tools', 'Workflow Automation Platforms', 'Custom Database Applications', 'Legacy System Modernization', 'API Design & Integration'],
    color: '#2563EB', bg: '#EFF6FF',
  },
  {
    icon: <Globe size={24} />,
    title: 'Web Development',
    description: 'High-performance websites, progressive web apps (PWAs), and full-stack web platforms built with React, Next.js, and modern front-end/back-end tooling.',
    highlights: ['Single Page Applications (SPAs)', 'Progressive Web Apps (PWAs)', 'Full-Stack Web Portals', 'Responsive Web Design', 'SEO & Performance Tuning', 'CMS Integrations'],
    color: '#059669', bg: '#ECFDF5',
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android using Flutter and React Native to deliver rich, smooth, and engaging user experiences.',
    highlights: ['iOS & Android Apps', 'Cross-Platform Apps (Flutter/React Native)', 'Mobile UI/UX Design', 'App Store & Google Play Publishing', 'Offline-First Applications', 'Real-Time Sync Systems'],
    color: '#7C3AED', bg: '#F5F3FF',
  },
  {
    icon: <Brain size={24} />,
    title: 'AI & Machine Learning Solutions',
    description: 'Intelligent automation, predictive modeling, clustering, and decision intelligence systems using modern frameworks and custom-trained model pipelines.',
    highlights: ['Predictive Modeling & Forecasting', 'Natural Language Processing (NLP)', 'Computer Vision Applications', 'Recommendation Engines', 'Anomaly & Fraud Detection', 'Custom ML Model Training'],
    color: '#8B5CF6', bg: '#F5F3FF',
  },
  {
    icon: <Bot size={24} />,
    title: 'Generative AI Solutions',
    description: 'Deploy intelligent LLM applications, custom chatbots, and automatic content systems powered by state-of-the-art foundation models.',
    highlights: ['Custom AI Chatbots', 'AI Virtual Assistants', 'AI Copilots & Code Companions', 'Content Generation & Marketing Systems', 'Document Intelligence & Search', 'LLM Fine-Tuning & Prompt Engineering'],
    color: '#7C3AED', bg: '#F5F3FF',
  },
  {
    icon: <Brain size={24} />,
    title: 'Agentic AI Development',
    description: 'Design autonomous AI agents capable of reasoning, planning, and executing complex multi-step workflows with minimal human oversight.',
    highlights: ['Multi-Agent Systems', 'AI Workflow Automation', 'Autonomous Research Agents', 'Task Automation Agents', 'AI Decision Support Systems', 'Intelligent Robotic Process Automation'],
    color: '#0891B2', bg: '#ECFEFF',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'MLOps & LLMOps',
    description: 'Establish reliable pipelines for deploying, monitoring, testing, and scaling machine learning models and LLMs in production environments.',
    highlights: ['Model Deployment & Versioning', 'LLM & Prompt Monitoring', 'LLM Evaluation & Guardrails', 'Performance Optimization', 'CI/CD for Machine Learning', 'Infrastructure Automation'],
    color: '#059669', bg: '#ECFDF5',
  },
  {
    icon: <Cloud size={24} />,
    title: 'Cloud Solutions & DevOps',
    description: 'Deploy scale-ready, secure, and resilient cloud architectures. Streamline software releases using Docker, Kubernetes, and optimized CI/CD pipelines.',
    highlights: ['AWS, GCP & Azure Deployment', 'Docker Containerization', 'Kubernetes Orchestration', 'CI/CD Pipeline Setup', 'Infrastructure as Code (IaC)', 'Security & Compliance Auditing'],
    color: '#0891B2', bg: '#ECFEFF',
  },
  {
    icon: <LineChart size={24} />,
    title: 'Data & Business Analytics',
    description: 'End-to-end data engineering pipelines, sales forecasting, KPI dashboards, and business intelligence reporting to drive data-centric decisions.',
    highlights: ['Interactive BI Dashboards (Power BI/Tableau)', 'Data Pipeline Engineering (ETL)', 'Statistical Analysis & Modeling', 'Sales & Demand Forecasting', 'KPI Tracking Systems', 'Big Data Solutions'],
    color: '#0A66C2', bg: '#EFF6FF',
  },
  {
    icon: <Cpu size={24} />,
    title: 'Small-Scale Hardware & IoT',
    description: 'Connected hardware prototypes, smart sensing systems, and embedded firmware using microcontrollers like Arduino, Raspberry Pi, and ESP32.',
    highlights: ['IoT-Connected Devices', 'Embedded Firmware Development', 'Sensor Integrations (Temp, Motion, etc.)', 'Smart Automation Prototypes', 'Hardware-to-Cloud Dashboards', 'Custom Circuit Prototyping'],
    color: '#B45309', bg: '#FFFBEB',
  },
  {
    icon: <GraduationCap size={24} />,
    title: 'Academic & Research Projects',
    description: 'Industry-standard project guidance, final-year engineering projects, and research prototypes across software and electronics domains for students.',
    highlights: ['IEEE & Springer Paper Implementations', 'Full Code & Circuit Explanations', 'Project Setup & Deployment Guidance', 'Technical Report Drafting Help', 'Viva-Voce / Presentation Prep', 'Custom Technology Stack Choice'],
    color: '#4F46E5', bg: '#EEF2FF',
  },
]



export default function Services() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="page-hero" id="services-hero">
        <div className="container">
          <FadeIn>
            <div className="page-hero-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Services</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1>Our Services</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>
              End-to-end AI and machine learning services designed to help organizations
              automate workflows, unlock insights, and build intelligent solutions that drive growth.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services-list">
        <div className="container">
          <div className="services-detail-list">
            {services.map((service, i) => {
              const serviceId = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              return (
                <FadeIn key={service.title} delay={0.05 * i}>
                  <div id={serviceId} className="service-detail" style={{ '--svc-color': service.color, '--svc-bg': service.bg }}>
                    <div className="service-detail__icon-wrapper">
                      <div className="service-detail__icon">{service.icon}</div>
                    </div>
                    <div className="service-detail__content">
                      <h2 className="service-detail__title">{service.title}</h2>
                      <p className="service-detail__desc">{service.description}</p>
                      <ul className="service-detail__highlights">
                        {service.highlights.map((h) => (
                          <li key={h}>
                            <CheckCircle2 size={15} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="service-detail__badge">{service.title}</div>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="section" id="services-cta">
        <div className="container">
          <FadeIn>
            <div className="services-page-cta">
              <h2>Ready to Build with AI?</h2>
              <p>
                Let's discuss your requirements and explore how we can help you harness
                the power of AI to achieve your business objectives.
              </p>
              <Link to="/contact" className="btn btn--primary btn--lg" id="services-contact-cta">
                Let's Talk
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}
