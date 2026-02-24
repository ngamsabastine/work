import React from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import {
    CheckBadgeIcon,
    BeakerIcon,
    DocumentMagnifyingGlassIcon,
    GlobeAltIcon,
    CpuChipIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';

const testingSteps = [
    {
        title: "HPLC Analysis",
        description: "High-Performance Liquid Chromatography ensures the identity and chemical purity of every batch, targeting ≥98% purity standards.",
        icon: BeakerIcon
    },
    {
        title: "Mass Spectrometry",
        description: "Confirms the molecular weight and sequence accuracy of synthetic peptides through precise mass-to-charge ratio analysis.",
        icon: CpuChipIcon
    },
    {
        title: "Batch Transparency",
        description: "Every order is linked to a specific production lot, enabling full traceability from synthesis to laboratory delivery via unique SKUs.",
        icon: DocumentMagnifyingGlassIcon
    }
];

export default function QualityPage() {
    return (
        <div className="py-12 md:py-20 flex flex-col gap-16 md:gap-24">
            {/* Hero */}
            <section>
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-secondary-900 mb-8 leading-tight tracking-tight">
                            Quality Without <span className="text-primary-700">Compromise</span>
                        </h1>
                        <p className="text-xl text-secondary-800 font-medium leading-relaxed mb-12">
                            In scientific research, the purity of your materials defines the validity of
                            your results. BUY PEPTIDES GEARS AND STEROIDS FROM GRAY MARKETS ONLINE implements a multi-tier quality assurance protocol
                            to ensure absolute laboratory excellence across our entire catalog.
                        </p>
                        <div className="flex justify-center flex-wrap gap-6 md:gap-8">
                            <div className="flex items-center space-x-2 text-primary-800 font-extrabold text-sm uppercase tracking-wider">
                                <CheckBadgeIcon className="h-6 w-6 text-primary-600" />
                                <span>98%+ Purity</span>
                            </div>
                            <div className="flex items-center space-x-2 text-primary-800 font-extrabold text-sm uppercase tracking-wider">
                                <CheckBadgeIcon className="h-6 w-6 text-primary-600" />
                                <span>USA QC Standards</span>
                            </div>
                            <div className="flex items-center space-x-2 text-primary-800 font-extrabold text-sm uppercase tracking-wider">
                                <CheckBadgeIcon className="h-6 w-6 text-primary-600" />
                                <span>COA Transparency</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Testing Protocol */}
            <section className="bg-secondary-50 py-24 border-y border-secondary-200">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Analytical Testing Protocol</h2>
                        <p className="text-secondary-700 text-lg font-medium max-w-2xl mx-auto">How we verify every molecule using industrial-grade analytical platforms before it reaches your facility.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testingSteps.map((step, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-3xl border border-secondary-200 shadow-sm hover:border-primary-400 transition-all group">
                                <div className="p-4 bg-primary-50 rounded-2xl w-fit mb-8 group-hover:bg-primary-700 transition-colors shadow-sm">
                                    <step.icon className="h-8 w-8 text-primary-700 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-4 tracking-tight">{step.title}</h3>
                                <p className="text-secondary-700 leading-relaxed font-medium">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Manufacturing & Sourcing */}
            <section>
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 tracking-tight">Strategic Global Sourcing</h2>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-5">
                                    <div className="bg-primary-50 p-3 rounded-xl border border-primary-100">
                                        <GlobeAltIcon className="h-7 w-7 text-primary-700" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-secondary-900 mb-2">Verified Manufacturers</h4>
                                        <p className="text-secondary-700 font-medium text-lg leading-relaxed">
                                            We partner with ISO-certified facilities globally that specialize in
                                            Solid-Phase Peptide Synthesis (SPPS) and advanced chiral purification.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-5">
                                    <div className="bg-primary-50 p-3 rounded-xl border border-primary-100">
                                        <DocumentMagnifyingGlassIcon className="h-7 w-7 text-primary-700" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-secondary-900 mb-2">Independent Validation</h4>
                                        <p className="text-secondary-700 font-medium text-lg leading-relaxed">
                                            Beyond manufacturer reports, we employ third-party analytical laboratories
                                            to perform blind testing on random samples from every production run.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-12 bg-primary-950 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl border border-primary-900">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <ShieldCheckIcon className="h-48 w-48" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6 tracking-tight">Requesting a COA</h3>
                            <p className="text-primary-100 font-medium leading-relaxed mb-8 text-lg">
                                Transparency is central to our operation. You can request a digital copy of
                                the Certificate of Analysis (COA) for any batch currently in circulation.
                            </p>
                            <ul className="space-y-5 mb-10">
                                <li className="flex items-center text-lg font-medium text-primary-50">
                                    <span className="h-2 w-2 rounded-full bg-primary-400 mr-4 shadow-[0_0_8px_rgba(96,165,250,0.5)]"></span>
                                    Include Product SKU in your request
                                </li>
                                <li className="flex items-center text-lg font-medium text-primary-50">
                                    <span className="h-2 w-2 rounded-full bg-primary-400 mr-4 shadow-[0_0_8px_rgba(96,165,250,0.5)]"></span>
                                    Digital PDF reports within 24 hours
                                </li>
                                <li className="flex items-center text-lg font-medium text-primary-50">
                                    <span className="h-2 w-2 rounded-full bg-primary-400 mr-4 shadow-[0_0_8px_rgba(96,165,250,0.5)]"></span>
                                    HPLC chromatograms included
                                </li>
                            </ul>
                            <Button href="/contact" className="w-full py-6 bg-white text-primary-950 font-black text-lg rounded-2xl hover:bg-primary-50 transition-all shadow-xl shadow-primary-950/20">
                                Request Analysis Reports
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Stability Note */}
            <section className="mb-12">
                <Container>
                    <div className="p-10 md:p-16 border-2 border-dashed border-primary-300 rounded-4xl bg-primary-50/40">
                        <div className="max-w-4xl">
                            <h3 className="text-3xl font-bold text-secondary-900 mb-6 tracking-tight">Lighthouse Packaging™</h3>
                            <p className="text-secondary-800 text-lg md:text-xl font-medium leading-relaxed">
                                To maintain the integrity of our high-purity compounds, we utilize medical-grade,
                                light-bypass packaging. Every peptide vial is vacuum-sealed and store-stable,
                                ensuring that no heat or light degradation occurs during transit to your laboratory facility.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
