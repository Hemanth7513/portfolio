import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CreditCard, MapPin, ExternalLink, Layers, Utensils } from 'lucide-react';
import { Github } from '../components/Icons';
import TiltCard from '../components/TiltCard';
import './sections.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      id: 'zesty-co',
      title: 'Zesty Co.',
      subtitle: 'Technical Head | Food Startup',
      description: 'I serve as the Technical Head, managing the engineering pipeline, system architecture, and cloud deployment for a modern food startup preparing for public launch.',
      icon: <Utensils size={24} />,
      status: 'Upcoming / Pre-Launch',
      tags: ['startup', 'leadership', 'frontend'],
      category: 'saas',
      tech: ['React', 'Next.js', 'Vercel Deployment', 'Architecture'],
      liveUrl: 'https://zesty-co.vercel.app/'
    },
    {
      id: 'steelbox',
      title: 'Steelbox',
      subtitle: 'Container Security Scanner',
      description: 'This is an ongoing security research project focused on auditing Docker container lifecycles against known vulnerability catalogs, providing detailed reporting and remediation tips.',
      icon: <Shield size={24} />,
      status: 'Ongoing / Research',
      tags: ['security', 'python', 'docker'],
      category: 'security',
      tech: ['Python', 'Docker API', 'JSON-Schema', 'Shell Scripting']
    },
    {
      id: 'udhaar',
      title: 'Udhaar',
      subtitle: 'B2B Payment Ledger SaaS',
      description: 'This is a dedicated B2B financial accounting platform designed for wholesalers to log transactions, manage customer ledgers, and automate payment notifications.',
      icon: <CreditCard size={24} />,
      status: 'Ongoing / Development',
      tags: ['saas', 'fullstack', 'react'],
      category: 'saas',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Twilio API']
    },
    {
      id: 'clubhub',
      title: 'Clubhub',
      subtitle: 'Local Social Directory',
      description: 'This is a centralized portal for the city of Vijayawada to search and index local social destinations across seven curated categories, providing descriptions and ratings.',
      icon: <MapPin size={24} />,
      status: 'Deployed',
      tags: ['community', 'frontend', 'react'],
      category: 'community',
      tech: ['React', 'CSS Grid', 'Leaflet Map', 'JSON Directory'],
      liveUrl: 'https://clubhub-pearl.vercel.app/'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="container">
      <section>
        <div className="section-header">
          <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">
            An overview of ongoing cybersecurity scanners, active SaaS platforms, and city directories.
          </p>
        </div>

        {/* Filters */}
        <div className="projects-filter">
          {['all', 'security', 'saas', 'community'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              style={{ textTransform: 'capitalize' }}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Grid layout */}
        <motion.div 
          layout
          className="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <TiltCard className="project-card">
                  <div className="project-header">
                    <div className="project-icon">
                      {project.icon}
                    </div>
                    <div className="project-links">
                      <a href={`https://github.com/Hemanth7513/${project.id}`} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="View Source">
                        <Github size={20} />
                      </a>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="Live Preview">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="project-body">
                    <div className="project-status">
                      <span className="status-dot"></span>
                      <span>{project.status}</span>
                    </div>
                    <h3 style={{ marginTop: '0.5rem' }}>{project.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                      {project.subtitle}
                    </p>
                    <p>{project.description}</p>
                  </div>

                  <div className="project-footer">
                    <div className="project-tech">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-pill">{t}</span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
