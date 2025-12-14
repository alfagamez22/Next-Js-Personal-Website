'use client';

import { useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaGithub, FaLinkedin, FaShareAlt } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-surface text-primary">
      <div className="max-w-5xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Get In Touch</h1>
          <p className="text-xl text-muted">
            Have a question or want to work together? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN: Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
              
              {/* Name Input Tile */}
              <div className="group bg-card border border-default rounded-2xl p-6 focus-within:ring-2 focus-within:ring-accent transition-all hover:border-accent/50 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent-soft rounded-lg text-accent">
                    <FaUser size={18} />
                  </div>
                  <label htmlFor="name" className="font-semibold text-primary">Name</label>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent outline-none text-lg text-primary placeholder-muted/50 mt-auto"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input Tile */}
              <div className="group bg-card border border-default rounded-2xl p-6 focus-within:ring-2 focus-within:ring-accent transition-all hover:border-accent/50 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent-soft rounded-lg text-accent">
                    <FaEnvelope size={18} />
                  </div>
                  <label htmlFor="email" className="font-semibold text-primary">Email</label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent outline-none text-lg text-primary placeholder-muted/50 mt-auto"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Input Tile (Spans 2 columns) */}
              <div className="md:col-span-2 group bg-card border border-default rounded-2xl p-6 focus-within:ring-2 focus-within:ring-accent transition-all hover:border-accent/50 flex flex-col min-h-[200px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent-soft rounded-lg text-accent">
                    <FaPaperPlane size={18} />
                  </div>
                  <label htmlFor="message" className="font-semibold text-primary">Message</label>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent outline-none text-lg text-primary placeholder-muted/50 resize-none flex-grow"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button Tile (Spans 2 columns) */}
              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </div>

            </form>
          </div>

          {/* RIGHT COLUMN: Contact Info */}
          <div className="space-y-4 flex flex-col">
            
            {/* Email Info Tile */}
            <div className="bg-card border border-default rounded-2xl p-6 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(88,166,255,0.1)] transition-all flex-1 flex flex-col justify-center group">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent-soft rounded-lg text-accent group-hover:scale-110 transition-transform">
                  <FaEnvelope size={20} />
                </div>
                <h3 className="font-semibold text-primary text-lg">Email</h3>
              </div>
              <a href="mailto:dhannielbuan@gmail.com" className="text-muted hover:text-accent transition-colors break-all">
                dhannielbuan@gmail.com
              </a>
            </div>

            {/* Location Info Tile */}
            <div className="bg-card border border-default rounded-2xl p-6 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(88,166,255,0.1)] transition-all flex-1 flex flex-col justify-center group">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent-soft rounded-lg text-accent group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt size={20} />
                </div>
                <h3 className="font-semibold text-primary text-lg">Location</h3>
              </div>
              <p className="text-muted">
                Antipolo City, Philippines
              </p>
            </div>

            {/* Socials Info Tile */}
            <div className="bg-card border border-default rounded-2xl p-6 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(88,166,255,0.15)] transition-all flex-1 flex flex-col justify-center group">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent-soft rounded-lg text-accent group-hover:scale-110 transition-transform">
                  <FaShareAlt size={20} />
                </div>
                <h3 className="font-semibold text-primary text-lg">Socials</h3>
              </div>
              <div className="flex flex-col gap-2">
                <a href="https://github.com/alfagamez22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-accent transition-colors hover:translate-x-1">
                  <FaGithub /> GitHub
                </a>
                <a href="https://linkedin.com/in/dhbuan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-accent transition-colors hover:translate-x-1">
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
