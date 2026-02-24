import React from 'react';
import { Container } from '@/components/ui/Container';
import { ScaleIcon, ExclamationTriangleIcon, ShieldCheckIcon, BeakerIcon } from '@heroicons/react/24/outline';

export default function GreyMarketPage() {
    return (
        <div className="py-12 md:py-24 bg-white min-h-screen">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="mb-20">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-lg bg-secondary-900 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            Legal & Compliance Standards
                        </span>
                        <h1 className="text-4xl md:text-7xl font-black text-secondary-950 mb-10 leading-[1.1] tracking-tight">
                            The &quot;Grey Market&quot;: <br />
                            <span className="text-primary-700">Research Use Only</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary-950 leading-relaxed font-black opacity-90 italic">
                            Navigating the legal landscape and institutional requirements for laboratory investigation materials.
                        </p>
                    </div>

                    <div className="space-y-16 md:space-y-24">
                        {/* Definition */}
                        <div className="bg-secondary-50 p-8 md:p-14 rounded-[3rem] border-2 border-secondary-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                <ScaleIcon className="h-48 w-48 rotate-12" />
                            </div>
                            <div className="flex flex-col md:flex-row items-start gap-10 relative z-10">
                                <div className="p-5 bg-primary-600 rounded-2xl shrink-0 shadow-xl shadow-primary-900/20">
                                    <ScaleIcon className="h-10 w-10 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-black text-secondary-950 mb-8 tracking-tight uppercase">What is a Grey Market?</h3>
                                    <p className="text-secondary-950 leading-relaxed font-bold text-lg md:text-xl opacity-90">
                                        The &quot;grey market&quot; for peptides refers to the legal trade of chemicals that
                                        are not prohibited but are also not approved for human consumption. These
                                        substances exist in a regulatory space where they can be sold exclusively for <span className="text-primary-700 font-extrabold underline decoration-primary-200 decoration-4 underline-offset-8">laboratory research and academic investigation.</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Crucial Distinctions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            <div className="bg-secondary-950 p-10 md:p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                                <div className="p-4 bg-primary-600 rounded-2xl w-fit mb-10 shadow-lg shadow-primary-900/30">
                                    <ShieldCheckIcon className="h-8 w-8 text-white" />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-black mb-6 tracking-tight uppercase">Legally Permitted</h4>
                                <p className="text-primary-50 leading-relaxed font-bold text-lg opacity-90">
                                    The sale of research peptides is legal provided
                                    they are strictly labeled &quot;For Research Use Only&quot; and are not marketed for medical or
                                    therapeutic applications in human subjects.
                                </p>
                            </div>
                            <div className="bg-red-900 p-10 md:p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                                <div className="p-4 bg-red-700 rounded-2xl w-fit mb-10 shadow-lg shadow-red-950/40">
                                    <ExclamationTriangleIcon className="h-8 w-8 text-white" />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-black mb-6 tracking-tight uppercase">Strictly Prohibited</h4>
                                <p className="text-red-50 leading-relaxed font-bold text-lg opacity-90">
                                    Marketing these compounds for human use or providing dosing protocols is a direct violation of regulatory standards
                                    and is subject to federal enforcement action.
                                </p>
                            </div>
                        </div>

                        {/* Methodology & Responsibility */}
                        <div className="bg-white p-8 md:p-16 rounded-[3rem] border-2 border-secondary-100 shadow-sm">
                            <h3 className="text-3xl md:text-4xl font-black text-secondary-950 mb-12 flex items-center tracking-tight uppercase">
                                <div className="p-4 bg-primary-100 rounded-2xl mr-6 border border-primary-200">
                                    <BeakerIcon className="h-8 w-8 text-primary-700" />
                                </div>
                                Researcher Responsibility
                            </h3>
                            <div className="space-y-12">
                                <p className="text-secondary-950 leading-relaxed font-bold text-lg md:text-xl opacity-90">
                                    As an investigator, it is your legal obligation to ensure materials are handled
                                    in a controlled laboratory environment by qualified professionals.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        'Lab Credential Verification',
                                        'SDS Protocol Adherence',
                                        'Research Documentation',
                                        'Biohazard Waste Disposal'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center space-x-4 p-6 bg-secondary-50 rounded-[1.5rem] border-2 border-secondary-100 shadow-sm transition-all hover:border-primary-300">
                                            <div className="h-3 w-3 rounded-full bg-primary-600 shrink-0 shadow-[0_0_12px_rgba(37,99,235,0.6)]"></div>
                                            <span className="font-black text-secondary-950 text-sm md:text-base uppercase tracking-tight">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Final Disclaimer */}
                        <div className="p-12 md:p-20 bg-secondary-950 rounded-[4rem] text-center shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(3,105,161,0.3),transparent_70%)]"></div>
                            </div>
                            <p className="text-primary-400 text-[10px] uppercase tracking-[0.4em] font-black mb-10">Unwavering Compliance Standard</p>
                            <p className="text-white text-2xl md:text-4xl font-black leading-tight max-w-4xl mx-auto tracking-tight uppercase">
                                BUY PEPTIDES GEARS AND STEROIDS FROM GRAY MARKETS ONLINE does not provide medical advice, dosing, or instructions
                                for clinical application.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
