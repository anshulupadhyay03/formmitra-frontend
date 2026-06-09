import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, UploadCloud, FileEdit, CheckCircle, Sparkles, PhoneCall } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ReactNode;
  hint: string;
  phoneScreen: {
    title: string;
    description: string;
    badge: string;
    actionLabel: string;
    details: string[];
  };
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps: Step[] = [
    {
      id: 1,
      title: 'Initiate Conversation',
      subtitle: 'Just send a "Hi" or name of the document',
      desc: 'No forms, registration, or logins needed. Text "I want TDS exemption Form 121" or send a voice note in Hindi, English, Tamil, or 10+ languages.',
      icon: <MessageSquare className="w-6 h-6" />,
      hint: 'Ask: "Apply for new PAN card" or "Register for Senior Pension"',
      phoneScreen: {
        title: 'Form Mitra WhatsApp Assistant',
        description: 'Namaste Rajesh ji! I can help you prepare your Form 121 (TDS Exemption) in Marathi or English. Please tell me your Preferred Language.',
        badge: 'CHAT INITIALIZED',
        actionLabel: 'Type: 1 for Marathi, 2 for English',
        details: ['Response in <1 sec', 'Natural language understanding', 'Voice note support']
      }
    },
    {
      id: 2,
      title: 'Upload supporting IDs',
      subtitle: 'Snap a quick photo of your Aadhaar or PAN card',
      desc: 'Form Mitra uses secure, on-device-ready AI extraction to read your Name, Date of Birth, PAN number, and Address. No manual typing of 12-digit numbers.',
      icon: <UploadCloud className="w-6 h-6" />,
      hint: 'Supports Aadhaar, PAN card, PPO booklet, and older filled forms',
      phoneScreen: {
        title: 'Document Processing',
        description: 'Analyzing PAN Card image... Document scan complete. Extracted: Rajesh Kumar, DOB: 14/05/1961, PAN: AJJPKXXXXK. Is this correct?',
        badge: 'INTELLIGENT OCR ACTIVE',
        actionLabel: 'Tap "Yes" to confirm details',
        details: ['High-accuracy recognition', 'Secure data parsing', 'Instant verification']
      }
    },
    {
      id: 3,
      title: 'Conversational Filing',
      subtitle: 'Answer short, easy questions to fill the gaps',
      desc: 'The bot will only ask for missing variables like "What is your estimated total dividend income?" and explain what it means in simple household terms.',
      icon: <FileEdit className="w-6 h-6" />,
      hint: 'No complicated terms like "Assessee code" or "Previous Year Column"',
      phoneScreen: {
        title: 'Interactive Consultation',
        description: 'To save maximum TDS, I need to know your expected interest income from all fixed deposits this financial year. E.g., is it around ₹40,000?',
        badge: 'GUIDED VALIDATION',
        actionLabel: 'Enter expected FD interest amount',
        details: ['Zero bureaucratic terms', 'Real-time error flagging', 'Personalized calculations']
      }
    },
    {
      id: 4,
      title: 'Get Your PDF instantly',
      subtitle: 'Download, print, sign, and submit with ease',
      desc: 'Form Mitra compiles your details into the precise government-approved PDF. You get a downloadable WhatsApp file ready to print or sign digitally.',
      icon: <CheckCircle className="w-6 h-6" />,
      hint: 'Approved format by RBI, Income Tax Dept, and Indian Post Office',
      phoneScreen: {
        title: 'Exemption Form Generated',
        description: 'Aadhaar, PAN, and Income declarations filled mathematically! Your official Form 121 PDF is compiled and attached below.',
        badge: 'READY FOR BANK SUBMISSION',
        actionLabel: 'Download: Form_121_Rajesh.pdf',
        details: ['100% compliant layout', 'Ready to print / digitally sign', 'Saved under secure locker']
      }
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/30 border border-secondary-fixed text-on-secondary-fixed-variant text-xs font-mono font-bold tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            ZERO LEARNING CURVES
          </div>
          <h2 className="font-hanken text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            How Form Mitra Works on WhatsApp
          </h2>
          <p className="font-sans text-base text-on-surface-variant mt-4 leading-relaxed">
            We spent hundreds of hours analyzing user behavior to make our workflow completely barrier-free. Experience the process from start to finish.
          </p>
        </div>

        {/* Interactive Tour Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Timeline Steps Trigger (Left) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 flex gap-5 focus:outline-none focus:ring-2 focus:ring-primary ${
                    isActive
                      ? 'bg-surface-container-lowest border-outline warm-shadow-lg scale-[1.01]'
                      : 'bg-surface-container-low/55 border-transparent hover:border-outline-variant/30 hover:bg-surface-container-low'
                  }`}
                >
                  {/* Step Num Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-primary text-white warm-shadow-md'
                        : 'bg-surface-container-high text-on-surface-variant'
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* Step copy content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-sans font-bold text-on-surface text-base sm:text-lg">
                        {step.title}
                      </h4>
                      <span className="font-mono text-[10px] font-bold text-on-surface-variant bg-surface-container-highest px-2 py-0.5 rounded-full">
                        STEP {step.id}
                      </span>
                    </div>
                    <p className="font-hanken text-xs font-bold text-secondary">
                      {step.subtitle}
                    </p>
                    <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                      {step.desc}
                    </p>
                    
                    {/* Interactive hints */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-primary-fixed/20 border border-primary-fixed text-on-primary-fixed-variant text-xs font-sans px-3 py-2 rounded-lg mt-3"
                      >
                        💡 <strong>Try this:</strong> {step.hint}
                      </motion.div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Simulated WhatsApp UI Output (Right) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] bg-slate-900 p-3 rounded-[38px] shadow-2xl border-4 border-slate-700/40">
              {/* Camera Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-full z-20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
              </div>

              {/* Chat Viewport */}
              <div className="bg-[#efeae2] rounded-[28px] overflow-hidden flex flex-col h-[480px] relative">
                
                {/* Header */}
                <div className="bg-whatsapp-teal text-white pt-7 px-4 pb-2.5 flex items-center gap-2 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-hanken font-bold text-sm text-primary-container">
                    FM
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xs text-white">Form Mitra</h3>
                    <p className="text-[9px] opacity-75">Step-by-Step Simulated Walkthrough</p>
                  </div>
                </div>

                {/* Body Content updating with ActiveStep */}
                <div className="flex-1 p-4 flex flex-col justify-between overflow-y-auto">
                  <div className="text-center my-1.5">
                    <span className="text-[9px] bg-white/80 text-slate-500 px-3 py-0.5 rounded-md shadow-sm uppercase font-mono tracking-wider font-extrabold">
                      Live Preview
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    {steps.map((st) => {
                      if (st.id === activeStep) {
                        return (
                          <motion.div
                            key={st.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-4 flex-1 flex flex-col justify-center"
                          >
                            <div className="text-center">
                              <span className="inline-block bg-primary-container text-on-primary-container text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-sm">
                                {st.phoneScreen.badge}
                              </span>
                            </div>

                            <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm text-xs text-slate-800 border border-slate-200/50 leading-relaxed">
                              {st.phoneScreen.description}
                            </div>

                            <div className="bg-whatsapp-light p-3.5 rounded-2xl rounded-tr-none shadow-sm text-xs text-slate-800 self-end max-w-[85%] font-medium">
                              {st.phoneScreen.actionLabel}
                            </div>

                            <div className="bg-surface-container rounded-xl p-3 border border-outline-variant/30 space-y-1.5 test-left">
                              <h5 className="text-[10px] text-on-surface-variant font-mono font-bold uppercase tracking-wider">System State:</h5>
                              {st.phoneScreen.details.map((det) => (
                                <div key={det} className="flex items-center gap-1.5 text-xs text-on-surface font-sans">
                                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                  <span>{det}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        );
                      }
                      return null;
                    })}
                  </AnimatePresence>

                  {/* Micro Hint */}
                  <div className="text-center text-[10px] text-slate-400 italic">
                    Tap any step on the left to see action workflow
                  </div>
                </div>

                {/* Input Simulation */}
                <div className="p-2.5 bg-[#f0f0f0] border-t border-slate-200 flex items-center gap-1">
                  <div className="flex-1 bg-white rounded-full py-1.5 px-3 text-[10px] text-slate-400">
                    WhatsApp interface active
                  </div>
                  <div className="w-7 h-7 rounded-full bg-whatsapp-teal flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-[15px]">mic</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
