import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DemoFormState } from '../types';
import { FileText, Award, Smartphone, FileCheck, Check, Sparkles, Camera } from 'lucide-react';

export default function FormPlayground() {
  const [formData, setFormState] = useState<DemoFormState>({
    fullName: 'Rajesh Kumar',
    dob: '1961-05-14',
    pan: 'AJJPK7824K',
    address: 'Flat 402, Shivshakti Towers, Sector 12, Dwarka, Delhi - 110075',
    aadhaar: '5421 9821 7431',
    income: 180000,
  });

  const [formType, setFormType] = useState<'121' | '49a'>('121');
  const [ocrStatus, setOcrStatus] = useState<'idle' | 'scanning' | 'success'>('idle');

  // OCR Pre-population Simulation
  const handleOcrSimulation = () => {
    setOcrStatus('scanning');
    setTimeout(() => {
      setFormState({
        fullName: 'Shyam Sundar Sharma',
        dob: '1959-11-23',
        pan: 'BSGPP9431L',
        address: 'H-302, Green Meadows Apartment, Sarjapur Cross, Bengaluru - 560102',
        aadhaar: '3210 9854 4432',
        income: 245000,
      });
      setOcrStatus('success');
      setTimeout(() => setOcrStatus('idle'), 4000);
    }, 2200);
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: name === 'income' ? (value === '' ? 0 : parseInt(value)) : value,
    }));
  };

  return (
    <section id="playground" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed/30 border border-primary-fixed text-on-primary-fixed-variant text-xs font-mono font-bold tracking-wider mb-4 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            INTERACTIVE ADHOC VISUALIZER
          </div>
          <h2 className="font-hanken text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            See the Real-Time PDF Dynamic Generation
          </h2>
          <p className="font-sans text-base text-on-surface-variant mt-4">
            Type your actual details on the left, or simulate an automatic ID upload, and witness how Form Mitra lays out the information error-free in real time.
          </p>
        </div>

        {/* Playground Structure */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Controls Panel (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-6 bg-surface-container rounded-3xl p-6 sm:p-8 border border-outline-variant/30 warm-shadow-md">
            
            {/* Simulation Options */}
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
              <span className="font-mono text-xs font-bold text-on-surface-variant">CHOOSE FORM TEMPLATE:</span>
              <div className="bg-surface-container-high p-0.5 rounded-lg flex">
                <button
                  onClick={() => setFormType('121')}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                    formType === '121' ? 'bg-white text-on-surface shadow-xs' : 'text-on-surface-variant'
                  }`}
                >
                  Form 121
                </button>
                <button
                  onClick={() => setFormType('49a')}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                    formType === '49a' ? 'bg-white text-on-surface shadow-xs' : 'text-on-surface-variant'
                  }`}
                >
                  Form 49A (PAN)
                </button>
              </div>
            </div>

            {/* OCR Simulator Trigger */}
            <button
              onClick={handleOcrSimulation}
              disabled={ocrStatus === 'scanning'}
              className="bg-primary text-white py-3.5 rounded-xl font-sans font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-55 disabled:scale-100 warm-shadow-md"
            >
              {ocrStatus === 'scanning' ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-1"></span>
                  Processing Simulated Aadhaar...
                </>
              ) : ocrStatus === 'success' ? (
                <>
                  <Check className="w-5 h-5 text-green-400" />
                  Successfully Filled via OCR!
                </>
              ) : (
                <>
                  <Camera className="w-5 h-5 text-amber-500 fill-current" />
                  Simulate Aadhaar/PAN Snap Upload
                </>
              )}
            </button>

            {/* Interactive Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-on-surface-variant mb-1 uppercase">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleFieldChange}
                  className="w-full bg-surface border border-outline-variant/40 rounded-xl px-4 py-3 font-sans text-sm text-on-surface focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all font-semibold"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-on-surface-variant mb-1 uppercase">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleFieldChange}
                    className="w-full bg-surface border border-outline-variant/40 rounded-xl px-4 py-3 font-sans text-sm text-on-surface focus:border-primary focus:outline-none transition-all font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-on-surface-variant mb-1 uppercase">PAN Card Number</label>
                  <input
                    type="text"
                    name="pan"
                    value={formData.pan}
                    onChange={handleFieldChange}
                    maxLength={10}
                    className="w-full bg-surface border border-outline-variant/40 rounded-xl px-4 py-3 font-mono text-sm text-on-surface focus:border-primary focus:outline-none transition-all font-bold uppercase tracking-wider"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-on-surface-variant mb-1 uppercase">Aadhaar Card UID</label>
                <input
                  type="text"
                  name="aadhaar"
                  value={formData.aadhaar}
                  onChange={handleFieldChange}
                  className="w-full bg-surface border border-outline-variant/40 rounded-xl px-4 py-3 font-mono text-sm text-on-surface focus:border-primary focus:outline-none transition-all font-bold tracking-widest"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-on-surface-variant mb-1 uppercase">Full Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleFieldChange}
                  rows={2}
                  className="w-full bg-surface border border-outline-variant/40 rounded-xl px-4 py-3 font-sans text-sm text-on-surface focus:border-primary focus:outline-none transition-all font-semibold leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-on-surface-variant mb-1 uppercase flex justify-between">
                  <span>Declared Expectant Income (Annual)</span>
                  <span className="text-secondary font-sans font-bold">₹{formData.income.toLocaleString('en-IN')}</span>
                </label>
                <input
                  type="range"
                  name="income"
                  min="50000"
                  max="1000000"
                  step="10000"
                  value={formData.income}
                  onChange={handleFieldChange}
                  className="w-full accent-primary h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

          </div>

          {/* Visual PDF Preview (Right) */}
          <div className="lg:col-span-7 flex justify-center items-center relative">
            
            {/* Floating OCR Scanning Line Simulation */}
            {ocrStatus === 'scanning' && (
              <motion.div
                initial={{ top: '6%' }}
                animate={{ top: '90%' }}
                transition={{ repeat: Infinity, duration: 1.1, ease: 'easeInOut' }}
                className="absolute left-6 right-6 h-1 w-[calc(100%-48px)] bg-gradient-to-r from-transparent via-primary to-transparent z-10 shadow-lg blur-[1px]"
              ></motion.div>
            )}

            {/* Generated Paper Page container */}
            <div className="w-full max-w-[500px] aspect-[1/1.41] bg-white rounded-2xl shadow-xl border border-outline-variant/45 p-6 sm:p-10 flex flex-col justify-between font-sans relative overflow-hidden select-none">
              
              {/* Paper Watermark grid */}
              <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

              {/* Form Title */}
              <div className="text-center space-y-1 pb-4 border-b-2 border-slate-700">
                <div className="flex justify-between items-center text-[8px] font-mono font-bold text-slate-500 uppercase">
                  <span>INCOME TAX RULES, 1962</span>
                  <span>FORM NO. {formType === '121' ? '121' : '49A'}</span>
                </div>
                <h3 className="font-hanken font-extrabold text-[12px] sm:text-[14px] text-slate-800 leading-tight">
                  {formType === '121' 
                    ? 'Declaration under Section 197A / Form 121 (Self-Declaration for Non-Deduction of Tax)'
                    : 'Application for Allotment of Permanent Account Number (Form 49A)'}
                </h3>
              </div>

              {/* Form Fields Fields Grid Structure */}
              <div className="flex-1 py-6 grid grid-cols-12 gap-y-4 gap-x-2 text-[10px] text-slate-700 relative z-10">
                
                {formType === '121' ? (
                  <>
                    {/* Name */}
                    <div className="col-span-12 border-b border-dashed border-slate-300 pb-1">
                      <span className="text-[8px] font-bold text-slate-400 block uppercase font-mono">1. Name of Assessee (Declarant)</span>
                      <span className="font-hanken font-bold text-sm text-[#075e54] tracking-tight">{formData.fullName}</span>
                    </div>

                    {/* PAN & Status */}
                    <div className="col-span-6 border-b border-dashed border-slate-300 pb-1">
                      <span className="text-[8px] font-bold text-slate-400 block uppercase font-mono">2. PAN of Assessee</span>
                      <span className="font-mono font-extrabold text-sm text-[#075e54] tracking-wider">{formData.pan || '—'}</span>
                    </div>
                    <div className="col-span-6 border-b border-dashed border-slate-300 pb-1">
                      <span className="text-[8px] font-bold text-slate-400 block uppercase font-mono">3. Status</span>
                      <span className="font-bold text-slate-800">INDIVIDUAL</span>
                    </div>

                    {/* DOB & Assessment Year */}
                    <div className="col-span-6 border-b border-dashed border-slate-300 pb-1">
                      <span className="text-[8px] font-bold text-slate-400 block uppercase font-mono">4. Date of Birth (DD-MM-YYYY)</span>
                      <span className="font-mono font-bold text-slate-800">{formData.dob.split('-').reverse().join('-') || '—'}</span>
                    </div>
                    <div className="col-span-6 border-b border-dashed border-slate-300 pb-1">
                      <span className="text-[8px] font-bold text-slate-400 block uppercase font-mono">5. Assessment Year</span>
                      <span className="font-mono font-bold text-slate-800">2026-2027</span>
                    </div>

                    {/* Address */}
                    <div className="col-span-12 border-b border-dashed border-slate-300 pb-1">
                      <span className="text-[8px] font-bold text-slate-400 block uppercase font-mono">6. Flat/Door/Block No. &amp; Premises Address</span>
                      <span className="font-bold text-slate-800 leading-snug">{formData.address || '—'}</span>
                    </div>

                    {/* Income & Aadhaar */}
                    <div className="col-span-6 border-b border-dashed border-slate-300 pb-1">
                      <span className="text-[8px] font-bold text-slate-400 block uppercase font-mono">7. Estimated Declared Income</span>
                      <span className="font-bold text-[#075e54] text-sm">₹{formData.income.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="col-span-6 border-b border-dashed border-slate-300 pb-1">
                      <span className="text-[8px] font-bold text-slate-400 block uppercase font-mono">8. Aadhaar Card UID</span>
                      <span className="font-mono font-bold text-slate-800 tracking-wider">{formData.aadhaar || '—'}</span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* PAN specific layout */}
                    <div className="col-span-12 border-b border-dashed border-slate-300 pb-1">
                      <span className="text-[8px] font-bold text-slate-400 block uppercase font-mono">1. Full Name (To be printed on card)</span>
                      <span className="font-hanken font-bold text-sm text-[#075e54] tracking-tight">{formData.fullName}</span>
                    </div>

                    <div className="col-span-12 border-b border-dashed border-slate-300 pb-1">
                      <span className="text-[8px] font-bold text-slate-400 block uppercase font-mono">2. Father's Name</span>
                      <span className="font-bold text-slate-800">Late K. S. Sharma (Simulated)</span>
                    </div>

                    <div className="col-span-6 border-b border-dashed border-slate-300 pb-1">
                      <span className="text-[8px] font-bold text-slate-400 block uppercase font-mono">3. Date of Birth (DD-MM-YYYY)</span>
                      <span className="font-mono font-bold text-slate-800">{formData.dob.split('-').reverse().join('-') || '—'}</span>
                    </div>
                    <div className="col-span-6 border-b border-dashed border-slate-300 pb-1">
                      <span className="text-[8px] font-bold text-slate-400 block uppercase font-mono">4. Aadhaar Number</span>
                      <span className="font-mono font-bold text-[#075e54] text-xs tracking-wider">{formData.aadhaar || '—'}</span>
                    </div>

                    <div className="col-span-12 border-b border-dashed border-slate-300 pb-1">
                      <span className="text-[8px] font-bold text-slate-400 block uppercase font-mono">5. Residential Address</span>
                      <span className="font-bold text-slate-800 leading-snug">{formData.address || '—'}</span>
                    </div>

                    <div className="col-span-6 border-b border-dashed border-slate-300 pb-1">
                      <span className="text-[8px] font-bold text-slate-400 block uppercase font-mono">6. Source of Income</span>
                      <span className="font-bold text-slate-800 capitalize">Income from Other Sources</span>
                    </div>
                    <div className="col-span-6 border-b border-dashed border-slate-300 pb-1">
                      <span className="text-[8px] font-bold text-slate-400 block uppercase font-mono">7. Citizenship Status</span>
                      <span className="font-bold text-slate-800">INDIAN CITIZEN</span>
                    </div>
                  </>
                )}

              </div>

              {/* Form Declaration Signature section */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-2 items-end justify-between">
                <div>
                  <p className="text-[8px] font-mono text-slate-400 uppercase">Verification Location:</p>
                  <p className="text-[10px] font-bold text-slate-700">Online via WhatsApp OTP</p>
                  <p className="text-[8px] text-slate-400">Date: 09/06/2026</p>
                </div>
                <div className="text-right space-y-1">
                  <span className="inline-block text-[8px] font-mono font-bold text-slate-500 border border-slate-400/40 px-2 py-0.5 rounded italic">
                    DIGITALLY GENERATED
                  </span>
                  <p className="text-[10px] font-bold text-on-surface-variant font-hanken italic">
                    {formData.fullName}
                  </p>
                  <p className="text-[8px] text-slate-400">Signature of Declarant</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
