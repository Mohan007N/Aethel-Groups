import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin, Phone, Linkedin, Github, Twitter, Instagram } from 'lucide-react'
import './Footer.css'

const companyLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Team', path: '/team' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

const servicesLinks = [
  { label: 'Custom Software Development', path: '/services#custom-software-development' },
  { label: 'Web Development', path: '/services#web-development' },
  { label: 'Mobile App Development', path: '/services#mobile-app-development' },
  { label: 'AI Solutions', path: '/services#ai-machine-learning-solutions' },
  { label: 'Cloud & DevOps', path: '/services#cloud-solutions-devops' },
  { label: 'UI/UX Design', path: '/services#web-development' },
  { label: 'Academic Projects', path: '/services#academic-research-projects' },
]

const resources = [
  { label: 'Case Studies', path: '/services' },
  { label: 'Insights & Blog', path: '/services' },
  { label: 'Documentation', path: '/services' },
  { label: 'API Reference', path: '/services' },
]

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      {/* Pre-footer CTA strip */}
      <div className="footer-prefooter">
        <div className="container footer-prefooter__inner">
          <div className="footer-prefooter__text">
            <h3>Ready to Build Your Next Solution?</h3>
            <p>Let's discuss how we can help accelerate your business with technology.</p>
          </div>
          <Link to="/contact" className="btn btn--accent btn--lg footer-prefooter__btn">
            Let's Talk
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-mark">
                <img src="/images/logo.jpg" alt="Aethel Groups Logo" className="footer__logo-img" />
              </div>
              <span className="footer__logo-text">Aethel Groups</span>
            </div>
            <p className="footer__tagline">
              Engineering scalable, secure, and intelligent digital solutions for businesses across industries.
            </p>
            <div className="footer__contact-items">
              <a href="mailto:mohankrishnan4099@gmail.com" className="footer__contact-item">
                <Mail size={16} />
                mohankrishnan4099@gmail.com
              </a>
              <a href="tel:+918610844594" className="footer__contact-item">
                <Phone size={16} />
                +91 86108 44594
              </a>
              <a href="https://wa.me/918610844594" target="_blank" rel="noopener noreferrer" className="footer__contact-item footer__contact-item--whatsapp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.556 0 10.066-4.513 10.068-10.07.001-2.693-1.045-5.226-2.946-7.129C16.5 1.505 13.97 .459 11.274.459c-5.568 0-10.093 4.522-10.096 10.086a9.988 9.988 0 001.448 5.12L1.7 20.89l5.244-1.372c.002 0 .003.001.003.001zm13.167-9.288c-.29-.146-1.72-.85-1.986-.947-.267-.098-.46-.147-.655.146-.194.293-.75.948-.92 1.144-.168.196-.338.22-.63.073-.29-.147-1.228-.452-2.34-1.443-.865-.772-1.449-1.725-1.619-2.018-.17-.294-.018-.453.128-.598.13-.132.29-.34.436-.51.145-.17.194-.291.29-.485.097-.194.049-.364-.025-.51-.073-.146-.655-1.579-.897-2.162-.236-.57-.495-.492-.68-.502-.17-.008-.364-.01-.559-.01-.195 0-.51.073-.777.364-.267.293-1.02 1.022-1.02 2.492 0 1.47 1.07 2.89 1.216 3.084.145.195 2.103 3.21 5.093 4.503.712.308 1.267.491 1.7.63.716.227 1.368.195 1.884.118.574-.085 1.72-.704 1.963-1.385.243-.682.243-1.266.17-1.385-.073-.118-.266-.195-.558-.34z"/>
                </svg>
                <span>WhatsApp Message</span>
              </a>
              <div className="footer__contact-item">
                <MapPin size={16} />
                Chennai, Tamil Nadu, India
              </div>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__col-list">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__col-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__col-list">
              {servicesLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="footer__col-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Resources</h4>
            <ul className="footer__col-list">
              {resources.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="footer__col-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="footer__col-title" style={{ marginTop: '2rem' }}>Follow Us</h4>
            <div className="footer__social-links">
              <a href="https://www.linkedin.com/company/aethel-groups/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Twitter / X">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com/aethel_groups/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Aethel Groups. All Rights Reserved.
          </p>
          <div className="footer__bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <span className="footer__bottom-sep">·</span>
            <Link to="/contact">Terms of Service</Link>
            <span className="footer__bottom-sep">·</span>
            <Link to="/contact">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
