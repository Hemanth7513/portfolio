import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ShieldCheck, CreditCard, Cpu } from 'lucide-react';

/* ── SVG Icons ───────────────────────────────────────────── */
const ArrowUpRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginLeft: '4px' }}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact Me' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | sent

  // Track scroll progress for the bottom bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track mouse movement for image shifting
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 35;
      const y = (e.clientY - window.innerHeight / 2) / 35;
      setMouseOffset({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollTo = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <>
      {/* Scroll Progress Tracker */}
      <div className="scroll-progress-bar">
        <div className="scroll-progress-fill" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Floating Centered Nav Island */}
      <div className="nav-island-container">
        <nav className="nav-island" data-open={menuOpen}>
          <div className="nav-header-row">
            <span className="nav-logo">[Hemanth]</span>
            <button className="nav-toggle-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
          <div className="nav-expanded-links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link-item"
                onClick={handleScrollTo(item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Backdrop Blur Overlay when Menu is Open */}
      <div
        className={`nav-backdrop-overlay ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      <main>
        {/* ================================================================
           HERO SECTION
           ================================================================ */}
        <section id="hero" className="hero-section">
          {/* Infinite Marquee in the background */}
          <div className="hero-marquee-container">
            <div className="hero-marquee-row" style={{ transform: 'translateX(-5%)' }}>
              k hemanth sai venkat &nbsp; k hemanth sai venkat &nbsp; k hemanth sai venkat &nbsp;
            </div>
            <div className="hero-marquee-row" style={{ transform: 'translateX(-15%)' }}>
              cse cybersecurity student &nbsp; cse cybersecurity student &nbsp; cse cybersecurity student &nbsp;
            </div>
            <div className="hero-marquee-row" style={{ transform: 'translateX(-2%)' }}>
              open to work &nbsp; open to work &nbsp; open to work &nbsp; open to work &nbsp;
            </div>
          </div>

          {/* Central Portrait Image Box */}
          <div
            className="hero-image-wrapper"
            style={{
              transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
            }}
          >
            <img src="/hemanth-clean.png" alt="K Hemanth Sai Venkat" />
          </div>

          <div className="hero-scroll-indicator">Scroll Down</div>
        </section>

        {/* ================================================================
           ABOUT SECTION
           ================================================================ */}
        <section id="about" className="section-container">
          <span className="section-label">01 / About Me</span>
          <h2 className="section-title">Studying Cybersecurity, Building Products.</h2>

          <div className="about-grid">
            <div>
              <p className="bio-paragraph">
                I'm <strong>K Hemanth Sai Venkat</strong>, a final-year B.Tech Computer Science student specializing in <strong>Cybersecurity</strong>.
              </p>
              <p className="bio-paragraph">
                With a security-first mindset, I audit container environments, build secure B2B ledger platforms, and engineer web applications. I focus on developing reliable architectures, clear systems, and robust logic.
              </p>
            </div>

            <div className="skills-list-container">
              <div className="skill-category-item">
                <div className="skill-category-title">Cybersecurity</div>
                <div className="skill-category-tags">
                  <span className="skill-badge">Network Protocols</span>
                  <span className="skill-badge">Maltego</span>
                  <span className="skill-badge">Wireshark</span>
                </div>
              </div>

              <div className="skill-category-item">
                <div className="skill-category-title">Programming</div>
                <div className="skill-category-tags">
                  <span className="skill-badge">Python</span>
                  <span className="skill-badge">C</span>
                </div>
              </div>

              <div className="skill-category-item">
                <div className="skill-category-title">Full-Stack Web</div>
                <div className="skill-category-tags">
                  <span className="skill-badge">React.js</span>
                  <span className="skill-badge">Node.js</span>
                  <span className="skill-badge">Express.js</span>
                  <span className="skill-badge">REST APIs</span>
                </div>
              </div>

              <div className="skill-category-item">
                <div className="skill-category-title">Tools</div>
                <div className="skill-category-tags">
                  <span className="skill-badge">Git / GitHub</span>
                  <span className="skill-badge">Linux</span>
                  <span className="skill-badge">Canva</span>
                  <span className="skill-badge">VN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
           PROJECTS SECTION
           ================================================================ */}
        <section id="projects" className="section-container">
          <span className="section-label">02 / Selected Works</span>
          <h2 className="section-title">Things I've Built.</h2>

          <div className="projects-staggered-grid">
            {/* Project 1 */}
            <div className="project-card-wrapper">
              <div className="project-card-image-box"><Compass size={40} strokeWidth={1} /></div>
              <div className="project-card-meta">
                <div className="project-card-info">
                  <h3 className="project-card-title">Clubhub</h3>
                  <span className="project-card-sub">Local Social Directory</span>
                </div>
                <span className="project-status-tag">Deployed</span>
              </div>
              <p className="project-card-desc">
                A centralized directory for residents of Vijayawada to search, filter, and discover clubs, sports, and social spots across seven curated categories.
              </p>
              <div className="project-card-tags">
                <span className="project-card-tag">React</span>
                <span className="project-card-tag">CSS Grid</span>
                <span className="project-card-tag">Leaflet Maps</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Hemanth7513/clubhub" target="_blank" rel="noopener noreferrer" className="project-link-btn" title="GitHub Code">
                  <GithubIcon size={14} />
                </a>
                <a href="https://clubhub-pearl.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link-btn" title="Live Demo">
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card-wrapper">
              <div className="project-card-image-box"><ShieldCheck size={40} strokeWidth={1} /></div>
              <div className="project-card-meta">
                <div className="project-card-info">
                  <h3 className="project-card-title">Steelbox</h3>
                  <span className="project-card-sub">Container Security Scanner</span>
                </div>
                <span className="project-status-tag">Ongoing</span>
              </div>
              <p className="project-card-desc">
                A command-line security auditing script that parses running Docker container lifecycles to detect misconfigurations and generate remediation advice.
              </p>
              <div className="project-card-tags">
                <span className="project-card-tag">Python</span>
                <span className="project-card-tag">Docker API</span>
                <span className="project-card-tag">Shell Scripting</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Hemanth7513/steelbox" target="_blank" rel="noopener noreferrer" className="project-link-btn" title="GitHub Code">
                  <GithubIcon size={14} />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card-wrapper">
              <div className="project-card-image-box"><CreditCard size={40} strokeWidth={1} /></div>
              <div className="project-card-meta">
                <div className="project-card-info">
                  <h3 className="project-card-title">Udhaar</h3>
                  <span className="project-card-sub">B2B Payment Ledger</span>
                </div>
                <span className="project-status-tag">In Development</span>
              </div>
              <p className="project-card-desc">
                A secure B2B transaction and outstanding credit tracking ledger SaaS tailored for local businesses, featuring automated reminder queues.
              </p>
              <div className="project-card-tags">
                <span className="project-card-tag">React.js</span>
                <span className="project-card-tag">Node.js</span>
                <span className="project-card-tag">PostgreSQL</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Hemanth7513/udhaar" target="_blank" rel="noopener noreferrer" className="project-link-btn" title="GitHub Code">
                  <GithubIcon size={14} />
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card-wrapper">
              <div className="project-card-image-box"><Cpu size={40} strokeWidth={1} /></div>
              <div className="project-card-meta">
                <div className="project-card-info">
                  <h3 className="project-card-title">Zesty Co.</h3>
                  <span className="project-card-sub">Technical Head</span>
                </div>
                <span className="project-status-tag">Pre-Launch</span>
              </div>
              <p className="project-card-desc">
                I lead the technical direction, deployment infrastructure, and database configurations for a food startup prepping for launch.
              </p>
              <div className="project-card-tags">
                <span className="project-card-tag">Next.js</span>
                <span className="project-card-tag">Vercel Cloud</span>
                <span className="project-card-tag">Architecture</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Hemanth7513/zesty-co" target="_blank" rel="noopener noreferrer" className="project-link-btn" title="GitHub Code">
                  <GithubIcon size={14} />
                </a>
                <a href="https://zesty-co.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link-btn" title="Live Site">
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
           JOURNEY / TIMELINE SECTION
           ================================================================ */}
        <section id="journey" className="section-container">
          <span className="section-label">03 / My Timeline</span>
          <h2 className="section-title">Journey &amp; Credentials.</h2>

          <div className="journey-list">
            <div className="journey-row">
              <div className="journey-number">01</div>
              <div className="journey-title-container">
                <span className="journey-title">Technical Head</span>
                <span className="journey-subtitle">Zesty Co. — Food Startup</span>
              </div>
              <p className="journey-desc">
                Directing engineering pipelines, implementing secure cloud deployments, and designing robust system architectures.
              </p>
              <div className="journey-date">2026 – Present</div>
            </div>

            <div className="journey-row">
              <div className="journey-number">02</div>
              <div className="journey-title-container">
                <span className="journey-title">B.Tech CSE (Cybersecurity)</span>
                <span className="journey-subtitle">Final Year · 8+ CGPA</span>
              </div>
              <p className="journey-desc">
                Analyzing container threat vectors, auditing network protocols, and developing automated scanning scripts.
              </p>
              <div className="journey-date">2023 – Present</div>
            </div>

            <div className="journey-row">
              <div className="journey-number">03</div>
              <div className="journey-title-container">
                <span className="journey-title">Class XII (CBSE)</span>
                <span className="journey-subtitle">Viva The School, Namburu</span>
              </div>
              <p className="journey-desc">
                Completed senior secondary education focusing on Mathematics, Physics, Chemistry, and Computer Science.
              </p>
              <div className="journey-date">2021 – 2023</div>
            </div>

            <div className="journey-row">
              <div className="journey-number">04</div>
              <div className="journey-title-container">
                <span className="journey-title">Class X (CBSE)</span>
                <span className="journey-subtitle">Nalanda Vidya Niketan</span>
              </div>
              <p className="journey-desc">
                Completed secondary school education with distinction, building strong mathematical and logical foundations.
              </p>
              <div className="journey-date">2019 – 2021</div>
            </div>
          </div>
        </section>

        {/* ================================================================
           CONTACT SECTION
           ================================================================ */}
        <section id="contact" className="section-container">
          <span className="section-label">04 / Get In Touch</span>
          <h2 className="section-title">Let's Build Something Secure.</h2>

          <div className="contact-grid">
            <div className="contact-direct-links">
              <a href="mailto:hemaxtth@gmail.com" className="contact-direct-link">
                hemaxtth@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/hemanth-k-57a977343/" target="_blank" rel="noopener noreferrer" className="contact-direct-link">
                LinkedIn <ArrowUpRight size={18} />
              </a>
              <a href="https://github.com/Hemanth7513" target="_blank" rel="noopener noreferrer" className="contact-direct-link">
                GitHub <ArrowUpRight size={18} />
              </a>
            </div>

            <div>
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <label htmlFor="c-name">Name</label>
                  <input
                    type="text"
                    id="c-name"
                    required
                    placeholder="Arjun Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="c-email">Email</label>
                  <input
                    type="email"
                    id="c-email"
                    required
                    placeholder="arjun@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="c-msg">Message</label>
                  <textarea
                    id="c-msg"
                    rows="4"
                    required
                    placeholder="Hello, let's talk about..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                {formStatus === 'sent' ? (
                  <div style={{ color: '#166534', fontWeight: '500', fontSize: '0.95em' }}>
                    Message sent successfully. I will reach out soon.
                  </div>
                ) : (
                  <button type="submit" disabled={formStatus === 'sending'} className="submit-btn">
                    {formStatus === 'sending' ? 'sending...' : 'Send Message'}
                  </button>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ================================================================
         FOOTER SECTION (yeqq.com.tr style)
         ================================================================ */}
      <footer className="footer-section">
        <div className="footer-top">
          <a href="mailto:hemaxtth@gmail.com" className="footer-email-link">
            hemaxtth@gmail.com
          </a>
          
          <div className="footer-links-grid">
            <div className="footer-link-col">
              <span className="footer-link-title">Socials</span>
              <a href="https://github.com/Hemanth7513" target="_blank" rel="noopener noreferrer" className="footer-link-item">GitHub</a>
              <a href="https://www.linkedin.com/in/hemanth-k-57a977343/" target="_blank" rel="noopener noreferrer" className="footer-link-item">LinkedIn</a>
            </div>
            <div className="footer-link-col">
              <span className="footer-link-title">Navigation</span>
              {NAV_ITEMS.map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={handleScrollTo(item.id)} className="footer-link-item">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Massive brand text signature */}
        <div className="footer-wordmark">hemanth</div>

        <div className="footer-bottom-bar">
          <span>&copy; {new Date().getFullYear()} K Hemanth Sai Venkat</span>
          <span>Cybersecurity Student Portfolio</span>
        </div>
      </footer>
    </>
  );
}
