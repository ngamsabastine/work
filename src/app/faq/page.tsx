'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const faqs = [
    {
        category: "Ordering & Shipping",
        questions: [
            {
                q: "What is your typical shipping time?",
                a: "Orders are processed within 24-48 business hours. Domestic shipping typically takes 3-5 business days, while international shipping can range from 7-14 business days depending on customs clearance procedures."
            },
            {
                q: "Do you ship internationally?",
                a: "Yes, we ship to most specialized research facilities globally. However, investigators are responsible for understanding their local jurisdiction's laws and regulations regarding the importation of analytical reagents."
            },
            {
                q: "How are the products packaged?",
                a: "Products are shipped in discrete, professional laboratory-grade packaging. Peptides are typically provided in 10ml glass vials in lyophilized (freeze-dried) powder form to ensure maximum thermal stability during transit."
            }
        ]
    },
    {
        category: "Product Usage & Storage",
        questions: [
            {
                q: "Are your products for human consumption?",
                a: "No. All products sold by Biness Research are strictly for laboratory research and academic investigation. They are not intended for human use, veterinary use, medical diagnosis, or therapeutic applications."
            },
            {
                q: "How should I store my research peptides?",
                a: "Lyophilized (powdered) peptides should be stored in a cool, dry place away from UV exposure. For long-term stability (over 3 months), we recommend storage at -20°C. Once reconstituted, they must be refrigerated at 2-8°C and used within a tight laboratory window."
            },
            {
                q: "Is bacteriostatic water included?",
                a: "Unless specifically mentioned in a bundle, bacteriostatic water and other reconstitution supplies are sold separately in our Laboratory Accessories section."
            }
        ]
    },
    {
        category: "Quality & Testing",
        questions: [
            {
                q: "How can I verify the purity of my batch?",
                a: "Every product batch is tested via HPLC and Mass Spectrometry. You can request the Certificate of Analysis (COA) for your specific lot by contacting our support team with your batch or order number."
            },
            {
                q: "What does '≥98% Purity' mean?",
                a: "This indicates that the active molecule makes up at least 98% of the total peptide content by peak area in HPLC. High purity is critical for eliminating compounding variables in quantitative research."
            }
        ]
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggle = (idx: string) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className="py-12 md:py-20 bg-secondary-50/50 min-h-screen">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-900 mb-6 tracking-tight">Frequently Asked Questions</h1>
                    <p className="text-secondary-800 text-lg md:text-xl font-medium leading-relaxed">
                        Technical specifications and operational guidelines for our research catalog and logistical protocols.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-16">
                    {faqs.map((category, catIdx) => (
                        <div key={catIdx}>
                            <h2 className="text-sm font-black text-primary-700 mb-8 px-4 uppercase tracking-[0.2em] border-l-4 border-primary-600">
                                {category.category}
                            </h2>
                            <div className="space-y-4">
                                {category.questions.map((item, qIdx) => {
                                    const id = `${catIdx}-${qIdx}`;
                                    const isOpen = openIndex === id;
                                    return (
                                        <div
                                            key={qIdx}
                                            className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-primary-300 shadow-xl shadow-primary-900/5' : 'border-secondary-200'
                                                }`}
                                        >
                                            <button
                                                onClick={() => toggle(id)}
                                                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                                            >
                                                <span className={`font-bold text-lg md:text-xl transition-colors pr-8 ${isOpen ? 'text-primary-700' : 'text-secondary-900'}`}>
                                                    {item.q}
                                                </span>
                                                <div className={`p-2 rounded-xl shrink-0 transition-all duration-300 ${isOpen ? 'bg-primary-700 text-white rotate-180' : 'bg-secondary-50 text-secondary-500'}`}>
                                                    {isOpen ? <MinusIcon className="h-5 w-5" /> : <PlusIcon className="h-5 w-5" />}
                                                </div>
                                            </button>
                                            <div
                                                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                                                    }`}
                                            >
                                                <div className="px-6 pb-8 md:px-8 md:pb-10 pt-0 text-secondary-800 text-lg font-medium leading-relaxed border-t border-secondary-50/50 mt-2">
                                                    {item.a}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-20 text-center bg-primary-950 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative shadow-2xl border border-primary-900">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500 rounded-full blur-[100px]"></div>
                    </div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Technical Assistance Required?</h3>
                        <p className="text-primary-100 text-lg mb-12 leading-relaxed font-medium">
                            Our laboratory support team is available to assist with HPLC interpretations,
                            custom synthesis requirements, and international logistics.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link href="/contact" className="px-10 py-5 bg-white text-primary-950 font-black text-lg rounded-2xl hover:bg-primary-50 transition-all shadow-lg shadow-black/20">
                                Contact Laboratory Support
                            </Link>
                            <Link href="/products" className="px-10 py-5 bg-primary-800 text-white font-bold text-lg rounded-2xl hover:bg-primary-700 transition-all border border-primary-700">
                                Catalog Inquiry
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
