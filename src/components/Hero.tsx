import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Sparkles, CheckCircle2, ChevronRight, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onStartDemo: () => void;
  onJoinWaitlist: () => void;
}

export default function Hero({ onStartDemo, onJoinWaitlist }: HeroProps) {
  const [selectedFlow, setSelectedFlow] = useState<'121' | 'pan' | 'pension'>('121');
  const [step, setStep] = useState(0);

  // Auto-play the simulated chat
  useEffect(() => {
    setStep(0);
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev < 4) return prev + 1;
        return 0; // Loop or stay at max. Let's make it loop so it is dynamic
      });
    }, 3800);

    return () => clearInterval(interval);
  }, [selectedFlow]);

  const flows = {
    '121': [
      { sender: 'bot', text: 'Namaste! I will help you fill Form 121 so bank doesn\'t cut tax (TDS) on your FD. 🏦' },
      { sender: 'user', text: 'Thank you. What do I need to send?' },
      { sender: 'bot', text: 'Please send me a photo of your PAN Card. I will extract the details instantly.' },
      { sender: 'user', text: '📷 [Uploaded PAN Card image]' },
      { sender: 'bot', text: 'Aadhar & PAN extracted successfully. Declared Income: ₹1,80,000. Generating completed Form 121 PDF now... 📄', download: true }
    ],
    'pan': [
      { sender: 'bot', text: 'Namaste! Let\'s apply for a fresh PAN Card. Are you an Indian citizen? 🇮🇳' },
      { sender: 'user', text: 'Yes, born in Kanpur. I don\'t have one yet.' },
      { sender: 'bot', text: 'Great! Upload your Aadhaar Card as Proof of Identity & Address.' },
      { sender: 'user', text: '📷 [Uploaded Aadhaar card]' },
      { sender: 'bot', text: 'Details matched: Rajesh Kumar. I have prepared your Form 49A. Download to sign now! 📄', download: true }
    ],
    'pension': [
      { sender: 'bot', text: 'Pranam! Let\'s complete your annual Life Certificate for central pension. 👵👴' },
      { sender: 'user', text: 'Can I do it from home? I cannot travel to the bank branch.' },
      { sender: 'bot', text: 'Yes, completely from home! Please send your PPO Number.' },
      { sender: 'user', text: 'PPO Number is 2345/9821/A' },
      { sender: 'bot', text: 'Verified with Jeevan Pramaan portal. Life Certificate is generated and submitted! 📄', download: true }
    ]
  };

  return (
    <section className="relative py-16 lg:py-28 overflow-hidden bg-gradient-to-b from-surface-container-low/50 to-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Call to Action & Copy */}
        <div className="lg:col-span-7 flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary-container/30 border border-primary-container/50 text-on-primary-container text-xs font-mono font-bold tracking-wider">
            <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
            INDIA'S FIRST CHATBOT FOR FORM PAPERWORK
          </div>

          <h1 className="font-hanken text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface leading-tight tracking-tight">
            Stop struggling with <br className="hidden md:block"/>
            <span className="text-secondary-container bg-clip-text bg-gradient-to-r from-secondary border-b-4 border-primary-container pb-1">
              Complex Forms.
            </span> <br />
            Just chat in your language.
          </h1>

          <p className="font-sans text-lg text-on-surface-variant max-w-xl leading-relaxed">
            Form Mitra runs natively on WhatsApp. Simply snap photos of your IDs, verify the auto-filled details, and download completed banking and government PDFs in seconds.
          </p>

          {/* Value props bullets */}
          <div className="grid sm:grid-cols-2 gap-4 w-full max-w-lg mt-2">
            {[
              'Supports Hindi, Tamil, Bengali & 9+ languages',
              'Extracts data instantly using secure AI OCR',
              'Validates and flags mistakes before printing',
              'Saves hours of bank and government branch visits'
            ].map((prop) => (
              <div key={prop} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-on-surface-variant font-sans">{prop}</span>
              </div>
            ))}
          </div>

          {/* Quick Flow selector for interactive demo */}
          <div className="flex flex-col gap-3 w-full max-w-md bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/30 warm-shadow-sm mt-4">
            <span className="text-xs font-mono text-on-surface-variant font-bold">SELECT A SIMULATED CONVERSATION:</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedFlow('121')}
                className={`px-3 py-1.5 rounded-lg text-xs font-sans font-bold transition-all ${
                  selectedFlow === '121'
                    ? 'bg-primary text-white shadow'
                    : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
                }`}
              >
                Form 121 (TDS Saving)
              </button>
              <button
                onClick={() => setSelectedFlow('pan')}
                className={`px-3 py-1.5 rounded-lg text-xs font-sans font-bold transition-all ${
                  selectedFlow === 'pan'
                    ? 'bg-primary text-white shadow'
                    : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
                }`}
              >
                Apply for PAN Card
              </button>
              <button
                onClick={() => setSelectedFlow('pension')}
                className={`px-3 py-1.5 rounded-lg text-xs font-sans font-bold transition-all ${
                  selectedFlow === 'pension'
                    ? 'bg-primary text-white shadow'
                    : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
                }`}
              >
                Elder Life Certificate
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <button
              onClick={onJoinWaitlist}
              className="bg-primary text-white px-8 py-4 rounded-full font-sans font-bold hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 warm-shadow-lg grow sm:grow-0 focus:outline-none"
            >
              <MessageSquare className="w-5 h-5 fill-current text-primary-container" />
              Join the Waitlist
            </button>
            <button
              onClick={onStartDemo}
              className="bg-surface-container-lowest border-2 border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary px-8 py-4 rounded-full font-sans font-bold transition-all flex items-center justify-center gap-2 grow sm:grow-0 shadow-sm hover:shadow focus:outline-none"
            >
              Try Playground Demo
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Right Side: Interactive Simulated Phone frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[380px] bg-slate-900 p-4 rounded-[42px] shadow-2xl border-4 border-slate-700/50">
            {/* Phone Front Camera notch */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-full z-20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-slate-800"></div>
            </div>

            {/* Chat Screen Container */}
            <div className="bg-[#efeae2] rounded-[32px] overflow-hidden flex flex-col h-[520px] relative">
              {/* WhatsApp Header clone */}
              <div className="bg-[#075e54] text-white pt-8 px-4 pb-3 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-hanken font-bold text-lg text-primary-container">
                    FM
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm tracking-tight text-white flex items-center gap-1">
                      Form Mitra
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    </h3>
                    <p className="text-[10px] opacity-75 font-sans font-medium">India's AI Assistant • Online</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 opacity-80">
                  <span className="material-symbols-outlined text-xl">video_call</span>
                  <span className="material-symbols-outlined text-xl">call</span>
                </div>
              </div>

              {/* Chat Messages flow */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                <div className="text-center">
                  <span className="text-[10px] bg-white/60 text-slate-600 px-3 py-1 rounded-md shadow-sm uppercase font-mono tracking-wider font-extrabold">
                    Today
                  </span>
                </div>

                <AnimatePresence mode="popLayout">
                  {flows[selectedFlow].slice(0, step + 1).map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`p-3 max-w-[85%] text-xs font-sans shadow-sm leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-whatsapp-light text-slate-800 rounded-2xl rounded-tr-none'
                            : 'bg-white text-slate-800 rounded-2xl rounded-tl-none border border-slate-200'
                        }`}
                      >
                        <p>{msg.text}</p>
                        
                        {/* Simulation trigger of finished files */}
                        {msg.download && (
                          <div className="mt-3 p-2 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                            <div className="flex items-center gap-2 overflow-hidden">
                              <FileText className="w-5 h-5 text-[#ff5722] shrink-0" />
                              <div className="overflow-hidden">
                                <p className="font-bold text-[10px] truncate text-slate-800">
                                  {selectedFlow === '121' ? 'Form_121_Filled.pdf' : selectedFlow === 'pan' ? 'Form_49A_Aadhaar.pdf' : 'Life_Certificate_2026.pdf'}
                                </p>
                                <p className="text-[8px] text-slate-400">142 KB • PDF Document</p>
                              </div>
                            </div>
                            <button className="h-7 w-7 rounded-full bg-[#075e54] flex items-center justify-center text-white shrink-0 hover:scale-105 active:scale-95 transition-transform">
                              <span className="material-symbols-outlined text-sm">download</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Chat Input simulation */}
              <div className="p-3 bg-[#f0f0f0] flex items-center gap-2 border-t border-slate-200">
                <div className="flex-1 bg-white rounded-full py-2 px-4 text-xs font-sans text-slate-400 flex items-center justify-between border border-slate-200/50">
                  <span>Type a message...</span>
                  <span className="material-symbols-outlined text-lg text-slate-400">attach_file</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#075e54] flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-lg">mic</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ambient glow light path */}
          <div className="absolute -z-10 w-72 h-72 bg-primary-container/20 rounded-full blur-3xl -bottom-10 -right-10"></div>
        </div>
      </div>
    </section>
  );
}
