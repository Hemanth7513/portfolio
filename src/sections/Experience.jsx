import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Star } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import '../components/Timeline.css';
import './sections.css';

export default function Experience() {
  const milestones = [
    {
      year: "2026 - Present",
      title: "Technical Head",
      subtitle: "Zesty Co. (Food Startup)",
      description: "Managing engineering pipelines, site architecture, and systems deployment for a modern food delivery/service startup gearing up for launching.",
      type: "work"
    },
    {
      year: "2023 - Present",
      title: "B.Tech in CSE (Cybersecurity)",
      subtitle: "Final Year | 8+ CGPA",
      description: "Focusing on security architectures, network protocol audits, and secure coding. Actively developing Steelbox container scanner, Udhaar B2B SaaS ledger, and Clubhub municipal search engine.",
      type: "study"
    },
    {
      year: "2021 - 2023",
      title: "Class XII (CBSE Board)",
      subtitle: "VIVA The School, Namburu | 77.6% Marks",
      description: "Completed secondary education under CBSE board curriculum with core concentration in mathematics, physics, chemistry, and computer science foundations.",
      type: "study"
    },
    {
      year: "2019 - 2021",
      title: "Class X (CBSE Board)",
      subtitle: "Nalanda Vidya Niketan, Vijayawada | 90% Marks",
      description: "Graduated with distinctions in secondary school certificate examinations, establishing strong foundations in analytical reasoning and mathematics.",
      type: "study"
    }
  ];

  return (
    <div className="container">
      <section>
        <div className="section-header">
          <h2 className="section-title">My <span className="gradient-text">Timeline</span></h2>
          <p className="section-subtitle">
            A chronological view of my projects, studies, and milestone accomplishments.
          </p>
        </div>

        <div className="timeline-container">
          {milestones.map((milestone, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-dot"></div>
              <TiltCard className="timeline-content">
                <div className="timeline-date">{milestone.year}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  {milestone.type === 'work' ? (
                    <Briefcase size={16} className="logo-icon" />
                  ) : (
                    <BookOpen size={16} className="logo-icon" />
                  )}
                  <h3>{milestone.title}</h3>
                </div>
                <h4>{milestone.subtitle}</h4>
                <p>{milestone.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
