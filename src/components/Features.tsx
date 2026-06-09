import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Languages, HelpCircle, UserCheck, RefreshCw, FolderLock } from 'lucide-react';

export default function Features() {
  const problems = [
    {
      title: 'Complicated Jargon',
      desc: 'Form questions are written in complex administrative English and Hindi terms like "Assessee", "PPO", or "Assessment Year" that confuse the average citizen.',
      icon: <HelpCircle className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Loss of Confidence',
      desc: 'A single misaligned box or incomplete declaration field often results in immediate application rejection and delayed benefits after waiting in lines for hours.',
      icon: <FolderLock className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Language Exclusion',
      desc: 'Most bank and government forms are only printed in English and formal Hindi, leaving millions of vernacular speakers excluded or reliant on expensive agents.',
      icon: <Languages className="w-6 h-6 text-primary" />,
    },
  ];

  const solutions = [
    {
      title: 'Simple Casual Hindi/English Answers',
      desc: 'We translate and simplify every field into plain human speak. We ask questions one by one like a friendly, patient relative.',
    },
    {
      title: 'AI Verification & Correction',
      desc: 'Our engine performs double checks on details like Date of Birth, PAN structure, and income levels in real-time, making sure there are zero errors.',
    },
    {
      title: '12+ Local Indian Languages Support',
      desc: 'Engage completely in Marathi, Tamil, Bengali, Telugu, and more. Enter info in your language, and we output the standard official formats.',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-surface-container-low/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-hanken text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight max-w-2xl mx-auto">
          Paperwork Shouldn't Feel like a Stressful Bureaucratic Exam
        </h2>
        <p className="font-sans text-base text-on-surface-variant max-w-lg mx-auto mt-4 leading-relaxed">
          Filling bank accounts, tax exclusions, or pension life certificates shouldn't leave you feeling helpless. Here is the difference Form Mitra makes.
        </p>

        {/* Comparison grid boxes */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-16 text-left">
          {/* Traditional Manual Way Column */}
          <div className="bg-surface-container rounded-3xl p-6 sm:p-10 border border-outline-variant/20 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
              <span className="font-mono text-xs font-bold text-on-surface-variant uppercase tracking-wider">THE OLD WAY: MANUAL CONFUSION</span>
            </div>
            {problems.map((prob) => (
              <div key={prob.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                  {prob.icon}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-on-surface text-base mb-1">{prob.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{prob.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form Mitra Solution Column */}
          <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border-t-8 border-primary-container warm-shadow-xl flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-bounce"></div>
              <span className="font-mono text-xs font-bold text-secondary uppercase tracking-wider">THE FORM MITRA WAY: ASSISTED CLARITY</span>
            </div>
            {solutions.map((sol, idx) => (
              <div key={sol.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center shrink-0 text-primary">
                  <span className="font-mono font-bold text-sm">{idx + 1}</span>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-on-surface text-base mb-1">{sol.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
