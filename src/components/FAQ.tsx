import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('q1');

  const faqs: FaqItem[] = [
    {
      id: 'q1',
      question: 'Do I need to install any new app to use Form Mitra?',
      answer: 'No app download is required at all! Form Mitra runs natively inside WhatsApp. This makes it extremely lightweight, senior-friendly, and accessible to anyone who can send a regular chat message.'
    },
    {
      id: 'q2',
      question: 'Is my personal data from Aadhaar and PAN Card safe?',
      answer: 'We treat data privacy with absolute seriousness. Form Mitra is built with enterprise-grade encryption. We strictly follow India\'s DPDP (Digital Personal Data Protection) Guidelines. We extract the details, compile the PDF, and delete the temporary scan copy from servers afterwards.'
    },
    {
      id: 'q3',
      question: 'How many languages does the WhatsApp bot support?',
      answer: 'Currently, the bot understands and replies conversational questions in Hindi, English, Marathi, Tamil, Telugu, Kannada, Bengali, and Gujarati. We are continuously adding more local Indian languages each month.'
    },
    {
      id: 'q4',
      question: 'What happens after I receive my completed form PDF?',
      answer: 'Once we compile the form, you receive a standard official high-quality PDF on WhatsApp. You can download and digitally sign it immediately, or take a quick printout to physically sign and drop it off at your bank branch, post office, or insurance company.'
    },
    {
      id: 'q5',
      question: 'Is Form Mitra free to use?',
      answer: 'Our core form-filling catalog for individual users (including basic banking forms, Senior Citizen TDS exemption (Form 121), and Life Certificates) is completely free! We have premium services for custom corporate declarations and mass application filings.'
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center mx-auto text-primary">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="font-hanken text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-base text-on-surface-variant">
            Still have questions about how our WhatsApp assistant changes are handled? Here are some quick answers.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-surface-container-lowest border-outline-variant warm-shadow-md'
                    : 'bg-surface border-outline-variant/20 hover:bg-surface-container-low hover:border-outline-variant/40'
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-sans font-bold text-on-surface text-base select-none focus:outline-none"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <span className="shrink-0 text-on-surface-variant">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base font-sans font-medium text-on-surface-variant leading-relaxed border-t border-outline-variant/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
