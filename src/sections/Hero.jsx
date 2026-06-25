import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Activity, CircleDot, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';
import './sections.css';

export default function Hero() {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <section className="hero-section">
        <div className="hero-grid">
          {/* Bento Block Left: Hero Intro */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card hero-left-box"
          >
            <div className="hero-badge">
              <Shield size={12} style={{ color: 'var(--accent-secondary)' }} />
              <span>CSE (Cybersecurity) Student</span>
            </div>

            <h1 className="hero-title">
              K Hemanth<br />
              Sai Venkat
            </h1>

            <p className="hero-description">
              I am a B.Tech Computer Science student specializing in cybersecurity. Currently, I develop Docker container 
              vulnerability scanners, automated B2B payment systems, and municipal directory engines.
            </p>

            <div className="hero-cta">
              <Link to="/projects" className="btn btn-primary">
                View Projects <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </motion.div>

          {/* Bento Block Right: Project Status Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ display: 'flex' }}
          >
            <TiltCard style={{ padding: '2.5rem', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Activity size={18} style={{ color: 'var(--accent-secondary)' }} />
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '0.95rem' }}>
                      Projects Core
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', padding: '0.2rem 0.6rem', border: '1px solid var(--border-color)', borderRadius: '9999px' }}>
                    ONLINE
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
                    <div>
                      <h5 style={{ fontSize: '0.85rem', fontWeight: '700' }}>Zesty Co. Food Startup</h5>
                      <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Technical Head | Systems Lead</p>
                    </div>
                    <span style={{ fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent-secondary)', fontWeight: '600', fontFamily: 'var(--font-mono)' }}>
                      <CircleDot size={12} /> PRE-LAUNCH
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
                    <div>
                      <h5 style={{ fontSize: '0.85rem', fontWeight: '700' }}>Steelbox Core Scanner</h5>
                      <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Docker container vulnerability audits</p>
                    </div>
                    <span style={{ fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#10b981', fontWeight: '600', fontFamily: 'var(--font-mono)' }}>
                      <CheckCircle2 size={12} /> ACTIVE
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
                    <div>
                      <h5 style={{ fontSize: '0.85rem', fontWeight: '700' }}>Udhaar B2B SaaS Ledger</h5>
                      <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Automated outstanding pay reminders</p>
                    </div>
                    <span style={{ fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent-secondary)', fontWeight: '600', fontFamily: 'var(--font-mono)' }}>
                      <CircleDot size={12} /> ONGOING
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h5 style={{ fontSize: '0.85rem', fontWeight: '700' }}>Clubhub City Engine</h5>
                      <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Vijayawada social directory indexer</p>
                    </div>
                    <span style={{ fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#10b981', fontWeight: '600', fontFamily: 'var(--font-mono)' }}>
                      <CheckCircle2 size={12} /> DEPLOYED
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
