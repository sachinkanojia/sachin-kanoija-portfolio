import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  User,
  FolderKanban,
  PenLine,
  Send,
  Linkedin,
  Github,
  Globe,
  CheckCircle2,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/xzepwlnv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, subject: formData.subject, message: formData.message, _replyto: formData.email }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Something went wrong');
      }
    } catch {
      setError('Failed to send. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kanojia96@gmail.com',
      href: 'mailto:kanojia96@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9999059882',
      href: 'tel:+919999059882',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Delhi, India',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Availability',
      value: 'Mon – Sat (10 AM – 7 PM IST)',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="w-full bg-black/40 text-white pt-8 sm:pt-12 pb-16 sm:pb-24 relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* ========================================================= */}
        {/* TOP HEADER: Pill + Title + Subtitle (Full Width)          */}
        {/* ========================================================= */}
        <div className="space-y-4 w-full bg-black/40 backdrop-blur-md border border-neutral-800/80 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.4)] mb-12 sm:mb-16">
          
          {/* Pill Indicator: Dual Dot + "Get In Touch" */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center -space-x-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-white inline-block shadow-sm" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#FFA800] inline-block shadow-sm" />
            </div>
            <span className="text-sm sm:text-base font-medium tracking-wide text-neutral-100">
              Get In Touch
            </span>
          </div>

          {/* Headline */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] [text-shadow:0_2px_14px_rgba(0,0,0,0.9)]">
              <span className="text-white">Let's Build </span>
              <span className="text-[#FFA800]">Something </span>
              <span className="text-white relative inline-block">
                Amazing Together
                {/* 3-Petal Sparkle Accent */}
                <span className="inline-block ml-1.5 -top-2 align-top text-[#FFA800]">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C12.5 5.5 15.5 8.5 19 9C15.5 9.5 12.5 12.5 12 16C11.5 12.5 8.5 9.5 5 9C8.5 8.5 11.5 5.5 12 2Z" />
                    <circle cx="19" cy="4" r="1.5" />
                    <circle cx="21" cy="9" r="1" />
                  </svg>
                </span>
              </span>
            </h2>
          </div>

          {/* Subtitle Bio */}
          <p className="text-neutral-200 text-sm sm:text-base font-normal leading-relaxed [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
            Have a project in mind or just want to say hi? I'd love to hear from you. Let's create something meaningful and impactful.
          </p>

        </div>

        {/* ========================================================= */}
        {/* MAIN BODY: 2-Column Side-by-Side (Left Contact Info | Right Form) */}
        {/* ========================================================= */}
        <div className="relative">
          
          {/* Grid Layout: Left Column | Gap | Right Column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[25%] items-start relative z-10">
            
            {/* --------------------------------------------------------- */}
            {/* LEFT COLUMN: Contact Information (like Select Category)   */}
            {/* --------------------------------------------------------- */}
            <div className="w-full flex flex-col space-y-2.5 lg:sticky lg:top-24">
              <div className="flex items-center gap-2 mb-4 px-1">
                <span className="w-2 h-2 rounded-full bg-[#FFA800] inline-block shadow-[0_0_6px_rgba(255,168,0,0.8)]" />
                <span className="text-xs sm:text-sm font-semibold text-neutral-400 uppercase tracking-wider">
                  Contact Information
                </span>
              </div>

              <div className="bg-[#0C0C0C]/95 backdrop-blur-md border border-neutral-800/90 rounded-2xl p-4 sm:p-5 shadow-xl space-y-4">
                
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight [text-shadow:0_1px_8px_rgba(0,0,0,0.9)]">
                    Contact Information
                  </h3>
                  <div className="w-10 h-[2px] bg-[#FFA800] rounded-full" />
                </div>

                <div className="space-y-4 pt-2">
                  {contactInfo.map((info, idx) => {
                    const InfoIcon = info.icon;
                    return (
                      <div
                        key={info.label}
                        id={`contact-info-item-${idx}`}
                        className="flex items-center gap-4 pb-3.5 border-b border-neutral-800/70 last:border-0"
                      >
                        {/* Rounded Square Outline Icon Box */}
                        <div className="w-11 h-11 rounded-xl bg-[#0F0F0F] border border-amber-500/40 flex items-center justify-center text-[#FFA800] flex-shrink-0 shadow-sm">
                          <InfoIcon className="w-5 h-5" />
                        </div>

                        {/* Info Text */}
                        <div className="min-w-0">
                          <span className="text-xs font-semibold text-neutral-200 block">
                            {info.label}
                          </span>
                          {info.href !== '#' ? (
                            <a
                              href={info.href}
                              className="text-sm sm:text-base font-bold text-white hover:text-[#FFA800] transition-colors truncate block"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-sm sm:text-base font-bold text-white truncate block">
                              {info.value}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* --------------------------------------------------------- */}
            {/* RIGHT COLUMN: Send Me a Message (like Featured Projects)  */}
            {/* --------------------------------------------------------- */}
            <div className="w-full flex flex-col space-y-4">
              
              {/* Header: Bullet + Send Me a Message Title */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFA800] inline-block shadow-[0_0_6px_rgba(255,168,0,0.8)]" />
                  <span className="text-sm sm:text-base font-semibold text-neutral-200 tracking-wide">
                    Send Me a Message
                  </span>
                </div>
              </div>

              {/* Form Card Container */}
              <div className="bg-[#0A0A0A]/95 backdrop-blur-md border border-neutral-800/90 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5">
                
                {isSuccess && (
                  <div
                    id="contact-form-success-banner"
                    className="flex items-center gap-3 p-4 rounded-2xl bg-amber-500/15 border border-amber-500/60 text-amber-300 text-sm font-medium animate-fadeIn"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#FFA800] flex-shrink-0" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

                {error && (
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-900/30 border border-red-800 text-red-300 text-sm font-medium animate-fadeIn">
                    <span>!</span>
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Row 1: Name + Email (Side by Side) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="contact-form-name-input"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full bg-[#121212] border border-neutral-800/90 focus:border-amber-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="contact-form-email-input"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email"
                        className="w-full bg-[#121212] border border-neutral-800/90 focus:border-amber-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Subject */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                      <FolderKanban className="w-4 h-4" />
                    </div>
                    <input
                      id="contact-form-subject-input"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Subject"
                      className="w-full bg-[#121212] border border-neutral-800/90 focus:border-amber-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>

                  {/* Row 3: Message */}
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 pointer-events-none text-neutral-500">
                      <PenLine className="w-4 h-4" />
                    </div>
                    <textarea
                      id="contact-form-message-input"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your Message"
                      className="w-full bg-[#121212] border border-neutral-800/90 focus:border-amber-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FFA800] hover:bg-[#ffb426] active:scale-[0.99] text-black font-extrabold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2.5 transition-all duration-200 shadow-[0_0_25px_rgba(255,168,0,0.35)] hover:shadow-[0_0_35px_rgba(255,168,0,0.5)] cursor-pointer disabled:opacity-70 text-sm sm:text-base"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-4 h-4 fill-current" />
                  </button>

                </form>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};