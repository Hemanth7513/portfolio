import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ShieldAlert, CheckCircle } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import TiltCard from '../components/TiltCard';
import './sections.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="container">
      <section>
        <div className="section-header">
          <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">
            Have a project idea, security audit request, or want to collaborate? Drop me a message.
          </p>
        </div>

        <div className="contact-container">
          {/* Info Details */}
          <div className="contact-info">
            <TiltCard className="info-card">
              <Mail className="info-icon" size={24} />
              <div className="info-text">
                <h4>Email</h4>
                <p><a href="mailto:hemaxtth@gmail.com">hemaxtth@gmail.com</a></p>
              </div>
            </TiltCard>

            <TiltCard className="info-card">
              <Linkedin className="info-icon" size={24} />
              <div className="info-text">
                <h4>LinkedIn</h4>
                <p><a href="https://www.linkedin.com/in/hemanth-k-57a977343/" target="_blank" rel="noopener noreferrer">hemanth-k-57a977343</a></p>
              </div>
            </TiltCard>

            <TiltCard className="info-card">
              <Github className="info-icon" size={24} />
              <div className="info-text">
                <h4>GitHub</h4>
                <p><a href="https://github.com/Hemanth7513" target="_blank" rel="noopener noreferrer">github.com/Hemanth7513</a></p>
              </div>
            </TiltCard>
          </div>

          {/* Contact Form */}
          <TiltCard className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input"
                  placeholder="Let's build something secure..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {status === 'sending' ? (
                  <span>Sending Secure Transmission...</span>
                ) : status === 'success' ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={18} /> Message Transmitted!
                  </span>
                ) : (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    Send Message <Send size={16} />
                  </span>
                )}
              </button>
            </form>
          </TiltCard>
        </div>
      </section>
    </div>
  );
}
