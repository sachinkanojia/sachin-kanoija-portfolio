import React, { useState } from 'react';
import { X, Send, CheckCircle2, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzepwlnv';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message, _replyto: email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 3000);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Something went wrong');
      }
    } catch {
      setError('Failed to send. Please try again or email directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        id="contact-dialog"
        className="relative w-full max-w-lg bg-[#141414] border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl"
      >
        {/* Close Button */}
        <button
          id="close-contact-modal-btn"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#FFA800]/20 text-[#FFA800] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-neutral-400 text-sm">
              Thanks for reaching out! Sachin will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#FFA800]/10 text-[#FFA800] text-xs font-semibold uppercase tracking-wider mb-2">
                Get In Touch
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Let's discuss your next project
              </h3>
              <p className="text-neutral-400 text-sm mt-1">
                Have an idea, project, or open role? Send a message directly.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-900/30 border border-red-800 rounded-xl text-red-300 text-sm flex items-center gap-2">
                <span>!</span>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  id="contact-name-input"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={submitting}
                  className="w-full px-4 py-3 bg-neutral-900/90 border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFA800] focus:ring-1 focus:ring-[#FFA800] text-sm transition-all disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  id="contact-email-input"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                  className="w-full px-4 py-3 bg-neutral-900/90 border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFA800] focus:ring-1 focus:ring-[#FFA800] text-sm transition-all disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                  Project Details
                </label>
                <textarea
                  id="contact-message-input"
                  required
                  rows={3}
                  placeholder="Tell me about your timeline, scope, and goals..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={submitting}
                  className="w-full px-4 py-3 bg-neutral-900/90 border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFA800] focus:ring-1 focus:ring-[#FFA800] text-sm transition-all resize-none disabled:opacity-50"
                />
              </div>

              <button
                id="submit-contact-form-btn"
                type="submit"
                disabled={submitting}
                className="w-full mt-2 py-3.5 px-6 rounded-full bg-[#FFA800] hover:bg-[#ffb426] text-black font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#FFA800]/25 cursor-pointer disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
