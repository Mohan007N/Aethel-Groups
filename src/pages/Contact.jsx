import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Send, Mail, User, MapPin, ArrowUpRight, CheckCircle2, Clock, Linkedin,
  AlertCircle, Loader2, Phone, Github, Instagram, Twitter
} from 'lucide-react'
import { PageWrapper, FadeIn } from '../components/AnimationWrappers'
import './Contact.css'

// Points to the Vercel serverless function (api/contact.py) in production,
// and to the local FastAPI server in development (via Vite proxy).
const API_URL = import.meta.env.VITE_API_URL || ''

const serviceOptions = [
  'Custom Software Development',
  'Web Development',
  'Mobile App Development',
  'Artificial Intelligence',
  'Cloud & DevOps',
  'UI/UX Design',
  'Academic & College Projects',
  'Other',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}))
        throw new Error(errData.detail || 'Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', organization: '', service: '', message: '' })
      setTimeout(() => setStatus('idle'), 8000)
    } catch (err) {
      console.error('Contact form error:', err)
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="page-hero" id="contact-hero">
        <div className="container">
          <FadeIn>
            <div className="page-hero-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Contact</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1>Let's Discuss Your Next Project</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>Share your vision with us — we'll help you build it right.</p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section" id="contact-content">
        <div className="container">
          <div className="contact-layout">
            {/* Form */}
            <FadeIn direction="left" className="contact-form-wrapper">
              <div className="contact-form-card">
                <h2 className="contact-form-card__title">Send Us a Message</h2>
                <p className="contact-form-card__subtitle">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {status === 'success' ? (
                  <motion.div
                    className="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle2 size={40} />
                    <h3>Message Sent Successfully</h3>
                    <p>Thank you for reaching out. We'll respond within 1-2 business days.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} id="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-name">Full Name *</label>
                        <input type="text" id="contact-name" name="name" className="form-input" placeholder="Your full name" value={formData.name} onChange={handleChange} required />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-email">Email Address *</label>
                        <input type="email" id="contact-email" name="email" className="form-input" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                        <input type="tel" id="contact-phone" name="phone" className="form-input" placeholder="Your phone number" value={formData.phone} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-organization">Organization / College</label>
                        <input type="text" id="contact-organization" name="organization" className="form-input" placeholder="Company or institution name" value={formData.organization} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-service">Service Required</label>
                      <select id="contact-service" name="service" className="form-input" value={formData.service} onChange={handleChange}>
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-message">Project Description *</label>
                      <textarea id="contact-message" name="message" className="form-input" placeholder="Tell us about your project, goals, and timeline..." rows={5} value={formData.message} onChange={handleChange} required />
                    </div>

                    {status === 'error' && (
                      <motion.div
                        className="contact-error-banner"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle size={16} />
                        <span>{errorMsg}</span>
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      className="btn btn--primary btn--lg contact-submit-btn"
                      id="contact-submit"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 size={16} className="contact-spinner" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Info Sidebar */}
            <FadeIn direction="right" className="contact-sidebar">
              <div className="contact-info-card">
                <h3 className="contact-info-card__title">Contact Information</h3>

                <div className="contact-info-item">
                  <div className="contact-info-item__icon">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="contact-info-item__label">Founder</p>
                    <p className="contact-info-item__value">Mohana Krishnan N</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-item__icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="contact-info-item__label">Email</p>
                    <a href="mailto:mohankrishnan4099@gmail.com" className="contact-info-item__value contact-info-item__link">
                      mohankrishnan4099@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-item__icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="contact-info-item__label">Phone</p>
                    <a href="tel:+918610844594" className="contact-info-item__value contact-info-item__link">
                      +91 86108 44594
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-item__icon" style={{ background: 'rgba(37, 211, 102, 0.1)', color: '#25D366' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.556 0 10.066-4.513 10.068-10.07.001-2.693-1.045-5.226-2.946-7.129C16.5 1.505 13.97 .459 11.274.459c-5.568 0-10.093 4.522-10.096 10.086a9.988 9.988 0 001.448 5.12L1.7 20.89l5.244-1.372c.002 0 .003.001.003.001zm13.167-9.288c-.29-.146-1.72-.85-1.986-.947-.267-.098-.46-.147-.655.146-.194.293-.75.948-.92 1.144-.168.196-.338.22-.63.073-.29-.147-1.228-.452-2.34-1.443-.865-.772-1.449-1.725-1.619-2.018-.17-.294-.018-.453.128-.598.13-.132.29-.34.436-.51.145-.17.194-.291.29-.485.097-.194.049-.364-.025-.51-.073-.146-.655-1.579-.897-2.162-.236-.57-.495-.492-.68-.502-.17-.008-.364-.01-.559-.01-.195 0-.51.073-.777.364-.267.293-1.02 1.022-1.02 2.492 0 1.47 1.07 2.89 1.216 3.084.145.195 2.103 3.21 5.093 4.503.712.308 1.267.491 1.7.63.716.227 1.368.195 1.884.118.574-.085 1.72-.704 1.963-1.385.243-.682.243-1.266.17-1.385-.073-.118-.266-.195-.558-.34z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-info-item__label">WhatsApp</p>
                    <a href="https://wa.me/918610844594" target="_blank" rel="noopener noreferrer" className="contact-info-item__value contact-info-item__link">
                      Direct Message
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-item__icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="contact-info-item__label">Office Location</p>
                    <p className="contact-info-item__value">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-item__icon">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="contact-info-item__label">Response Time</p>
                    <p className="contact-info-item__value">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="contact-social-card">
                <h3 className="contact-social-card__title">Follow Us</h3>
                <div className="contact-social-links">
                  <a href="https://www.linkedin.com/company/aethel-groups/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    <Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    <Github size={16} /> GitHub <ArrowUpRight size={13} />
                  </a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    <Twitter size={16} /> Twitter / X <ArrowUpRight size={13} />
                  </a>
                  <a href="https://www.instagram.com/aethel_groups/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    <Instagram size={16} /> Instagram <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Google Map - Chennai */}
      <section className="contact-map" id="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.23481992716!2d79.87933374999999!3d13.047985949999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6571f60!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1718500000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Aethel Groups - Chennai Office"
        />
      </section>
    </PageWrapper>
  )
}
