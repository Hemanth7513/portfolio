import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Activity, Code, Database, Globe } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import './sections.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 }
};

export default function About() {
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: <Shield size={18} style={{ color: 'var(--accent-secondary)' }} />,
      skills: ["Container Security", "Vulnerability Scanning", "Docker Auditing", "Network Protocol Audits"]
    },
    {
      title: "Programming",
      icon: <Code size={18} style={{ color: 'var(--accent-secondary)' }} />,
      skills: ["Python (Intermediate)", "C (Intermediate)", "JavaScript", "Shell Scripting"]
    },
    {
      title: "Full Stack & Web",
      icon: <Globe size={18} style={{ color: 'var(--accent-secondary)' }} />,
      skills: ["React.js", "Node.js", "Express", "RESTful APIs", "CSS Grid & Flexbox"]
    },
    {
      title: "Databases & Tools",
      icon: <Database size={18} style={{ color: 'var(--accent-secondary)' }} />,
      skills: ["PostgreSQL", "MongoDB", "Docker", "Git / GitHub", "Linux Systems"]
    }
  ];

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <section>
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Exploring the intersection of secure system architectures, B2B SaaS, and local community tooling.
          </p>
        </div>

        <div className="about-grid">
          {/* Bento Left: Profile Picture & Core Bio */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="about-left"
          >
            {/* Profile Picture Box */}
            <div className="glass-card about-profile-box">
              <div className="cyber-profile-frame">
                <img 
                  src="/hemanth.png" 
                  alt="K Hemanth Sai Venkat" 
                  className="cyber-profile-image" 
                />
              </div>
            </div>

            {/* Bio Card */}
            <div className="glass-card about-bio">
              <p>
                I am <strong>K Hemanth Sai Venkat</strong>, a Computer Science and Engineering student specializing in <strong>Cybersecurity</strong>. I enjoy writing scripts, exploring container systems, and building full-stack web applications.
              </p>
              <p>
                Studying cybersecurity helps me build applications with security and protocol safety in mind. Whether designing Docker auditing scripts or structuring database schemas for B2B payment tools, I aim to create reliable and clean software.
              </p>
            </div>
          </motion.div>

          {/* Bento Right: Skills Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="skills-wrapper"
          >
            {skillCategories.map((category, idx) => (
              <motion.div variants={itemVariants} key={idx} style={{ display: 'flex' }}>
                <TiltCard className="skill-category" style={{ width: '100%' }}>
                  <h3>
                    {category.icon}
                    <span>{category.title}</span>
                  </h3>
                  <div className="skills-list">
                    {category.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
