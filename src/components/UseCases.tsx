import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UseCaseData } from '../types';

interface UseCasesProps {
  onJoinWaitlist: () => void;
}

export default function UseCases({ onJoinWaitlist }: UseCasesProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedUseCaseId, setSelectedUseCaseId] = useState<string | null>('121');

  const categories = [
    { id: 'all', name: 'All Services', icon: 'apps' },
    { id: 'banking', name: 'Banking', icon: 'account_balance' },
    { id: 'post', name: 'Post Office', icon: 'local_post_office' },
    { id: 'finance', name: 'Tax & Finance', icon: 'payments' },
    { id: 'govt', name: 'Govt Schemes', icon: 'account_balance_wallet' },
  ];

  const useCases: UseCaseData[] = [
    {
      id: '121',
      category: 'finance',
      title: 'Form 121 (TDS Exemption)',
      icon: 'percent',
      description: 'Submit to banks to avoid TDS deduction on your Fixed Deposit interest earnings if your annual taxable income is under the threshold limit.',
      exampleForm: 'Declaration under section 197A of Income Tax Act (Unified Form 121 - replaces older Form 15G/15H)',
      primaryFields: ['FD Account Number', 'Estimated Interest Income', 'Year of Assessment', 'PAN Details'],
      docRequired: ['PAN Card copy', 'Fixed Deposit receipt (Optional)']
    },
    {
      id: 'kyc',
      category: 'banking',
      title: 'Re-KYC Bank Form',
      icon: 'shield_person',
      description: 'Periodically update your personal contact details, address proof, and signature configuration requested by major public and private banks to avoid account freezes.',
      exampleForm: 'Standard Reserve Bank Re-KYC declaration template',
      primaryFields: ['Account Number', 'Aadhaar ID', 'Current Address', 'Occupation details'],
      docRequired: ['Aadhaar Card', 'Passport size photo', 'Signature photo']
    },
    {
      id: 'pan',
      category: 'finance',
      title: 'PAN Card Application',
      icon: 'id_card',
      description: 'Apply for fresh allocation of Permanent Account Number (Form 49A) or request corrections to your name or spelling on existing cards safely.',
      exampleForm: 'Form 49A (Application for allocation of Permanent Account Number)',
      primaryFields: ['Father\'s Name', 'Aadhaar Number', 'Spelling selection', 'Source of Income'],
      docRequired: ['Aadhaar Card (Birth date matching)', 'Colored Photograph']
    },
    {
      id: 'pension',
      category: 'govt',
      title: 'Digital Life Certificate',
      icon: 'elderly',
      description: 'Generate annual proof of life declaration (Jeevan Pramaan) for timely pension disbursement from central, state, or defense ministries.',
      exampleForm: 'Jeevan Pramaan / Pensioner Life Certificate template',
      primaryFields: ['PPO Number (Pension Payment Order)', 'Pension Account Number', 'Aadhaar UID', 'Disbursing Agency'],
      docRequired: ['Aadhaar Card', 'PPO booklet scanned page']
    },
    {
      id: 'post-fd',
      category: 'post',
      title: 'Post Office FD/RD Opening',
      icon: 'savings',
      description: 'Generate the standard SB-3 / SB-103 deposit forms to allocate your savings into recurring or time deposits offered by India Post Offices.',
      exampleForm: 'SB-3 Account Opening application for post office savings schemes',
      primaryFields: ['Nominee details', 'Deposit term (Years)', 'Initial payment amount', 'PAN & Aadhaar number'],
      docRequired: ['PAN Card', 'Aadhaar Card', 'Address Proof']
    },
    {
      id: 'ration',
      category: 'govt',
      title: 'New Ration Card / Name Addition',
      icon: 'assignment_ind',
      description: 'Apply to state food ministries for addition/deletion of family name, or allocation of fresh priority household ration supplies.',
      exampleForm: 'NFS Form for food & civil supplies allocation',
      primaryFields: ['Head of Family details', 'LPG Connection Number', 'Bank IFSC code', 'Family members income'],
      docRequired: ['Income certificate from Tehsil', 'Individual Aadhaar of all members', 'Electricity bill']
    }
  ];

  const filteredUseCases = activeCategory === 'all' 
    ? useCases 
    : useCases.filter(uc => uc.category === activeCategory);

  const selectedUseCase = useCases.find(uc => uc.id === selectedUseCaseId);

  return (
    <section id="use-cases" className="py-20 lg:py-28 bg-surface-container-low/30 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-hanken text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            Infinite Government &amp; Banking Documents, Unified in One Chat
          </h2>
          <p className="font-sans text-base text-on-surface-variant mt-4">
            No more hunting down weird PDF links on outdated governmental web portals. Explore our catalog of standard paperwork.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                // Auto select first of category
                const firstOfCat = cat.id === 'all' ? useCases[0] : useCases.find(uc => uc.category === cat.id);
                if (firstOfCat) setSelectedUseCaseId(firstOfCat.id);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                activeCategory === cat.id
                  ? 'bg-primary-container text-on-primary-container shadow-md'
                  : 'bg-surface hover:bg-surface-container transition-colors text-on-surface-variant border border-outline-variant/20'
              }`}
            >
              <span className="material-symbols-outlined text-sm">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Core Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* List of Filtered Use Cases (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <AnimatePresence mode="popLayout">
              {filteredUseCases.map((uc) => {
                const isSelected = selectedUseCaseId === uc.id;
                return (
                  <motion.button
                    layout
                    key={uc.id}
                    onClick={() => setSelectedUseCaseId(uc.id)}
                    className={`text-left p-5 rounded-2xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-surface-container-lowest border-primary shadow-md'
                        : 'bg-surface/50 border-outline-variant/10 hover:bg-surface hover:border-outline-variant/40'
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-high text-on-surface'
                      }`}>
                        <span className="material-symbols-outlined text-lg">{uc.icon}</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-hanken font-bold text-on-surface text-sm sm:text-base truncate">
                          {uc.title}
                        </h4>
                        <p className="font-sans text-xs text-on-surface-variant truncate max-w-[240px]">
                          {uc.description}
                        </p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant text-md shrink-0">
                      {isSelected ? 'radio_button_checked' : 'radio_button_unchecked'}
                    </span>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Expanded Card Details (Right) */}
          <div className="lg:col-span-7 flex">
            <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-outline-variant/25 flex-1 flex flex-col justify-between warm-shadow-lg">
              
              <AnimatePresence mode="wait">
                {selectedUseCase && (
                  <motion.div
                    key={selectedUseCase.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Category Header */}
                      <div className="flex justify-between items-center pb-4 border-b border-outline-variant/30">
                        <span className="font-mono text-[10px] font-bold text-secondary uppercase tracking-wider">
                          Official Form Profile
                        </span>
                        <span className="font-sans text-xs font-semibold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full capitalize">
                          Category: {selectedUseCase.category}
                        </span>
                      </div>

                      {/* Main Title and long description */}
                      <div className="pt-6 space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-primary text-3xl">{selectedUseCase.icon}</span>
                          <h3 className="font-hanken text-2xl font-black text-on-surface">
                            {selectedUseCase.title}
                          </h3>
                        </div>
                        <p className="font-sans text-on-surface-variant text-sm sm:text-base leading-relaxed">
                          {selectedUseCase.description}
                        </p>
                        <div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant/20 flex gap-2.5 items-start">
                          <span className="material-symbols-outlined text-primary text-lg">description</span>
                          <div>
                            <p className="text-[10px] font-mono font-bold text-on-surface-variant uppercase">Official Form Title:</p>
                            <p className="text-xs font-bold text-on-surface">{selectedUseCase.exampleForm}</p>
                          </div>
                        </div>
                      </div>

                      {/* Fields & Documents Lists */}
                      <div className="grid md:grid-cols-2 gap-6 pt-6">
                        {/* Extracted Fields */}
                        <div className="bg-surface-container-low/40 p-5 rounded-2xl border border-outline-variant/10">
                          <h5 className="font-mono text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-sm">edit_note</span>
                            Fields Fillable Conv.
                          </h5>
                          <ul className="space-y-2">
                            {selectedUseCase.primaryFields.map((field) => (
                              <li key={field} className="text-xs font-sans font-medium text-on-surface flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                                {field}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Documents Required */}
                        <div className="bg-surface-container-low/40 p-5 rounded-2xl border border-outline-variant/10">
                          <h5 className="font-mono text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-sm">assignment</span>
                            Documents Required
                          </h5>
                          <ul className="space-y-2">
                            {selectedUseCase.docRequired.map((doc) => (
                              <li key={doc} className="text-xs font-sans font-medium text-on-surface flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                                {doc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Quick Simulated CTA */}
                    <div className="pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <p className="text-xs text-on-surface-variant font-sans">Ready for automated chat processing</p>
                      </div>
                      <button
                        onClick={onJoinWaitlist}
                        className="bg-primary text-white hover:bg-primary/95 px-6 py-3 rounded-full font-sans text-xs font-bold shadow-md hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-2 w-full sm:w-auto justify-center focus:outline-none"
                      >
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>chat</span>
                        Join Waitlist to Apply
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
