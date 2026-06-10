import React from 'react';
import { MessageSquare, Award, Mail, Phone, Info } from 'lucide-react';
import LogoIcon from './LogoIcon';

interface FooterProps {
  onJoinWaitlist: () => void;
}

export default function Footer({ onJoinWaitlist }: FooterProps) {
  return (
    <footer className="bg-surface-container py-12 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-outline-variant/20">
        
        {/* Brand Column (Left) */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <LogoIcon className="h-8 w-8 warm-shadow-sm" />
            <span className="font-hanken text-lg font-black text-on-surface">
              Form Mitra
            </span>
          </div>
          <p className="text-sm font-sans text-on-surface-variant max-w-sm leading-relaxed">
            The modern, conversational, and multilingual way to fill official banking and government forms natively inside WhatsApp. Specially built with deep assistance features for seniors and rural citizens.
          </p>
          <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-secondary bg-primary-container/20 border border-primary-container px-3.5 py-2.5 rounded-xl inline-flex items-center w-fit">
            <img 
              src="https://www.qrcsolutionz.com/apps/home/media/images/compliance/img/DPDP.svg" 
              className="w-5 h-5 object-contain shrink-0 bg-white/70 rounded p-0.5" 
              alt="DPDP Compliant" 
              referrerPolicy="no-referrer"
            />
            <span>INDIAN DIGITAL LAW COMPLIANT (DPDP)</span>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-3 space-y-4">
          <h5 className="font-mono text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            PRODUCT Tour
          </h5>
          <ul className="space-y-2 text-sm font-sans font-bold text-on-surface-variant">
            <li><a href="#features" className="hover:text-primary transition-colors">Key Features</a></li>
            <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a></li>
            <li><a href="#use-cases" className="hover:text-primary transition-colors">All Forms Catalogue</a></li>
            <li><a href="#playground" className="hover:text-primary transition-colors">Generation Visualizer</a></li>
            <li><button onClick={onJoinWaitlist} className="hover:text-primary text-secondary transition-colors text-left focus:outline-none">Join Live Waitlist 🚀</button></li>
          </ul>
        </div>

        {/* Support Column (Right) */}
        <div className="md:col-span-4 space-y-4">
          <h5 className="font-mono text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            CONTACT &amp; HELP
          </h5>
          <p className="text-xs text-on-surface-variant font-sans">Have custom banking forms you want us to automate? Drop us a prompt or mail.</p>
          <ul className="space-y-3.5 text-xs sm:text-sm font-sans font-bold text-on-surface">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span className="text-on-surface-variant hover:text-primary transition-colors">ddaansh@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span className="text-on-surface-variant hover:text-primary transition-colors">+91 6362904458</span>
            </li>
            <li className="flex items-center gap-2">
              <Info className="w-4 h-4 text-primary shrink-0" />
              <span className="text-on-surface-variant">Made in India with 💖 for a barrier-free bureaucracy.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Meta credits footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
        <p className="text-xs font-medium font-sans text-on-surface-variant">
          © 2026 Form Mitra Technologies Private Limited. All rights reserved.
        </p>
        <p className="text-[10px] font-mono font-bold text-slate-400">
          *Note: Form Mitra is an AI helper tool and is not officially affiliated with the Reserve Bank of India, Income Tax Department, or India Post.
        </p>
      </div>
    </footer>
  );
}
