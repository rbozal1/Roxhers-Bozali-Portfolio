import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { ContactFormData, ContactFormErrors } from '../types/portfolio';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    inquiryType: 'angular21',
    timeline: 'Within 1-2 months',
    message: ''
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);

  const validate = (): boolean => {
    const errs: ContactFormErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a detailed message (minimum 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API dispatch latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 650);
  };

  const handleCopyPayload = () => {
    const payload = JSON.stringify(formData, null, 2);
    navigator.clipboard.writeText(payload);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2000);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      inquiryType: 'angular21',
      timeline: 'Within 1-2 months',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const mailtoLink = `mailto:RoxhersBozali@gmail.com?subject=${encodeURIComponent(
    `Portfolio Inquiry [${formData.inquiryType.toUpperCase()}]: ${formData.fullName}`
  )}&body=${encodeURIComponent(
    `From: ${formData.fullName} (${formData.email})\nTimeline: ${formData.timeline}\nInquiry: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Initiate Conversation
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-lg mx-auto">
            Available for senior engineering leadership, Angular 21 architecture advisory, or high-impact full-stack contracts.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-6">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Message Dispatched Successfully
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-slate-900 dark:text-white">{formData.fullName}</span>. Your inquiry has been received. I will respond to <span className="font-mono text-blue-600 dark:text-blue-400">{formData.email}</span> within 24 hours.
                </p>
              </div>

              <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-left text-xs font-mono text-slate-600 dark:text-slate-400 space-y-1">
                <p><span className="text-slate-400">Subject:</span> {formData.inquiryType}</p>
                <p><span className="text-slate-400">Timeline:</span> {formData.timeline}</p>
                <p className="line-clamp-2"><span className="text-slate-400">Preview:</span> {formData.message}</p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={mailtoLink}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Email (mailto)</span>
                </a>

                <button
                  onClick={handleCopyPayload}
                  className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  {copiedPayload ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPayload ? 'Copied to Clipboard' : 'Copy Inquiry Payload'}</span>
                </button>

                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-900 dark:text-slate-200 mb-1.5">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Elena Rostova"
                    className={`w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-950 border rounded-lg text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-rose-500 focus:border-rose-600'
                        : 'border-slate-200 dark:border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-900 dark:text-slate-200 mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="elena@company.com"
                    className={`w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-950 border rounded-lg text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-rose-500 focus:border-rose-600'
                        : 'border-slate-200 dark:border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-900 dark:text-slate-200 mb-1.5">
                    Inquiry Objective
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                  >
                    <option value="angular21">Angular 21 Architecture & Development</option>
                    <option value="fulltime">Full-Time Engineering Leadership</option>
                    <option value="consulting">Technical Advisory / Code Audit</option>
                    <option value="general">General Collaboration / Coffee Chat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-900 dark:text-slate-200 mb-1.5">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                  >
                    <option value="Immediate (< 2 weeks)">Immediate (&lt; 2 weeks)</option>
                    <option value="Within 1-2 months">Within 1–2 months</option>
                    <option value="Q3/Q4 Planning">Upcoming Quarter Planning</option>
                    <option value="Exploratory">Exploratory Discussion</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-slate-900 dark:text-slate-200">
                    Project Scope & Message <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-[11px] font-mono text-slate-400">
                    {formData.message.length} chars
                  </span>
                </div>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Outline your systems goals, technical stack, or team requirements..."
                  className={`w-full px-3.5 py-2.5 text-xs bg-slate-50 dark:bg-slate-950 border rounded-lg text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none transition-colors ${
                    errors.message
                      ? 'border-rose-500 focus:border-rose-600'
                      : 'border-slate-200 dark:border-slate-800 focus:border-blue-500'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.message}</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-500" />
                  <span>Direct: <strong className="text-slate-700 dark:text-slate-200 font-mono">RoxhersBozali@gmail.com</strong></span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Transmitting...' : 'Send Inquiry'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
