import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Sparkles, Mail, MessageSquare, Check, ArrowRight } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [contactType, setContactType] = useState<'email' | 'whatsapp'>('whatsapp');
  const [inputVal, setInputVal] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const validateInput = () => {
    if (!inputVal.trim()) {
      setErrorMsg('This field is required');
      return false;
    }
    if (contactType === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputVal)) {
        setErrorMsg('Please enter a valid email address');
        return false;
      }
    } else {
      const phoneRegex = /^[6-9]\d{9}$/;
      // strip non-digits to test basic Indian 10-digit number
      const digits = inputVal.replace(/\D/g, '');
      if (digits.length < 10) {
        setErrorMsg('Please enter a valid 10-digit WhatsApp number');
        return false;
      }
    }
    setErrorMsg('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateInput()) return;

    setIsSubmitting(true);
    // Simulate real persistent database submit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // save to localstorage for demo persistence
      const waitlist = JSON.parse(localStorage.getItem('formmitra_waitlist') || '[]');
      waitlist.push({ type: contactType, value: inputVal, date: new Date().toISOString() });
      localStorage.setItem('formmitra_waitlist', JSON.stringify(waitlist));
    }, 1200);
  };

  const resetForm = () => {
    setInputVal('');
    setIsSuccess(false);
    setErrorMsg('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="bg-surface rounded-3xl max-w-md w-full overflow-hidden border border-outline-variant/30 shadow-2xl relative z-10 flex flex-col"
          >
            {/* Top Border Branding accent */}
            <div className="h-2 bg-gradient-to-r from-primary via-secondary to-primary-container"></div>

            {/* Absolute close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Icon & Title */}
                  <div className="text-center space-y-2">
                    <div className="w-14 h-14 bg-primary-container/20 rounded-2xl flex items-center justify-center mx-auto text-primary">
                      <Calendar className="w-7 h-7" />
                    </div>
                    <h3 className="font-hanken text-2xl font-black text-on-surface tracking-tight">
                      Join the Form Mitra Waitlist
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      We are currently in private beta finalizing certifications with banks. Register below to get early priority access the day we launch!
                    </p>
                  </div>

                  {/* Contact Type Toggle */}
                  <div className="bg-surface-container-low p-1 rounded-xl flex border border-outline-variant/20">
                    <button
                      type="button"
                      onClick={() => {
                        setContactType('whatsapp');
                        setInputVal('');
                        setErrorMsg('');
                      }}
                      className={`flex-1 py-2.5 rounded-lg text-xs font-sans font-bold flex items-center justify-center gap-2 transition-all focus:outline-none ${
                        contactType === 'whatsapp'
                          ? 'bg-surface text-secondary shadow-xs warm-shadow-sm'
                          : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4" />
                      WhatsApp Number
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setContactType('email');
                        setInputVal('');
                        setErrorMsg('');
                      }}
                      className={`flex-1 py-2.5 rounded-lg text-xs font-sans font-bold flex items-center justify-center gap-2 transition-all focus:outline-none ${
                        contactType === 'email'
                          ? 'bg-surface text-secondary shadow-xs warm-shadow-sm'
                          : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      <Mail className="w-4 h-4" />
                      Email Address
                    </button>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-bold text-on-surface-variant uppercase">
                      {contactType === 'email' ? 'Primary Email' : 'WhatsApp Number (India)'}
                    </label>
                    <div className="relative">
                      {contactType === 'whatsapp' ? (
                        <div className="relative flex items-center">
                          <span className="absolute left-4 font-mono text-sm font-bold text-on-surface-variant">+91</span>
                          <input
                            type="tel"
                            maxLength={10}
                            placeholder="Enter 10-digit number"
                            value={inputVal}
                            onChange={(e) => {
                              setInputVal(e.target.value.replace(/\D/g, ''));
                              setErrorMsg('');
                            }}
                            className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl pl-14 pr-4 py-3 font-mono text-sm font-bold text-on-surface focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                          />
                        </div>
                      ) : (
                        <div className="relative flex items-center">
                          <Mail className="absolute left-4 w-4 h-4 text-on-surface-variant" />
                          <input
                            type="email"
                            placeholder="you@example.com"
                            value={inputVal}
                            onChange={(e) => {
                              setInputVal(e.target.value);
                              setErrorMsg('');
                            }}
                            className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl pl-11 pr-4 py-3 font-sans text-sm font-semibold text-on-surface focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                          />
                        </div>
                      )}
                    </div>
                    {errorMsg && (
                      <p className="text-xs text-red-600 font-semibold">{errorMsg}</p>
                    )}
                  </div>

                  {/* Bullet perks inside waiting */}
                  <div className="bg-surface-container-low/40 p-4 rounded-xl space-y-2 border border-outline-variant/10 text-left">
                    <div className="flex gap-2 text-xs font-sans text-on-surface-variant">
                      <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>Free priority access the moment we connect with the official Indian servers.</span>
                    </div>
                    <div className="flex gap-2 text-xs font-sans text-on-surface-variant">
                      <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>No promotional spam. Only live product notification update.</span>
                    </div>
                  </div>

                  {/* Submission triggers */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-container text-on-primary-container py-4 rounded-full font-sans font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 warm-shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-on-primary-container border-t-transparent animate-spin mr-1"></span>
                        Registering onto waitlist...
                      </>
                    ) : (
                      <>
                        Request Free Beta Invitation
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Screen state */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-6"
                >
                  <div className="w-16 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto text-green-600">
                    <Check className="w-8 h-8 font-black" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-hanken text-2xl font-black text-on-surface tracking-tight">
                      You are on the Waitlist!
                    </h3>
                    <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                      Thank you for your interest! We have saved your invitation details ({inputVal}). We'll communicate with you as soon as Form Mitra is approved to go live.
                    </p>
                  </div>

                  <div className="bg-primary-container/20 border border-primary-container/40 p-4 rounded-xl flex items-center justify-center gap-2 max-w-[280px] mx-auto">
                    <span className="text-xs font-mono font-bold text-on-primary-container flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-secondary fill-current" />
                      PRIORITY ENROLLMENT CONFIRMED
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      resetForm();
                      onClose();
                    }}
                    className="bg-inverse-surface text-white px-8 py-3 rounded-full font-sans text-xs font-bold transition-all focus:outline-none"
                  >
                    Return to Homepage
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
