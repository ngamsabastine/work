import React from 'react';
import { Container } from '@/components/ui/Container';
import { AcademicCapIcon, BeakerIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function EducationPage() {
    return (
        <div className="py-12 md:py-24 bg-white flex flex-col gap-16 md:gap-32 text-secondary-900">
            <section>
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-4 py-1.5 bg-primary-50 rounded-lg text-[10px] font-black text-primary-700 uppercase tracking-[0.2em] mb-8 border border-primary-100">
                            Technical Compendium
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-secondary-950 mb-10 leading-[1.1] tracking-tight">
                            Understanding <span className="text-primary-700">Peptides</span> & Molecular Research
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary-950 font-bold leading-relaxed mb-12 opacity-90">
                            Peptides are short chains of amino acids linked by covalent bonds. In advanced laboratory settings, these compounds are indispensable
                            tools for exploring complex biological pathways, hormone regulation, and metabolic signaling.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="p-8 md:p-10 bg-secondary-50 rounded-[2.5rem] border-2 border-secondary-100 shadow-sm transition-all duration-300">
                                <div className="p-4 bg-primary-100 rounded-2xl w-fit mb-8 shadow-sm border border-primary-200">
                                    <AcademicCapIcon className="h-8 w-8 text-primary-700" />
                                </div>
                                <h3 className="text-2xl font-black text-secondary-900 mb-4 uppercase tracking-tight">Chemical Structure</h3>
                                <p className="text-secondary-950 leading-relaxed font-bold opacity-80">
                                    Typically defined as chains consisting of 2 to 50 amino acids. Their small
                                    molecular weight allows for extreme specificity in binding to cellular receptors,
                                    making them ideal for precise metabolic and signaling research.
                                </p>
                            </div>
                            <div className="p-8 md:p-10 bg-secondary-50 rounded-[2.5rem] border-2 border-secondary-100 shadow-sm transition-all duration-300">
                                <div className="p-4 bg-primary-100 rounded-2xl w-fit mb-8 shadow-sm border border-primary-200">
                                    <ChartBarIcon className="h-8 w-8 text-primary-700" />
                                </div>
                                <h3 className="text-2xl font-black text-secondary-900 mb-4 uppercase tracking-tight">Functional Versatility</h3>
                                <p className="text-secondary-950 leading-relaxed font-bold opacity-80">
                                    Peptides function as hormones, neurotransmitters, or specialized growth factors.
                                    In scientific investigation, they are deployed to study glucose metabolism (GLP-1)
                                    and structural tissue repair mechanisms (BPC-157).
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="bg-secondary-950 py-24 md:py-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(3,105,161,0.4),transparent_50%)]"></div>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(3,105,161,0.2),transparent_50%)]"></div>
                </div>
                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7">
                            <h2 className="text-4xl md:text-6xl font-black mb-12 text-primary-400 tracking-tight leading-[1.1]">Laboratory <br />Synthesis Standards</h2>
                            <div className="space-y-12">
                                <div className="flex gap-8">
                                    <div className="h-12 w-12 rounded-2xl bg-primary-600 flex items-center justify-center shrink-0 text-white font-black text-xl shadow-lg shadow-primary-900/40">1</div>
                                    <div>
                                        <h4 className="text-2xl font-black mb-3 tracking-tight text-white">SPPS Methodology</h4>
                                        <p className="text-lg md:text-xl text-primary-100 leading-relaxed font-bold opacity-90">
                                            Synthetic peptides are produced via Solid-Phase Peptide Synthesis (SPPS)
                                            utilizing Fmoc/Boc protecting groups to ensure sequence accuracy.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-8">
                                    <div className="h-12 w-12 rounded-2xl bg-primary-600 flex items-center justify-center shrink-0 text-white font-black text-xl shadow-lg shadow-primary-900/40">2</div>
                                    <div>
                                        <h4 className="text-2xl font-black mb-3 tracking-tight text-white">Sublimation Protocols</h4>
                                        <p className="text-lg md:text-xl text-primary-100 leading-relaxed font-bold opacity-90">
                                            Compounds undergo high-vacuum lyophilization to remove all moisture,
                                            stabilizing the molecular structure for long-term integrity.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-8">
                                    <div className="h-12 w-12 rounded-2xl bg-primary-600 flex items-center justify-center shrink-0 text-white font-black text-xl shadow-lg shadow-primary-900/40">3</div>
                                    <div>
                                        <h4 className="text-2xl font-black mb-3 tracking-tight text-white">Aseptic Reconstitution</h4>
                                        <p className="text-lg md:text-xl text-primary-100 leading-relaxed font-bold opacity-90">
                                            Investigators reconstitute lyophilized cakes with bacteriostatic water
                                            under sterile conditions for precise volumetric laboratory dosing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 bg-white/5 rounded-[3rem] p-10 md:p-12 border-2 border-white/10 shadow-2xl backdrop-blur-md">
                            <h3 className="text-xs font-black mb-12 text-primary-400 uppercase tracking-[0.3em] flex items-center">
                                <span className="h-px w-10 bg-primary-500 mr-4"></span>
                                Core Analytical Fields
                            </h3>
                            <ul className="space-y-10">
                                <li className="flex items-start">
                                    <div className="p-4 bg-primary-600 rounded-2xl mr-6 shadow-lg shadow-primary-900/20">
                                        <BeakerIcon className="h-8 w-8 text-white shrink-0" />
                                    </div>
                                    <div>
                                        <span className="font-black block text-white text-xl mb-2 tracking-tight">Endocrinology</span>
                                        <span className="text-primary-100 text-base font-bold opacity-80 italic">Studying somatotropic axis regulation and receptor dynamics.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="p-4 bg-primary-600 rounded-2xl mr-6 shadow-lg shadow-primary-900/20">
                                        <ShieldCheckIcon className="h-8 w-8 text-white shrink-0" />
                                    </div>
                                    <div>
                                        <span className="font-black block text-white text-xl mb-2 tracking-tight">Proteomics</span>
                                        <span className="text-primary-100 text-base font-bold opacity-80 italic">Investigating collagen synthesis and cytokine modulation.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="pb-24">
                <Container>
                    <div className="max-w-4xl mx-auto p-10 md:p-16 bg-secondary-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <AcademicCapIcon className="h-64 w-64 rotate-12" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black mb-8 tracking-tight">Critical Methodology Guidelines</h3>
                        <p className="text-lg md:text-xl text-primary-50 font-bold leading-relaxed mb-12 opacity-90">
                            Research peptides are sensitive to environmental degradation.
                            Factors like thermal fluctuations and mechanical agitation can cause proteolysis,
                            compromising experimental precision.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                { val: '-20°C', label: 'Long Term Storage' },
                                { val: 'NO VORTEX', label: 'Handling Precision' },
                                { val: 'STABLE', label: 'Lyophilized Form' },
                            ].map((guideline, i) => (
                                <div key={i} className="px-6 py-6 bg-white/10 rounded-2xl border-2 border-white/10 text-center backdrop-blur-sm">
                                    <span className="block text-white font-black text-xl mb-1">{guideline.val}</span>
                                    <span className="text-primary-400 font-black uppercase text-[10px] tracking-widest">{guideline.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
